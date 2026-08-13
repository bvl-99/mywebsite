<script lang="ts">
	import type { PageData } from './$types';
	let { data }: { data: PageData } = $props();
	const project = $derived(data.project);
</script>

<svelte:head>
	<title>{project.title} | vBordea</title>
	<meta name="description" content={project.summary} />
</svelte:head>

<style>
	.detail-container {
		padding-top: 110px;
		padding-bottom: 60px;
		max-width: 820px;
	}
	.hero-img {
		max-width: 100%;
		max-height: 380px;
		object-fit: contain;
		border-radius: 12px;
		box-shadow: 0 6px 18px rgba(0,0,0,0.08);
		margin: 24px auto 32px auto;
		display: block;
	}
	.content-body {
		font-size: 1.05rem;
		line-height: 1.75;
		color: #333333;
		text-align: justify;
	}
	.back-btn {
		display: inline-flex;
		align-items: center;
		margin-top: 36px;
		font-weight: 600;
		color: #007bff;
		text-decoration: none;
	}
	.back-btn:hover {
		text-decoration: underline;
	}
</style>

<div class="container detail-container">
	<h1 class="text-center font-weight-bold">{project.title}</h1>
	{#if project.detailImage}
		<img src={project.detailImage} alt={project.title} class="hero-img" />
	{/if}
	<div class="content-body">
		{@html project.descriptionHtml}
	</div>
	<a href="/educational-projects" class="back-btn">← Back to Educational Projects</a>
</div>
