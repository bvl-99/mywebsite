<script lang="ts">
	import Seo from '$lib/components/Seo.svelte';
	import { site } from '$lib/site';
</script>

<Seo
	title="Privacy Policy | {site.shortName}"
	description="What personal data valentinbordea.com collects (only what you send through the contact form), why, who processes it, and how to exercise your rights."
	path="/privacy"
/>

<div class="container container--narrow page">
	<h1 class="page-title">Privacy Policy</h1>
	<p class="page-lead">Short version: no cookies, no ad trackers, no profiling. Details below.</p>

	<div class="prose">
		<h2>1. Who is responsible</h2>
		<p>
			This website is run by {site.name}, an individual. For anything related to this policy or your
			data, write to <a href="mailto:{site.email}">{site.email}</a>.
		</p>

		<h2>2. What this site collects</h2>
		<ul>
			<li>
				<strong>Contact form.</strong> If you use the form, I receive the name, email address, subject
				and message you type. If you email me directly, I receive your email address and whatever you
				write.
			</li>
			<li>
				<strong>Anonymous visit statistics.</strong>
				{#if site.analytics.websiteId}
					This site uses Umami Cloud to count visits, pages viewed, referring sites, approximate
					country, browser and device type, and clicks on a few buttons (for example "Download CV"
					or opening a project). It sets no cookies and builds no profile of you; according to
					Umami, it does not store full IP addresses or use cookies or local storage. It is switched
					off if your browser sends a "Do Not Track" signal.
				{:else}
					None. The site currently runs no analytics.
				{/if}
			</li>
			<li>
				<strong>Nothing else.</strong> The site has no accounts, no tracking pixels and no advertising
				scripts, and it does not set cookies or use local storage. Fonts and scripts are served from this
				site itself, apart from the statistics script mentioned above (when enabled).
			</li>
		</ul>

		<h2>3. Why, and on what basis</h2>
		<p>
			I use contact details only to read and answer your message, and to keep a record of the
			conversation. This is based on my legitimate interest in answering enquiries and on taking
			steps you ask for (Article 6(1)(f) and (b) GDPR). Your details are never sold, shared for
			marketing, or added to mailing lists.
		</p>

		<h2>4. Who processes your data</h2>
		<ul>
			<li>
				<strong>Formspree</strong> (Formspree, Inc., United States) receives the contact form
				submission and forwards it to my email inbox. See
				<a href="https://formspree.io/legal/privacy-policy/" rel="noopener">their privacy policy</a
				>.
			</li>
			<li>
				<strong>GitHub Pages</strong> (GitHub, Inc., United States) hosts this website. Like any web
				host, it may process technical connection data such as your IP address to deliver pages. See
				<a
					href="https://docs.github.com/en/site-policy/privacy-policies/github-general-privacy-statement"
					rel="noopener">GitHub’s privacy statement</a
				>.
			</li>
			<li>My email provider stores the messages I receive and send.</li>
		</ul>
		<p>
			Some of these providers are located in the United States, so your data may be transferred
			outside the European Economic Area under the safeguards those providers use.
		</p>

		<h2>5. How long data is kept</h2>
		<p>
			Messages are kept for as long as needed to handle your enquiry and any follow-up, and are
			deleted when you ask me to.
		</p>

		<h2>6. Your rights</h2>
		<p>
			You can ask me to access, correct or delete your data, restrict or object to its use, or give
			you a copy of it. Email <a href="mailto:{site.email}">{site.email}</a> and I will respond
			promptly. You may also complain to your data protection authority (in Romania:
			<a href="https://www.dataprotection.ro" rel="noopener">ANSPDCP</a>).
		</p>

		<h2>7. Security</h2>
		<p>
			The site is served over HTTPS. The contact form is sent directly to Formspree over an
			encrypted connection; the site itself stores nothing.
		</p>

		<h2>8. Changes</h2>
		<p>If this site starts using cookies or other services, this page will be updated first.</p>
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
