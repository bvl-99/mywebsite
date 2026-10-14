/**
 * All portfolio content lives here.
 *
 * To add a project:
 *   1. Drop its image(s) into static/assets/img/ (WebP, ideally under ~100 KB).
 *   2. Add an entry to `projects` below. Pick a unique `slug` (it becomes the URL) and a `category`.
 *   3. Run `npm run dev` and open /personal-projects (or the matching list page).
 * The list pages, detail pages, home page "Featured" grid and sitemap pick it up automatically.
 *
 * `descriptionHtml` is trusted HTML written by you (it is rendered as-is). Useful building blocks:
 *   <p>, <h2> for sub-headings, <ul><li>, <p class="lead">, and
 *   <figure class="is-portrait|is-wide"><img src="/assets/img/x.webp" alt="…" width="…" height="…" loading="lazy" /></figure>
 */

export type ProjectCategory = 'personal' | 'educational' | 'certification';

export interface Project {
	slug: string;
	title: string;
	category: ProjectCategory;
	summary: string;
	thumbnail: string;
	detailImage?: string;
	/** Short technology / topic labels shown as chips. */
	tags?: string[];
	/** Show on the home page "Featured" grid. */
	featured?: boolean;
	/** Optional external links, e.g. { label: 'Source code', href: 'https://github.com/...' }. */
	links?: { label: string; href: string }[];
	descriptionHtml: string;
}

export interface CategoryInfo {
	/** URL segment: /personal-projects, /educational-projects, /certifications */
	path: string;
	title: string;
	/** Singular label used in "Back to …" and breadcrumbs. */
	backLabel: string;
	lead: string;
	description: string;
}

export const categories: Record<ProjectCategory, CategoryInfo> = {
	personal: {
		path: 'personal-projects',
		title: 'Personal Projects',
		backLabel: 'Personal Projects',
		lead: 'Engineering experiments, social API integrations, and mobile security analysis.',
		description:
			'Personal software engineering and security projects by Liviu-Valentin Bordea: real-time API integrations and mobile security research.'
	},
	educational: {
		path: 'educational-projects',
		title: 'Educational Projects',
		backLabel: 'Educational Projects',
		lead: 'Academic thesis work from West University of Timișoara.',
		description:
			'Bachelor’s and Master’s thesis projects from West University of Timișoara: an educational Android app and AI image reconstruction for cybersecurity.'
	},
	certification: {
		path: 'certifications',
		title: 'Certifications',
		backLabel: 'Certifications',
		lead: 'Verified credentials in network architecture and open blockchain protocols.',
		description:
			'Professional certifications of Liviu-Valentin Bordea in cybersecurity (Cisco Networking Academy) and open blockchain protocols.'
	}
};

