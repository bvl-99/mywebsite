<script lang="ts">
	import SectionHeading from '$lib/components/SectionHeading.svelte';
	import ContactForm from '$lib/components/ContactForm.svelte';
</script>

<section class="section section--soft" id="contact" aria-labelledby="contact-title">
	<div class="container container--narrow">
		<SectionHeading ghost="Contact" title="Get In Touch" id="contact-title" />
		<p class="intro">
			Have a project, a role or a question? Send me a message and I'll get back to you.
		</p>
		<ContactForm />
	</div>
</section>

<style>
	.intro {
		margin-bottom: var(--space-6);
		text-align: center;
		color: var(--muted);
		font-size: var(--text-lg);
	}
</style>
