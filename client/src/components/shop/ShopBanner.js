import React, { useContext } from "react";
import ShareIcon from "@material-ui/icons/Share";
import { Button } from "@material-ui/core";
import RoomIcon from "@material-ui/icons/Room";
import PostContext from "../context/postContext";
import { useParams } from "react-router-dom";
import Rating from "@material-ui/lab/Rating";

function ShopBanner({ shop }) {
	//for retriving # of posts
	const postContext = useContext(PostContext);
	const { posts } = postContext;

	const { name, image, description, phone, address, short } = shop;

	const { id } = useParams();

	//const { id, name } = useParams();

	// console.log(id);
	// console.log(shop);

	// console.log(name);
	return (
		<div className="shop-banner">
			<div className="shop-details">
				<h2>{name}</h2>
				<h4>{short}</h4>
				<img src={image} alt="food pic" width="200" height="200" />
				<p>{phone}</p>
				<p>{address}</p>
				<p>{description}</p>
				{/* {stars total} */}
				<Rating name="read-only" value={4.5} readOnly precision={0.5} />
				<p>{posts.filter(foo => foo.shopid === id).length} Reviews</p>
			</div>
			<div className="shop-button">
				<Button
					variant="contained"
					color="primary"
					className="btn"
					endIcon={<RoomIcon className="btn-icon" />}
				>
					{" "}
					Get Directions
				</Button>
				<Button
					variant="contained"
					color="primary"
					className="btn bg-color-sub"
					endIcon={<ShareIcon className="btn-icon" />}
				>
					{" "}
					Share
				</Button>
			</div>
		</div>
	);
}

export default ShopBanner;
