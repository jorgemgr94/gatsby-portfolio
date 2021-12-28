import React from "react";
import { ThemeToggler } from "gatsby-plugin-dark-mode";

interface IThemeToggleProps {
	theme: string;
	toggleTheme: (theme: string) => void;
}

export default function ThemeToggle() {
	return (
		<ThemeToggler>
			{({ theme, toggleTheme }: IThemeToggleProps) => (
				<label>
					<input
						type="checkbox"
						onChange={(e) => toggleTheme(e.target.checked ? `dark` : `light`)}
						checked={theme === `dark`}
					/>
					Dark mode V1: {theme}
				</label>
			)}
		</ThemeToggler>
	);
}
