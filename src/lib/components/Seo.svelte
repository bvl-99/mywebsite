<script lang="ts">
	import { site } from '$lib/site';

	interface Props {
		/** Full <title> text. */
		title: string;
		description: string;
		/** Path of this page, e.g. "/faqs". Used for canonical + og:url. */
		path: string;
		/** Absolute path of a social preview image on this site, e.g. "/assets/img/x.webp". */
		image?: string;
		/** True for pages that should not appear in search results (e.g. error page). */
		noindex?: boolean;
		/** Optional JSON-LD object rendered as structured data. */
		jsonLd?: Record<string, unknown>;
	}

	let {
		title,
		description,
		path,
		image = site.defaultImage,
		noindex = false,
		jsonLd
	}: Props = $props();

	const url = $derived(path === '/' ? `${site.url}/` : `${site.url}${path}`);
	const imageUrl = $derived(`${site.url}${image}`);
	const isDefaultImage = $derived(image === site.defaultImage);
	const jsonLdTag = $derived(
		jsonLd
			? `<script type="application/ld+json">${JSON.stringify(jsonLd).replace(/</g, '\\u003c')}</` +
					`script>`
			: ''
	);
</script>

<svelte:head>
	<title>{title}</title>
	<meta name="description" content={description} />
	<link rel="canonical" href={url} />
	{#if noindex}
		<meta name="robots" content="noindex" />
	{/if}

	<meta property="og:site_name" content={site.name} />
	<meta property="og:type" content="website" />
	<meta property="og:title" content={title} />
	<meta property="og:description" content={description} />
	<meta property="og:url" content={url} />
	<meta property="og:image" content={imageUrl} />
	{#if isDefaultImage}
		<meta property="og:image:width" content="1200" />
		<meta property="og:image:height" content="630" />
	{/if}

	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:title" content={title} />
	<meta name="twitter:description" content={description} />
	<meta name="twitter:image" content={imageUrl} />

	{#if jsonLdTag}
		{@html jsonLdTag}
	{/if}
</svelte:head>
