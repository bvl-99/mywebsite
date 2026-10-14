<script lang="ts">
	import { socialIcons } from '$lib/icons';
	import { site } from '$lib/site';
</script>

<ul class="social" aria-label="Social profiles">
	{#each site.socials as social (social.href)}
		{@const icon = socialIcons[social.label]}
		<li>
			<a
				class="social__link"
				href={social.href}
				rel="me noopener"
				aria-label={social.label}
				title={social.label}
				data-umami-event="social-click"
				data-umami-event-network={social.label}
			>
				{#if icon}
					<svg viewBox={icon.viewBox} width="20" height="20" fill="currentColor" aria-hidden="true">
						<path d={icon.path} />
					</svg>
				{:else}
					{social.label}
				{/if}
			</a>
		</li>
	{/each}
</ul>

<style>
	.social {
		display: flex;
		flex-wrap: wrap;
		justify-content: center;
		gap: var(--space-3);
		margin: 0;
		padding: 0;
		list-style: none;
	}
	.social__link {
		display: inline-flex;
		align-items: center;
		justify-content: center;
		width: 2.75rem;
		height: 2.75rem;
		border-radius: 50%;
		background: #fff;
		color: var(--ink);
		transition:
			transform 0.25s ease,
			box-shadow 0.25s ease,
			color 0.25s ease;
	}
	.social__link:hover {
		transform: translateY(-4px);
		box-shadow: 0 6px 14px rgb(0 0 0 / 35%);
		color: var(--accent);
	}
</style>
