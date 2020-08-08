import TYPES_ACTION from './types';

const INITIAL_STATE = {
	categories: []
};

export default function categorieReducer(state = INITIAL_STATE, { type, data }) {
	switch (type) {
	case TYPES_ACTION.SET_CATEGORIES_SUCCESS:
		return {
			...state,
			categories: data.payload
		}
	default:
		return state;
	}
}
