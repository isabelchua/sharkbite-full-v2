import React, { useReducer } from "react";
import axios from "axios";
import PostContext from "./postContext";
import postReducer from "./postReducer";
import { nanoid } from "nanoid";

import {
	ADD_POST,
	DELETE_POST,
	SET_POST,
	CLEAR_POST,
	UPDATE_POST,
	SEARCH_POST,
	CLEAR_SEARCH,
	POST_ERROR,
	GET_POSTS,
	CLEAR_POSTS
} from "../types";

const PostState = props => {
	const initialState = {
		posts: [
			{
				_id: "1",
				name: "Cake",
				shop: "5",
				image: "https://i.imgur.com/w6igL9E.jpg",
				review:
					"Excellent! Staff are very friendly! Definitely will come back! Very family style! Original presentation! The pakbet was served in a hallowed squash! Nice!!",
				rating: 4,
				userid: "1",
				shopid: "5f5ada9ee9e6931cbcea8500",
				date: ""
			},
			{
				_id: "2",
				name: "California Maki",
				shop: "3",
				image: "",
				review: "Soooo good!",
				rating: 5,
				userid: "2",
				date: "Septemper 2 2020",
				shopid: "5f5ada9ee9e6931cbcea8500"
			},
			{
				_id: "3",
				name: "Bulalo",
				shop: "1",
				image: "",
				review: "Soooo good!",
				rating: 3,
				userid: "3",
				shopid: "5f5ada9ee9e6931cbcea8500"
			},
			{
				_id: "4",
				name: "Humba",
				shop: 4,
				image: "https://i.imgur.com/5Tuw7mv.jpg",
				review: "Soooo good!",
				rating: 3,
				userid: "1",
				shopid: "6"
			},
			{
				_id: "5",
				name: "Shrimps",
				shop: 1,
				image: "https://i.imgur.com/pLPZ3vM.jpg",
				review: "Soooo good!",
				rating: 4,
				userid: "1",
				shopid: "9"
			},
			{
				_id: "6",
				name: "Triple chocolate cheesecake",
				shop: 1,
				image: "https://i.imgur.com/fWn2enF.jpg",
				review: "Soooo good!",
				rating: 4,
				userid: "1",
				shopid: "9"
			}
		],
		current: null,
		filtered: null,
		error: null
	};

	const [state, dispatch] = useReducer(postReducer, initialState);

	// GET POSTS
	const getPosts = async () => {
		try {
			const res = await axios.get(`/api/posts/all`);
			dispatch({ type: GET_POSTS, payload: res.data });
		} catch (err) {
			dispatch({ type: POST_ERROR, payload: err.response.msg });
		}
	};

	// Add post
	const addPost = async post => {
		//post.id = nanoid(10);
		const config = {
			headers: {
				"Content-Type": "application/json"
			}
		};
		try {
			//console.log(post);
			//console.log(post.shopid);
			const res = await axios.post(
				`/api/posts/${post.shopid}`,
				post,
				config
			);
			//console.log(res);

			dispatch({ type: ADD_POST, payload: res.data });
		} catch (err) {
			dispatch({ type: POST_ERROR, payload: err.response.msg });
		}
	};

	const deletePost = id => {
		dispatch({ type: DELETE_POST, payload: id });
	};

	const setPost = post => {
		dispatch({ type: SET_POST, payload: post });
	};

	const clearPost = () => {
		dispatch({ type: CLEAR_POST });
	};

	// UPDATE
	const updatePost = post => {
		dispatch({ type: UPDATE_POST, payload: post });
	};

	// SEARCH
	const searchPost = text => {
		dispatch({ type: SEARCH_POST, payload: text });
	};

	//CLEAR SEARCH
	const clearSearch = () => {
		dispatch({ type: CLEAR_SEARCH });
	};

	return (
		<PostContext.Provider
			value={{
				posts: state.posts,
				addPost,
				deletePost,
				current: state.current,
				setPost,
				clearPost,
				updatePost,
				filtered: state.filtered,
				searchPost,
				clearSearch,
				error: state.error,
				getPosts
			}}
		>
			{props.children}
		</PostContext.Provider>
	);
};
export default PostState;
