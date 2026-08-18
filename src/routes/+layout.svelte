<script lang="ts">
    import { afterNavigate } from '$app/navigation';
    import { page } from '$app/state';
    import Header from '$lib/components/Header.svelte';
    import Footer from '$lib/components/Footer.svelte';
    import '../app.css';

    afterNavigate(() => {
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: 'instant'
        });
    });
</script>

<div class="app-container d-flex flex-column min-vh-100">

    {#if page.url.pathname !== '/'}
        <Header />
    {/if}

    <slot />

    <Footer />
</div>
