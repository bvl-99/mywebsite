<script lang="ts">
	import { tick } from 'svelte';
	import { goto } from '$app/navigation';
	import { site } from '$lib/site';

	type Field = 'name' | 'email' | 'subject' | 'message';
	type Status = 'idle' | 'submitting' | 'success' | 'error';

	const MESSAGE_MAX = 750;

	const fields: Field[] = ['name', 'email', 'subject', 'message'];

	let values = $state<Record<Field, string>>({ name: '', email: '', subject: '', message: '' });
	let errors = $state<Record<Field, string>>({ name: '', email: '', subject: '', message: '' });
	let status = $state<Status>('idle');
	let successPanel: HTMLElement | undefined = $state();

	const validators: Record<Field, (value: string) => string> = {
		name: (v) => {
			if (!v) return 'Please enter your name.';
			if (v.length < 2) return 'Your name must contain at least 2 characters.';
			return '';
		},
		email: (v) => {
			if (!v) return 'Please enter your email address.';
			if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v))
				return 'Please enter a valid email address, such as jane@example.com.';
			return '';
		},
		subject: (v) => {
			if (!v) return 'Please enter a subject.';
			if (v.length < 3) return 'The subject must contain at least 3 characters.';
			return '';
		},
		message: (v) => {
			if (!v) return 'Please enter a message.';
			if (v.length < 10) return 'Your message must contain at least 10 characters.';
			if (v.length > MESSAGE_MAX) return `Your message is too long (max ${MESSAGE_MAX} characters).`;
			return '';
		}
	};

	function validate(field: Field): boolean {
		errors[field] = validators[field](values[field].trim());
		return errors[field] === '';
	}

	async function onsubmit(event: SubmitEvent) {
		event.preventDefault();
		if (status === 'submitting') return; // prevent duplicate submissions

		const form = event.currentTarget as HTMLFormElement;
		let firstInvalid: Field | undefined;
		for (const field of fields) {
			if (!validate(field) && !firstInvalid) firstInvalid = field;
		}
		if (firstInvalid) {
			document.getElementById(`contact-${firstInvalid}`)?.focus();
			return;
		}

		status = 'submitting';
		try {
			const response = await fetch(site.formEndpoint, {
				method: 'POST',
				body: new FormData(form),
				headers: { Accept: 'application/json' }
			});
			if (response.ok) {
				status = 'success';
				window.umami?.track('contact-submitted');
				values = { name: '', email: '', subject: '', message: '' };
				await tick();
				successPanel?.focus();
				await goto('/thank-you');
			} else {
				status = 'error';
			}
		} catch {
			status = 'error';
		}
	}
</script>

