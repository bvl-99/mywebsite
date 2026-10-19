<script lang="ts">
	import TypedText from '$lib/components/TypedText.svelte';
	import CircuitBackground from '$lib/components/CircuitBackground.svelte';
	import { site } from '$lib/site';
</script>

<section class="hero on-dark" id="home" aria-labelledby="hero-title">
	<CircuitBackground />
	<div class="container hero__grid">
		<div class="hero__photo">
			<img
				src="/assets/img/profile.webp"
				width="511"
				height="512"
				alt="Portrait of {site.name}"
				fetchpriority="high"
				draggable="false"
			/>
		</div>

		<div class="hero__copy">
			<p class="hero__kicker">Hi, I'm</p>
			<h1 id="hero-title">{site.name}</h1>
			<p class="hero__role">
				<TypedText words={['Software Developer', 'Cybersecurity Specialist']} />
			</p>
			<p class="hero__lead">
				I build web applications that are fast and user-friendly, and secure under the hood — with a
				background in computer science and cybersecurity.
			</p>
			<div class="hero__actions">
				<a class="btn btn--accent" href="#contact" data-umami-event="hero-get-in-touch"
					>Get in touch</a
				>
				<a class="btn btn--ghost" href="#portfolio" data-umami-event="hero-view-work"
					>View my work</a
				>
			</div>
		</div>
	</div>
</section>

<style>
	.hero {
		position: relative;
		overflow: hidden;
		display: flex;
		align-items: center;
		min-height: 100vh;
		min-height: 100svh;
		padding-block: var(--space-8);
		color: #fff;
		background:
			radial-gradient(48rem 28rem at 88% -8%, rgb(11 206 175 / 14%), transparent 65%), var(--ink);
	}
	.hero__grid {
		position: relative;
		z-index: 1;
		display: grid;
		gap: var(--space-7);
		align-items: center;
	}
	.hero__photo img {
		width: min(15rem, 62vw);
		height: auto;
		aspect-ratio: 1;
		margin-inline: auto;
		object-fit: cover;
		border-radius: 50%;
		box-shadow:
			0 0 0 6px var(--ink),
			0 0 0 8px var(--accent-bright),
			0 20px 50px rgb(0 0 0 / 45%);
	}
	.hero__copy {
		text-align: center;
	}
	.hero__kicker {
		margin: 0 0 var(--space-2);
		font-size: var(--text-xl);
		color: rgb(255 255 255 / 80%);
	}
	h1 {
		margin: 0 0 var(--space-3);
		font-size: var(--text-hero);
		font-weight: 800;
		letter-spacing: -0.02em;
		line-height: 1.05;
		text-transform: uppercase;
		color: #fff;
	}
	.hero__role {
		margin: 0 0 var(--space-5);
		font-size: var(--text-2xl);
		font-weight: 300;
		color: var(--accent-bright);
	}
	.hero__lead {
		max-width: 38rem;
		margin: 0 auto var(--space-6);
		font-size: var(--text-lg);
		color: rgb(255 255 255 / 85%);
	}
	.hero__actions {
		display: flex;
		flex-wrap: wrap;
		justify-content: center;
		gap: var(--space-3);
	}

	@media (min-width: 60rem) {
		.hero__grid {
			grid-template-columns: minmax(0, 5fr) minmax(0, 7fr);
		}
		.hero__photo img {
			width: min(22rem, 100%);
		}
		.hero__copy {
			text-align: left;
		}
		.hero__lead {
			margin-inline: 0;
		}
		.hero__actions {
			justify-content: flex-start;
		}
	}
</style>
