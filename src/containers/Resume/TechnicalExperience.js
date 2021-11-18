import React from "react";
import { technologies } from "../../database";
import { arrayToSeparatedString } from "../../util/format";

function TechnicalExperience() {
	return (
		<>
			<br />
			<div className="bold">Technical Experience</div>
			<ul className="list-unstyled">
				<li>
					<span className="primary-text mr-1">Current Tech Stack:</span>
					<span>{arrayToSeparatedString(technologies.current)}</span>
					<br />
					<br />
				</li>
				<li>
					<span className="primary-text mr-1">Learning:</span>
					<span>{arrayToSeparatedString(technologies.learning)}</span>
					<br />
					<br />
				</li>
				<li>
					<span className="primary-text mr-1">I've used:</span>
					<span>{arrayToSeparatedString(technologies.used)}</span>
				</li>
			</ul>
		</>
	);
}

export default TechnicalExperience;
