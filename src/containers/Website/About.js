import React from "react";
import { NavLink } from "react-router-dom";
import { socialNetworks, about, technologies } from "../../database";
import { arrayToSeparatedString } from "../../util/format";

function About() {
	return (
		<section
			className="resume-section d-flex flex-column justify-content-center"
			id="about"
		>
			<div class="container-fluid d-flex flex-column flex-lg-row">
				<div className="mr-4">
					<h2 className="mb-2">
						I'm Jorge García
						<span role="img" aria-label="👨‍💻">
							👨‍💻
						</span>
					</h2>
					<p className="mb-4">{about}</p>
					<div className="social-icons mb-4">
						{socialNetworks.map((social) => (
							<a
								key={social.id}
								href={social.url}
								target="_blank"
								rel="noopener noreferrer"
							>
								<i className={social.icon}></i>
							</a>
						))}
						<NavLink to="/resume" target="_blank">
							<i className="far fa-file-pdf"></i>
						</NavLink>
					</div>
				</div>
				<div className="">
					<h3 className="mb-2">Current Tech Stack</h3>
					<p className="mb-4">{arrayToSeparatedString(technologies.current)}</p>
					<h3 className="mb-2">Learning</h3>
					<p className="mb-4">
						{arrayToSeparatedString(technologies.learning)}
					</p>
					<h3 className="mb-2">I've used</h3>
					<p className="mb-4">{arrayToSeparatedString(technologies.used)}</p>
				</div>
			</div>
			<div class="container-fluid">
				<div className="w-100"></div>
			</div>
		</section>
	);
}

export default About;
