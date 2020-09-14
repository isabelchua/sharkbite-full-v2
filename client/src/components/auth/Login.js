import React from "react";
import { useForm } from "react-hook-form";
import NavBar from "../shop/NavBar";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

function Login() {
	const { login, handleSubmit, errors } = useForm();

	const onSubmit = data => {
		console.log(data);
	};

	return (
		<div>
			<NavBar />
			<form onSubmit={handleSubmit(onSubmit)} noValidate>
				<h3>Register</h3>

				<TextField
					type="password"
					placeholder="Password"
					name="password"
					inputRef={login({
						required: "password required",
						minLength: {
							value: 6,
							message: "must be at least 6 characters"
						}
					})}
					label="Password"
					style={{ margin: 20 }}
					helperText={errors.password && errors.password.message}
					fullWidth
					margin="normal"
					InputLabelProps={{
						shrink: true
					}}
					variant="outlined"
				/>
				<TextField
					name="email"
					type="email"
					inputRef={login({
						required: "Email is required",
						minLength: { value: 5, message: "Email is required" },
						pattern: /^[A-Za-z]+$/i
					})}
					label="Email"
					style={{ margin: 20 }}
					helperText={errors.email && errors.email.message}
					fullWidth
					margin="normal"
					InputLabelProps={{
						shrink: true
					}}
					variant="outlined"
				/>
				<Button
					className="btn"
					type="submit"
					variant="contained"
					color="primary"
				>
					Register
				</Button>
				{/* <input  /> */}
			</form>
		</div>
	);
}

export default Login;
