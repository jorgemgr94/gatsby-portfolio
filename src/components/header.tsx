import React from "react";

const Header = ({ siteTitle }: { siteTitle: string }) => {
	return (
		<>
			<meta charSet="utf-8" />
			<meta title={siteTitle} />
		</>
	);
};

export default Header;
