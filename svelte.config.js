import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess: vitePreprocess(),
	kit: {
		adapter: adapter({
			pages: 'build',
			assets: 'build',
			// GitHub Pages serves 404.html for unknown URLs (with a real 404 status).
			fallback: '404.html',
			precompress: false,
			strict: true
		}),
		paths: {
			relative: true
		},
		prerender: {
			// '*' crawls every linked page; sitemap.xml is generated from src/routes/sitemap.xml/+server.ts
			entries: ['*', '/sitemap.xml']
		}
	}
};

export default config;
