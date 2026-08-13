<script>
    import { page } from '$app/state';
    import Header from '$lib/components/Header.svelte';
    import Footer from '$lib/components/Footer.svelte';
    import '../app.css';
</script>

<div class="app-container d-flex flex-column min-vh-100">

    {#if page.url.pathname !== '/'}
        <Header />
    {/if}

    <slot />

    <Footer />
</div>
