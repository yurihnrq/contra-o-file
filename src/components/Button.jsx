import React from "react";
import PropTypes from "prop-types";

const Button = ({ text, onClick, className }) => (
	<button
		onClick={onClick ? onClick() : null}
		className={`
			bg-brownLogo rounded-md py-4 w-44 hover:bg-orange-400 text-white
			${className ? className : ""}
		`}
	>
		{text}
	</button>
);

Button.defaultProps = {
	text: "Sem texto"
};

Button.propTypes = {
	text: PropTypes.string,
	onClick: PropTypes.func,
	className: PropTypes.string
};

export default Button;
