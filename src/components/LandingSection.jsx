import React from "react"

import { landing, content, buttons } from "../styles/LandingSection.module.css"

const LandingSection = () => {
	return (
		<section className={landing}>
			<div className={content}>
				<h1>
					Bem-vindo ao Contra o Filé
				</h1>
				<p>
					Por um mundo onde se mate a fome e não os animais.
				</p>
				<div className={buttons}>
					<button>
						Peça pelo iFood
					</button>
					<button>
						Peça pelo Whatsapp
					</button>
				</div>
			</div>
		</section>
	)
}

export default LandingSection;
