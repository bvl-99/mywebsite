<script lang="ts">
	import SocialLinks from '$lib/components/SocialLinks.svelte';

	const year = new Date().getFullYear();
</script>

<footer class="site-footer on-dark">
	<div class="container">
		<div class="footer__social">
			<SocialLinks />
		</div>

		<ul class="footer__legal" aria-label="Site information">
			<li><a href="/privacy">Privacy</a></li>
			<li><a href="/terms">Terms</a></li>
			<li><a href="/faqs">FAQs</a></li>
			<li><a href="/help">Help</a></li>
		</ul>

		<p class="footer__copy">
			&copy; {year} <a href="/">valentinbordea.com</a>. All rights reserved.
		</p>
	</div>
</footer>

<style>
	.site-footer {
		margin-top: auto;
		background: var(--ink);
		color: #fff;
		padding-block: var(--space-7);
		text-align: center;
	}
	.footer__social {
		margin-bottom: var(--space-5);
	}
	.footer__legal {
		display: flex;
		flex-wrap: wrap;
		justify-content: center;
		gap: var(--space-2) var(--space-5);
		margin: 0 0 var(--space-5);
		padding: 0;
		list-style: none;
	}
	.footer__legal a {
		display: inline-block;
		padding: 0.4rem 0;
		color: rgb(255 255 255 / 85%);
	}
	.footer__legal a:hover,
	.footer__copy a:hover {
		color: var(--accent-bright);
	}
	.footer__copy {
		margin: 0;
		font-size: var(--text-sm);
		color: rgb(255 255 255 / 75%);
	}
	.footer__copy a {
		color: inherit;
	}
</style>
