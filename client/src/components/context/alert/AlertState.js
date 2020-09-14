import React, { useReducer } from "react";
import AlertContext from "./alertContext";
import alertReducer from "./alertReducer";
import { nanoid } from "nanoid";

import { SET_ALERT, REMOVE_ALERT } from "../../types";

const AlertState = props => {
	const initialState = [];

	const [state, dispatch] = useReducer(alertReducer, initialState);

	// Set Alert
	const setAlert = (msg, type, timeout = 2500) => {
		const id = nanoid();
		dispatch({
			type: SET_ALERT,
			payload: { msg, type, id }
		});

		setTimeout(() => dispatch({ type: REMOVE_ALERT, payload: id }), timeout);
	};

	return (
		<AlertContext.Provider
			value={{
				alerts: state,
				setAlert
			}}
		>
			{props.children}
		</AlertContext.Provider>
	);
};
export default AlertState;
