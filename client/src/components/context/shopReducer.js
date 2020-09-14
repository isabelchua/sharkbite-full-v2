import { ADD_SHOP, GET_SHOPS } from "../types";

export default (state, action) => {
	switch (action.type) {
		case GET_SHOPS:
			return {
				...state,
				shop: action.payload,
				loading: false
			};
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
