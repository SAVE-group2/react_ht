import { combineReducers } from 'redux';
import todos from './todoReducer';

const todoApp = combineReducers({
	todos
});

export default todoApp;
