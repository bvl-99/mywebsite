<script lang="ts">
	import SectionHeading from '$lib/components/SectionHeading.svelte';
	import { reveal } from '$lib/actions';

	const services = [
		{
			title: 'Web Development',
			text: 'Building responsive, modern web applications tailored to business needs with clean, scalable code.'
		},
		{
			title: 'Cybersecurity',
			text: 'Auditing software and implementing robust security measures to protect applications against modern digital threats.'
		},
		{
			title: 'System Architecture',
			text: 'Designing secure, high-performance infrastructures and environments optimized for scale and reliability.'
		},
		{
			title: 'Performance Tuning',
			text: 'Streamlining existing systems, identifying bottlenecks, and optimizing applications for maximum efficiency.'
		},
		{
			title: 'Network Setup',
			text: 'Configuring secure networks and optimizing digital environments for both performance and robust data safety.'
		},
		{
			title: 'Data Strategy',
			text: 'Implementing reliable data backup strategies, integrity checks, and effective disaster recovery plans.'
		}
	];
</script>

<section class="section" id="service" aria-labelledby="services-title">
	<div class="container">
		<SectionHeading ghost="Services" title="What I Do" id="services-title" />

		<ul class="grid">
			{#each services as service, i (service.title)}
				<li class="card" use:reveal={(i % 3) * 100}>
					<h3>{service.title}</h3>
					<p>{service.text}</p>
				</li>
			{/each}
		</ul>
	</div>
</section>

<style>
	.grid {
		display: grid;
		grid-template-columns: repeat(auto-fill, minmax(min(100%, 19rem), 1fr));
		gap: var(--space-5);
		margin: 0;
		padding: 0;
		list-style: none;
	}
	.card {
		padding: var(--space-5);
		border: 1px solid var(--line);
		border-top: 3px solid var(--accent);
		border-radius: var(--radius);
		background: var(--bg);
	}
	h3 {
		margin-bottom: var(--space-2);
		font-size: var(--text-lg);
	}
	p {
		margin: 0;
		color: var(--muted);
	}
</style>
