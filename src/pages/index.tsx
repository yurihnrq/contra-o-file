import * as React from 'react';

import Layout from '../components/Layout';
import Seo from '../components/Seo';
import LandingSection from '../components/LandingSection';
import About from '../components/About';
import Contact from '../components/Contact';


const IndexPage: React.FC = () => (
	<Layout>
		<Seo title='Bem-vindo' />
		<LandingSection />
		<About />
		<Contact />
	</Layout>
);

export default IndexPage;
