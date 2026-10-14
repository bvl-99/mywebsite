<script lang="ts">
	import Seo from '$lib/components/Seo.svelte';
	import { site } from '$lib/site';
</script>

<Seo
	title="Thank you | {site.shortName}"
	description="Your message has been sent."
	path="/thank-you"
	noindex
/>

<div class="container container--narrow page">
	<h1 class="page-title">Thank you!</h1>
	<p class="page-lead">Your message was sent. I'll get back to you as soon as I can, usually within a day or two.</p>
	<p class="back"><a class="btn" href="/">Back to the homepage</a></p>
</div>

<style>
	.back {
		text-align: center;
	}
</style>
