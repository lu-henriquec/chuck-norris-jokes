import TYPES_ACTION from './types';

export function setCategories(payload) {
	return { type: TYPES_ACTION.SET_CATEGORIES, payload };
}
