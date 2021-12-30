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
			className="text-blue-400 underline cursor-pointer hover:text-blue-300 dark:text-white dark:hover:text-blue-400"
		>
			{children}
		</a>
	);
}

export default ALink;
