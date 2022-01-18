import * as React from "react"

import { card, text } from "../styles/MenuItem.module.css"

const MenuItem = ({ name, price, img }) => {

	const formatter = new Intl.NumberFormat('pt-br', {
		style: "currency",
		currency: "BRL"
	})

	return (
		<div className={card}>
			<img src={img} alt="Ilustração de item no menu" loading="lazy" />
			<div className={text}>
				<p>{name}</p>
				<p>{formatter.format(price)}</p>
			</div>
		</div>
	)
}

export default MenuItem;