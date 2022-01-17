import * as React from "react"
import { Link } from "gatsby"

import { footer, info, links } from "../styles/Footer.module.css"
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
					<Link to="/insta">
						<InstagramIcon />
					</Link>
					<Link to="/facebook">
						<FaceBookIcon />
					</Link>
					<Link to="/twitter">
						<TwitterIcon />
					</Link>
				</div>
			</div>
		</section>
		<nav>
			<Link to="/especialidades">
				Especialidades
			</Link>
			<Link to="#sobre">
				Sobre nós
			</Link>
			<Link to="#Header">
				Voltar ao topo
			</Link>
		</nav>
	</footer>
)
export default Footer
