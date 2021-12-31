module.exports = {
	siteMetadata: {
		exampleUrl: `https://jorgemgr.com`,
		title: `My Personal Site`,
		author: `Jorge García`,
		description: `A personal site for Jorge García.`
	},
	plugins: [
		`gatsby-plugin-postcss`,
		`gatsby-plugin-react-helmet`,
		{
			resolve: `gatsby-plugin-manifest`,
			options: {
				icon: `src/images/icon.png`
			}
		},
		`gatsby-plugin-dark-mode`,
		`gatsby-plugin-styled-components`,
		`gatsby-plugin-smoothscroll`
	]
};
