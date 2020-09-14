import { ADD_SHOP } from "../types";

export default (state, action) => {
	switch (action.type) {
		case ADD_SHOP:
			console.log([...state.shops, action.payload]);
			return {
				...state,
				shops: [...state.shops, action.payload]
			};
		default:
			return state;
	}
};
