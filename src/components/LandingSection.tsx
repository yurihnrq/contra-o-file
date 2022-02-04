import * as React from 'react';

import Button from './Button';
import { landing, content, buttons } from '../styles/LandingSection.module.css';

const LandingSection: React.FC = () => {
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
					<a href='https://ifood.com.br' target='_blank' rel='norefferer noreferrer'>
						<Button text={'Peça pelo iFood'} className={'mx-3 mb-3 sm:mb-0'} />
					</a>
					<a href='https://whatsapp.com/?lang=pt_br' target='_blank' rel='norefferer noreferrer'>
						<Button text={'Peça pelo WhatsApp'} className={'mx-3'} />
					</a>
				</div>
			</div>
		</section>
	);
};

export default LandingSection;
