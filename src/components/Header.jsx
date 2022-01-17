import * as React from "react"
import PropTypes from "prop-types"

const Header = () => (
	<header>
		<h1>
			Header
		</h1>
	</header>
)

Header.propTypes = {
	siteTitle: PropTypes.string,
}

Header.defaultProps = {
	siteTitle: ``,
}

export default Header
