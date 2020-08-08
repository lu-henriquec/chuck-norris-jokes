import TYPES_ACTION from './types';

export function setCategoriesRequest(payload) {
	return { type: TYPES_ACTION.SET_CATEGORIES_REQUEST, payload };
}

export function setCategoriesSuccess(payload) {
	return { type: TYPES_ACTION.SET_CATEGORIES_SUCCESS, payload };
}
