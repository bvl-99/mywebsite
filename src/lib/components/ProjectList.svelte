<script lang="ts">
	import Seo from '$lib/components/Seo.svelte';
	import ProjectCard from '$lib/components/ProjectCard.svelte';
	import { categories, projectsIn, type ProjectCategory } from '$lib/content/projects';
	import { site } from '$lib/site';

	let { category }: { category: ProjectCategory } = $props();

	const info = $derived(categories[category]);
	const items = $derived(projectsIn(category));
</script>

<Seo title="{info.title} | {site.shortName}" description={info.description} path="/{info.path}" />

<div class="container page">
	<h1 class="page-title">{info.title}</h1>
	<p class="page-lead">{info.lead}</p>

	<ul class="grid" aria-label={info.title}>
		{#each items as project, i (project.slug)}
			<li><ProjectCard {project} eager={i < 3} /></li>
		{/each}
	</ul>

	<p class="back"><a href="/">← Back to homepage</a></p>
</div>

<style>
	.grid {
		display: grid;
		grid-template-columns: repeat(auto-fill, minmax(min(100%, 20rem), 1fr));
		gap: var(--space-5);
		margin: 0;
		padding: 0;
		list-style: none;
	}
	.back {
		margin: var(--space-7) 0 0;
		font-weight: 600;
	}
</style>
