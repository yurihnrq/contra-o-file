import * as React from "react"

import Layout from "../components/Layout"
import Seo from "../components/Seo"
import LandingSection from "../components/LandingSection"
import About from "../components/About"


const IndexPage = () => (
	<Layout>
		<Seo title="Bem-vindo" />
		<LandingSection />
		<About />
	</Layout>
)

export default IndexPage
