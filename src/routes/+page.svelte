<script>
	import { _ } from 'svelte-i18n';
	import Link from '$lib/components/link.svelte';

	export let data;

	let links = data.links;
	links.sort((a, b) => a.sort - b.sort);
</script>

<svelte:head>
	<title>{$_('common.title')}</title>
	<meta name="description" content={$_('common.description')} />
</svelte:head>

<ul class="mx-auto w-full max-w-sm">
	{#each links as link}
		<li><Link {...link} /></li>
	{/each}
</ul>
