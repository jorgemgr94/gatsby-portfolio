import React, { ReactNode } from "react";
import PropTypes from "prop-types";
import { useStaticQuery, graphql } from "gatsby";
import Header from "./header";
import ThemeToggle from "./themeToggle";

interface ILayoutProps {
	children: ReactNode;
}

const Layout = ({ children }: ILayoutProps) => {
	const data = useStaticQuery(graphql`
		query SiteTitleQuery {
			site {
				siteMetadata {
					title
				}
			}
		}
	`);
	return (
		<>
			<h1 className="text-3xl font-bold underline">Hello world!</h1>
			<div className="bg-gray-600 dark:bg-gray-900 text-white">
				<Header siteTitle={data.site.siteMetadata?.title || `Title`} />
				<ThemeToggle />
				<main className="p-10">{children}</main>
				<footer className="bg-gray-600 dark:bg-blue text-white">
					© {new Date().getFullYear()}, Built with{` `}
					<a href="https://www.gatsbyjs.com">Gatsby</a>
				</footer>
			</div>
		</>
	);
};

export default Layout;
