/**
 * Svelte action: fades an element in the first time it scrolls into view.
 * Usage: <div use:reveal> or <div use:reveal={150}> (delay in ms).
 * The hidden state is only applied once JavaScript runs (class added here), so content is
 * visible without JS, and prefers-reduced-motion disables the effect (see base.css).
 */
export function reveal(node: HTMLElement, delay: number = 0) {
	node.classList.add('reveal');
	node.style.setProperty('--delay', `${delay}ms`);

	if (typeof IntersectionObserver === 'undefined') {
		node.classList.add('is-visible');
		return;
	}

	const observer = new IntersectionObserver(
		(entries) => {
			for (const entry of entries) {
				if (entry.isIntersecting) {
					node.classList.add('is-visible');
					observer.disconnect();
				}
			}
		},
		{ threshold: 0.15, rootMargin: '0px 0px -40px 0px' }
	);
	observer.observe(node);

	return {
		destroy() {
			observer.disconnect();
		}
	};
}
