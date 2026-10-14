<script lang="ts">
	interface Item {
		question: string;
		/** Trusted HTML written in the page that uses this component. */
		answer: string;
	}

	let { items }: { items: Item[] } = $props();
</script>

<div class="accordion">
	{#each items as item, i (item.question)}
		<details open={i === 0}>
			<summary>{item.question}</summary>
			<div class="answer">{@html item.answer}</div>
		</details>
	{/each}
</div>

<style>
	details {
		border: 1px solid var(--line);
		border-radius: var(--radius-sm);
		background: var(--bg);
		margin-bottom: var(--space-3);
	}
	summary {
		display: flex;
		align-items: center;
		justify-content: space-between;
		gap: var(--space-4);
		padding: var(--space-4) var(--space-5);
		font-weight: 600;
		cursor: pointer;
		list-style: none;
	}
	summary::-webkit-details-marker {
		display: none;
	}
	summary::after {
		content: '+';
		font-size: 1.4rem;
		line-height: 1;
		color: var(--accent);
	}
	details[open] > summary::after {
		content: '–';
	}
	summary:hover {
		color: var(--accent);
	}
	.answer {
		padding: 0 var(--space-5) var(--space-5);
		color: var(--ink-soft);
	}
</style>
