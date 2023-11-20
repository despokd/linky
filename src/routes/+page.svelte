<script>
	import { _ } from 'svelte-i18n';
	import { getTranslation } from '$lib/directus';
	import Link from '$lib/components/link.svelte';

	export let data;

	let links = data.links;
	links.sort((a, b) => a.sort - b.sort);
</script>

<svelte:head>
	<title>{$_('common.title')}</title>
	<meta name="description" content={$_('common.description')} />
</svelte:head>

<section class="mx-auto w-full max-w-sm">
	{#if data.me.image}
		<img src={data.me.image + '?s=200'} alt={data.me.name} class="mx-auto rounded-full w-36 h-36 m-4" />
	{/if}
	<h1 class="text-center text-2xl font-semibold mx-1">{data.me.name}</h1>
	<p class="text-center p-4 mb-4">{getTranslation(data.me.translations).description_short}</p>
	<ul>
		{#each links as link}
			<li><Link name={link.name} url={link.url} /></li>
		{/each}
	</ul>
</section>
