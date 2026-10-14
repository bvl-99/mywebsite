<script lang="ts">
	import { onMount } from 'svelte';

	let { text }: { text: string } = $props();

	const words = $derived(text.split(' '));

	let element: HTMLElement | undefined = $state();
	// 1 = fully visible. Only becomes a scroll-driven value when JS runs and motion is allowed.
	let progress = $state(1);
	let enabled = $state(false);
	let frame = 0;

	function update() {
		frame = 0;
		if (!element) return;
		const rect = element.getBoundingClientRect();
		const vh = window.innerHeight;
		const start = vh * 0.85;
		const end = vh * 0.35;
		progress = Math.max(0, Math.min(1, (start - rect.top) / (start - end)));
	}

	function onScroll() {
		if (enabled && !frame) {
			frame = requestAnimationFrame(update);
		}
	}

	onMount(() => {
		if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
		enabled = true;
		update();
		return () => {
			if (frame) cancelAnimationFrame(frame);
		};
	});
</script>

<svelte:window onscroll={onScroll} />

<p class="karaoke" bind:this={element}>
	{#each words as word, i (i)}
		<span class="word" style:opacity={progress * words.length > i ? 1 : 0.3}>{word}</span>{' '}
	{/each}
</p>

<style>
	.karaoke {
		font-size: var(--text-xl);
		line-height: 1.6;
		color: var(--ink);
		margin: 0;
	}
	.word {
		transition: opacity 0.25s cubic-bezier(0.4, 0, 0.2, 1);
	}
</style>
