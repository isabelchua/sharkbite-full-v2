import React, { useState, useContext, useEffect } from "react";
import AlertContext from "../context/alert/alertContext";
import AuthContext from "../context/auth/authContext";

function LoginPlain(props) {
	const alertContext = useContext(AlertContext);
	const authContext = useContext(AuthContext);

	const { setAlert } = alertContext;
	const { login, error, clearErrors, isAuthenticated } = authContext;

	useEffect(() => {
		if (isAuthenticated) {
			props.history.push("/");
		}
		if (error === "Invalid Credentials") {
			setAlert(error, "danger");
			clearErrors();
		}
		// eslint-disable-next-line
	}, [error, isAuthenticated, props.history]);

	const [user, setUser] = useState({
		email: "",
		password: ""
	});
	const { email, password } = user;

	const onChange = e =>
		setUser({
			...user,
			[e.target.name]: e.target.value
		});

	const onSubmit = e => {
		e.preventDefault();
		if (email === "" || password === "") {
			setAlert("Please fill in all fields", "danger");
		} else {
			login({
				email,
				password
			});
		}
	};

	return (
		<div>
			<h1>Account Login</h1>
			<form onSubmit={onSubmit}>
				<div className="field-wrap">
					<label htmlFor="email">Email</label>
					<input
						type="email"
						name="email"
						value={email}
						onChange={onChange}
						id=""
						required
					/>
				</div>
				<div className="field-wrap">
					<label htmlFor="password">Password</label>
					<input
						type="password"
						name="password"
						value={password}
						onChange={onChange}
						id=""
						required
					/>
				</div>

				<input type="submit" value="Login" className="btn" />
			</form>
		</div>
	);
}

export default LoginPlain;
