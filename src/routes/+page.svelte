<script>
	export let data;
	
	let links = data.links;
	links.sort((a, b) => a.sort - b.sort);
</script>

<ul>
	{#each links as link}
		<li>
			<a href={link.url}>{link.name}</a>
		</li>
	{/each}
</ul>

<style lang="scss">
	ul {
		list-style: none;
        padding: 0;
	}

	li {
		margin-bottom: 1em;
	}

	a {
		display: flex;
		align-items: center;
		justify-content: center;
		height: 3em;
		background-color: transparent;
		border-radius: 0.5em;
        border: 1px solid transparentize(black, .5);

		&:hover,
		&:focus-visible {
			background-color: transparentize(black, .5);
			text-decoration: none;
		}
	}
</style>