{#if status === 'success'}
	<div class="notice notice--success" role="status" tabindex="-1" bind:this={successPanel}>
		<h3>Thank you — your message was sent.</h3>
		<p>I'll get back to you as soon as I can, usually within a day or two.</p>
		<button type="button" class="btn btn--ghost" onclick={() => (status = 'idle')}>
			Send another message
		</button>
	</div>
{:else}
	<form action={site.formEndpoint} method="POST" novalidate {onsubmit}>
		<input type="hidden" name="_subject" value="New message from valentinbordea.com" />
		<!-- Honeypot: real visitors never see or fill this; bots often do. -->
		<div class="hp" inert>
			<label
				>Leave this field empty <input
					type="text"
					name="_gotcha"
					tabindex="-1"
					autocomplete="off"
				/></label
			>
		</div>

		<div class="row">
			<div class="field">
				<label class="visually-hidden" for="contact-name">Name</label>
				<input
					id="contact-name"
					placeholder="e.g., Jane Doe"
					name="name"
					type="text"
					autocomplete="name"
					required
					bind:value={values.name}
					onblur={() => validate('name')}
					aria-invalid={errors.name ? 'true' : undefined}
					aria-describedby={errors.name ? 'contact-name-error' : undefined}
				/>
				{#if errors.name}<p class="error" id="contact-name-error">{errors.name}</p>{/if}
			</div>

			<div class="field">
				<label class="visually-hidden" for="contact-email">Email</label>
				<input
					id="contact-email"
					placeholder="e.g., jane.doe@example.com"
					name="email"
					type="email"
					autocomplete="email"
					required
					bind:value={values.email}
					onblur={() => validate('email')}
					aria-invalid={errors.email ? 'true' : undefined}
					aria-describedby={errors.email ? 'contact-email-error' : undefined}
				/>
				{#if errors.email}<p class="error" id="contact-email-error">{errors.email}</p>{/if}
			</div>
		</div>

		<div class="field">
			<label class="visually-hidden" for="contact-subject">Subject</label>
			<input
				id="contact-subject"
				placeholder="e.g., Freelance Project Inquiry"
				name="subject"
				type="text"
				required
				bind:value={values.subject}
				onblur={() => validate('subject')}
				aria-invalid={errors.subject ? 'true' : undefined}
				aria-describedby={errors.subject ? 'contact-subject-error' : undefined}
			/>
			{#if errors.subject}<p class="error" id="contact-subject-error">{errors.subject}</p>{/if}
		</div>

		<div class="field">
			<label class="visually-hidden" for="contact-message">Message</label>
			<textarea
				id="contact-message"
				placeholder="Tell me briefly about your project or inquiry..."
				name="message"
				rows="6"
				maxlength={MESSAGE_MAX}
				required
				bind:value={values.message}
				onblur={() => validate('message')}
				aria-invalid={errors.message ? 'true' : undefined}
				aria-describedby={errors.message ? 'contact-message-error contact-message-hint' : 'contact-message-hint'}></textarea>
			<p class="hint" id="contact-message-hint">
				Max {MESSAGE_MAX} characters <span aria-hidden="true">·</span>
				<span class:over={values.message.length >= MESSAGE_MAX}>{values.message.length} / {MESSAGE_MAX}</span>
			</p>
			{#if errors.message}<p class="error" id="contact-message-error">{errors.message}</p>{/if}
		</div>

		{#if status === 'error'}
			<p class="notice notice--error" role="alert">
				Sorry, your message couldn't be sent. Please try again, or email me directly at
				<a href="mailto:{site.email}">{site.email}</a>.
			</p>
		{/if}

		<button class="btn" type="submit" disabled={status === 'submitting'}>
			{status === 'submitting' ? 'Sending…' : 'Send Message'}
		</button>
		<p class="alt">
			Prefer email? Write to <a href="mailto:{site.email}">{site.email}</a>.
		</p>
	</form>
{/if}

<style>
	form {
		display: grid;
		gap: var(--space-5);
		text-align: left;
	}
	.row {
		display: grid;
		gap: var(--space-5);
	}
	@media (min-width: 40rem) {
		.row {
			grid-template-columns: 1fr 1fr;
		}
	}
	.field {
		display: flex;
		flex-direction: column;
		gap: var(--space-2);
	}
	label {
		font-weight: 600;
	}
	input,
	textarea {
		width: 100%;
		padding: 0.8rem 1rem;
		font: inherit;
		color: var(--ink);
		background: var(--bg);
		border: 1.5px solid var(--line-strong);
		border-radius: 999px;
	}
	textarea {
		border-radius: 1.75rem;
		resize: none;
		min-height: 9rem;
	}
	input[aria-invalid='true'],
	textarea[aria-invalid='true'] {
		border-color: var(--danger);
	}
	.hint {
		margin: 0;
		color: var(--muted);
		font-size: var(--text-sm);
		text-align: right;
	}
	.hint .over {
		color: var(--danger);
		font-weight: 600;
	}
	.error {
		margin: 0;
		color: var(--danger);
		font-size: var(--text-sm);
		font-weight: 500;
	}
	.hp {
		position: absolute;
		left: -9999px;
		width: 1px;
		height: 1px;
		overflow: hidden;
	}
	.alt {
		text-align: center;
		margin: 0;
		color: var(--muted);
		font-size: var(--text-sm);
	}
	form .btn {
		justify-self: center;
		background: transparent;
		color: var(--ink);
	}
	form .btn:hover:not(:disabled) {
		background: var(--ink);
		color: #fff;
	}
	input::placeholder,
	textarea::placeholder {
		color: var(--muted);
	}
	.notice {
		padding: var(--space-5);
		border-radius: var(--radius);
		border: 1px solid var(--line-strong);
		background: var(--bg-soft);
	}
	.notice:focus {
		outline: none;
	}
	.notice h3 {
		margin-bottom: var(--space-2);
	}
	.notice--success {
		border-color: var(--success);
	}
	.notice--success h3 {
		color: var(--success);
	}
	.notice--error {
		margin: 0;
		border-color: var(--danger);
		color: var(--danger);
	}
	.notice--error a {
		color: inherit;
		font-weight: 600;
	}
</style>
