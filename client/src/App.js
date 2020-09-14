import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./App2.css";
import "./App.scss";

import Shop from "./components/shop/Shop";
import PostState from "./components/context/PostState";
import ShopState from "./components/context/ShopState";
import UserState from "./components/context/UserState";
import Home from "./components/shop/Home";
import Login from "./components/auth/Login";
import LoginPlain from "./components/auth/LoginPlain";
import Register from "./components/auth/Register";
import RegisterPlain from "./components/auth/RegisterPlain";
import NavBar from "./components/shop/NavBar";
import AlertState from "./components/context/alert/AlertState";
import Alerts from "./components/layout/Alerts";
import setAuthToken from "./utils/setAuthToken";
import AuthState from "./components/context/auth/AuthState";

if (localStorage.token) {
	setAuthToken(localStorage.token);
}

function App() {
	return (
		<AuthState>
			<AlertState>
				<Router>
					<Switch>
						<UserState>
							<ShopState>
								<PostState>
									<Route exact path="/register" component={Register} />
									<Route
										exact
										path="/register2"
										component={RegisterPlain}
									/>
									<Route exact path="/login" component={Login} />
									<Route exact path="/login2" component={LoginPlain} />
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
			</AlertState>
		</AuthState>
	);
}

export default App;
