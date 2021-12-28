import React from "react";

const positions = [
	{
		name: `Software Engineer`,
		companyImg: require(`../assets/img/works/intersog.png`),
		company: `Intersog`,
		startAt: new Date(`09/06/2021`),
		endAt: null,
		description: ``,
		technicalEnv: `Typescript, React, RxJS, NodeJs, Firebase, GCP.`
	},
	{
		name: `Tech Lead / Digital Solutions Manager`,
		companyImg: require(`../assets/img/works/sintec.png`),
		company: `SINTEC`,
		startAt: new Date(`02/01/2020`),
		endAt: new Date(`09/03/2021`),
		description: ``,
		technicalEnv: `React, Typescript, MongoDB, NodeJs, Python, PostgreSQL, Git, SCRUM, GCP, AWS, Docker.`
	},
	{
		name: `Software Engineer, Consultant`,
		companyImg: require(`../assets/img/works/sintec.png`),
		company: `SINTEC`,
		startAt: new Date(`02/01/2019`),
		endAt: new Date(`02/01/2020`),
		description: (
			<>
				<ul className="list-unstyled">
					<li>
						<span role="img" aria-label="">
							◻️
						</span>
						{` `}
						Features development to front-end, back-end, and mobile app.
					</li>
					<li>
						<span role="img" aria-label="">
							◻️
						</span>
						{` `}
						Product definition on milestones, issues, architecture, quality
						assurance, design.
					</li>
					<li>
						<span role="img" aria-label="">
							◻️
						</span>
						{` `}
						Testing, research, and development of new technologies (IoT)
					</li>
					<li>
						<span role="img" aria-label="">
							◻️
						</span>
						{` `}
						Code maintenance and improvement.
					</li>
					<li>
						<span role="img" aria-label="">
							◻️
						</span>
						{` `}
						Software requirements collection and support to other consulting
						practices.
					</li>
				</ul>
				<ul className="list-unstyled">
					<li>
						<span role="img" aria-label="">
							🏆
						</span>
						{` `}I developed a platform called Dynamo, an IoT project which
						consists in around 150 beacon tags sending real-time data about
						users position (latitude, longitude) in a CEDIS, this information is
						visualized in a webpage and stored on a non-relational database
						(MongoDB) to do future Analitycs about times and movements.
					</li>
					<li>
						<span role="img" aria-label="">
							🏆
						</span>
						{` `}I incorporated new technologies that ensure quality and
						scalability; besides, they bring innovation and dynamism which
						represents a competitive vantage.
					</li>
				</ul>
			</>
		),
		technicalEnv: `React, React Native, Typescript, MongoDB, NodeJs, Python, Php, MySQL, PostgreSQL, Git, SCRUM, GCP, AWS, Docker.`
	},
	{
		name: `Software Engineer (Remote, Part time)`,
		companyImg: require(`../assets/img/works/garage.png`),
		company: `Garage (Startup)`,
		startAt: new Date(`07/01/2019`),
		endAt: new Date(`12/31/2019`),
		description: (
			<>
				<ul className="list-unstyled">
					<li>
						<span role="img" aria-label="">
							◻️
						</span>
						{` `}
						Features development to front-end and back-end.
					</li>
					<li>
						<span role="img" aria-label="">
							◻️
						</span>
						{` `}
						Product definition on milestones, issues, architecture, quality
						assurance, design.
					</li>
					<li>
						<span role="img" aria-label="">
							◻️
						</span>
						{` `}
						Code maintenance and improvement.
					</li>
				</ul>
				<ul className="list-unstyled">
					<li>
						<span role="img" aria-label="">
							🏆
						</span>
						{` `}I rewrote the back-end API and enabled the front-end, in order
						to manage dynamic services in the Quoting process.
					</li>
					<li>
						<span role="img" aria-label="">
							🏆
						</span>
						{` `}I learned about containers (Docker), code replication
						(Migrations and Seeds), automated testing (Jest, RSpec), DevOps
						(Gitlab CI/CD, Eslint) and SOLID principles.
					</li>
				</ul>
			</>
		),
		technicalEnv: `Ruby on Rails, React, Jest, Mobx, Typescript, PostgreSQL, Heroku, Git, SCRUM, Docker, Gitlab.`
	},
	{
		name: `Software Engineer`,
		companyImg: require(`../assets/img/works/sensai.jpg`),
		company: `SENSAI Empower Success (Startup) / Metalsa`,
		startAt: new Date(`08/01/2018`),
		endAt: new Date(`02/01/2019`),
		description: (
			<>
				<ul className="list-unstyled">
					<li>
						<span role="img" aria-label="">
							◻️
						</span>
						{` `}
						Features development to front-end, back-end, and mobile app
						considering: scalability, multi-zones, multi-language.
					</li>
					<li>
						<span role="img" aria-label="">
							◻️
						</span>
						{` `}
						Product definition on design, architecture, quality assurance,
						issues definition and punctuation.
					</li>
					<li>
						<span role="img" aria-label="">
							◻️
						</span>
						{` `}
						Write database queries.
					</li>
					<li>
						<span role="img" aria-label="">
							◻️
						</span>
						{` `}
						Code maintenance and improvement.
					</li>
				</ul>
				<ul className="list-unstyled">
					<li>
						<span role="img" aria-label="">
							🏆
						</span>
						{` `}I lived what resilience is, as a startup, SENSAI was in
						constantly and aggressive change; in October we had a one year and a
						half old product working, then we had to migrate front-end,
						back-end, and database in just 3 months.
					</li>
					<li>
						<span role="img" aria-label="">
							🏆
						</span>
						{` `}I learned modern software development, stages (development,
						staging, production) and to work with other departments like design
						and quality assurance.
					</li>
				</ul>
			</>
		),
		technicalEnv: `React, React Native, NodeJs, Ruby on Rails, MySQL, SQL Server, AWS, Git, SCRUM, Jira, MQTT.`
	},
	{
		name: `Tech Lead`,
		companyImg: require(`../assets/img/works/hms.png`),
		company: `HMS Sistemas de Información / ONCARE`,
		startAt: new Date(`10/01/2016`),
		endAt: new Date(`07/01/2018`),
		description: (
			<>
				<ul className="list-unstyled">
					<li>
						<span role="img" aria-label="">
							◻️
						</span>
						{` `}
						Lead a team of 5 Software Engineers.
					</li>
					<li>
						<span role="img" aria-label="">
							◻️
						</span>
						{` `}
						Testing, research, and development of new technologies (Git, Mobile,
						RIS & PACS)
					</li>
					<li>
						<span role="img" aria-label="">
							◻️
						</span>
						{` `}
						Software requirements collection and priorities planning.
					</li>
					<li>
						<span role="img" aria-label="">
							◻️
						</span>
						{` `}
						Supervise solution definitions and designs (Process Diagram, UML,
						Database, Activities).
					</li>
					<li>
						<span role="img" aria-label="">
							◻️
						</span>
						{` `}
						Supervise and support in software development.
					</li>
					<li>
						<span role="img" aria-label="">
							◻️
						</span>
						{` `}
						Bash scripts development to code refactoring and periodic processes.
					</li>
					<li>
						<span role="img" aria-label="">
							◻️
						</span>
						{` `}
						Participation in recruitment processes
					</li>
				</ul>
				<ul className="list-unstyled">
					<li>
						<span role="img" aria-label="">
							🏆
						</span>
						{` `}I managed and developed a competitive advantage strategy which
						consists of change from selling the full medicine to selling it per
						gr/ml.
					</li>
					<li>
						<span role="img" aria-label="">
							🏆
						</span>
						{` `}I managed and support the development of new business units
						like Analysis Laboratory, Ambulatory surgery, RIS & PACS.
					</li>
					<li>
						<span role="img" aria-label="">
							🏆
						</span>
						{` `}I started the development of an IOS app for ambulatory surgery.
					</li>
				</ul>
			</>
		),
		technicalEnv: `Php, Html, CSS, Javascript, MySQL, Bash, AWS, React, Android w/ Kotlin, IOS w/ Swift, Git.`
	},
	{
		name: `Software Engineer`,
		companyImg: require(`../assets/img/works/hms.png`),
		company: `HMS Sistemas de Información / ONCARE`,
		startAt: new Date(`01/01/2015`),
		endAt: new Date(`10/01/2016`),
		description: (
			<>
				<ul className="list-unstyled">
					<li>
						<span role="img" aria-label="">
							◻️
						</span>
						{` `}
						Features and new modules development to the Oncology ERP (Custom
						software development).
					</li>
					<li>
						<span role="img" aria-label="">
							◻️
						</span>
						{` `}
						Software requirements collection.
					</li>
					<li>
						<span role="img" aria-label="">
							◻️
						</span>
						{` `}
						Solution definition, design and validation (Process Diagram, UML,
						Database, Activities).
					</li>
					<li>
						<span role="img" aria-label="">
							◻️
						</span>
						{` `}
						Priorities management and activities schedule.
					</li>
					<li>
						<span role="img" aria-label="">
							◻️
						</span>
						{` `}
						Bash scripts development to code refactoring and periodic processes.
					</li>
				</ul>
				<ul className="list-unstyled">
					<li>
						<span role="img" aria-label="">
							🏆
						</span>
						{` `}I developed an automated quote through a software process that
						connected doctors, nurses, and administrative considering:
						assignments, professional language of every position, convert from
						the active substance with dose to medicine marks, clinic processes,
						etc.
					</li>
					<li>
						<span role="img" aria-label="">
							🏆
						</span>
						{` `}I applied relational database concepts and learned their
						importance in a real-world application with processes that go from
						quote to invoice.
					</li>
					<li>
						<span role="img" aria-label="">
							🏆
						</span>
						{` I achieved the implementation of a metric called "continuous
						improvement" which consists of implementing an innovative feature
						every quarter to the project.`}
					</li>
				</ul>
			</>
		),
		technicalEnv: `Php, Html, CSS, Javascript, MySQL, Bash, AWS.`
	},
	{
		name: `Software Engineer`,
		companyImg: require(`../assets/img/works/ingeniat.png`),
		company: `Ingeniat`,
		startAt: new Date(`06/01/2014`),
		endAt: new Date(`01/01/2015`),
		description: (
			<>
				<ul className="list-unstyled">
					<li>
						<span role="img" aria-label="">
							◻️
						</span>
						{` `}
						Bash scripts development to automate processes
					</li>
					<li>
						<span role="img" aria-label="">
							◻️
						</span>
						{` `}
						Features development to the web platform
					</li>
					<li>
						<span role="img" aria-label="">
							◻️
						</span>
						{` `}
						Testing and research of new technologies (Mobile)
					</li>
					<li>
						<span role="img" aria-label="">
							◻️
						</span>
						{` `}
						Support, maintenance and bug fixes to the web platform.
					</li>
				</ul>

				<ul className="list-unstyled">
					<li>
						<span role="img" aria-label="">
							🏆
						</span>
						{` `}I developed an automation script for books uploading to the
						digital library, which consisted in convert a PDF into separate SVG
						files, each SVG file was cleaned with regular expressions, then the
						files were uploaded to AWS S3, creating a relation between book,
						pages and S3 links on MySQL.
					</li>
					<li>
						<span role="img" aria-label="">
							🏆
						</span>
						{` I lost the fear of learning programming languages that I didn't
						know, increased my learning curve allowing me to take part in the
						research and development of new technologies.`}
					</li>
				</ul>
			</>
		),
		technicalEnv: `Php, Html, CSS, Javascript, Android w/ Java, MySQL, Bash, AWS.`
	}
];

export default positions;
