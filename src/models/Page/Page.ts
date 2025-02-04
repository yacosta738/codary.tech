/**
 * Represents a page entity in the application.
 * @interface Page
 * @property {string} id - The unique identifier of the page.
 * @property {string} title - The title of the page.
 * @property {string} content - The main content of the page.
 * @property {CollectionEntry<"dynamicPages">} entry - The Astro collection entry associated with this page.
 */
import type { CollectionEntry } from "astro:content";

export default interface Page {
  id: string;
  title: string;
  description: string;
  content: string;
  entry: CollectionEntry<"dynamicPages">;
}
