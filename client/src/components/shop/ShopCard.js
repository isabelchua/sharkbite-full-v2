import React from "react";
import { Link } from "react-router-dom";

function ShopCard({ shop }) {
	const { name, address, image, id } = shop;

	return (
		// <Router>
		<Link to={`shop/${id}/${name}`} className="shop-card">
			<div className="card">
				<h3>{name}</h3>
				<img src={image} alt={name + " image"} />
				<p>{address}</p>
				<p>4 reviews</p>
			</div>
		</Link>
		/* <Switch>
				<Route exact path={`shop/${id}/${name}`}></Route>
				<Link to={`shop/${id}/${name}`} />
				<Route exact path="/:id/:name" component={Shop} />
			</Switch>
		</Router> */
	);
}

export default ShopCard;
