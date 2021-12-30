import IntersogPhoto from "../images/companies/intersog.png";
// import SintecPhoto from "../images/companies/sintec.png";
// import GaragePhoto from "../images/companies/garage.png";
// import ProfilePhoto from "../images/companies/intersog.png";

export type Position = Readonly<{
	name: string;
	startAt: Date;
	endAt?: Date;
	company: {
		name: string;
		// eslint-disable-next-line @typescript-eslint/no-explicit-any
		photo: any;
	};
	responsibilities: string[];
	achievements: string[];
	technicalEnv: string;
}>;

export const PositionsData: Position[] = [
	{
		name: `Software Engineer`,
		startAt: new Date(`09/06/2021`),
		endAt: undefined,
		company: {
			name: `Intersog`,
			photo: IntersogPhoto
		},
		responsibilities: [`Responsibility 1`, `Responsibility 2`],
		achievements: [`Achievement 1`, `Achievement 2`],
		technicalEnv: `Typescript, React, RxJS, NodeJs, Firebase, GCP.`
	},
	{
		name: `Software Engineer`,
		startAt: new Date(`09/06/2021`),
		endAt: undefined,
		company: {
			name: `Intersog`,
			photo: IntersogPhoto
		},
		responsibilities: [`Responsibility 1`, `Responsibility 2`],
		achievements: [`Achievement 1`, `Achievement 2`],
		technicalEnv: `Typescript, React, RxJS, NodeJs, Firebase, GCP.`
	},
	{
		name: `Software Engineer`,
		startAt: new Date(`09/06/2021`),
		endAt: undefined,
		company: {
			name: `Intersog`,
			photo: IntersogPhoto
		},
		responsibilities: [`Responsibility 1`, `Responsibility 2`],
		achievements: [`Achievement 1`, `Achievement 2`],
		technicalEnv: `Typescript, React, RxJS, NodeJs, Firebase, GCP.`
	},
	{
		name: `Software Engineer`,
		startAt: new Date(`09/06/2021`),
		endAt: undefined,
		company: {
			name: `Intersog`,
			photo: IntersogPhoto
		},
		responsibilities: [`Responsibility 1`, `Responsibility 2`],
		achievements: [`Achievement 1`, `Achievement 2`],
		technicalEnv: `Typescript, React, RxJS, NodeJs, Firebase, GCP.`
	},
	{
		name: `Software Engineer`,
		startAt: new Date(`09/06/2021`),
		endAt: undefined,
		company: {
			name: `Intersog`,
			photo: IntersogPhoto
		},
		responsibilities: [`Responsibility 1`, `Responsibility 2`],
		achievements: [`Achievement 1`, `Achievement 2`],
		technicalEnv: `Typescript, React, RxJS, NodeJs, Firebase, GCP.`
	}
];
