/**
 * Formats a Date object into a Spanish localized string representation.
 *
 * @param date - A Date object or a string that can be parsed into a Date object
 * @returns A string with the date formatted as "day month year" in Spanish
 * @example
 * // Returns "1 enero 2023"
 * formatDate(new Date('2023-01-01'))
 */
const formatDate = (date: Date | string) => {
	if (typeof date === "string" && Number.isNaN(Date.parse(date))) {
		throw new Error("Invalid date string provided");
	}
	const dateObject = new Date(date);
	return new Intl.DateTimeFormat("es-ES", {
		year: "numeric",
		month: "long",
		day: "numeric",
	}).format(dateObject);
};

/**
 * Formats a date into URL format (YYYY/MM/DD)
 * @param {Date} date
 * @returns {string}
 */
function formatDateForUrl(date: Date): string {
	const year = date.getFullYear();
	const month = (date.getMonth() + 1).toString().padStart(2, "0");
	const day = date.getDate().toString().padStart(2, "0");
	return `${year}/${month}/${day}`;
}

export { formatDate, formatDateForUrl };