export const projects: Project[] = [
	{
		slug: 'TikTokGame',
		title: 'TikTok Interactive Live Game',
		category: 'personal',
		featured: true,
		summary: 'Real-time API-driven live trivia experience built with Python and TikTok Live API.',
		thumbnail: '/assets/img/thumb-TikTokGame.webp',
		detailImage: '/assets/img/triviaquizloading.webp',
		tags: ['Python', 'TikTok Live API', 'Real-time', 'Sockets'],
		descriptionHtml: `
			<p>Engineered an interactive live-streaming game for TikTok Live that processes user commentary in real time without relying on traditional video streams. Built using Python, the system captures screen interactions and streams dynamic visual updates to viewers.</p>

			<h2>Technical Implementation</h2>
			<p>The platform listens to live comment feeds using API sockets, parsing viewer responses against current quiz challenges and image puzzles. System mechanics track usernames, profile images, and precise response latency.</p>

			<figure class="is-portrait">
				<img src="/assets/img/triviaquizgamedemo.webp" alt="Game demo interface showing a quiz challenge on a phone-shaped screen" width="927" height="1848" loading="lazy" />
			</figure>

			<h2>Real-Time Leaderboard Engine</h2>
			<p>Responses are scored instantaneously. The fastest correct answers render live on screen alongside player profile pictures, maintaining an active top-five leaderboard that drives viewer competition and stream retention.</p>

			<figure class="is-wide">
				<img src="/assets/img/triviaquizgamelive.webp" alt="The game running live on TikTok with the leaderboard visible" width="1920" height="1080" loading="lazy" />
			</figure>

			<p>This project highlights real-time data ingestion, event-driven socket handling, and social media API integration to create low-latency interactive media.</p>
		`
	},
	{
		slug: 'RFIDsecurity',
		title: 'NFC Access Control & RFID Emulation',
		category: 'personal',
		featured: true,
		summary:
			'Security research investigating 13.56 MHz RFID emulation on Android NFC architectures.',
		thumbnail: '/assets/img/thumb-RFIDsecurity.webp',
		detailImage: '/assets/img/rfid125khz.webp',
		tags: ['Android NFC', 'Host Card Emulation', 'ISO/IEC 14443', 'MIFARE'],
		descriptionHtml: `
			<p>An applied cybersecurity research project exploring smartphone-based access control emulation (13.56 MHz High Frequency) to replace legacy physical RFID badges with Android devices.</p>

			<h2>Protocol &amp; Architecture Analysis</h2>
			<p>Investigated Android Host Card Emulation (HCE) alongside ISO/IEC 14443 and MIFARE standards. Analyzed hardware layer constraints, comparing HF (13.56 MHz) compatibility with non-emulatable LF (125 kHz EM4100) systems.</p>

			<h2>Security Frameworks &amp; Mobile Constraints</h2>
			<p>Identified restrictions enforced by mobile operating systems regarding Host Card Emulation. While payment card emulation utilizes the hardware Secure Element (SE) / Trusted Execution Environment (TEE), proprietary access control protocols often lack standardized OS-level HCE APIs for challenge-response authentication.</p>

			<h2>Risk Evaluation</h2>
			<p>Evaluated system-level modifications (rooting) required to directly control the NFC stack, assessing associated attack vectors including compromised keystores, malware exposure, and potential card cloning threats.</p>
		`
	},
	{
		slug: 'learn_and_play_for_kids',
		title: 'Learn & Play for Kids',
		category: 'educational',
		summary:
			'Bachelor Thesis: Gamified, interactive Android learning system engineered in Java for early childhood education.',
		thumbnail: '/assets/img/thumb-learn_and_play_for_kids.webp',
		detailImage: '/assets/img/learn_and_play_for_kids.webp',
		tags: ['Java', 'Android Studio', 'RecyclerView', 'Lottie'],
		descriptionHtml: `
			<p class="lead">Developed as my Bachelor’s Thesis at the West University of Timișoara, <em>Learn and Play for Kids</em> is an Android educational suite engineered to replace static physical worksheets with an interactive, screen-assisted learning platform during remote learning scenarios.</p>

			<h2>Architectural Highlights &amp; Tech Stack</h2>
			<p>Built natively in <strong>Java</strong> using <strong>Android Studio</strong>, the platform leverages modular Android Activities, custom ViewHolders, dynamic Intents, and RecyclerView adapters to deliver fluid, low-latency UI transitions across varied screen densities.</p>

			<ul>
				<li><strong>Core Learning Modules:</strong> Numeracy, literacy phonics, geometric shape recognition, drawing canvas with custom Bitmap drawing caches, musical instrument synthesis, and animal taxonomy.</li>
				<li><strong>Gamified Cognitive Engine:</strong> Features score-tracking logic, audio-based instrument matching via Android <code>MediaPlayer</code>, dynamic Lottie UI animations, and randomized problem generation (High-Low comparison, object counting, initial-letter association, and difficulty-scalable math puzzles).</li>
				<li><strong>Data &amp; File System Handling:</strong> Integrated MediaStore content resolvers for local gallery exporting and runtime permission management.</li>
			</ul>
		`
	},
	{
		slug: 'image_reconstruction',
		title: 'AI Image Reconstruction in Cybersecurity',
		category: 'educational',
		summary:
			'Master Thesis: Comparative analysis of GANs, Diffusion Models, VAEs, and Transformers for digital forensics.',
		thumbnail: '/assets/img/thumb-image_reconstruction.webp',
		detailImage: '/assets/img/image_reconstruction.webp',
		tags: ['PyTorch', 'CUDA', 'GANs', 'Diffusion models', 'Digital forensics'],
		descriptionHtml: `
			<p class="lead">Engineered as my Master’s Dissertation in Cybersecurity at the West University of Timișoara, this research evaluates state-of-the-art Deep Learning generative architectures for digital forensics, tamper restoration, deepfake detection, and synthetic forensic dataset generation.</p>

			<h2>Evaluated Architectures &amp; Models</h2>
			<p>The research benchmarked four primary generative paradigms using PyTorch and CUDA acceleration on high-resolution datasets (FFHQ, LAION-5B, and ImageNet):</p>
			<ul>
				<li><strong>StyleGAN3:</strong> Alias-free generative adversarial synthesis optimized for high-fidelity facial reconstruction (FID 2.89, PSNR 28.1&nbsp;dB).</li>
				<li><strong>Stable Diffusion:</strong> Latent diffusion denoising algorithms evaluated for contextually guided forensic image inpainting and restoration.</li>
				<li><strong>VQ-VAE-2:</strong> Vector-quantized hierarchical variational autoencoders for discrete latent space representation and anomaly detection.</li>
				<li><strong>DALL-E:</strong> Transformer-based autoregressive models evaluated for text-to-image synthesis and contextual accuracy.</li>
			</ul>

			<h2>Quantitative Metrics &amp; Empirical Analysis</h2>
			<p>Algorithms were benchmarked across standardized computer vision metrics: <strong>Fréchet Inception Distance (FID)</strong>, <strong>Inception Score (IS)</strong>, <strong>Structural Similarity Index (SSIM)</strong>, and <strong>Peak Signal-to-Noise Ratio (PSNR)</strong> to determine trade-offs between mathematical reconstruction accuracy, generative fidelity, and computational overhead.</p>
		`
	},
	{
		slug: 'bitcoin',
		title: 'Bitcoin & Open Blockchains Workshop',
		category: 'certification',
		summary:
			'Professional workshop certification on Bitcoin consensus protocols and open blockchains.',
		thumbnail: '/assets/img/thumb-bitcoin.webp',
		detailImage: '/assets/img/Introduction_to_Bitcoin.webp',
		tags: ['Bitcoin', 'Blockchain', 'Cryptography'],
		descriptionHtml: `
			<p>Professional technical workshop led by Andreas M. Antonopoulos covering core cryptographic primitives, decentralized consensus models, transaction script validation, and network security dynamics in open blockchain protocols.</p>
		`
	},
	{
		slug: 'cybersecurity',
		title: 'Introduction to Cybersecurity',
		category: 'certification',
		summary:
			'Cisco Networking Academy certification covering network defense and security foundations.',
		thumbnail: '/assets/img/thumb-cybersecurity.webp',
		detailImage: '/assets/img/Introduction_to_cybersecurity.webp',
		tags: ['Cisco Networking Academy', 'Network security'],
		descriptionHtml: `
			<p>Certified by Cisco Networking Academy, covering core network security architecture, firewall defenses, encryption techniques, vulnerability mitigation, and security operational risk management.</p>
		`
	}
];

export function projectsIn(category: ProjectCategory): Project[] {
	return projects.filter((p) => p.category === category);
}

export function findProject(category: ProjectCategory, slug: string): Project | undefined {
	return projects.find((p) => p.category === category && p.slug === slug);
}

export function projectPath(project: Project): string {
	return `/${categories[project.category].path}/${project.slug}`;
}
