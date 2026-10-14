<script lang="ts">
	import SectionHeading from '$lib/components/SectionHeading.svelte';
	import KaraokeText from '$lib/components/KaraokeText.svelte';

	const aboutText =
		"I'm a software developer with a background in computer science and cybersecurity. I enjoy building web applications that are not just fast and user-friendly, but secure under the hood. For me, good software is about finding the right balance between clean code and a safe, reliable infrastructure.";
</script>

<section class="section" id="about" aria-labelledby="about-title">
	<div class="container">
		<SectionHeading ghost="About" title="About Me" id="about-title" />

		<div class="grid">
			<img
				src="/assets/img/about.webp"
				width="640"
				height="640"
				alt="Valentin standing in an autumn forest, photographed from behind in a yellow hoodie"
				loading="lazy"
				decoding="async"
			/>
			<div>
				<h3>Software Developer &amp; Cybersecurity Specialist</h3>
				<KaraokeText text={aboutText} />
			</div>
		</div>
	</div>
</section>

<style>
	.grid {
		display: grid;
		gap: var(--space-6);
		align-items: center;
	}
	img {
		width: 100%;
		max-width: 26rem;
		height: auto;
		margin-inline: auto;
		border-radius: var(--radius);
		box-shadow: var(--shadow-md);
	}
	h3 {
		margin-bottom: var(--space-4);
	}
	@media (min-width: 60rem) {
		.grid {
			grid-template-columns: minmax(0, 5fr) minmax(0, 7fr);
			gap: var(--space-8);
		}
	}
</style>
