export function getArticlePath(id: string, date: Date): string {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    const slug = id.split('/').pop();

    return `/${year}/${month}/${day}/${slug}`;
}
