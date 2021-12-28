import * as React from "react";
// import { Paper } from "../styles/resume.styles";
import { About, AboutParagraph } from "../data/index";
import styled from "styled-components";
import ProfilePhoto from "../images/me.jpg";
// import ThemeToggle from "../components/themeToggle";

import Toggle from "../components/Toggle";

const pageStyles = {
	color: `#232129`,
	padding: 96,
	fontFamily: `-apple-system, Roboto, sans-serif, serif`
};

const StyledList = styled.main.attrs({
	className: `list-none`
})`
	& {
		ul {
			padding-top: 1em;
		}
		li {
			padding: 0.5em;
		}
		li > a {
			font-weight: 800;
			letter-spacing: 0.05em;
			text-transform: uppercase;
			color: #ccc;
		}
		li > a:hover {
			text-decoration: underline;
			cursor: pointer;
		}
	}
`;

// import { Link } from "gatsby";
import scrollTo from "gatsby-plugin-smoothscroll";

export default function ResumePage() {
	return (
		<>
			<Toggle />
			{/* <ThemeToggle /> */}
			{/* <nav id="header" className="fixed w-full z-10 top-0">
				<div
					id="progress"
					className="h-1 z-20 top-0"
					style={{
						background:
							"linear-gradient(to right, #4dc0b5 var(--scroll), transparent 0)",
					}}
				/>
				<div className="w-full md:max-w-4xl mx-auto flex flex-wrap items-center justify-between mt-0 py-3">
					<div className="pl-4">
						<a
							className="text-gray-900 text-base no-underline hover:no-underline font-extrabold text-xl"
							href="#"
						>
							Minimal Blog
						</a>
					</div>
					<div className="block lg:hidden pr-4">
						<button
							id="nav-toggle"
							className="flex items-center px-3 py-2 border rounded text-gray-500 border-gray-600 hover:text-gray-900 hover:border-green-500 appearance-none focus:outline-none"
						>
							<svg
								className="fill-current h-3 w-3"
								viewBox="0 0 20 20"
								xmlns="http://www.w3.org/2000/svg"
							>
								<title>Menu</title>
								<path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
							</svg>
						</button>
					</div>
					<div
						className="w-full flex-grow lg:flex lg:items-center lg:w-auto hidden lg:block mt-2 lg:mt-0 md:bg-transparent z-20"
						id="nav-content"
					>
						<ul className="list-reset lg:flex justify-end flex-1 items-center">
							<li className="mr-3">
								<a
									className="inline-block py-2 px-4 text-gray-900 font-bold no-underline"
									href="#"
								>
									Active
								</a>
							</li>
							<li className="mr-3">
								<a
									className="inline-block text-gray-600 no-underline hover:text-gray-900 hover:text-underline py-2 px-4"
									href="#"
								>
									link
								</a>
							</li>
							<li className="mr-3">
								<a
									className="inline-block text-gray-600 no-underline hover:text-gray-900 hover:text-underline py-2 px-4"
									href="#"
								>
									link
								</a>
							</li>
						</ul>
					</div>
				</div>
			</nav> */}

			<div className="flex">
				<nav className="flex flex-col items-center justify-center h-screen p-2 md:basis-3/12 xl:basis-2/12 dark:bg-gray-800">
					<img
						className="rounded-full shadow-sm w-32 h-32"
						src="https://jorgemgr.com/static/media/me.e439848d.jpg"
						alt="user image"
					/>
					<button
						className="navbar-toggler"
						type="button"
						data-toggle="collapse"
						data-target="#navbarSupportedContent"
						aria-controls="navbarSupportedContent"
						aria-expanded="false"
						aria-label="Toggle navigation"
					>
						<span className="navbar-toggler-icon"></span>
					</button>
					<div className="collapse navbar-collapse" id="navbarSupportedContent">
						<StyledList>
							<ul>
								<li>
									<a onClick={() => scrollTo(`#about`)}>About Me</a>
								</li>
								<li>
									<a onClick={() => scrollTo(`#experience`)}>
										Professional Exp.
									</a>
								</li>
								<li>
									<a onClick={() => scrollTo(`#social`)}>Social</a>
								</li>
								<li>
									<a onClick={() => scrollTo(`#lifestyle`)}>Lifestyle</a>
								</li>
							</ul>
						</StyledList>
					</div>
				</nav>
				<div className="basis-full bg-red-200 p-2 md:basis-9/12 xl:basis-10/12">
					<div className="flex container mx-auto px-4">
						<div className="mr-2">
							<h2>
								{`I'm Jorge García`}
								<span role="img" aria-label="👨&zwj;💻">
									👨&zwj;💻
								</span>
							</h2>
							<p className="mb-4">
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
							</p>
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
			<nav className="sticky top-0 h-20 bg-gray-800 p-5 sm:px-24 xl:px-64">
				<div className="mx-auto flex justify-between items-center">
					<a
						href="#"
						className="uppercase text-white text-xl xl:text-3xl font-bold whitespace-no-wrap font-Montserrat leading-normal tracking-tighter"
					>
						Start Tailwind
					</a>
					<button className="block md:hidden uppercase inline-flex items-center bg-green-500 px-3 py-2 rounded-lg text-white">
						Menu{` `}
						<svg
							className="h-4 fill-current"
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 24 24"
						>
							<path d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z" />
						</svg>
					</button>
					<div className="hidden md:block">
						<a
							href=""
							className="px-4 uppercase text-white text-base font-bold whitespace-no-wrap font-Montserrat leading-normal tracking-tighter hover:text-green-500"
						>
							Portfolio
						</a>
						<a
							href=""
							className="px-4 uppercase text-white text-base font-bold whitespace-no-wrap font-Montserrat leading-normal tracking-tighter hover:text-green-500"
						>
							About
						</a>
						<a
							href=""
							className="px-4 uppercase text-white text-base font-bold whitespace-no-wrap font-Montserrat leading-normal tracking-tighter hover:text-green-500"
						>
							Contact
						</a>
					</div>
				</div>
			</nav>
			<main>
				<section className="bg-green-500 py-32 ">
					<figure className="container px-16 pt-12 mx-auto">
						<img
							className="mb-12 h-64 mx-auto"
							src="https://francescomansi.me/img/start-tailwind/avataaars.svg"
							alt=""
						/>
					</figure>
					<h1 className="text-center uppercase text-white text-5xl lg:text-6xl font-bold  leading-none tracking-normal">
						Start Tailwind
					</h1>
					<div className="flex flex-row items-center justify-center py-4">
						<span className="h-1 w-24 bg-white rounded-full mx-2"></span>
						<svg
							className="h-12 fill-current text-white "
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 24 24"
						>
							<path d="M6.1 21.98a1 1 0 0 1-1.45-1.06l1.03-6.03-4.38-4.26a1 1 0 0 1 .56-1.71l6.05-.88 2.7-5.48a1 1 0 0 1 1.8 0l2.7 5.48 6.06.88a1 1 0 0 1 .55 1.7l-4.38 4.27 1.04 6.03a1 1 0 0 1-1.46 1.06l-5.4-2.85-5.42 2.85zm4.95-4.87a1 1 0 0 1 .93 0l4.08 2.15-.78-4.55a1 1 0 0 1 .29-.88l3.3-3.22-4.56-.67a1 1 0 0 1-.76-.54l-2.04-4.14L9.47 9.4a1 1 0 0 1-.75.54l-4.57.67 3.3 3.22a1 1 0 0 1 .3.88l-.79 4.55 4.09-2.15z" />
						</svg>
						<span className="h-1 w-24 bg-white rounded-full mx-2"></span>
					</div>
					<p className="px-12 text-center text-white text-xl font-normal font-sans">
						Graphic Artist - Web Designer - Illustrator
					</p>
				</section>
				<section className="bg-white -mt-12 py-16">
					<h1 className="text-center uppercase text-black text-4xl font-bold  leading-none tracking-normal">
						Portfolio
					</h1>
					<div className="flex flex-row items-center justify-center py-4">
						<span className="h-1 w-24 bg-black rounded-full mx-2"></span>
						<svg
							className="h-12 fill-current text-black "
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 24 24"
						>
							<path d="M6.1 21.98a1 1 0 0 1-1.45-1.06l1.03-6.03-4.38-4.26a1 1 0 0 1 .56-1.71l6.05-.88 2.7-5.48a1 1 0 0 1 1.8 0l2.7 5.48 6.06.88a1 1 0 0 1 .55 1.7l-4.38 4.27 1.04 6.03a1 1 0 0 1-1.46 1.06l-5.4-2.85-5.42 2.85zm4.95-4.87a1 1 0 0 1 .93 0l4.08 2.15-.78-4.55a1 1 0 0 1 .29-.88l3.3-3.22-4.56-.67a1 1 0 0 1-.76-.54l-2.04-4.14L9.47 9.4a1 1 0 0 1-.75.54l-4.57.67 3.3 3.22a1 1 0 0 1 .3.88l-.79 4.55 4.09-2.15z" />
						</svg>
						<span className="h-1 w-24 bg-black rounded-full mx-2"></span>
					</div>
					<div className="flex flex-col sm:flex-row sm:flex-wrap px-6 max-w-md md:max-w-6xl mx-auto">
						<div className="w-full sm:w-1/2 md:w-1/3 p-4 rounded-lg">
							<img
								alt=""
								className="rounded-lg"
								src="https://francescomansi.me/img/start-tailwind/portfolio/cabin.png"
							/>
						</div>
						<div className="w-full sm:w-1/2 md:w-1/3 p-4">
							<img
								alt=""
								className="rounded-lg"
								src="https://francescomansi.me/img/start-tailwind/portfolio/cake.png"
							/>
						</div>
						<div className="w-full sm:w-1/2 md:w-1/3 p-4">
							<img
								alt=""
								className="rounded-lg"
								src="https://francescomansi.me/img/start-tailwind/portfolio/circus.png"
							/>
						</div>
						<div className="w-full sm:w-1/2 md:w-1/3 p-4">
							<img
								alt=""
								className="rounded-lg"
								src="https://francescomansi.me/img/start-tailwind/portfolio/game.png"
							/>
						</div>
						<div className="w-full sm:w-1/2 md:w-1/3 p-4">
							<img
								alt=""
								className="rounded-lg"
								src="https://francescomansi.me/img/start-tailwind/portfolio/safe.png"
							/>
						</div>
						<div className="w-full sm:w-1/2 md:w-1/3 p-4">
							<img
								alt=""
								className="rounded-lg"
								src="https://francescomansi.me/img/start-tailwind/portfolio/submarine.png"
							/>
						</div>
					</div>
				</section>
				<section className="bg-green-500 -mt-12 py-16">
					<h1 className="text-center uppercase text-white text-4xl font-bold  leading-none tracking-normal">
						About
					</h1>
					<div className="flex flex-row items-center justify-center py-4">
						<span className="h-1 w-24 bg-white rounded-full mx-2"></span>
						<svg
							className="h-12 fill-current text-white "
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 24 24"
						>
							<path d="M6.1 21.98a1 1 0 0 1-1.45-1.06l1.03-6.03-4.38-4.26a1 1 0 0 1 .56-1.71l6.05-.88 2.7-5.48a1 1 0 0 1 1.8 0l2.7 5.48 6.06.88a1 1 0 0 1 .55 1.7l-4.38 4.27 1.04 6.03a1 1 0 0 1-1.46 1.06l-5.4-2.85-5.42 2.85zm4.95-4.87a1 1 0 0 1 .93 0l4.08 2.15-.78-4.55a1 1 0 0 1 .29-.88l3.3-3.22-4.56-.67a1 1 0 0 1-.76-.54l-2.04-4.14L9.47 9.4a1 1 0 0 1-.75.54l-4.57.67 3.3 3.22a1 1 0 0 1 .3.88l-.79 4.55 4.09-2.15z" />
						</svg>
						<span className="h-1 w-24 bg-white rounded-full mx-2"></span>
					</div>
					<div className="flex flex-col lg:flex-row max-w-lg md:max-w-2xl lg:max-w-3xl mx-auto">
						<div className="mx-6 text-white text-xl py-4">
							Freelancer is a free tailwind css theme created from Freelancer
							theme by Start Bootstrap. The entire template was written using
							only the default configuration file.
						</div>
						<div className="mx-6 text-white text-xl py-4">
							You can create your own custom avatar for the masthead, change the
							icon in the dividers, and add your email address to the contact
							form to make it fully functional!
						</div>
					</div>
					<div className="flex justify-center py-8">
						<button className="bg-transparent hover:bg-white hover:text-black text-white border-2 border-white font-normal py-3 px-5 rounded-lg inline-flex items-center">
							<svg
								className="fill-current w-4 h-4 mr-2"
								xmlns="http://www.w3.org/2000/svg"
								viewBox="0 0 20 20"
							>
								<path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z" />
							</svg>
							<span>Free Download!</span>
						</button>
					</div>
				</section>
				<section className="bg-white -mt-12 py-16">
					<h1 className="text-center uppercase text-black text-4xl font-bold  leading-none tracking-normal">
						Contact Me
					</h1>
					<div className="flex flex-row items-center justify-center py-4">
						<span className="h-1 w-24 bg-black rounded-full mx-2"></span>
						<svg
							className="h-12 fill-current text-black"
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 24 24"
						>
							<path d="M6.1 21.98a1 1 0 0 1-1.45-1.06l1.03-6.03-4.38-4.26a1 1 0 0 1 .56-1.71l6.05-.88 2.7-5.48a1 1 0 0 1 1.8 0l2.7 5.48 6.06.88a1 1 0 0 1 .55 1.7l-4.38 4.27 1.04 6.03a1 1 0 0 1-1.46 1.06l-5.4-2.85-5.42 2.85zm4.95-4.87a1 1 0 0 1 .93 0l4.08 2.15-.78-4.55a1 1 0 0 1 .29-.88l3.3-3.22-4.56-.67a1 1 0 0 1-.76-.54l-2.04-4.14L9.47 9.4a1 1 0 0 1-.75.54l-4.57.67 3.3 3.22a1 1 0 0 1 .3.88l-.79 4.55 4.09-2.15z" />
						</svg>
						<span className="h-1 w-24 bg-black rounded-full mx-2"></span>
					</div>
					<form className="px-6 pb-12 max-w-2xl mx-auto">
						<div className="flex items-center border-b border-b-2 border-gray-400 py-10">
							<input
								className="appearance-none bg-transparent border-none w-full placeholder-gray-700 mr-3 py-1 leading-tight text-2xl focus:outline-none"
								type="text"
								placeholder="Name"
								aria-label="Name"
							/>
						</div>
						<div className="flex items-center border-b border-b-2 border-gray-400 py-10">
							<input
								className="appearance-none bg-transparent border-none w-full placeholder-gray-700 mr-3 py-1 leading-tight text-2xl focus:outline-none"
								type="text"
								placeholder="Email Address"
								aria-label="Email Address"
							/>
						</div>
						<div className="flex items-center border-b border-b-2 border-gray-400 py-10">
							<input
								className="appearance-none bg-transparent border-none w-full placeholder-gray-700 mr-3 py-1 leading-tight text-2xl focus:outline-none"
								type="text"
								placeholder="Phone Number"
								aria-label="Phone Number"
							/>
						</div>
						<div className="flex items-center border-b border-b-2 border-gray-400 py-10">
							<label>
								<textarea
									className="appearance-none border-none w-full placeholder-gray-700 mr-3 py-1 leading-tight text-2xl focus:outline-none"
									rows={5}
									placeholder="Message"
								></textarea>
							</label>
						</div>
						<div className="py-5">
							<button className="bg-green-500 px-8 py-5 rounded-lg text-white">
								Send
							</button>
						</div>
					</form>
				</section>
				<section className="bg-gray-800 -mt-12 py-16">
					<div className="flex flex-col md:flex-row text-white text-center">
						<div className="p-6 md:w-1/3">
							<h1 className="uppercase text-2xl font-bold leading-none tracking-normal pb-5">
								Location
							</h1>
							<p>
								Metropolitan City of Bari,
								<br />
								70121, Italy
							</p>
						</div>
						<div className="p-6 md:w-1/3">
							<h1 className="uppercase text-2xl font-bold  leading-none tracking-normal">
								Around the web
							</h1>
							<div className="flex justify-center py-5 ">
								<span className="items-center rounded-full border-2 p-3 hover:bg-white mx-1">
									<svg
										className="fill-current w-5 h-5 hover:text-blue-900"
										xmlns="http://www.w3.org/2000/svg"
										viewBox="0 0 20 20"
									>
										<title>Twitter</title>
										<path d="M6.29 18.25c7.55 0 11.67-6.25 11.67-11.67v-.53c.8-.59 1.49-1.3 2.04-2.13-.75.33-1.54.55-2.36.65a4.12 4.12 0 0 0 1.8-2.27c-.8.48-1.68.81-2.6 1a4.1 4.1 0 0 0-7 3.74 11.65 11.65 0 0 1-8.45-4.3 4.1 4.1 0 0 0 1.27 5.49C2.01 8.2 1.37 8.03.8 7.7v.05a4.1 4.1 0 0 0 3.3 4.03 4.1 4.1 0 0 1-1.86.07 4.1 4.1 0 0 0 3.83 2.85A8.23 8.23 0 0 1 0 16.4a11.62 11.62 0 0 0 6.29 1.84"></path>
									</svg>
								</span>
								<span className="items-center rounded-full border-2 p-3 hover:bg-white mx-1">
									<svg
										className="fill-current w-5 h-5 hover:text-blue-900"
										xmlns="http://www.w3.org/2000/svg"
										viewBox="0 0 20 20"
									>
										<title>Twitter</title>
										<path d="M6.29 18.25c7.55 0 11.67-6.25 11.67-11.67v-.53c.8-.59 1.49-1.3 2.04-2.13-.75.33-1.54.55-2.36.65a4.12 4.12 0 0 0 1.8-2.27c-.8.48-1.68.81-2.6 1a4.1 4.1 0 0 0-7 3.74 11.65 11.65 0 0 1-8.45-4.3 4.1 4.1 0 0 0 1.27 5.49C2.01 8.2 1.37 8.03.8 7.7v.05a4.1 4.1 0 0 0 3.3 4.03 4.1 4.1 0 0 1-1.86.07 4.1 4.1 0 0 0 3.83 2.85A8.23 8.23 0 0 1 0 16.4a11.62 11.62 0 0 0 6.29 1.84"></path>
									</svg>
								</span>
								<span className="items-center rounded-full border-2 p-3 hover:bg-white mx-1">
									<svg
										className="fill-current w-5 h-5 hover:text-blue-900"
										xmlns="http://www.w3.org/2000/svg"
										viewBox="0 0 20 20"
									>
										<title>Twitter</title>
										<path d="M6.29 18.25c7.55 0 11.67-6.25 11.67-11.67v-.53c.8-.59 1.49-1.3 2.04-2.13-.75.33-1.54.55-2.36.65a4.12 4.12 0 0 0 1.8-2.27c-.8.48-1.68.81-2.6 1a4.1 4.1 0 0 0-7 3.74 11.65 11.65 0 0 1-8.45-4.3 4.1 4.1 0 0 0 1.27 5.49C2.01 8.2 1.37 8.03.8 7.7v.05a4.1 4.1 0 0 0 3.3 4.03 4.1 4.1 0 0 1-1.86.07 4.1 4.1 0 0 0 3.83 2.85A8.23 8.23 0 0 1 0 16.4a11.62 11.62 0 0 0 6.29 1.84"></path>
									</svg>
								</span>
								<span className="items-center rounded-full border-2 p-3 hover:bg-white mx-1">
									<svg
										className="fill-current w-5 h-5 hover:text-blue-900"
										xmlns="http://www.w3.org/2000/svg"
										viewBox="0 0 20 20"
									>
										<title>Twitter</title>
										<path d="M6.29 18.25c7.55 0 11.67-6.25 11.67-11.67v-.53c.8-.59 1.49-1.3 2.04-2.13-.75.33-1.54.55-2.36.65a4.12 4.12 0 0 0 1.8-2.27c-.8.48-1.68.81-2.6 1a4.1 4.1 0 0 0-7 3.74 11.65 11.65 0 0 1-8.45-4.3 4.1 4.1 0 0 0 1.27 5.49C2.01 8.2 1.37 8.03.8 7.7v.05a4.1 4.1 0 0 0 3.3 4.03 4.1 4.1 0 0 1-1.86.07 4.1 4.1 0 0 0 3.83 2.85A8.23 8.23 0 0 1 0 16.4a11.62 11.62 0 0 0 6.29 1.84"></path>
									</svg>
								</span>
							</div>
						</div>
						<div className="p-6 md:w-1/3">
							<h1 className="uppercase text-2xl font-bold leading-none tracking-normal pb-5">
								About freelancer
							</h1>
							<p className="text-xl break-normal">
								Freelance is a free to use, MIT licensed Tailwindcss theme
								created by
								<a
									className="text-green-500"
									href="https://twitter.com/framansi"
								>
									Francesco Mansi
								</a>
							</p>
						</div>
					</div>
				</section>
			</main>
			<footer className="bg-gray-900 h-16">
				<p className="pt-5 text-center text-white">
					Copyright © Your Website 2019
				</p>
			</footer>

			<div className="p-10" style={pageStyles}>
				<div className="dropdown inline-block relative">
					<button className="bg-gray-300 text-gray-700 font-semibold py-2 px-4 rounded inline-flex items-center">
						<span className="mr-1">Dropdown</span>
						<svg
							className="fill-current h-4 w-4"
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 20 20"
						>
							<path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
							{` `}
						</svg>
					</button>
					<ul className="dropdown-menu absolute hidden text-gray-700 pt-1">
						<li className="">
							<a
								className="rounded-t bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap"
								href="#"
							>
								One
							</a>
						</li>
						<li className="">
							<a
								className="bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap"
								href="#"
							>
								Two
							</a>
						</li>
						<li className="">
							<a
								className="rounded-b bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap"
								href="#"
							>
								Three is the magic number
							</a>
						</li>
					</ul>
				</div>
			</div>
			<div className="bg-white dark:bg-gray-900 rounded-lg px-6 py-8 ring-1 ring-gray-900/5 shadow-xl">
				<div>
					<span className="inline-flex items-center justify-center p-2 bg-indigo-500 rounded-md shadow-lg">
						<svg
							className="h-6 w-6 text-white"
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 24 24"
							stroke="currentColor"
							aria-hidden="true"
						></svg>
					</span>
				</div>
				<h3 className="text-gray-900 dark:text-white mt-5 text-base font-medium tracking-tight">
					Writes Upside-Down
				</h3>
				<p className="text-gray-500 dark:text-gray-400 mt-2 text-sm">
					The Zero Gravity Pen can be used to write in any orientation,
					including upside-down. It even works in outer space.
				</p>
			</div>
			<div className="bg-gray-600 dark:bg-gray-900 text-white">HEllo</div>

			<header>
				<section id="leftSection">
					<div className="container-fluid">
						<img alt="avatar" className="avatar" src={ProfilePhoto} />
						<br />
						<span className="primary-text">Jorge Marcial Rizo</span>
						<br />
						<span>Software Engineer</span>
						<br />
						<br />
						<section style={{ marginBottom: 8 }}>
							<a
								className="email"
								target="_blank"
								rel="noopener noreferrer"
								href="http://jorgemgr.com/"
							>
								www.jorgemgr.com
							</a>
							<br />
							<a className="email" href="mailto:jorgemgr94@gmail.com">
								jorgemgr94@gmail.com
							</a>
						</section>
					</div>
				</section>
				<section id="rightSection">
					<div className="container-fluid">
						<span className="bold">About Me</span>
						<p>{About[AboutParagraph.First]}</p>
						<p>{About[AboutParagraph.Second]}</p>
						<p>{About[AboutParagraph.Third]}</p>
						<div style={{ display: `flex`, justifyContent: `flex-start` }}>
							{/* {socialNetworks.map((social) => {
									return (
										<a
											className="mr-4"
											rel="noopener noreferrer"
											href={social.url}
											target="_blank"
											key={social.id}
										>
											<div style={{ display: `inline-block` }}>
												<img
													alt={social.name}
													style={{ width: 30 }}
													src={social.img}
												/>
											</div>
										</a>
									);
								})} */}
						</div>
					</div>
				</section>
			</header>
		</>
	);
}
