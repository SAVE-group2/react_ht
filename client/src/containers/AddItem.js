import React from 'react';
import { connect } from 'react-redux';
import { addItem } from '../actions';
import { FormControl, FormGroup, ControlLabel } from 'react-bootstrap';

class AddItem extends React.Component {
	constructor(props, context) {
		super(props, context);

		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);

		this.state = {
			value: ''
		};
	}

	getValidationState() {
		const length = this.state.value.length;
		if (length > 10) return 'success';
		else if (length > 5) return 'warning';
		else if (length > 0) return 'error';
		return null;
	}

	handleChange(e) {
		this.setState({ value: e.target.value });
	}

	handleSubmit(e) {
		e.preventDefault();
		if (!this.state.value.trim()) {
			return;
		}
		this.props.dispatch(addItem(this.state.value));
		this.setState({value: ''});
	}

	render() {
		return (
			<form onSubmit={e => this.handleSubmit(e)}>
				<FormGroup
					controlId="formBasicText"
					validationState={this.getValidationState()}
				>
					<ControlLabel>Please, press enter key to input a your TODO</ControlLabel>
					<FormControl
						type="text"
						value={this.state.value}
						placeholder="input a todo"
						onChange={this.handleChange}
					/>
					<FormControl.Feedback />
				</FormGroup>
			</form>
		);
	}
}

const AddItemConnected = connect()(AddItem);
export default AddItemConnected;
