import React from "react";

import artwork from "../images/undraw_cooking_lyxy.svg";
import { about, aboutText, aboutImg } from "../styles/About.module.css";

const About = () => {
	return (
		<section className={about} id="sobre">
			<h2>
				Sobre nós
			</h2>
			<article>
				<div className={aboutText}>
					<p>
						Oferecemos comida vegana para você que segue esse estilo a tempos, mas não esquecemos de quem acabou de entrar nessa vida.
					</p>
					<p>
						Trabalhamos somente com produtos orgânicos de agricultura familiar, incentivando a produção local.
					</p>
					<p>
						Temos como objetivo a democratização do veganismo, temos pratos com preços que cabem no seu bolso.
					</p>
				</div>
				<div className={aboutImg}>
					<img src={artwork} alt="Imagem sobre nós" />
				</div>
			</article>
		</section>
	);
};

export default About;
