import React from "react";

const yearsOfExperience = new Date().getFullYear() - 2014;

const about = (
	<>
		<p>
			With +{yearsOfExperience} years of experience, I've worked with startups,
			as well as small, mid, and large companies.
		</p>
		<p>
			I started working as a full-stack developer for 4 years, then the next 2
			years I focused on backend development with JavaScript. Nowadays I'm
			learning about cloud development working with serverless apps, kubernetes,
			containerization, CI/CD, multi-region, auto-scaling.
		</p>
		{/* <p>
			Besides my code skills, another differentiator are my soft skills; when I
			was 22 years old, I was taking meets with C-Level Executives of a regional
			healthcare company, leading the design and development of new business
			units of their proprietary software.
		</p> */}
		I love and believe in teamwork, smart work, best practices, collaboration,
		continuous learning, home office, leadership, priority, order, people first,
		quickly adapt to change, new tech's.
	</>
);

export default about;
