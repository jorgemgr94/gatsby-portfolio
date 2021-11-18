import React from "react";
import { formatExperience, formatDate } from "../../util/format";
import { positions } from "../../database";

function Experience() {
	return (
		<section
			className="resume-section p-3 p-lg-5 d-flex align-items-center"
			id="experience"
		>
			<div className="w-100">
				<h2 className="mb-5">Professional Exp.</h2>
				{positions.map((position, key) => (
					<>
						<div className="resume-item d-flex flex-column flex-md-row justify-content-between">
							<div className="resume-content">
								<h3 className="mb-0">{position.name}</h3>
								<div className="subheading mb-3">{position.company}</div>
							</div>
							<div className="resume-date text-md-right">
								<div>
									{formatDate(position.startAt)} - {formatDate(position.endAt)}
								</div>
								<div>{formatExperience(position.startAt, position.endAt)}</div>
							</div>
						</div>
						<div className="mb-4">
							<div className="card card-body bg-dark">
								{position.description}
								<small>
									<span role="img" aria-label="">
										💻 Technologies:
									</span>{" "}
									{position.technicalEnv}
								</small>
							</div>
						</div>
					</>
				))}
			</div>
		</section>
	);
}

export default Experience;
