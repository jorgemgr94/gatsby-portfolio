import React from "react";
import { Disclosure } from "@headlessui/react";
import { BiMenu, BiX } from "react-icons/bi";
import { INavigationItem } from "./type";

import ProfilePhoto from "../../images/me.jpg";

function classNames(...classes: string[]) {
	return classes.filter(Boolean).join(` `);
}

export interface IDesktopNavbarProps {
	navigationItems: INavigationItem[];
	setCurrentItem: (currentItem: INavigationItem) => void;
}

function MobileNavbar({
	navigationItems,
	setCurrentItem
}: IDesktopNavbarProps) {
	return (
		<Disclosure as="nav" className="basis-full flex-col md:hidden bg-gray-800">
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
							{navigationItems.map((navigationItem) => (
								<a
									key={navigationItem.name}
									onClick={() => {
										close();
										setCurrentItem(navigationItem);
									}}
									className={classNames(
										navigationItem.current
											? `bg-gray-900 text-white`
											: `text-gray-300 hover:bg-gray-700 hover:text-white`,
										`block px-3 py-2 rounded-md text-base font-medium`
									)}
									aria-current={navigationItem.current ? `page` : undefined}
								>
									{navigationItem.name}
								</a>
							))}
						</div>
					</Disclosure.Panel>
				</>
			)}
		</Disclosure>
	);
}

export default MobileNavbar;
