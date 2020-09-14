import React, { useContext } from "react";
import PropTypes from "prop-types";
import { Avatar } from "@material-ui/core";
import Rating from "@material-ui/lab/Rating";
import PostContext from "../context/postContext";

function Post({ posts, user }) {
	//const foodContext = useContext(FoodContext);
	const postContext = useContext(PostContext);
	const { deletePost, setPost, clearPost } = postContext;

	const { id, name, review, image, userid, rating } = posts;
	const { fname, lname, address } = user;

	const onDelete = () => {
		deletePost(id);
		clearPost();
	};

	// if user id is === to post userid

	// if(user.id === userid ) {
	// 	console.log(object);
	// }

	return (
		<div className="post">
			<div className="user-profile-post">
				<Avatar src={user.image} />
				<div className="user-details-post">
					<p>
						<strong>{fname + " " + lname}</strong>
					</p>
					<p>{address}</p>
				</div>
			</div>
			<div className="post-content">
				<Rating name="read-only" value={rating} readOnly precision={0.5} />
				{/* <h4>{name}</h4> */}
				<p>{review}</p>
				<img src={image} alt="food pic" className="img" />
				{userid}
				{"  = "} {user.id}
				{/* if logged in user id is === to post userid then show delete button */}
				<button onClick={() => setPost(posts)}>Edit</button>
				<button onClick={onDelete}>delete</button>
			</div>
		</div>
	);
}

Post.propTypes = {
	posts: PropTypes.object.isRequired
};

export default Post;
