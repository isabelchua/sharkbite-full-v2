import React from "react";

function ButtonIcon({ text, active, Icon }) {
	return (
		<div className={`button-icon ${active && "button-icon-active"}`}>
			<Icon />
			<h3>{text}</h3>
		</div>
	);
}

export default ButtonIcon;
