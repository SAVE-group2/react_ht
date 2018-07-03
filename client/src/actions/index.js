export const GET_ITEMS_BEGIN = 'GET_ITEMS_BEGIN';
export const GET_ITEMS_SUCCESS = 'GET_ITEMS_SUCCESS';
export const GET_ITEMS_FAILURE = 'GET_ITEMS_FAILURE';
export const ADD_ITEM_BEGIN = 'ADD_ITEM_BEGIN';
export const ADD_ITEM_SUCCESS = 'ADD_ITEM_SUCCESS';
export const ADD_ITEM_FAILURE = 'ADD_ITEM_FAILURE';

// REST URL
const ADD_ITEM_URL = 'http://35.197.23.34:8081/api/item';
const GET_ITEMS_URL = 'http://35.197.23.34:8081/api/list';


export function getItems() {
	return function action(dispatch) {
		dispatch(getItemsBegin());

		return fetch(GET_ITEMS_URL)
			.then(handleErrors)
			.then(res => res.json())
			.then(json => {
				dispatch(getItemsSuccess(json));
			})
			.catch(error => dispatch(getItemsFailure(error)));
	};
}

export function addItem(text) {
	return function action(dispatch) {
		dispatch(addItemBegin());

		fetch(ADD_ITEM_URL, {
			method: 'POST',
			headers: {
				'Accept': 'application/json',
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({
				text: text,
			})
		})
			.then(handleErrors)
			.then(res => res.json())
			.then(json => {
				dispatch(addItemSuccess(json));
			})
			.catch(error => dispatch(addItemFailure(error)));
	};
}

function handleErrors(response) {
	if (!response.ok) {
		throw Error(response.statusText);
	}
	return response;
}

// Get Items related


export const getItemsBegin = () => ({
	type: GET_ITEMS_BEGIN
});

export const getItemsSuccess = todos => ({
	type: GET_ITEMS_SUCCESS,
	payload: { todos }
});

export const getItemsFailure = error => ({
	type: GET_ITEMS_FAILURE,
	payload: { error }
});


// Add Item related


export const addItemBegin = () => ({
	type: ADD_ITEM_BEGIN
});

export const addItemSuccess = todos => ({
	type: ADD_ITEM_SUCCESS,
	payload: { todos }
});

export const addItemFailure = error => ({
	type: ADD_ITEM_FAILURE,
	payload: { error }
});
