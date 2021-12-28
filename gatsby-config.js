module.exports = {
	siteMetadata: {
		exampleUrl: `https://jorgemgr.com`,
		title: `My Personal Site`
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
