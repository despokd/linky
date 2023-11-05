<script>
	import { _ } from 'svelte-i18n';
	import { page } from '$app/stores';
</script>

<header>
	<nav>
		<ul>
			<li>
				<a href="/" class="logo"
					>{#if $page.route.id === '/'}<h1>{$_('common.title')}</h1>{:else}{$_('common.title')}{/if}</a
				>
			</li>
		</ul>
	</nav>
</header>

<style>
	.logo,
	.logo h1 {
		font-size: 2rem;
		font-weight: bold;
		color: inherit;
		margin: 0;
	}

	ul {
		display: flex;
		justify-content: center;
		gap: 1em;
		list-style: none;
		padding: 0;
		margin: 0;
	}
</style>
