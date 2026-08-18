export interface Project {
	slug: string;
	title: string;
	category: 'personal' | 'educational' | 'certification';
	summary: string;
	thumbnail: string;
	detailImage?: string;
	descriptionHtml: string;
}

export const projects: Project[] = [
	{
		slug: 'TikTokGame',
		title: 'TikTok Interactive Live Game',
		category: 'personal',
		summary: 'Real-time API-driven live trivia experience built with Python and TikTok Live API.',
		thumbnail: '/assets/img/triviaquizloading.webp',
		detailImage: '/assets/img/triviaquizloading.webp',
		descriptionHtml: `
			<p>Engineered an interactive live-streaming game for TikTok Live that processes user commentary in real time without relying on traditional video streams. Built using Python, the system captures screen interactions and streams dynamic visual updates to viewers.</p>

			<h4 class="h5 font-weight-bold mt-4 mb-2">Technical Implementation</h4>
			<p>The platform listens to live comment feeds using API sockets, parsing viewer responses against current quiz challenges and image puzzles. System mechanics track usernames, profile images, and precise response latency.</p>

			<div class="text-center my-4">
				<img src="/assets/img/triviaquizgamedemo.webp" alt="Game Demo Interface" class="img-fluid rounded shadow-sm" style="max-width: 320px;" />
			</div>

			<h4 class="h5 font-weight-bold mt-4 mb-2">Real-Time Leaderboard Engine</h4>
			<p>Responses are scored instantaneously. The fastest correct answers render live on screen alongside player profile pictures, maintaining an active top-five leaderboard that drives viewer competition and stream retention.</p>

			<div class="text-center my-4">
				<img src="/assets/img/triviaquizgamelive.webp" alt="TikTok Live Demonstration" class="img-fluid rounded shadow-sm" style="max-width: 520px;" />
			</div>

			<p>This project highlights real-time data ingestion, event-driven socket handling, and social media API integration to create low-latency interactive media.</p>
		`
	},
	{
		slug: 'RFIDsecurity',
		title: 'NFC Access Control & RFID Emulation',
		category: 'personal',
		summary: 'Security research investigating 13.56 MHz RFID emulation on Android NFC architectures.',
		thumbnail: '/assets/img/rfid125khz.webp',
		detailImage: '/assets/img/rfid125khz.webp',
		descriptionHtml: `
			<p>An applied cybersecurity research project exploring smartphone-based access control emulation (13.56 MHz High Frequency) to replace legacy physical RFID badges with Android devices.</p>

			<h4 class="h5 font-weight-bold mt-4 mb-2">Protocol & Architecture Analysis</h4>
			<p>Investigated Android Host Card Emulation (HCE) alongside ISO/IEC 14443 and MIFARE standards. Analyzed hardware layer constraints, comparing HF (13.56 MHz) compatibility with non-emulatable LF (125 kHz EM4100) systems.</p>

			<h4 class="h5 font-weight-bold mt-4 mb-2">Security Frameworks & Mobile Constraints</h4>
			<p>Identified restrictions enforced by mobile operating systems regarding Host Card Emulation. While payment card emulation utilizes the hardware Secure Element (SE) / Trusted Execution Environment (TEE), proprietary access control protocols often lack standardized OS-level HCE APIs for challenge-response authentication.</p>

			<h4 class="h5 font-weight-bold mt-4 mb-2">Risk Evaluation</h4>
			<p>Evaluated system-level modifications (rooting) required to directly control the NFC stack, assessing associated attack vectors including compromised keystores, malware exposure, and potential card cloning threats.</p>
		`
	},
	{
		slug: 'learn_and_play_for_kids',
		title: 'Learn & Play for Kids',
		category: 'educational',
		summary: 'Bachelor Thesis: Gamified, interactive Android learning system engineered in Java for early childhood education.',
		thumbnail: '/assets/img/learn_and_play_for_kids.webp',
		detailImage: '/assets/img/learn_and_play_for_kids.webp',
		descriptionHtml: `
			<p class="lead">Developed as my Bachelor’s Thesis at the West University of Timișoara, <em>Learn and Play for Kids</em> is an Android educational suite engineered to replace static physical worksheets with an interactive, screen-assisted learning platform during remote learning scenarios.</p>

			<h4 class="h5 font-weight-bold mt-4 mb-2">Architectural Highlights & Tech Stack</h4>
			<p>Built natively in <strong>Java</strong> using <strong>Android Studio</strong>, the platform leverages modular Android Activities, custom ViewHolders, dynamic Intents, and RecyclerView adapters to deliver fluid, low-latency UI transitions across varied screen densities.</p>

			<ul class="pl-3 mb-4">
				<li><strong>Core Learning Modules:</strong> Numeracy, literacy phonics, geometric shape recognition, drawing canvas with custom Bitmap drawing caches, musical instrument synthesis, and animal taxonomy.</li>
				<li><strong>Gamified Cognitive Engine:</strong> Features score-tracking logic, audio-based instrument matching via Android <code>MediaPlayer</code>, dynamic Lottie UI animations, and randomized problem generation (High-Low comparison, object counting, initial-letter association, and difficulty-scalable math puzzles).</li>
				<li><strong>Data & File System Handling:</strong> Integrated MediaStore content resolvers for local gallery exporting and runtime permission management.</li>
			</ul>
		`
	},
	{
		slug: 'image_reconstruction',
		title: 'AI Image Reconstruction in Cybersecurity',
		category: 'educational',
		summary: 'Master Thesis: Comparative analysis of GANs, Diffusion Models, VAEs, and Transformers for digital forensics.',
		thumbnail: '/assets/img/image_reconstruction.webp',
		detailImage: '/assets/img/image_reconstruction.webp',
		descriptionHtml: `
			<p class="lead">Engineered as my Master’s Dissertation in Cybersecurity at the West University of Timișoara, this research evaluates state-of-the-art Deep Learning generative architectures for digital forensics, tamper restoration, deepfake detection, and synthetic forensic dataset generation.</p>

			<h4 class="h5 font-weight-bold mt-4 mb-2">Evaluated Architectures & Models</h4>
			<p>The research benchmarked four primary generative paradigms using PyTorch and CUDA acceleration on high-resolution datasets (FFHQ, LAION-5B, and ImageNet):</p>
			<ul class="pl-3 mb-3">
				<li><strong>StyleGAN3:</strong> Alias-free generative adversarial synthesis optimized for high-fidelity facial reconstruction ($FID = 2.89$, $PSNR = 28.1\\text{ dB}$).</li>
				<li><strong>Stable Diffusion:</strong> Latent diffusion denoising algorithms evaluated for contextually guided forensic image inpainting and restoration.</li>
				<li><strong>VQ-VAE-2:</strong> Vector-quantized hierarchical variational autoencoders for discrete latent space representation and anomaly detection.</li>
				<li><strong>DALL-E:</strong> Transformer-based autoregressive models evaluated for text-to-image synthesis and contextual accuracy.</li>
			</ul>

			<h4 class="h5 font-weight-bold mt-4 mb-2">Quantitative Metrics & Empirical Analysis</h4>
			<p>Algorithms were benchmarked across standardized computer vision metrics: <strong>Fréchet Inception Distance (FID)</strong>, <strong>Inception Score (IS)</strong>, <strong>Structural Similarity Index (SSIM)</strong>, and <strong>Peak Signal-to-Noise Ratio (PSNR)</strong> to determine trade-offs between mathematical reconstruction accuracy, generative fidelity, and computational overhead.</p>
		`
	},
	{
		slug: 'bitcoin',
		title: 'Bitcoin & Open Blockchains Workshop',
		category: 'certification',
		summary: 'Professional workshop certification on Bitcoin consensus protocols and open blockchains.',
		thumbnail: '/assets/img/Introduction_to_Bitcoin.webp',
		detailImage: '/assets/img/Introduction_to_Bitcoin.webp',
		descriptionHtml: `
			<p>Professional technical workshop led by Andreas M. Antonopoulos covering core cryptographic primitives, decentralized consensus models, transaction script validation, and network security dynamics in open blockchain protocols.</p>
		`
	},
	{
		slug: 'cybersecurity',
		title: 'Introduction to Cybersecurity',
		category: 'certification',
		summary: 'Cisco Networking Academy certification covering network defense and security foundations.',
		thumbnail: '/assets/img/Introduction_to_cybersecurity.webp',
		detailImage: '/assets/img/Introduction_to_cybersecurity.webp',
		descriptionHtml: `
			<p>Certified by Cisco Networking Academy, covering core network security architecture, firewall defenses, encryption techniques, vulnerability mitigation, and security operational risk management.</p>
		`
	}
];
