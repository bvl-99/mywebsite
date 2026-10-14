<script lang="ts">
	import SectionHeading from '$lib/components/SectionHeading.svelte';
	import { reveal } from '$lib/actions';

	const groups = [
		{
			title: 'Frontend',
			items: ['HTML', 'CSS', 'JavaScript', 'TypeScript', 'Svelte']
		},
		{
			title: 'Web Engineering',
			items: [
				'Responsive Design',
				'Accessibility',
				'Performance',
				'REST / JSON',
				'Forms & Validation',
				'SEO'
			]
		},
		{
			title: 'Development Workflow',
			items: ['Git', 'GitHub', 'npm', 'CI/CD', 'GitHub Actions', 'Automated Workflows']
		},
		{
			title: 'Infrastructure',
			items: ['DNS', 'Cloudflare', 'SSL/TLS', 'Hosting', 'Virtual Machines', 'Basic Docker']
		},
		{
			title: 'Security',
			items: ['Web Security Principles', 'Secure Development', 'Cybersecurity']
		},
		{
			title: 'Platforms & CMS',
			items: ['WordPress', 'Cornerstone']
		},
		{
			title: 'Development Approach',
			items: ['Problem Solving', 'Debugging', 'Continuous Learning', 'AI-Assisted Development']
		}
	];
</script>

<section class="section section--soft" id="skill" aria-labelledby="skills-title">
	<div class="container">
		<SectionHeading ghost="Skills" title="Tech Stack" id="skills-title" />

		<ul class="grid">
			{#each groups as group, i (group.title)}
				<li class="item" use:reveal={(i % 2) * 100}>
					<span class="num" aria-hidden="true">{String(i + 1).padStart(2, '0')}</span>
					<div>
						<h3>{group.title}</h3>
						<p>{group.items.join(' · ')}</p>
					</div>
				</li>
			{/each}
		</ul>
	</div>
</section>

<style>
	.grid {
		display: grid;
		gap: 0 var(--space-7);
		margin: 0;
		padding: 0;
		list-style: none;
	}
	@media (min-width: 48rem) {
		.grid {
			grid-template-columns: 1fr 1fr;
		}
	}
	.item {
		display: flex;
		gap: var(--space-4);
		padding: var(--space-5) 0;
		border-bottom: 1px solid var(--line-strong);
	}
	.num {
		min-width: 2.25rem;
		font-size: var(--text-sm);
		font-weight: 700;
		letter-spacing: 0.05em;
		color: var(--accent);
		padding-top: 0.3rem;
	}
	h3 {
		margin-bottom: var(--space-2);
		font-size: var(--text-lg);
	}
	p {
		margin: 0;
		color: var(--muted);
		line-height: 1.7;
	}
</style>
