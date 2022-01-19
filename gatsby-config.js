const path = require("path");
// Get paths of Gatsby's required rules, which as of writing is located at:
// https://github.com/gatsbyjs/gatsby/tree/fbfe3f63dec23d279a27b54b4057dd611dce74bb/packages/
// gatsby/src/utils/eslint-rules
const gatsbyRequiredRules = path.join(
	process.cwd(),
	"node_modules",
	"gatsby",
	"dist",
	"utils",
	"eslint-rules"
);

module.exports = {
	siteMetadata: {
		title: `Contra o Filé`,
		description: `Restaurante vegano com comida deliciosa e acessível.`,
		author: `Yuri Henrique B. Maciel`,
		siteUrl: `https://contra-o-file.web.app/`,
	},
	plugins: [
		`gatsby-plugin-postcss`,
		`gatsby-plugin-react-helmet`,
		`gatsby-plugin-image`,
		{
			resolve: `gatsby-source-filesystem`,
			options: {
				name: `images`,
				path: `${__dirname}/src/images`,
			},
		},
		`gatsby-transformer-sharp`,
		`gatsby-plugin-sharp`,
		{
			resolve: `gatsby-plugin-manifest`,
			options: {
				name: `gatsby-starter-default`,
				short_name: `starter`,
				start_url: `/`,
				background_color: `#663399`,
				// This will impact how browsers show your PWA/website
				// https://css-tricks.com/meta-theme-color-and-trickery/
				// theme_color: `#663399`,
				display: `minimal-ui`, // This path is relative to the root of the site.
				icon: "./src/images/logo/logo-icon.png"
			},
		},
		{
			resolve: "gatsby-plugin-eslint",
			options: {
				// Gatsby required rules directory
				rulePaths: [gatsbyRequiredRules],
				// Default settings that may be ommitted or customized
				stages: ["develop"],
				extensions: ["js", "jsx", "ts", "tsx"],
				exclude: ["node_modules", "bower_components", ".cache", "public"],
				// Any additional eslint-webpack-plugin options below
				// ...
			},
		},
		// this (optional) plugin enables Progressive Web App + Offline functionality
		// To learn more, visit: https://gatsby.dev/offline
		// `gatsby-plugin-offline`,
	],
}
