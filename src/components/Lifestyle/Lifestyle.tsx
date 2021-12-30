import React from "react";

import SectionTemplate from "../../templates/SectionTemplate";

interface LifeStyleElementProps {
	text: string;
}

function LifeStyleElement({ text }: LifeStyleElementProps) {
	return <li className="mb-2">{text}</li>;
}

const lifestyles = [
	`GOD first, thank you for everything you have given me.. 🙏`,
	`I enjoy a lot nature 🌳`,
	`I like running 🏃‍♂️ nowadays I'm on 20 kilometers per week.`,
	`I like video games (but lately I don't have enough time to play) 🎮`,
	`I get excited about the challenges, I'm like the geek version of Goku 🧠`,
	`I like anime 🤓`,
	`When I'm developing I hear: Creedence, The Doors, Led Zeppelin, Queen, AC/DC.. or classical music 🎧`,
	`I'm a coffee lover ️️️️☕️`,
	`I love to play soccer ⚽️`,
	`After 10 years of relationship on 2021 I married with the best woman in the world.. I love you 👫`
];

function Lifestyle() {
	return (
		<SectionTemplate id="lifestyle" flexDirection="flex-col">
			<div className="text-yellow-500 text-4xl uppercase font-bold mb-4 w-full">
				Lifestyle
			</div>
			<p className="w-full mb-4">
				{`Because everything isn't about software development.. here are some
				interest, topics, hobbies and fun facts about me:`}
			</p>
			<ol className="w-full list-decimal pl-5 dark:text-gray-300">
				{lifestyles.map((lifestyle, key) => (
					<LifeStyleElement key={key} text={lifestyle} />
				))}
			</ol>
		</SectionTemplate>
	);
}

export default Lifestyle;
