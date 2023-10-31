<script>
	import Header from '$lib/components/header.svelte';
	import Footer from '$lib/components/footer.svelte';
</script>

<svelte:head>
	<title>Linky</title>
</svelte:head>

<div>
	<Header />
	<main><slot /></main>
	<Footer />
</div>

<style lang="scss">
	:global {
		body {
			font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu,
				Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
			font-size: 16px;
			line-height: 1.5;
		}
	}

	:root {
		color-scheme: light dark;
	}

	div {
		max-width: 960px;
		margin: 0 auto;
		padding: 2em;
	}
</style>
