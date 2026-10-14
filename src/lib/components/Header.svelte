<script lang="ts">
	import { afterNavigate } from '$app/navigation';
	import { nav, site } from '$lib/site';

	let open = $state(false);

	afterNavigate(() => {
		open = false;
	});

	function onKeydown(event: KeyboardEvent) {
		if (event.key === 'Escape' && open) {
			open = false;
		}
	}
</script>

<svelte:window onkeydown={onKeydown} />

<header class="site-header">
	<div class="container bar">
		<a class="brand" href="/" aria-label="{site.shortName} — home">
			<span class="brand__v">v</span>Bordea
		</a>

		<button
			type="button"
			class="menu-toggle"
			aria-expanded={open}
			aria-controls="site-nav"
			onclick={() => (open = !open)}
		>
			<span class="visually-hidden">{open ? 'Close menu' : 'Open menu'}</span>
			<span class="menu-toggle__bars" aria-hidden="true"></span>
		</button>

		<nav id="site-nav" class="nav" class:open aria-label="Main">
			<ul>
				{#each nav as item (item.href)}
					<li><a href={item.href}>{item.label}</a></li>
				{/each}
			</ul>
			<a
				class="btn btn--ghost cv"
				href={site.cvPath}
				download="Valentin Bordea - CV.pdf"
				data-umami-event="download-cv"
				data-umami-event-location="header"
			>
				Download CV
			</a>
		</nav>
	</div>
</header>

<style>
	.site-header {
		position: sticky;
		top: 0;
		z-index: 50;
		background: rgb(255 255 255 / 94%);
		backdrop-filter: blur(8px);
		border-bottom: 1px solid var(--line);
	}
	.bar {
		display: flex;
		align-items: center;
		justify-content: space-between;
		gap: var(--space-4);
		min-height: var(--header-h);
		flex-wrap: wrap;
	}
	.brand {
		font-size: 1.6rem;
		font-weight: 800;
		letter-spacing: -0.02em;
		color: var(--ink);
		text-decoration: none;
	}
	.brand__v {
		color: var(--accent);
	}

	.nav {
		display: flex;
		align-items: center;
		gap: var(--space-5);
	}
	.nav ul {
		display: flex;
		gap: var(--space-5);
		margin: 0;
		padding: 0;
		list-style: none;
	}
	.nav li a {
		display: inline-block;
		padding: 0.5rem 0;
		color: var(--ink);
		font-weight: 500;
		text-decoration: none;
		border-bottom: 2px solid transparent;
	}
	.nav li a:hover {
		color: var(--accent);
		border-bottom-color: var(--accent);
	}
	.cv {
		min-height: 2.5rem;
		padding-block: 0.4rem;
	}

	.menu-toggle {
		display: none;
		width: 2.75rem;
		height: 2.75rem;
		align-items: center;
		justify-content: center;
		background: transparent;
		border: 1px solid var(--line-strong);
		border-radius: var(--radius-sm);
		cursor: pointer;
	}
	.menu-toggle__bars,
	.menu-toggle__bars::before,
	.menu-toggle__bars::after {
		display: block;
		width: 1.25rem;
		height: 2px;
		background: var(--ink);
		content: '';
		position: relative;
	}
	.menu-toggle__bars::before {
		position: absolute;
		top: -6px;
	}
	.menu-toggle__bars::after {
		position: absolute;
		top: 6px;
	}

	/* Collapse into a toggled panel on narrow screens (only when JS is available). */
	@media (max-width: 56rem) {
		:global(.js) .menu-toggle {
			display: inline-flex;
		}
		:global(.js) .nav {
			display: none;
			flex-basis: 100%;
			flex-direction: column;
			align-items: stretch;
			padding-bottom: var(--space-4);
		}
		:global(.js) .nav.open {
			display: flex;
		}
		:global(.js) .nav ul {
			flex-direction: column;
			gap: 0;
		}
		:global(.js) .nav li a {
			display: block;
			padding: 0.85rem 0;
			border-bottom: 1px solid var(--line);
		}
		.cv {
			align-self: flex-start;
		}
		.nav {
			flex-wrap: wrap;
			gap: var(--space-3);
		}
		.nav ul {
			flex-wrap: wrap;
			gap: var(--space-3) var(--space-5);
		}
	}
</style>
