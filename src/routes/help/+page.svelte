<script lang="ts">
	import Seo from '$lib/components/Seo.svelte';
	import Accordion from '$lib/components/Accordion.svelte';
	import { site } from '$lib/site';

	const items = [
		{
			question: 'Need help with a project or code review?',
			answer:
				'If you have questions regarding a project shared on this portfolio or need assistance with web engineering and security, reach out with brief details about your codebase or platform.'
		},
		{
			question: 'Reporting site issues or broken links',
			answer:
				"Found an issue on this site or a broken link in one of the project demos? Send a message describing the issue and the browser/device you're using so it can be fixed."
		},
		{
			question: 'Direct Contact',
			answer: `Email directly at <a href="mailto:${site.email}">${site.email}</a> for project inquiries or technical support.`
		}
	];
</script>

<Seo
	title="Help & Support | {site.shortName}"
	description="Get in touch with Liviu-Valentin Bordea for technical help, code questions, or to report a site issue."
	path="/help"
/>

<div class="container container--narrow page">
	<h1 class="page-title">Help &amp; Support</h1>
	<p class="page-lead">Guidelines for getting direct support or reporting technical issues.</p>
	<Accordion {items} />
</div>
