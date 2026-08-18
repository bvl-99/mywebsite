<script lang="ts">
	import { page } from '$app/state';
	import type { PageData } from './$types';
	let { data }: { data: PageData } = $props();
	const project = $derived(data.project);
</script>

<svelte:head>
	<title>{project.title} | vBordea</title>
	<meta name="description" content={project.summary} />

	<!-- Dynamic Social Sharing Tags -->
	<meta property="og:title" content="{project.title} | vBordea" />
	<meta property="og:description" content={project.summary} />
	<meta property="og:url" content="https://valentinbordea.com{page.url.pathname}" />
	<meta property="og:image" content={project.detailImage || 'https://valentinbordea.com/assets/img/seo-social-banner.webp'} />

	<meta name="twitter:title" content="{project.title} | vBordea" />
	<meta name="twitter:description" content={project.summary} />
	<meta name="twitter:image" content={project.detailImage || 'https://valentinbordea.com/assets/img/seo-social-banner.webp'} />
</svelte:head>

<style>
	.detail-container {
		padding-top: 110px;
		padding-bottom: 60px;
		max-width: 820px;
	}
	.hero-img {
		max-width: 450px;
		width: 100%;
		height: auto;
		max-height: 450px;
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

	@media (max-width: 899px) {
		.detail-container {
			width: 100%;
			max-width: 100%;
			padding: 90px 20px 40px;
			margin: 0;
			box-sizing: border-box;
		}

		.detail-container h1 {
			font-size: 1.8rem;
			line-height: 1.25;
			margin-bottom: 20px;
		}

		.hero-img {
			display: block !important;
			width: 100% !important;
			max-width: 100% !important;
			height: auto !important;
			max-height: 400px !important;
			object-fit: contain !important;
			margin: 20px auto 28px !important;
			border-radius: 10px;
		}

		.content-body {
			width: 100%;
			font-size: 1rem;
			line-height: 1.65;
			text-align: left;
			overflow-wrap: break-word;
			word-wrap: break-word;
		}

		.content-body :global(img) {
			max-width: 100% !important;
			height: auto !important;
		}

		.content-body :global(iframe) {
			max-width: 100% !important;
			width: 100% !important;
		}

		.content-body :global(video) {
			max-width: 100% !important;
			height: auto !important;
		}

		.back-btn {
			margin-top: 30px;
			font-size: 0.95rem;
			line-height: 1.4;
		}
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
	<a href="/personal-projects" class="back-btn">← Back to Personal Projects</a>
</div>
