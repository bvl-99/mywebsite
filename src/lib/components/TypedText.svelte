<script lang="ts">
	import { onMount } from 'svelte';

	let { words }: { words: string[] } = $props();

	let text = $state('');
	let animated = $state(false);

	onMount(() => {
		if (window.matchMedia('(prefers-reduced-motion: reduce)').matches || words.length === 0) {
			return;
		}

		animated = true;
		let wordIndex = 0;
		let charIndex = 0;
		let deleting = false;
		let timer: ReturnType<typeof setTimeout>;

		function tick() {
			const word = words[wordIndex];

			if (!deleting) {
				charIndex += 1;
				text = word.slice(0, charIndex);
				if (charIndex === word.length) {
					deleting = true;
					timer = setTimeout(tick, 1600);
					return;
				}
				timer = setTimeout(tick, 90);
			} else {
				charIndex -= 1;
				text = word.slice(0, charIndex);
				if (charIndex === 0) {
					deleting = false;
					wordIndex = (wordIndex + 1) % words.length;
					timer = setTimeout(tick, 300);
					return;
				}
				timer = setTimeout(tick, 35);
			}
		}

		tick();
		return () => clearTimeout(timer);
	});
</script>

<!-- Screen readers get the full list once; the typing animation is decorative. -->
<span class="visually-hidden">{words.join(', ')}</span>
<span class="typed" aria-hidden="true">
	{animated ? text : words.join(' · ')}{#if animated}<span class="caret"></span>{/if}
</span>

<style>
	.typed {
		display: inline-block;
		min-height: 1.3em;
	}
	.caret {
		display: inline-block;
		width: 2px;
		height: 1em;
		margin-left: 3px;
		vertical-align: -0.12em;
		background: currentColor;
		animation: blink 1s steps(1) infinite;
	}
	@keyframes blink {
		50% {
			opacity: 0;
		}
	}
</style>
