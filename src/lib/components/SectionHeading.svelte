<script lang="ts">
	interface Props {
		/** Big decorative outline word behind the heading. */
		ghost: string;
		title: string;
		/** id placed on the <h2>, so sections can use aria-labelledby. */
		id?: string;
	}

	let { ghost, title, id }: Props = $props();
</script>

<div class="section-heading">
	<span class="ghost" aria-hidden="true">{ghost}</span>
	<h2 {id}>{title}</h2>
</div>

<style>
	.section-heading {
		position: relative;
		display: flex;
		align-items: center;
		justify-content: center;
		min-height: clamp(4.5rem, 14vw, 8rem);
		margin-bottom: var(--space-6);
		text-align: center;
	}
	.ghost {
		position: absolute;
		inset: 0;
		display: flex;
		align-items: center;
		justify-content: center;
		font-size: clamp(3rem, 13vw, 7.5rem);
		font-weight: 900;
		line-height: 1;
		letter-spacing: -0.02em;
		text-transform: uppercase;
		white-space: nowrap;
		color: transparent;
		-webkit-text-stroke: 1px var(--line-strong);
		user-select: none;
		pointer-events: none;
	}
	h2 {
		position: relative;
		margin: 0;
		font-size: clamp(1.4rem, 1rem + 1.6vw, 2.1rem);
		letter-spacing: 0.04em;
		text-transform: uppercase;
		color: var(--accent);
	}
</style>
