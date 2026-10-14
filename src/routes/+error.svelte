<script lang="ts">
	import { page } from '$app/state';
	import Seo from '$lib/components/Seo.svelte';
	import { site } from '$lib/site';

	const notFound = $derived(page.status === 404);
	const heading = $derived(notFound ? 'Page not found' : 'Something went wrong');
</script>

<Seo
	title="{heading} | {site.shortName}"
	description="This page could not be displayed."
	path={page.url.pathname}
	noindex
/>

<div class="container container--narrow page error">
	<p class="code" aria-hidden="true">{page.status}</p>
	<h1>{heading}</h1>
	<p class="lead">
		{#if notFound}
			The page you are looking for doesn't exist or has moved.
		{:else}
			{page.error?.message ?? 'An unexpected error occurred.'}
		{/if}
	</p>
	<div class="actions">
		<a class="btn" href="/">Back to homepage</a>
		<a class="btn btn--ghost" href="/#portfolio">Browse the portfolio</a>
	</div>
</div>

<style>
	.error {
		text-align: center;
		padding-block: clamp(4rem, 12vw, 8rem);
	}
	.code {
		margin: 0;
		font-size: clamp(5rem, 22vw, 10rem);
		font-weight: 900;
		line-height: 1;
		color: transparent;
		-webkit-text-stroke: 2px var(--line-strong);
	}
	.lead {
		color: var(--muted);
		font-size: var(--text-lg);
		margin-bottom: var(--space-6);
	}
	.actions {
		display: flex;
		flex-wrap: wrap;
		justify-content: center;
		gap: var(--space-3);
	}
</style>
