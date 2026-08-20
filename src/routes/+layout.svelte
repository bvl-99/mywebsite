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

    <!-- Wrapping children in flex-grow-1 forces it to push the footer down -->
    <main class="flex-grow-1">
        {@render children()}
    </main>

    <Footer />
</div>

<style>
    /*
      This globally targets ANY .fixed-top navbar/header across all pages
      and forces it to center and lock at 1920px on ultrawide monitors.
    */
    @media (min-width: 1920px) {
        :global(.fixed-top) {
            width: 100% !important;
            max-width: 1920px !important;
            left: 50% !important;
            right: auto !important;
            transform: translateX(-50%) !important;
        }
    }
</style>
