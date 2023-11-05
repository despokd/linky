<script>
	import { _ } from 'svelte-i18n';
	import { page } from '$app/stores';
	import { DarkMode, Navbar, NavBrand} from 'flowbite-svelte';
</script>

<header>
	<Navbar>
		<NavBrand href="/" class="gap-1 mx-auto">
			{#if $page.route.id === '/'}
				<h1 class="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
					{$_('common.title')}
				</h1>
			{:else}
				<span class="self-center whitespace-nowrap text-xl font-semibold dark:text-white"
					>{$_('common.title')}</span
				>
			{/if}
			<DarkMode />
		</NavBrand>
	</Navbar>
</header>
