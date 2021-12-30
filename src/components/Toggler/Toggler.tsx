import "./styles.css";
import React from "react";
import { ThemeToggler } from "gatsby-plugin-dark-mode";

interface IThemeToggleProps {
	theme: string;
	toggleTheme: (theme: string) => void;
}

export default function Toggle() {
	return (
		<ThemeToggler>
			{({ theme, toggleTheme }: IThemeToggleProps) => (
				<div className="container--toggle">
					<input
						// aria-label="dark mode toggle"
						// role="switch"
						// aria-checked={ariaActive}
						type="checkbox"
						id="toggle"
						className="toggle--checkbox"
						// onClick={handleOnClick}
						onChange={(e) => toggleTheme(e.target.checked ? `dark` : `light`)}
						checked={theme === `dark`}
						readOnly
					/>
					<label htmlFor="toggle" className="toggle--label">
						<span className="toggle--label-background"></span>
						dark mode toggle
					</label>
				</div>
			)}
		</ThemeToggler>
	);
}
