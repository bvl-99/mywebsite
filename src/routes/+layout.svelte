<script lang="ts">
    import { afterNavigate } from '$app/navigation';
    import { page } from '$app/state';
    import Header from '$lib/components/Header.svelte';
    import Footer from '$lib/components/Footer.svelte';
    import '../app.css';

    // Extract the children snippet from Svelte 5 props
    let { children } = $props();

    // Set your production domain here
    const siteUrl = 'https://valentinbordea.com';

    // Dynamically derive the canonical URL for the current page
    let canonicalUrl = $derived(`${siteUrl}${page.url.pathname}`);

    afterNavigate(() => {
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: 'instant'
        });
    });
</script>

<svelte:head>
    <!-- Tells Google this is the definitive URL for this page -->
    <link rel="canonical" href={canonicalUrl} />
</svelte:head>

<div class="app-container d-flex flex-column min-vh-100">

    {#if page.url.pathname !== '/'}
        <Header />
    {/if}

    <!-- Svelte 5 equivalent of <slot /> -->
    {@render children()}

    <Footer />
</div>
