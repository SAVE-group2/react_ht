import {
	ADD_ITEM_BEGIN,
	ADD_ITEM_SUCCESS,
	ADD_ITEM_FAILURE,
	GET_ITEMS_BEGIN,
	GET_ITEMS_SUCCESS,
	GET_ITEMS_FAILURE
} from '../actions';
// import update from 'immutability-helper';

const initialState = {
	items: [],
	loading: false,
	error: null
};

export default function todoReducer(state = initialState, action) {
	switch (action.type) {
	case GET_ITEMS_BEGIN:
		return {
			...state,
			loading: true,
			items: [],
			error: null,
		};

	case GET_ITEMS_SUCCESS:
		return {
			...state,
			loading: false,
			items: action.payload.todos,
			error: null,
		};

	case GET_ITEMS_FAILURE:
		return {
			...state,
			loading: false,
			items: [],
			error: action.payload.error,
		};

	case ADD_ITEM_BEGIN:
		return {
			...state,
			loading: true,
			items: [],
			error: null,
		};

	case ADD_ITEM_SUCCESS:
		return {
			...state,
			loading: false,
			items: action.payload.todos,
			error: null,
		};

	case ADD_ITEM_FAILURE:
		return {
			...state,
			loading: false,
			items: [],
			error: action.payload.error,
		};

	default:
		return state;
	}
}
