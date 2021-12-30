import React from "react";

import { AboutData, AboutParagraph } from "../../data";
import SectionTemplate from "../../templates/SectionTemplate";
import SocialNetworks from "./SocialNetworks";
import TechsExperience from "./TechsExperience";

function About() {
	return (
		<SectionTemplate id="about" flexDirection="flex-col md:flex-row">
			<section className="mb-4 md:mr-2 md:mb-0">
				<span className="text-4xl uppercase font-bold dark:text-yellow-500">{`I'm Jorge García 👨‍💻`}</span>
				<p className="mb-4">{AboutData[AboutParagraph.First]}</p>
				<p className="mb-4">{AboutData[AboutParagraph.Second]}</p>
				<p className="mb-4">{AboutData[AboutParagraph.Third]}</p>
				<SocialNetworks />
			</section>
			<TechsExperience />
		</SectionTemplate>
	);
}

export default About;
