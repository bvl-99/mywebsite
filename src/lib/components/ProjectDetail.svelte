<script lang="ts">
	import Seo from '$lib/components/Seo.svelte';
	import { categories, projectPath, type Project } from '$lib/content/projects';
	import { site } from '$lib/site';

	let { project }: { project: Project } = $props();

	const info = $derived(categories[project.category]);
</script>

<Seo
	title="{project.title} | {site.shortName}"
	description={project.summary}
	path={projectPath(project)}
	image={project.detailImage ?? site.defaultImage}
/>

<article class="container container--narrow page">
	<nav aria-label="Breadcrumb" class="crumbs">
		<a href="/{info.path}">← {info.backLabel}</a>
	</nav>

	<h1 class="title">{project.title}</h1>

	{#if project.tags?.length}
		<ul class="tags tags--center">
			{#each project.tags as tag (tag)}
				<li class="tag">{tag}</li>
			{/each}
		</ul>
	{/if}

	{#if project.detailImage}
		<img
			class="hero"
			src={project.detailImage}
			alt="Preview of {project.title}"
			decoding="async"
			fetchpriority="high"
		/>
	{/if}

	<div class="prose">
		<!-- Trusted content authored in src/lib/content/projects.ts -->
		{@html project.descriptionHtml}
	</div>

	{#if project.links?.length}
		<ul class="links">
			{#each project.links as link (link.href)}
				<li><a class="btn btn--ghost" href={link.href} rel="noopener">{link.label}</a></li>
			{/each}
		</ul>
	{/if}

	<p class="back"><a href="/{info.path}">← Back to {info.backLabel}</a></p>
</article>

<style>
	.crumbs {
		margin-bottom: var(--space-5);
		font-weight: 600;
	}
	.title {
		text-align: center;
		margin-bottom: var(--space-4);
	}
	.tags--center {
		justify-content: center;
	}
	.hero {
		width: 100%;
		max-width: 28rem;
		max-height: 28rem;
		margin: var(--space-6) auto;
		object-fit: contain;
		border-radius: var(--radius);
		box-shadow: var(--shadow-sm);
		background: var(--bg-soft);
	}
	.links {
		display: flex;
		flex-wrap: wrap;
		gap: var(--space-3);
		margin: var(--space-6) 0 0;
		padding: 0;
		list-style: none;
	}
	.back {
		margin: var(--space-7) 0 0;
		font-weight: 600;
	}
</style>
