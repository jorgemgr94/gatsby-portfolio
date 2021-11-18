export const monthsNames = [
	"January",
	"February",
	"March",
	"April",
	"May",
	"June",
	"July",
	"August",
	"September",
	"October",
	"November",
	"December"
];

export function formatExperience(d1, d2) {
	const MONTHS_IN_YEAR = 12;
	const MONTHS_TO_YEAR = 3.8052e-10;

	if (!d2) d2 = new Date();
	let e = Math.floor((d2 - d1) * MONTHS_TO_YEAR);
	if (e >= MONTHS_IN_YEAR) {
		let months = e - Math.floor(e / MONTHS_IN_YEAR) * MONTHS_IN_YEAR;
		return `${Math.floor(e / MONTHS_IN_YEAR)} year(s) ${months} month(s)`;
	} else {
		return `${e} month(s)`;
	}
}

export function formatDate(date) {
	if (!date) return "Current";
	return `${monthsNames[date.getMonth()]} ${date.getFullYear()}`;
}

export function arrayToSeparatedString(array) {
	return array.join(", ") + ".";
}
