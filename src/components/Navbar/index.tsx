import React, { useState } from "react";
import { Disclosure } from "@headlessui/react";
import { BiMenu, BiX } from "react-icons/bi";
import styled from "styled-components";

import ProfilePhoto from "../../images/me.jpg";
import scrollTo from "gatsby-plugin-smoothscroll";

interface INavigationItem {
	name: string;
	href: string;
	current: boolean;
}

const navigationItems: INavigationItem[] = [
	{ name: `About Me`, href: `#about`, current: true },
	{ name: `Professional Exp.`, href: `#experience`, current: false },
	{ name: `Social`, href: `#social`, current: false },
	{ name: `Lifestyle`, href: `#lifestyle`, current: false }
];

function classNames(...classes: string[]) {
	return classes.filter(Boolean).join(` `);
}

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

export default function Example() {
	const [navigation, setNavigation] = useState(navigationItems);

	const setCurrentItem = (currentItem: INavigationItem) => {
		const newNavigation = navigation.map((item) => {
			return {
				...item,
				current: currentItem.name === item.name ? true : false
			};
		});
		setNavigation([...newNavigation]);
		scrollTo(currentItem.href);
	};

	return (
		<>
			<Disclosure
				as="nav"
				className="basis-full flex-col md:hidden bg-gray-800"
			>
				{({ open, close }) => (
					<>
						<div className="flex items-center justify-between p-4">
							<div className="flex items-center justify-between">
								<div className="flex items-center">
									{/* Mobile menu button*/}
									<Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
										<span className="sr-only">Open main menu</span>
										{open ? <BiX /> : <BiMenu />}
									</Disclosure.Button>
								</div>
							</div>

							<img
								className="h-8 w-8 rounded-full"
								src={ProfilePhoto}
								alt="Profile photo"
							/>
						</div>
						<Disclosure.Panel className="sm:hidden">
							<div className="px-2 pt-2 pb-3 space-y-1">
								{navigation.map((item) => (
									<>
										<a
											key={item.name}
											onClick={() => {
												close();
												setCurrentItem(item);
											}}
											className={classNames(
												item.current
													? `bg-gray-900 text-white`
													: `text-gray-300 hover:bg-gray-700 hover:text-white`,
												`block px-3 py-2 rounded-md text-base font-medium`
											)}
											aria-current={item.current ? `page` : undefined}
										>
											{item.name}
										</a>
									</>
								))}
							</div>
						</Disclosure.Panel>
					</>
				)}
			</Disclosure>
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
							{navigation.map((item) => (
								<li key={item.name}>
									<a onClick={() => scrollTo(item.href)}>{item.name}</a>
								</li>
							))}
						</ul>
					</StyledList>
				</div>
			</nav>
		</>
	);
}
