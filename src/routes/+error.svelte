<script>
    import { page } from '$app/stores';
</script>

<svelte:head>
    <title>Error {$page.status} | vBordea</title>
</svelte:head>

<!-- We use inline styles for vertical centering and Bootstrap for the layout -->
<div class="container text-center d-flex flex-column justify-content-center align-items-center" style="min-height: 70vh;">
    <div class="row justify-content-center w-100">
        <div class="col-lg-8">
            <!-- FontAwesome Warning Icon -->
            <i class="fas fa-exclamation-triangle text-primary mb-4" style="font-size: 5rem;"></i>

            <h1 class="display-3 font-weight-bold mb-3">Error {$page.status}</h1>

            <p class="lead mb-5">
                {#if $page.status === 404}
                    Oops! The page you are looking for has vanished into cyberspace or never existed at all.
                {:else}
                    {$page.error?.message || 'Something went wrong on our end.'}
                {/if}
            </p>

            <!-- Call to Action back to Homepage -->
            <a href="/" class="back-btn">← Back to Homepage</a>
        </div>
    </div>
</div>

<style>
	@media (max-width: 899px) {
		.back-btn {
			margin-top: 30px;
			font-size: 0.95rem;
			line-height: 1.4;
		}
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
</style>
