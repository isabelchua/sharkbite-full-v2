import React, { useContext, useEffect } from "react";
import ShopContext from "../context/shopContext";
import ShopCard from "./ShopCard";
import Logo from "./Logo";
import NavBar from "./NavBar";
import AuthContext from "../context/auth/authContext";

function Home() {
	const shopContext = useContext(ShopContext);
	const authContext = useContext(AuthContext);

	const { getShops } = shopContext;

	useEffect(() => {
		authContext.loadUser();
		getShops();
		// eslint-disable-next-line
	}, []);

	const { shop } = shopContext;

	return (
		<div className="home-wrap">
			<div className="logo-home">
				<Logo />
				<NavBar />
			</div>
			<div className="home-card">
				{shop.map(sho => (
					<ShopCard key={sho._id} shop={sho} />
				))}
			</div>
		</div>
	);
}

export default Home;
