<script lang="ts">
	import { projects } from '$lib/content/projects';
	const items = projects.filter(p => p.category === 'educational');
</script>

<svelte:head>
	<title>Educational Projects | vBordea</title>
	<meta name="description" content="Bachelor and Master academic thesis projects by vBordea." />
</svelte:head>

<style>
	.page-container {
		padding-top: 100px;
		padding-bottom: 60px;
	}
	.project-grid {
		display: grid;
		grid-template-columns: repeat(1, 1fr);
		gap: 24px;
	}
	@media (min-width: 576px) {
		.project-grid {
			grid-template-columns: repeat(2, 1fr);
		}
	}
	@media (min-width: 992px) {
		.project-grid {
			grid-template-columns: repeat(3, 1fr);
		}
	}
	.card-item {
		display: flex;
		flex-direction: column;
		background: #ffffff;
		border: 1px solid #e9ecef;
		border-radius: 12px;
		overflow: hidden;
		transition: transform 0.25s ease, box-shadow 0.25s ease;
		text-decoration: none;
		color: inherit;
	}
	.card-item:hover {
		transform: translateY(-4px);
		box-shadow: 0 10px 20px rgba(0,0,0,0.08);
		text-decoration: none;
		color: inherit;
	}
	.img-wrapper {
		width: 100%;
		height: 200px;
		background-color: #f8f9fa;
		display: flex;
		align-items: center;
		justify-content: center;
		overflow: hidden;
	}
	.img-wrapper img {
		width: 100%;
		height: 100%;
		object-fit: cover;
	}
	.card-content {
		padding: 20px;
		display: flex;
		flex-direction: column;
		flex-grow: 1;
	}
	.card-content h3 {
		font-size: 1.15rem;
		font-weight: 700;
		color: #1a1a1a;
		margin-bottom: 8px;
	}
	.card-content p {
		font-size: 0.9rem;
		color: #6c757d;
		line-height: 1.5;
		margin-bottom: 0;
	}

	@media (max-width: 899px) {
		.page-container {
			width: 100%;
			max-width: 100%;
			padding: 90px 15px 40px;
			box-sizing: border-box;
		}

		.page-container h2 {
			font-size: 1.8rem;
			line-height: 1.25;
			margin-bottom: 10px !important;
		}

		.page-container > p {
			font-size: 0.95rem;
			line-height: 1.5;
			margin-bottom: 30px !important;
			padding: 0 10px;
		}

		.project-grid {
			grid-template-columns: 1fr;
			gap: 18px;
			width: 100%;
		}

		.card-item {
			width: 100%;
			min-width: 0;
			border-radius: 10px;
		}

		.img-wrapper {
			width: 100%;
			height: 200px;
		}

		.img-wrapper img {
			width: 100%;
			height: 100%;
			object-fit: cover;
		}

		.card-content {
			padding: 16px;
		}

		.card-content h3 {
			font-size: 1.1rem;
			line-height: 1.3;
			margin-bottom: 6px;
		}

		.card-content p {
			font-size: 0.9rem;
			line-height: 1.5;
		}
	}
</style>

<div class="container page-container">
	<h2 class="text-center font-weight-bold mb-2">Educational Projects</h2>
	<p class="text-center text-muted mb-5">Academic thesis work from West University of Timișoara.</p>

	<div class="project-grid">
		{#each items as project}
			<a href="/educational-projects/{project.slug}" class="card-item">
				<div class="img-wrapper">
					<img src={project.thumbnail} alt={project.title} />
				</div>
				<div class="card-content">
					<h3>{project.title}</h3>
					<p>{project.summary}</p>
				</div>
			</a>
		{/each}
	</div>
</div>
