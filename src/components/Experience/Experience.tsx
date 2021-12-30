import React from "react";

import PositionCard from "./PositionCard";
import SectionTemplate from "../../templates/SectionTemplate";

import { PositionsData } from "../../data";

function Experience() {
	return (
		<SectionTemplate id="experience" flexDirection="flex-col">
			<div className="text-yellow-500 text-4xl uppercase font-bold mb-4 w-full">
				Professional Exp.
			</div>
			{PositionsData.map((position, key) => (
				<PositionCard key={key} position={position} />
			))}
		</SectionTemplate>
	);
}

export default Experience;
