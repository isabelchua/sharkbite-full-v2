import React from "react";
import { useReducer } from "react";
import UserContext from "./userContext";
import userReducer from "./userReducer";

const ShopState = props => {
	const initialState = {
		user: [
			{
				id: "1",
				fname: "Mac",
				lname: " Yu",
				email: "mac@gmail.com",
				phone: "245-345-909",
				date: "",
				rating: 5,
				address: "San Francisco, California",
				image: "https://i.imgur.com/IVIuAu4.jpg"
			},
			{
				id: "2",
				fname: "Louie",
				lname: "Abecia",
				email: "louie@gmail.com",
				phone: "245-345-909",
				date: "",
				rating: 5,
				address: "San Francisco, California",
				image: "https://i.imgur.com/hU71hvX.jpg"
			},
			{
				id: "3",
				fname: "Isabel",
				lname: "Chua",
				email: "isabelchua86@gmail.com",
				phone: "245-345-909",
				date: "",
				rating: 5,
				address: "San Francisco, California",
				image: "https://imgur.com/LmpYcOR.jpg"
			}
		],
		current: null,
		filtered: null
	};

	const [state, dispatch] = useReducer(userReducer, initialState);

	return (
		<UserContext.Provider
			value={{
				user: state.user
			}}
		>
			{props.children}
		</UserContext.Provider>
	);
};

export default ShopState;
