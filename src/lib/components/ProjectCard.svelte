<script lang="ts">
	import { projectPath, type Project } from '$lib/content/projects';

	interface Props {
		project: Project;
		/** Set on images that are visible on first load; others are lazy-loaded. */
		eager?: boolean;
	}

	let { project, eager = false }: Props = $props();
</script>

<article class="card">
	<div class="card__media">
		<img
			src={project.thumbnail}
			alt=""
			width="600"
			height="375"
			loading={eager ? 'eager' : 'lazy'}
			decoding="async"
		/>
	</div>
	<div class="card__body">
		<h3 class="card__title">
			<a
				href={projectPath(project)}
				data-umami-event="project-open"
				data-umami-event-project={project.slug}>{project.title}</a
			>
		</h3>
		<p class="card__summary">{project.summary}</p>
		{#if project.tags?.length}
			<ul class="tags">
				{#each project.tags as tag (tag)}
					<li class="tag">{tag}</li>
				{/each}
			</ul>
		{/if}
	</div>
</article>

<style>
	.card {
		position: relative;
		display: flex;
		flex-direction: column;
		height: 100%;
		background: var(--bg);
		border: 1px solid var(--line);
		border-radius: var(--radius);
		overflow: hidden;
		transition:
			transform 0.25s ease,
			box-shadow 0.25s ease,
			border-color 0.25s ease;
	}
	.card:hover,
	.card:focus-within {
		transform: translateY(-4px);
		box-shadow: var(--shadow-md);
		border-color: var(--line-strong);
	}
	.card__media {
		aspect-ratio: 16 / 10;
		background: var(--bg-soft);
		overflow: hidden;
	}
	.card__media img {
		width: 100%;
		height: 100%;
		object-fit: cover;
	}
	.card__body {
		display: flex;
		flex-direction: column;
		flex: 1;
		gap: var(--space-3);
		padding: var(--space-5);
	}
	.card__title {
		margin: 0;
		font-size: var(--text-lg);
	}
	/* The whole card is clickable through the title link. */
	.card__title a {
		color: var(--ink);
		text-decoration: none;
	}
	.card__title a::after {
		content: '';
		position: absolute;
		inset: 0;
	}
	.card__title a:hover {
		color: var(--accent);
	}
	.card__summary {
		margin: 0;
		color: var(--muted);
		font-size: 0.95rem;
		line-height: 1.55;
	}
	.tags {
		margin-top: auto;
		padding-top: var(--space-2);
	}
</style>
