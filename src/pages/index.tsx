import * as React from "react";
import Navbar from "../components/Navbar";

export default function IndexPage() {
	return (
		<>
			<div className="flex flex-col md:flex-row">
				<Navbar />
				<div className="basis-full max-h-screen overflow-y-scroll bg-red-200 p-2 md:basis-9/12 xl:basis-10/12">
					<div className="flex container mx-auto px-4">
						<div className="mr-2">
							<h2>
								{`I'm Jorge García`}
								<span role="img" aria-label="👨&zwj;💻">
									👨&zwj;💻
								</span>
							</h2>
							<div className="mb-4">
								<p>
									{`With +7 years of experience, I've worked with startups, as
									well as small, mid, and large companies.`}
								</p>
								<p>
									{`I started working as a full-stack developer for 4 years, then
									the next 2 years I focused on backend development with
									JavaScript. Nowadays I'm learning about cloud development
									working with serverless apps, kubernetes, containerization,
									CI/CD, multi-region, auto-scaling.`}
								</p>
								{`I love and believe in teamwork, smart work, best practices,
								collaboration, continuous learning, home office, leadership,
								priority, order, people first, quickly adapt to change, new
								tech's.`}
							</div>
							<div className="social-icons mb-4">
								<a
									href="https://github.com/jorgemgr94"
									target="_blank"
									rel="noopener noreferrer"
								>
									<i className="fab fa-github"></i>
								</a>
								<a
									href="https://www.linkedin.com/in/jorgemgr94/"
									target="_blank"
									rel="noopener noreferrer"
								>
									<i className="fab fa-linkedin-in"></i>
								</a>
								<a
									href="https://gitlab.com/jorgemgr94"
									target="_blank"
									rel="noopener noreferrer"
								>
									<i className="fab fa-gitlab"></i>
								</a>
								<a target="_blank" href="#/resume">
									<i className="far fa-file-pdf"></i>
								</a>
							</div>
						</div>
						<div className="ml-2">
							<h3 className="mb-2">Current Tech Stack</h3>
							<p className="mb-4">
								Typescript, React, RxJS, NodeJs, Firebase, GCP.
							</p>
							<h3 className="mb-2">Learning</h3>
							<p className="mb-4">
								Kubernetes, Jest, Terraform, GraphQl, Golang.
							</p>
							<h3 className="mb-2">{`I've used`}</h3>
							<p className="mb-4">
								PostgreSQL, MongoDB, TypeORM, Python, Docker, React Native, AWS,
								Gitlab, Heroku, Eslint, Laravel, Javascript, VueJS, Php, Html5,
								CSS3, Android w/ Java, Android w/Kotlin, IOS w/ Swift, MySQL,
								MariaDB, SQL Server, Bash, Redis, Ruby on Rails.
							</p>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}
