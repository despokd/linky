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
	<meta property="twitter:title" content="{$_('common.title')}" />
	<meta property="twitter:description" content={$_('common.description')} />
	<meta property="og:title" content="{$_('common.title')}" />
	<meta property="og:description" content="{$_('common.description')}" />
	<meta property="og:url" content="https://linky.kdomaratius.de" />
	{#if data.me.image}
		<meta property="twitter:image" content="{data.me.image}" />
		<meta property="twitter:card" content="summary_large_image">
		<meta property="og:image" content="{data.me.image}" />
	{/if}
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
