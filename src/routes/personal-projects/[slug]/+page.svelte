<script lang="ts">
	import ProjectDetail from '$lib/components/ProjectDetail.svelte';
	import type { PageProps } from './$types';

	let { data }: PageProps = $props();
</script>

<ProjectDetail project={data.project} />
