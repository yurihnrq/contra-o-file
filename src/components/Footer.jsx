import * as React from "react"
import { Link } from "gatsby"

import { footer, info } from "../styles/Footer.module.css"
import { InstagramIcon, TwitterIcon, FaceBookIcon } from "../components/Icons"

const Footer = () => (
	<footer className={footer}>
		<section className={info}>
			<div>
				<h3>
					Funcionamento:
				</h3>
				<p>
					Segunda a Sábado.
				</p>
				<p>
					Das 11h00 às 15h00.
				</p>
			</div>
			<div>
				<h3>
					Localização:
				</h3>
				<p>
					Rua Alfredo Lopes, 1717.
				</p>
				<p>
					CEP 13560-460
				</p>
			</div>
			<div>
				<h3>
					Redes sociais:
				</h3>
				<div>
					<a href="https://instagram.com" target="_blank" rel="norefferer">
						<InstagramIcon />
					</a>
					<a href="https://facebook.com" target="_blank" rel="norefferer">
						<FaceBookIcon />
					</a>
					<a href="https://twitter.com" target="_blank" rel="norefferer">
						<TwitterIcon />
					</a>
				</div>
			</div>
		</section>
		<nav>
			<Link to="/especialidades">
				Especialidades
			</Link>
			<Link to="/#sobre">
				Sobre nós
			</Link>
			<Link to="/#Header">
				Voltar ao topo
			</Link>
		</nav>
	</footer>
)
export default Footer
