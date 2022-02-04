import * as React from 'react';

import Layout from '../components/Layout';
import Seo from '../components/Seo';
import Menu from '../components/Menu';
import Order from '../components/Order';

const Cardapio: React.FC = () => (
	<Layout>
		<Seo title='Cardápio' />
		<Menu />
		<Order />
	</Layout>
);

export default Cardapio;
