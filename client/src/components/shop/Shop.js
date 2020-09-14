import React, { useContext } from "react";
import ShopBanner from "./ShopBanner";
import Post from "./Post";
import PostContext from "../context/postContext";
import ShopContext from "../context/shopContext";
import UserContext from "../context/userContext";
import ReviewForm from "./ReviewForm";
import SearchBar from "./SearchBar";
import NavBar from "./NavBar";
import { useParams } from "react-router-dom";
import Footer from "./Footer";
import { CSSTransition, TransitionGroup } from "react-transition-group";

import Logo from "./Logo";

function Shop() {
	const postContext = useContext(PostContext);
	const shopContext = useContext(ShopContext);
	const userContext = useContext(UserContext);

	const { posts, filtered } = postContext;

	const { shop } = shopContext;
	const { user } = userContext;

	const { id, name } = useParams();

	// console.log(
	// 	food
	// 		.filter(food => food.shopid === Number(id).map)
	// 		.map(post => {
	// 			post;
	// 		})
	// );

	// 	how do I use filter on a component?
	// `posts.filter(post => <Post  {post} />)`

	// foo.includes(Number(id))
	// === Number(id)
	//console.log(post.shopid);
	const content = posts.filter(foo => foo.shopid === id).length;

	return (
		<div className="main-wrap">
			<div className="col1">
				<Logo />
				<ShopBanner shop={shop.find(obj => obj.id === id)} />
			</div>
			<div className="col2">
				<div className="row">
					<SearchBar />
					<NavBar />
				</div>
				<ReviewForm />

				<div className="sort">
					<p className="right">Sort by Highest Rated</p>
				</div>

				{!content ? (
					<h4>No Reviews</h4>
				) : (
					<TransitionGroup className="todo-list">
						{filtered !== null
							? filtered
									.filter(foo => foo.shopid === id)
									.map(foo => (
										<CSSTransition
											key={foo.id}
											timeout={500}
											classNames="item"
										>
											<Post
												posts={foo}
												user={user.find(
													user => foo.userid === user.id
												)}
											/>
										</CSSTransition>
									))
							: posts
									.filter(foo => foo.shopid === id)
									.map(foo => (
										<CSSTransition
											key={foo.id}
											timeout={500}
											classNames="item"
										>
											<Post
												posts={foo}
												user={user.find(
													user => foo.userid === user.id
												)}
											/>
										</CSSTransition>
									))}
					</TransitionGroup>
				)}
				{/* {posts
					.filter(foo => foo.shopid === id)
					.map(foo => (
						<Post
							key={foo.id}
							posts={foo}
							user={user.find(user => foo.userid === user.id)}
						/>
					))} */}
				<Footer />
			</div>
		</div>
	);
}

export default Shop;
