import React from 'react';
import { connect } from 'react-redux';
import { getItems } from '../actions';
import { ListGroup, ListGroupItem } from 'react-bootstrap';

class GetItems extends React.Component {
	constructor(props) {
		super(props);
		this.colorOrder = 0;
	}

	componentDidMount() {
		this.props.dispatch(getItems());
	}

	render() {
		const { error, loading, todos } = this.props;

		if (error) {
			return <div>Error! {error.message}</div>;
		}

		if (loading) {
			return <div>Loading...</div>;
		}

		return (
			<ListGroup>
				{todos.map((todo, idx) => {
					const text = todo.text.replace(/['"]+/g, '');
					if (idx % 2 === 0) {
						return (
							<ListGroupItem key={todo._id} bsStyle='success'>{text}</ListGroupItem>
						);
					} else {
						return (
							<ListGroupItem key={todo._id}>{text}</ListGroupItem>
						);
					}
				}
				)}
			</ListGroup>
		);
	}
}

const mapStateToProps = state => {
	return ({
		todos: state.todos.items,
		loading: state.todos.loading,
		error: state.todos.error,
	});
};

export default connect(mapStateToProps)(GetItems);
