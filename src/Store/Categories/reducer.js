import TYPES_ACTION from './types';

const INITIAL_STATE = {
	categories: []
};

export default function categorieReducer(state = INITIAL_STATE, { type, payload }) {
	switch (type) {
	case TYPES_ACTION.SET_CATEGORIES:
		return {
			...state,
			categories: payload
		}
	default:
		return state;
	}
}
