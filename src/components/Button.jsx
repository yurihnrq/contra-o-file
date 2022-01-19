import React from "react"

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
)

export default Button;
