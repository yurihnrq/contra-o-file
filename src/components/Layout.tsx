import * as React from 'react';

import Header from './Header';
import Footer from './Footer';

const Layout: React.FC = ({ children }) => {
	return (
		<div className='relative'>
			<Header />
			<main>
				{children}
			</main>
			<Footer />
		</div>
	);
};

export default Layout;
