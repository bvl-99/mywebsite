<script lang="ts">
	import Header from '$lib/components/Header.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import '$lib/styles/fonts.css';
	import '$lib/styles/tokens.css';
	import '$lib/styles/base.css';

	import { site } from '$lib/site';

	let { children } = $props();
</script>

<svelte:head>
	{#if site.analytics.websiteId}
		<!-- Cookieless analytics; only loads on the production domain and respects Do Not Track. -->
		<script
			defer
			src={site.analytics.scriptUrl}
			data-website-id={site.analytics.websiteId}
			data-domains="valentinbordea.com"
			data-do-not-track="true"
		></script>
	{/if}
</svelte:head>

<a class="skip-link" href="#main">Skip to main content</a>

<div class="app">
	<Header />
	<main id="main" tabindex="-1">
		{@render children()}
	</main>
	<Footer />
</div>

<style>
	.app {
		display: flex;
		flex-direction: column;
		min-height: 100vh;
	}
	main {
		flex: 1 0 auto;
	}
	main:focus {
		outline: none;
	}
</style>
