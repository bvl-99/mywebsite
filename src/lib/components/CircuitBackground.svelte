<script lang="ts">
	import { onMount } from 'svelte';

	/**
	 * Decorative, interactive "circuit board" background for the hero.
	 * - Faint traces are drawn once; they light up around the pointer.
	 * - A few small pulses travel along the traces.
	 * - No dependencies. Pauses when off-screen, and is drawn once without motion when the
	 *   visitor prefers reduced motion. It is purely decorative (aria-hidden).
	 */

	let canvas: HTMLCanvasElement | undefined = $state();

	type Point = { x: number; y: number };
	type Trace = { pts: Point[]; cum: number[]; total: number };
	type Pulse = { trace: number; dist: number; speed: number };

	onMount(() => {
		const element = canvas;
		const ctx = element?.getContext('2d');
		const host = element?.parentElement;
		if (!element || !ctx || !host) return;

		const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

		const CELL = 44; // grid size in CSS px
		const SPOT = 190; // radius of the light around the pointer, in CSS px
		const TRACE = '11, 206, 175'; // accent-bright, as r, g, b

		let width = 0;
		let height = 0;
		let dpr = 1;
		let traces: Trace[] = [];
		let pulses: Pulse[] = [];
		const dim = document.createElement('canvas');
		const bright = document.createElement('canvas');
		const scratch = document.createElement('canvas');

		let frame = 0;
		let running = false;
		let last = 0;

		// Pointer state (CSS px, relative to the hero), eased so the glow glides.
		let targetX = 0;
		let targetY = 0;
		let x = 0;
		let y = 0;
		let active = false;
		let energy = 0;

		// Small seeded random generator: the layout is stable between renders.
		function random(seed: number) {
			let a = seed;
			return () => {
				a = (a + 0x6d2b79f5) | 0;
				let t = Math.imul(a ^ (a >>> 15), 1 | a);
				t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
				return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
			};
		}

		const DIRS: [number, number][] = [
			[1, 0],
			[1, 1],
			[0, 1],
			[-1, 1],
			[-1, 0],
			[-1, -1],
			[0, -1],
			[1, -1]
		];

		function buildTraces() {
			const rand = random(20261014);
			const cols = Math.ceil(width / CELL);
			const rows = Math.ceil(height / CELL);
			const count = Math.max(10, Math.round(cols * rows * 0.1));
			const result: Trace[] = [];

			for (let i = 0; i < count; i++) {
				let gx = Math.floor(rand() * (cols + 1));
				let gy = Math.floor(rand() * (rows + 1));
				let dir = Math.floor(rand() * 8);
				const pts: Point[] = [{ x: gx * CELL, y: gy * CELL }];
				const segments = 3 + Math.floor(rand() * 4);

				for (let s = 0; s < segments; s++) {
					const steps = 2 + Math.floor(rand() * 5);
					const [dx, dy] = DIRS[dir];
					const nx = gx + dx * steps;
					const ny = gy + dy * steps;
					if (nx < 0 || ny < 0 || nx > cols || ny > rows) break;
					gx = nx;
					gy = ny;
					pts.push({ x: gx * CELL, y: gy * CELL });
					// Circuit-style turn: 45 degrees left or right (or keep going straight).
					const turn = rand();
					if (turn < 0.4) dir = (dir + 1) % 8;
					else if (turn < 0.8) dir = (dir + 7) % 8;
				}

				if (pts.length < 2) continue;
				const cum = [0];
				for (let k = 1; k < pts.length; k++) {
					cum.push(cum[k - 1] + Math.hypot(pts[k].x - pts[k - 1].x, pts[k].y - pts[k - 1].y));
				}
				result.push({ pts, cum, total: cum[cum.length - 1] });
			}
			return result;
		}

		function drawLayer(target: HTMLCanvasElement, alpha: number, lineWidth: number) {
			target.width = Math.round(width * dpr);
			target.height = Math.round(height * dpr);
			const c = target.getContext('2d');
			if (!c) return;
			c.scale(dpr, dpr);
			c.lineJoin = 'round';
			c.lineCap = 'round';
			c.strokeStyle = `rgba(${TRACE}, ${alpha})`;
			c.fillStyle = `rgba(${TRACE}, ${alpha})`;
			c.lineWidth = lineWidth;

			for (const trace of traces) {
				c.beginPath();
				trace.pts.forEach((p, i) => (i === 0 ? c.moveTo(p.x, p.y) : c.lineTo(p.x, p.y)));
				c.stroke();

				// Pads at both ends: a ring at the start, a dot at the end.
				const first = trace.pts[0];
				const lastPt = trace.pts[trace.pts.length - 1];
				c.beginPath();
				c.arc(first.x, first.y, 4, 0, Math.PI * 2);
				c.stroke();
				c.beginPath();
				c.arc(lastPt.x, lastPt.y, 2.5, 0, Math.PI * 2);
				c.fill();
			}
		}

		function resize() {
			const rect = host!.getBoundingClientRect();
			width = Math.max(1, rect.width);
			height = Math.max(1, rect.height);
			dpr = Math.min(window.devicePixelRatio || 1, 2);
			element!.width = Math.round(width * dpr);
			element!.height = Math.round(height * dpr);

			traces = buildTraces();
			drawLayer(dim, 0.13, 1.5);
			drawLayer(bright, 0.65, 2);

			const size = Math.round(SPOT * 2 * dpr);
			scratch.width = size;
			scratch.height = size;

			pulses = traces
				.filter((_, i) => i % 5 === 0)
				.map((_, i) => ({
					trace: (i * 5) % traces.length,
					dist: Math.random() * 200,
					speed: 70 + Math.random() * 70
				}));

			draw(0);
		}

		function pointAt(trace: Trace, dist: number): Point {
			let i = 1;
			while (i < trace.cum.length - 1 && trace.cum[i] < dist) i++;
			const span = trace.cum[i] - trace.cum[i - 1] || 1;
			const t = (dist - trace.cum[i - 1]) / span;
			const a = trace.pts[i - 1];
			const b = trace.pts[i];
			return { x: a.x + (b.x - a.x) * t, y: a.y + (b.y - a.y) * t };
		}

		function draw(dt: number) {
			ctx!.setTransform(1, 0, 0, 1, 0, 0);
			ctx!.clearRect(0, 0, element!.width, element!.height);
			ctx!.drawImage(dim, 0, 0);
			if (reducedMotion) return;

			// Ease the glow towards the pointer.
			x += (targetX - x) * Math.min(1, dt * 12);
			y += (targetY - y) * Math.min(1, dt * 12);
			energy += ((active ? 1 : 0) - energy) * Math.min(1, dt * 5);

			if (energy > 0.01) {
				const r = SPOT * dpr;
				const cx = x * dpr;
				const cy = y * dpr;
				const x0 = Math.max(0, Math.floor(cx - r));
				const y0 = Math.max(0, Math.floor(cy - r));
				const sw = Math.min(element!.width, Math.ceil(cx + r)) - x0;
				const sh = Math.min(element!.height, Math.ceil(cy + r)) - y0;

				if (sw > 0 && sh > 0) {
					const s = scratch.getContext('2d')!;
					s.globalCompositeOperation = 'source-over';
					s.clearRect(0, 0, scratch.width, scratch.height);
					s.drawImage(bright, x0, y0, sw, sh, 0, 0, sw, sh);
					s.globalCompositeOperation = 'destination-in';
					const g = s.createRadialGradient(cx - x0, cy - y0, 0, cx - x0, cy - y0, r);
					g.addColorStop(0, 'rgba(0,0,0,1)');
					g.addColorStop(1, 'rgba(0,0,0,0)');
					s.fillStyle = g;
					s.fillRect(0, 0, sw, sh);
					ctx!.globalAlpha = energy;
					ctx!.drawImage(scratch, 0, 0, sw, sh, x0, y0, sw, sh);
					ctx!.globalAlpha = 1;
				}
			}

			// Pulses travelling along the traces.
			ctx!.save();
			ctx!.scale(dpr, dpr);
			for (const pulse of pulses) {
				const trace = traces[pulse.trace];
				if (!trace) continue;
				pulse.dist += pulse.speed * dt;
				if (pulse.dist > trace.total) {
					pulse.trace = Math.floor(Math.random() * traces.length);
					pulse.dist = 0;
					continue;
				}
				const p = pointAt(trace, pulse.dist);
				ctx!.fillStyle = `rgba(${TRACE}, 0.22)`;
				ctx!.beginPath();
				ctx!.arc(p.x, p.y, 7, 0, Math.PI * 2);
				ctx!.fill();
				ctx!.fillStyle = 'rgba(200, 255, 247, 0.95)';
				ctx!.beginPath();
				ctx!.arc(p.x, p.y, 2, 0, Math.PI * 2);
				ctx!.fill();
			}
			ctx!.restore();
		}

		function loop(now: number) {
			const dt = Math.min(0.05, (now - last) / 1000);
			last = now;
			draw(dt);
			frame = requestAnimationFrame(loop);
		}

		function start() {
			if (running || reducedMotion) return;
			running = true;
			last = performance.now();
			frame = requestAnimationFrame(loop);
		}

		function stop() {
			running = false;
			cancelAnimationFrame(frame);
		}

		function onMove(event: PointerEvent) {
			const rect = host!.getBoundingClientRect();
			targetX = event.clientX - rect.left;
			targetY = event.clientY - rect.top;
			if (!active) {
				x = targetX;
				y = targetY;
			}
			active = true;
		}

		function onLeave() {
			active = false;
		}

		const resizeObserver = new ResizeObserver(resize);
		resizeObserver.observe(host);

		const visibility = new IntersectionObserver((entries) => {
			if (entries[0]?.isIntersecting) start();
			else stop();
		});
		visibility.observe(host);

		if (!reducedMotion) {
			host.addEventListener('pointermove', onMove);
			host.addEventListener('pointerleave', onLeave);
		}

		return () => {
			stop();
			resizeObserver.disconnect();
			visibility.disconnect();
			host.removeEventListener('pointermove', onMove);
			host.removeEventListener('pointerleave', onLeave);
		};
	});
</script>

<canvas bind:this={canvas} aria-hidden="true"></canvas>

<style>
	canvas {
		position: absolute;
		inset: 0;
		width: 100%;
		height: 100%;
		pointer-events: none;
	}
</style>
