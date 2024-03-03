<script>
	import '../app.postcss';
	import { _ } from 'svelte-i18n';
	import Header from '$lib/components/header.svelte';
	import Footer from '$lib/components/footer.svelte';
	import { injectSpeedInsights } from '@vercel/speed-insights/sveltekit';

	injectSpeedInsights();
</script>

<svelte:head>
	<title>{$_('common.title')}</title>
	<meta name="description" content={$_('common.description')} />
</svelte:head>

<Header />

<main class="w-full max-w-7xl mx-auto">
	<slot />
</main>

<Footer />
