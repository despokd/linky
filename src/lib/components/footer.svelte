<script>
	import { _ } from 'svelte-i18n';
</script>

<footer>
	<nav>
		<ul>
			<li>
				<a href="https://github.com/despokd/linky" target="_blank" rel="noopener noreferrer"
				>{$_('common.repository')}</a>
			</li>
			<li><a href="/imprint">{$_('pages.imprint.title')}</a></li>
		</ul>
	</nav>
</footer>

<style lang="scss">
	ul {
		display: flex;
		justify-content: center;
		gap: 1em;
		list-style: none;
		padding: 0;
		margin: 0;
	}
</style>
