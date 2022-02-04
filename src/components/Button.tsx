import * as React from 'react';

interface IButton {
	text: string,
	className?: string
	onClick?: React.MouseEventHandler<HTMLButtonElement>,
}

const Button: React.FC<IButton> = ({ text, className, onClick }) => (
	<button
		onClick={onClick}
		className={`
			bg-brownLogo rounded-md py-4 w-44 hover:bg-orange-400 text-white
			${className ? className : ''}
		`}
	>
		{text}
	</button>
);

Button.defaultProps = {
	text: 'Sem texto'
};

export default Button;
