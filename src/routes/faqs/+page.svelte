<script lang="ts">
	import Seo from '$lib/components/Seo.svelte';
	import Accordion from '$lib/components/Accordion.svelte';
	import { site } from '$lib/site';

	const items = [
		{
			question: 'What primary technical services do you focus on?',
			answer:
				'Modern web development, backend/frontend engineering, web application security reviews, performance optimization, and custom software builds.'
		},
		{
			question: 'How do you approach application security?',
			answer:
				'By building with security in mind from day one—applying strict input validation, safe authentication practices, proper encryption standards, and threat analysis early in the development lifecycle.'
		},
		{
			question: 'Are you available for freelance projects or technical consulting?',
			answer:
				'Yes. Depending on current project commitments. Drop a note through the contact form to discuss scope.'
		},
		{
			question: 'What is the best way to get in touch?',
			answer: `Use the <a href="/#contact">contact form</a> on the main page or send an email directly to <a href="mailto:${site.email}">${site.email}</a>. Response time is typically within 24 hours.`
		}
	];
</script>

<Seo
	title="FAQs | {site.shortName}"
	description="Quick answers about development, security reviews, and work inquiries with Liviu-Valentin Bordea."
	path="/faqs"
/>

<div class="container container--narrow page">
	<h1 class="page-title">Frequently Asked Questions</h1>
	<p class="page-lead">Quick answers on stack preference, workflow, and availability.</p>
	<Accordion {items} />
</div>
