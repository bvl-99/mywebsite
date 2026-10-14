import { error } from '@sveltejs/kit';
import { findProject } from '$lib/content/projects';
import type { PageLoad } from './$types';

export const load: PageLoad = ({ params }) => {
	const project = findProject('certification', params.slug);
	if (!project) error(404, 'Certification not found');
	return { project };
};
