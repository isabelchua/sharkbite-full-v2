import React, { Fragment, useContext } from "react";
import { Link } from "react-router-dom";
import AuthContext from "../context/auth/authContext";
//import PostContext from "../context/postContext";

function NavBar() {
	const authContext = useContext(AuthContext);
	//const postContext = useContext(PostContext)

	const { isAuthenticated, logout, user } = authContext;
	//const { clearUser } = userContext

	const onLogout = () => {
		logout();
		//clearUser();
	};

	const authLinks = (
		<Fragment>
			<li>Hello, {user && user.name}! </li>
			<li>
				<Link to="/">Shops </Link> |
			</li>
			<li>
				<a onClick={onLogout} href="">
					<i className="fas fa-sign-out-alt"></i>
					<span className="hide-sm">Logout</span>
				</a>
			</li>
		</Fragment>
	);

	const guestLinks = (
		<Fragment>
			<li>Hello, Guest! </li>
			<li>
				<Link to="/">Shops </Link> | <Link to="/login">Login</Link> |
			</li>
			<li>
				<Link to="/login2">Login 2</Link> |{" "}
			</li>
			<li>
				<Link to="/register">Register</Link>|{" "}
			</li>
			<li>
				<Link to="/register2">Register 2</Link>
			</li>
		</Fragment>
	);

	return (
		<div className="nav-bar">
			<ul>{isAuthenticated ? authLinks : guestLinks}</ul>
		</div>
	);
}

export default NavBar;
