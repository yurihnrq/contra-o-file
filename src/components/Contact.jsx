import React, { useState } from "react"

import Button from "./Button"
import { contact, map } from "../styles/Contact.module.css"

const Contact = () => {

	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [message, setMessage] = useState("");

	const handleSubmit = (e) => {
		e.preventDefault();

		const obj = {
			nome: name,
			email: email,
			mensagem: message
		};

		// Enviar os dados para algum lugar aqui.
		console.log(obj);
	}

	return (
		<section className={contact} id="contato">
			<h2>
				Fale conosco
			</h2>
			<article>
				<div>
					<form action={null} onSubmit={e => handleSubmit(e)}>
						<label htmlFor="nome">Nome:</label>
						<input
							id="nome" name="nome" type="text" required
							value={name} onChange={({ target }) => setName(target.value)}
						/>
						<label htmlFor="email">Email:</label>
						<input
							id="email" name="email" type="email" required
							value={email} onChange={({ target }) => setEmail(target.value)}
						/>
						<label htmlFor="mensagem">Mensagem:</label>
						<textarea
							id="mensagem" name="mensagem" cols="30" rows="10" required
							value={message} onChange={({ target }) => setMessage(target.value)}
						></textarea>
						<Button text={"Enviar mensagem"} />
					</form>
				</div>
				<div className={map}>
					<iframe
						src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3699.100421777175!2d-47.88381248505064!3d-22.00746288547645!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94b876d5e2c68a51%3A0xf8989bb472e252c5!2sR.%20Alfredo%20Lopes%2C%201717%20-%20Jardim%20Macarengo%2C%20S%C3%A3o%20Carlos%20-%20SP%2C%2013560-460!5e0!3m2!1spt-BR!2sbr!4v1642461796014!5m2!1spt-BR!2sbr"
						allowFullScreen="" loading="lazy" title="Endereço Contra o Filé"
					></iframe>
					<p>
						Devido a pandemia temos atendido apenas por delivery.
						Quando a situação normalizar estaremos de portas abertas para recebe-los.
					</p>
				</div>
			</article>
		</section>
	)
}

export default Contact
