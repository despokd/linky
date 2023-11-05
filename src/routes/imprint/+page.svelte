<script>
	import { _ } from 'svelte-i18n';

	export let data;
	let imprint = data.global[0].imprint;
</script>

<svelte:head>
	<title>{$_('pages.imprint.title')} | {$_('common.title')}</title>
	<meta name="description" content={$_('pages.imprint.description')} />
</svelte:head>

<h1>{$_('pages.imprint.title')}</h1>

{@html imprint}
