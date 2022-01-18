import * as React from "react"

import Layout from "../components/Layout"
import Seo from "../components/Seo"

const NotFoundPage = () => (
	<Layout>
		<Seo title="404: Página não encontrada" />
		<h2>404: Página não encontrada</h2>
		<p>A página que você está acessando não existe. 😢</p>
	</Layout>
)

export default NotFoundPage;
