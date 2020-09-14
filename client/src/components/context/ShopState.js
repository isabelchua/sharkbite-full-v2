import React from "react";
import axios from "axios";

import { useReducer } from "react";
import ShopContext from "./shopContext";
import shopReducer from "./shopReducer";
import { GET_SHOPS, SHOP_ERROR } from "../types";

const ShopState = props => {
	const initialState = {
		shop: [
			{
				_id: "5f5ada9ee9e6931cbcea8500",
				name: "Kagayanon",
				phone: "245-345-909",
				description:
					"Located right at Limketkai, it is a best filipino restaurant. Portions are big and love how they serve rice wrapped in banana leaf and you use the banana leaf as your plate",
				address: "Limketkai Drive 2/F, Limketkai Center, Lapasan",
				image: "https://i.imgur.com/5Tuw7mv.jpg",
				short: "Asian Fusion"
			},
			{
				_id: "5f5c2691741f2459c8e2939d",
				name: "Bigbys",
				phone: "245-345-909",
				description:
					"Located right at Limketkai, it is a best filipino restaurant. Portions are big and love how they serve rice wrapped in banana leaf and you use the banana leaf as your plate",
				address: "Limketkai Drive 2/F, Limketkai Center, Lapasan",
				image: "https://i.imgur.com/5Tuw7mv.jpg",
				short: "Asian Fusion"
			},
			{
				_id: "6",
				name: "Ramen Tei",
				phone: "245-345-909",
				description:
					"Located right at Limketkai, it is a best filipino restaurant. Portions are big and love how they serve rice wrapped in banana leaf and you use the banana leaf as your plate",
				address: "Limketkai Drive 2/F, Limketkai Center, Lapasan",
				image: "https://i.imgur.com/5Tuw7mv.jpg",
				short: "Asian Fusion"
			},
			{
				_id: "2",
				name: "Red Tail",
				phone: "245-345-909",
				description:
					"Located right at Limketkai, it is a best filipino restaurant. Portions are big and love how they serve rice wrapped in banana leaf and you use the banana leaf as your plate",
				address: "Limketkai Drive 2/F, Limketkai Center, Lapasan",
				image: "https://i.imgur.com/5Tuw7mv.jpg",
				short: "Asian Fusion"
			},
			{
				_id: "3",
				name: "Missy Bon-bon",
				phone: "245-345-909",
				description:
					"Located right at Limketkai, it is a best filipino restaurant. Portions are big and love how they serve rice wrapped in banana leaf and you use the banana leaf as your plate",
				address: "Limketkai Drive 2/F, Limketkai Center, Lapasan",
				image: "https://i.imgur.com/5Tuw7mv.jpg",
				short: "Asian Fusion"
			}
		],
		current: null,
		filtered: null
	};

	const [state, dispatch] = useReducer(shopReducer, initialState);

	// GET SHOPS
	const getShops = async () => {
		try {
			const res = await axios.get(`/api`);
			dispatch({ type: GET_SHOPS, payload: res.data });
		} catch (err) {
			dispatch({ type: SHOP_ERROR, payload: err.response.msg });
		}
	};

	return (
		<ShopContext.Provider
			value={{
				shop: state.shop,
				getShops
			}}
		>
			{props.children}
		</ShopContext.Provider>
	);
};

export default ShopState;
