import { error } from '@sveltejs/kit';
import { projects } from '$lib/content/projects';
import type { PageLoad } from './$types';

export const load: PageLoad = ({ params }) => {
	const project = projects.find(p => p.slug === params.slug && p.category === 'certification');
	if (!project) throw error(404, 'Certification Not Found');
	return { project };
};
