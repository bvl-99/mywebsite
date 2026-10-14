<script lang="ts">
	import SectionHeading from '$lib/components/SectionHeading.svelte';
	import { reveal } from '$lib/actions';

	const entries = [
		{
			title: "Master's Degree in Cybersecurity",
			school: 'West University of Timișoara',
			years: '2022 – 2024',
			text: 'Focused on cryptography, information security, security architectures and protocols, cyberattack detection and mitigation, secure software development, malware analysis, and cybersecurity risk management.'
		},
		{
			title: "Bachelor's Degree in Computer Science",
			school: 'West University of Timișoara',
			years: '2018 – 2022',
			text: 'Studied algorithms, data structures, programming, databases, operating systems, computer networks, software engineering, and computer architecture, alongside mathematical and theoretical foundations of computing.'
		}
	];
</script>

<section class="section section--soft" id="qualification" aria-labelledby="education-title">
	<div class="container container--narrow">
		<SectionHeading ghost="Education" title="Education" id="education-title" />

		<h3 class="sub">Academic Background</h3>
		<ol class="timeline">
			{#each entries as entry, i (entry.title)}
				<li use:reveal={i * 150}>
					<h4>{entry.title}</h4>
					<p class="meta">
						<strong>{entry.school}</strong> <span aria-hidden="true">|</span>
						<span>{entry.years}</span>
					</p>
					<p>{entry.text}</p>
				</li>
			{/each}
		</ol>
	</div>
</section>

<style>
	.sub {
		margin-bottom: var(--space-5);
	}
	.timeline {
		position: relative;
		margin: 0;
		padding: 0 0 0 var(--space-6);
		list-style: none;
		border-left: 2px solid var(--accent);
	}
	li {
		position: relative;
		margin-bottom: var(--space-6);
	}
	li:last-child {
		margin-bottom: 0;
	}
	li::before {
		content: '';
		position: absolute;
		left: calc(-1 * var(--space-6) - 7px);
		top: 0.45rem;
		width: 12px;
		height: 12px;
		border-radius: 50%;
		background: var(--bg-soft);
		border: 3px solid var(--accent);
	}
	h4 {
		margin-bottom: var(--space-1);
	}
	.meta {
		margin-bottom: var(--space-3);
		color: var(--muted);
	}
	li p:last-child {
		margin-bottom: 0;
	}
</style>
