import 'whatwg-fetch';
import { ADD_POST, DELETE_POST, EDIT_POST, UPDATE_POST } from './types';

export function createPostData(addPost) {
	return {
		type: ADD_POST,
		addPost
	};
}

export function createPostAction(data) {
	return dispatch => dispatch(createPostData(data));
}