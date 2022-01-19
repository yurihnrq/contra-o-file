import * as React from "react";
import MenuItem from "./MenuItem";

import { menu, packed, items } from "../styles/Menu.module.css";
import { cardapio, marmitas } from "../data/MenuData.js";

const Menu = () => {
	return (
		<section className={menu}>
			<h2>
				Confira nosso cardápio
			</h2>
			<div className={items}>
				{
					cardapio.map((item, index) => (
						<MenuItem key={index} name={item.nome} price={item.preco} img={item.img} />
					))
				}
			</div>
			<h3>
				Também temos marmitex:
			</h3>
			<div className={packed}>
				{
					marmitas.map((item, index) => (
						<MenuItem key={index} name={item.nome} price={item.preco} img={item.img} />
					))
				}
			</div>
			<small>*Proteína texturizada de soja</small>
		</section>
	);
};

export default Menu;
