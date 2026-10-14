import { site } from '$lib/site';
import { categories, projectPath, projects } from '$lib/content/projects';
import type { RequestHandler } from './$types';

// Generated at build time: new projects added to src/lib/content/projects.ts appear automatically.
export const prerender = true;

export const GET: RequestHandler = () => {
	const paths = [
		'/',
		...Object.values(categories).map((c) => `/${c.path}`),
		...projects.map(projectPath),
		'/faqs',
		'/help',
		'/privacy',
		'/terms'
	];

	const urls = paths
		.map((path) => `\t<url>\n\t\t<loc>${site.url}${path}</loc>\n\t</url>`)
		.join('\n');

	const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`;

	return new Response(xml, { headers: { 'Content-Type': 'application/xml' } });
};
