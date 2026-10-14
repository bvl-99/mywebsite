<script lang="ts">
	import Seo from '$lib/components/Seo.svelte';
	import { site } from '$lib/site';
</script>

<Seo
	title="Terms & Conditions | {site.shortName}"
	description="Terms governing the use of valentinbordea.com, its content and enquiries about development or security work."
	path="/terms"
/>

<div class="container container--narrow page">
	<h1 class="page-title">Terms &amp; Conditions</h1>
	<p class="page-lead">Straightforward guidelines regarding the use of this site and services.</p>

	<div class="prose">
		<h2>1. Site usage</h2>
		<p>
			The code samples, project write-ups, and portfolio items showcased here are for informational
			and professional demonstration purposes. Feel free to browse and review the work.
		</p>

		<h2>2. Intellectual property</h2>
		<p>
			All original branding, designs, and content are created and owned by the author, {site.name}.
			Client projects or open-source software referenced maintain their respective licenses and
			agreements.
		</p>

		<h2>3. Service scope &amp; security consulting</h2>
		<p>
			Any development work, code audits, or security consults are defined under formal written
			project scopes prior to execution. Unauthorized testing on third-party systems is neither
			encouraged nor accepted.
		</p>

		<h2>4. External links &amp; inquiries</h2>
		<p>
			Links to external GitHub repositories, social profiles, or tools are provided for convenience.
			External site policies apply once you navigate away from this domain. For formal engagement
			inquiries, contact <a href="mailto:{site.email}">{site.email}</a>.
		</p>

		<h2>5. Privacy</h2>
		<p>How personal data is handled is described in the <a href="/privacy">Privacy Policy</a>.</p>
	</div>

	<p class="updated">Last updated: October 2026</p>
</div>

<style>
	.updated {
		margin-top: var(--space-7);
		text-align: center;
		color: var(--muted);
		font-size: var(--text-sm);
	}
	.prose {
		font-size: var(--text-base);
	}
</style>
