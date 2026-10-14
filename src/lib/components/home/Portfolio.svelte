<script lang="ts">
	import SectionHeading from '$lib/components/SectionHeading.svelte';
	import ProjectCard from '$lib/components/ProjectCard.svelte';
	import { categories, projects, projectsIn, type ProjectCategory } from '$lib/content/projects';
	import { reveal } from '$lib/actions';

	const featured = projects.filter((p) => p.featured);
	const order: ProjectCategory[] = ['personal', 'educational', 'certification'];
</script>

<section class="section" id="portfolio" aria-labelledby="portfolio-title">
	<div class="container">
		<SectionHeading ghost="Gallery" title="My Portfolio" id="portfolio-title" />

		<h3 class="sub">Featured projects</h3>
		<ul class="grid">
			{#each featured as project, i (project.slug)}
				<li use:reveal={i * 100}><ProjectCard {project} /></li>
			{/each}
		</ul>

		<h3 class="sub browse">Browse everything</h3>
		<ul class="browse-list">
			{#each order as key (key)}
				<li>
					<a class="btn btn--ghost" href="/{categories[key].path}">
						{categories[key].title}
						<span class="count">({projectsIn(key).length})</span>
					</a>
				</li>
			{/each}
		</ul>
	</div>
</section>

<style>
	.sub {
		margin-bottom: var(--space-5);
	}
	.grid {
		display: grid;
		grid-template-columns: repeat(auto-fill, minmax(min(100%, 17rem), 1fr));
		gap: var(--space-5);
		margin: 0;
		padding: 0;
		list-style: none;
	}
	.browse {
		margin-top: var(--space-7);
	}
	.browse-list {
		display: flex;
		flex-wrap: wrap;
		gap: var(--space-3);
		margin: 0;
		padding: 0;
		list-style: none;
	}
	.count {
		opacity: 0.7;
		font-weight: 400;
	}
</style>
