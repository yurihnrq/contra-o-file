import * as React from 'react';

import { Link } from 'gatsby';
import Header from '../components/Header';
import Seo from '../components/Seo';

const NotFoundPage: React.FC = () => (
	<>
		<Header />
		<section className='p-4'>
			<Seo title='404: Página não encontrada' />
			<h2>404: Página não encontrada</h2>
			<p>A página que você está acessando não existe. 😢</p>
			<Link to='/' className='text-greenLogo font-medium hover:underline py-4 block w-fit'>
				Ir para ínicio
			</Link>
		</section>
	</>
);

export default NotFoundPage;
