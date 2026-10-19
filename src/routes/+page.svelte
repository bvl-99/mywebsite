<script lang="ts">
	import Seo from '$lib/components/Seo.svelte';
	import Hero from '$lib/components/home/Hero.svelte';
	import About from '$lib/components/home/About.svelte';
	import Education from '$lib/components/home/Education.svelte';
	import Portfolio from '$lib/components/home/Portfolio.svelte';
	import Skills from '$lib/components/home/Skills.svelte';
	import Services from '$lib/components/home/Services.svelte';
	import Contact from '$lib/components/home/Contact.svelte';
	import { site } from '$lib/site';

	// Structured data: only facts that are already stated on the site.
	const person = {
		'@type': 'Person',
		name: site.name,
		url: site.url,
		jobTitle: site.jobTitle,
		email: site.email,
		image: `${site.url}/assets/img/profile.webp`,
		alumniOf: { '@type': 'CollegeOrUniversity', name: 'West University of Timișoara' },
		knowsAbout: ['Web development', 'Cybersecurity', 'Svelte', 'TypeScript'],
		sameAs: site.socials.map((s) => s.href)
	};

	// Tells Google the site's name (shown above the result) in addition to the person data.
	const jsonLd = {
		'@context': 'https://schema.org',
		'@graph': [
			person,
			{
				'@type': 'WebSite',
				name: site.name,
				alternateName: ['Valentin Bordea', site.shortName],
				url: `${site.url}/`
			}
		]
	};
</script>

<Seo title={site.homeTitle} description={site.description} path="/" {jsonLd} />

<Hero />
<About />
<Education />
<Portfolio />
<Skills />
<Services />
<Contact />
