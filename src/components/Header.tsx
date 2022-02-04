import * as React from 'react';
import { useEffect, useState } from 'react';
import { Link } from 'gatsby';
import logo from '../images/logo/logo-inline.png';

import { header, nav, sidenav } from '../styles/Header.module.css';
import { MenuIcon, CloseIcon } from './Icons';

const Header: React.FC = () => {

	const [sideNav, setSideNav] = useState(false);

	useEffect(() => {
		const bodyStyle = document.body.style;
		sideNav ? bodyStyle.overflow = 'hidden' : bodyStyle.overflow = 'auto';
	}, [sideNav]);

	return (
		<header className={header} id='Header'>
			<div>
				<Link to='/'>
					<img src={logo} alt='Contra o Filé logo' />
				</Link>
			</div>
			<nav className={nav}>
				<Link to='/cardapio'>
					Cardápio
				</Link>
				<Link to='/#sobre'>
					Sobre nós
				</Link>
				<Link to='/#contato'>
					Contato
				</Link>
			</nav>
			<button onClick={() => setSideNav(!sideNav)} aria-label='Abrir navegação'>
				<MenuIcon />
			</button>
			{
				sideNav ? (
					<nav className={sidenav}>
						<div>
							<button onClick={() => setSideNav(!sideNav)} aria-label='Fechar navegação'>
								<CloseIcon />
							</button>
						</div>
						<div className='flex flex-col'>
							<Link to='/cardapio' onClick={() => setSideNav(!sideNav)}>
								Cardápio
							</Link>
							<Link to='/#sobre' onClick={() => setSideNav(!sideNav)}>
								Sobre nós
							</Link>
							<Link to='/#contato' onClick={() => setSideNav(!sideNav)}>
								Contato
							</Link>
						</div>
					</nav>
				) : (
					null
				)
			}
		</header >
	);
};

export default Header;
