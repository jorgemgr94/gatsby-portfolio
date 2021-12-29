import React from "react";
import styled from "styled-components";
import { INavigationItem } from "./type";

const StyledList = styled.main.attrs({
	className: `list-none`
})`
	& {
		ul {
			padding-top: 1em;
		}
		li {
			padding: 0.5em;
		}
		li > a {
			font-weight: 800;
			letter-spacing: 0.05em;
			text-transform: uppercase;
			color: #ccc;
		}
		li > a:hover {
			text-decoration: underline;
			cursor: pointer;
		}
	}
`;

export interface IMobileNavbarProps {
	navigationItems: INavigationItem[];
	setCurrentItem: (currentItem: INavigationItem) => void;
}

export default function MobileNavbar({
	navigationItems,
	setCurrentItem
}: IMobileNavbarProps) {
	return (
		<nav className="hidden md:flex md:flex-col md:items-center md:justify-center md:h-screen md:p-2 md:basis-3/12 xl:basis-2/12 dark:bg-gray-800">
			<img
				className="rounded-full shadow-sm w-32 h-32"
				src="https://jorgemgr.com/static/media/me.e439848d.jpg"
				alt="user image"
			/>
			<button
				className="navbar-toggler"
				type="button"
				data-toggle="collapse"
				data-target="#navbarSupportedContent"
				aria-controls="navbarSupportedContent"
				aria-expanded="false"
				aria-label="Toggle navigation"
			>
				<span className="navbar-toggler-icon"></span>
			</button>
			<div className="collapse navbar-collapse" id="navbarSupportedContent">
				<StyledList>
					<ul>
						{navigationItems.map((navigationItem) => (
							<li key={navigationItem.name}>
								<a
									onClick={() => {
										setCurrentItem(navigationItem);
									}}
								>
									{navigationItem.name}
								</a>
							</li>
						))}
					</ul>
				</StyledList>
			</div>
		</nav>
	);
}
