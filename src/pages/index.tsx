import React from "react";

import About from "../components/About";
import Experience from "../components/Experience";
import Lifestyle from "../components/Lifestyle";
import Navbar from "../components/Navbar";
import Social from "../components/Social";
import Toggle from "../components/Toggler/Toggler";

export default function IndexPage() {
	return (
		<>
			<Toggle />
			<div className="flex flex-col md:flex-row">
				<Navbar />
				<div className="basis-full max-h-screen overflow-y-scroll dark:bg-gray-800 dark:text-white md:basis-9/12 xl:basis-10/12">
					<About />
					<Experience />
					<Social />
					<Lifestyle />
				</div>
			</div>
		</>
	);
}
