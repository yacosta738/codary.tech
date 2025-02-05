/**
 * Represents an author entity in the system.
 * @interface Author
 * @property {string} id - The unique identifier of the author
 * @property {string} name - The full name of the author
 * @property {string} email - The email address of the author
 * @property {string} avatar - The URL or path to the author's avatar image
 */
export default interface Author {
	id: string;
	name: string;
	email: string;
	avatar: string;
}
