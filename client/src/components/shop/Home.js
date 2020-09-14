import React, { useContext } from "react";
import ShopContext from "../context/shopContext";
import ShopCard from "./ShopCard";
import Logo from "./Logo";
import NavBar from "./NavBar";

function Home() {
	const shopContext = useContext(ShopContext);

	const { shop } = shopContext;

	return (
		<div className="home-wrap">
			<div className="logo-home">
				<Logo />
				<NavBar />
			</div>
			<div className="home-card">
				{shop.map(sho => (
					<ShopCard key={sho.id} shop={sho} />
				))}
			</div>
		</div>
	);
}

export default Home;
