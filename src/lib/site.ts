// Single source of truth for site-wide facts. Edit here, not in components.
export const site = {
	url: 'https://valentinbordea.com',
	name: 'Liviu-Valentin Bordea',
	shortName: 'vBordea',
	jobTitle: 'Software Developer & Cybersecurity Specialist',
	description:
		'Portfolio of Liviu-Valentin Bordea, a software developer and cybersecurity specialist building fast, accessible and secure web applications.',
	email: 'contact@valentinbordea.com',
	cvPath: '/assets/docs/cv.pdf',
	defaultImage: '/assets/img/seo-social-banner.jpg',
	// Contact form endpoint (Formspree). The form ID is public by design; it is not a secret.
	formEndpoint: 'https://formspree.io/f/mldjnpjy',
	// Privacy-friendly analytics (Umami Cloud: no cookies, no personal data).
	// Paste your Website ID here to turn it on; leave empty to disable analytics entirely.
	analytics: {
		websiteId: 'db654816-c1c5-4e1c-9840-8c69578aa46a' as string,
		scriptUrl: 'https://cloud.umami.is/script.js'
	},
	socials: [
		{ label: 'X', href: 'https://x.com/bordea_valentin' },
		{ label: 'Facebook', href: 'https://www.facebook.com/liviu.valentinbordea' },
		{ label: 'LinkedIn', href: 'https://www.linkedin.com/in/bordeavalentin' },
		{ label: 'Instagram', href: 'https://www.instagram.com/valentinbordea/' }
	]
} as const;

export const nav = [
	{ label: 'About', href: '/#about' },
	{ label: 'Education', href: '/#qualification' },
	{ label: 'Portfolio', href: '/#portfolio' },
	{ label: 'Skills', href: '/#skill' },
	{ label: 'Services', href: '/#service' },
	{ label: 'Contact', href: '/#contact' }
] as const;
