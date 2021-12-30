import { AiOutlineTrophy } from "react-icons/ai";
import { BsFillStopFill } from "react-icons/bs";
import React from "react";

import { formatDate, formatExperience } from "../../util/format";
import { IPosition } from "../../data";

interface IPositionCardProps {
	position: IPosition;
}

function PositionCard({ position }: IPositionCardProps) {
	return (
		<section className="w-full mb-8">
			<section className="flex justify-between mb-1">
				<section className="inline-flex flex-col">
					<span className="text-blue-400 uppercase font-bold md:text-2xl">
						{position.name}
					</span>
					<span className="uppercase font-bold md:text-xl">
						{position.company.name}
					</span>
				</section>
				<section className="inline-flex flex-col items-end">
					<span className="uppercase font-bold md:text-xl">
						{formatDate(position.startAt)} - {formatDate(position.endAt)}
					</span>
					<span className="uppercase font-bold md:text-xl">
						{formatExperience(position.startAt, position.endAt)}
					</span>
				</section>
			</section>
			<section className="bg-gray-100 rounded-lg dark:bg-gray-700 p-4">
				<ul className="mb-4">
					{position.responsibilities.map((responsibility, key) => (
						<li key={key}>
							<BsFillStopFill className="inline-block" />
							{` `}
							{responsibility}
						</li>
					))}
				</ul>
				<ul className="mb-4">
					{position.achievements.map((achievement, key) => (
						<li key={key}>
							<AiOutlineTrophy className="text-yellow-500 inline-block" />
							{` `}
							{achievement}
						</li>
					))}
				</ul>
				<small>Tech stack: {position.technicalEnv}</small>
			</section>
		</section>
	);
}

export default PositionCard;
