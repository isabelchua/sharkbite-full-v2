import React, { useState, useContext, useEffect } from "react";
import AlertContext from "../context/alert/alertContext";
import AuthContext from "../context/auth/authContext";

function RegisterPlain(props) {
	const alertContext = useContext(AlertContext);
	const authContext = useContext(AuthContext);

	const { setAlert } = alertContext;

	const { register, error, clearErrors, isAuthenticated } = authContext;

	useEffect(() => {
		if (isAuthenticated) {
			props.history.push("/");
		}
		if (error === "User already exists") {
			setAlert(error, "danger");
			clearErrors();
		}
		// eslint-disable-next-line
	}, [error, isAuthenticated, props.history]);

	const [user, setUser] = useState({
		name: "",
		email: "",
		password: "",
		password2: ""
	});
	const { name, email, password, password2 } = user;

	const onChange = e =>
		setUser({
			...user,
			[e.target.name]: e.target.value
		});

	const onSubmit = e => {
		e.preventDefault();
		if (name === "" || email === "" || password === "") {
			setAlert("Please enter all fields", "danger");
		} else if (password !== password2) {
			setAlert("Passwords do not match", "danger");
		} else {
			register({
				name,
				email,
				password
			});
		}
	};

	return (
		<div>
			<h1>Account Register </h1>
			<form onSubmit={onSubmit}>
				<div className="field-wrap">
					<label htmlFor="name">Name</label>
					<input
						type="text"
						name="name"
						value={name}
						onChange={onChange}
						id=""
						required
					/>
				</div>
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
						minLength="5"
					/>
				</div>
				<div className="field-wrap">
					<label htmlFor="password2">Confirm Password</label>
					<input
						type="password"
						name="password2"
						value={password2}
						onChange={onChange}
						id=""
						required
						minLength="5"
					/>
				</div>
				<input type="submit" value="Register" className="btn" />
			</form>
		</div>
	);
}

export default RegisterPlain;
