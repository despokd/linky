<script>
	import { page } from '$app/stores';
</script>

<header>
	<nav>
		<ul>
			<li>
				<a href="/" class="logo"
					>{#if $page.route.id === '/'}<h1>Linky</h1>{:else}Linky{/if}</a
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
