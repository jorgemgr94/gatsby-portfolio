import { CgMoon, CgSun } from "react-icons/cg";
import React from "react";
import { Switch } from "@headlessui/react";
import { ThemeToggler } from "gatsby-plugin-dark-mode";

interface IThemeToggleProps {
	theme: string;
	toggleTheme: (theme: string) => void;
}

function Toggle() {
	return (
		<ThemeToggler>
			{({ theme, toggleTheme }: IThemeToggleProps) => {
				const darkMode = theme === `dark`;
				return (
					<Switch.Group>
						<section className="fixed bottom-5 right-5 md:top-5">
							<div className="flex items-center">
								<Switch.Label className="mr-1 cursor-pointer">
									{darkMode ? (
										<CgMoon className="text-xl text-gray-500" />
									) : (
										<CgSun className="text-xl text-yellow-500" />
									)}
								</Switch.Label>

								<Switch
									checked={theme === `dark`}
									onChange={() => {
										toggleTheme(!darkMode ? `dark` : `light`);
									}}
									className={`${
										darkMode ? `bg-blue-600` : `bg-gray-200`
									} relative inline-flex items-center h-6 rounded-full w-11 transition-colors`}
								>
									<span
										className={`${
											darkMode ? `translate-x-6` : `translate-x-1`
										} inline-block w-4 h-4 transform bg-white rounded-full transition-transform`}
									/>
								</Switch>
							</div>
						</section>
					</Switch.Group>
				);
			}}
		</ThemeToggler>
	);
}

// <div className="container--toggle">
// 	<input
// 		// aria-label="dark mode toggle"
// 		// role="switch"
// 		// aria-checked={ariaActive}
// 		type="checkbox"
// 		id="toggle"
// 		className="toggle--checkbox"
// 		// onClick={handleOnClick}
// 		onChange={(e) => toggleTheme(e.target.checked ? `dark` : `light`)}
// 		checked={}
// 		readOnly
// 	/>
// 	<label htmlFor="toggle" className="toggle--label">
// 		<span className="toggle--label-background"></span>
// 		dark mode toggle
// 	</label>
// </div>
export default Toggle;
