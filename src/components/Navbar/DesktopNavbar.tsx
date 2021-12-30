import React from "react";

import { INavigationItem } from "./type";

import ProfilePhoto from "../../images/me.jpg";

export interface IMobileNavbarProps {
	navigationItems: INavigationItem[];
	setCurrentItem: (currentItem: INavigationItem) => void;
}

function classNames(...classes: string[]) {
	return classes.filter(Boolean).join(` `);
}

export default function MobileNavbar({
	navigationItems,
	setCurrentItem
}: IMobileNavbarProps) {
	return (
		<nav className="hidden bg-gray-100 md:flex md:flex-col md:items-center md:justify-center md:h-screen md:p-2 md:basis-3/12 xl:basis-2/12 dark:bg-gray-700">
			<img
				className="rounded-full shadow-sm w-32 h-32 mb-4"
				src={ProfilePhoto}
				alt="user image"
			/>
			<ul>
				{navigationItems.map((navigationItem) => (
					<li key={navigationItem.name} className="py-2">
						<a
							// className="font-extrabold	tracking-wider uppercase text-gray-400"
							className={classNames(
								`block px-3 py-2 rounded-md text-base font-medium cursor-pointer text-gray-900`, // base
								navigationItem.current
									? `bg-white dark:bg-gray-800 dark:text-white` // selected
									: `text-gray-700 dark:text-gray-300 dark:hover:text-white`
							)}
							onClick={() => {
								setCurrentItem(navigationItem);
							}}
						>
							{navigationItem.name}
						</a>
					</li>
				))}
			</ul>
		</nav>
	);
}
