import React from "react";
import { monthsNames, formatExperience } from "../../util/format";

function Position(props) {
	const {
		companyImg,
		company,
		name,
		startAt,
		endAt,
		description,
		technicalEnv
	} = props.data;

	return (
		<section className="position">
			<img
				alt="x8"
				src={companyImg}
				style={{ verticalAlign: "middle", height: "30px", marginRight: "5px" }}
			/>
			<div style={{ display: "inline-block", verticalAlign: "middle" }}>
				<span className="primary-text">{company}</span>
				<br />
				<span className="secondary-text">{name}</span>
			</div>
			<div
				style={{
					display: "inline-block",
					float: "right",
					verticalAlign: "middle"
				}}
			>
				<div className="primary-text">
					{`${monthsNames[startAt.getMonth()]} ${startAt.getFullYear()}`} –{" "}
					{endAt
						? `${monthsNames[endAt.getMonth()]} ${endAt.getFullYear()}`
						: "Current"}
				</div>
				<div className="secondary-text" style={{ textAlign: "right" }}>
					{formatExperience(startAt, endAt)}
				</div>
			</div>
			<div className="secondary-text">
				<p style={{ whiteSpace: "pre-wrap" }}>{description}</p>
				<p>
					<small>
						<span role="img" aria-label="">
							💻 Technologies:
						</span>{" "}
						{technicalEnv}
					</small>
				</p>
			</div>
		</section>
	);
}

export default Position;
