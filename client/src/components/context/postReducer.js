import {
	ADD_POST,
	CLEAR_POST,
	DELETE_POST,
	SET_POST,
	UPDATE_POST,
	SEARCH_POST,
	CLEAR_SEARCH,
	POST_ERROR,
	GET_POSTS
} from "../types";

export default (state, action) => {
	switch (action.type) {
		case GET_POSTS:
			return {
				...state,
				posts: action.payload,
				loading: false
			};
		case ADD_POST:
			console.log([...state.posts, action.payload]);
			return {
				...state,
				posts: [...state.posts, action.payload],
				loading: false
			};
		case UPDATE_POST:
			return {
				...state,
				posts: state.posts.map(post =>
					post.id === action.payload.id ? action.payload : post
				),
				loading: false
			};
		case DELETE_POST:
			return {
				...state,
				posts: state.posts.filter(post => post.id !== action.payload),
				loading: false
			};
		case SET_POST:
			return {
				...state,
				current: action.payload
			};
		case CLEAR_POST:
			return {
				...state,
				current: null
			};
		case SEARCH_POST:
			return {
				...state,
				filtered: state.posts.filter(post => {
					const regex = new RegExp(`${action.payload}`, "gi");
					return post.review.match(regex);
				})
			};
		case CLEAR_SEARCH:
			return {
				...state,
				filtered: null
			};
		case POST_ERROR:
			return {
				...state,
				error: action.payload,
				loading: false
			};
		default:
			return state;
	}
};
