import React from "react";

interface IAlinkProps {
	children: React.ReactNode;
	url: string;
}

function ALink({ children, url }: IAlinkProps) {
	return (
		<a
			href={url}
			target="_blank"
			rel="noopener noreferrer"
			className="underline cursor-pointer hover:text-blue-400"
		>
			{children}
		</a>
	);
}

export default ALink;
