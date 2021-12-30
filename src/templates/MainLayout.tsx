import React, { ReactNode } from "react";
import { graphql, useStaticQuery } from "gatsby";

import Header from "../components/Common/Header";
import Toggler from "../components/Toggler";

interface IMainLayoutProps {
	children: ReactNode;
}

const MainLayout = ({ children }: IMainLayoutProps) => {
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
			<Header siteTitle={data.site.siteMetadata?.title || `Title`} />
			<Toggler />
			<main className="p-10">{children}</main>
			<footer className="bg-gray-600 dark:bg-blue text-white">
				© {new Date().getFullYear()}, Built with{` `}
				<a href="https://www.gatsbyjs.com">Gatsby</a>
			</footer>
		</>
	);
};

export default MainLayout;
