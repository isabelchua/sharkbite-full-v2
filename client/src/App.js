import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./App.scss";
import Shop from "./components/shop/Shop";
import PostState from "./components/context/PostState";
import ShopState from "./components/context/ShopState";
import UserState from "./components/context/UserState";
import Home from "./components/shop/Home";
import Login from "./components/auth/Login";
import Register from "./components/auth/Register";
import NavBar from "./components/shop/NavBar";

function App() {
	return (
		<Router>
			<Switch>
				<UserState>
					<ShopState>
						<PostState>
							<Route exact path="/register" component={Register} />
							<Route exact path="/login" component={Login} />
							<Route exact path="/">
								{/* <Link to="/">Shops </Link> | */}
								<Home />
							</Route>
							<Route path="/shop/:id/:name">
								<Shop />
							</Route>
						</PostState>
					</ShopState>
				</UserState>
			</Switch>
		</Router>
	);
}

export default App;
