import React from "react";
import { useReducer } from "react";
import UserContext from "./userContext";
import userReducer from "./userReducer";

const UserState = props => {
	const initialState = {
		user: [
			{
				_id: "5f5ee5637058563b74ae514c",
				name: "Mac",
				email: "mac@gmail.com",
				phone: "245-345-909",
				date: "",
				rating: 5,
				address: "San Francisco, California",
				image: "https://i.imgur.com/IVIuAu4.jpg"
			},
			{
				_id: "5f5d1ace50b325605c68a412",
				name: "Louie",
				email: "louie@gmail.com",
				phone: "245-345-909",
				date: "",
				rating: 5,
				address: "San Francisco, California",
				image: "https://i.imgur.com/hU71hvX.jpg"
			},
			{
				_id: "3",
				name: "Isabel",
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

export default UserState;
