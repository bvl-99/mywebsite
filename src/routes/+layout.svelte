<script lang="ts">
    import { page } from '$app/stores';
    import Header from '$lib/components/Header.svelte';
    import Footer from '$lib/components/Footer.svelte';

    // In Svelte 5, the page content is passed as a "children" snippet
    let { children } = $props();
</script>

<!-- Show simple Header only if we are NOT on the home page -->
{#if $page.url.pathname !== '/'}
    <Header />
{/if}

<!-- Page content gets injected here -->
{@render children()}

<!-- Global Footer -->
<Footer />
