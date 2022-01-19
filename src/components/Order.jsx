import React from "react"

import Button from "./Button"
import { order, buttons } from "../styles/Order.module.css"

const Order = () => {
	return (
		<section className={order}>
			<h2>Faça seu pedido</h2>
			<div className={buttons}>
				<a href="https://ifood.com.br" target="_blank" rel="norefferer">
					<Button text={"Peça pelo iFood"} className={"mx-3"} />
				</a>
				<a href="https://whatsapp.com/?lang=pt_br" target="_blank" rel="norefferer">
					<Button text={"Peça pelo WhatsApp"} className={"mx-3 mt-3 sm:mt-0"} />
				</a>
			</div>
		</section>
	)
}

export default Order;