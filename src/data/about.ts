const yearsOfExperience = new Date().getFullYear() - 2014;

export enum AboutParagraph {
	First,
	Second,
	Third
}

export const About = {
	[AboutParagraph.First]: `With +${yearsOfExperience} years of experience, I've worked with startups,
	as well as small, mid, and large companies.`,

	[AboutParagraph.Second]: `I started working as a full-stack developer for 4 years, then the next 2
	years I focused on backend development with JavaScript. Nowadays I'm
	learning about cloud development working with serverless apps, kubernetes,
	containerization, CI/CD, multi-region, auto-scaling.`,

	[AboutParagraph.Third]: `I love and believe in teamwork, smart work, best practices,
	collaboration, continuous learning, home office, leadership, priority,
	order, people first, quickly adapt to change, new tech's.`
};
