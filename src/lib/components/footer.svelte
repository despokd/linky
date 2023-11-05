<script>
	import { _ } from 'svelte-i18n';
	import { Footer, FooterLinkGroup, FooterLink } from 'flowbite-svelte';
</script>

<Footer class="flex items-center justify-center px-4 text-center mt-4">
	<FooterLinkGroup
		ulClass="flex flex-wrap items-center mt-3 text-sm text-gray-500 dark:text-gray-400 sm:mt-0"
	>
		<FooterLink href="/imprint">{$_('pages.imprint.title')}</FooterLink>
		<FooterLink href="https://github.com/despokd/linky" target="_blank" rel="noopener noreferrer"
			>{$_('common.repository')}</FooterLink
		>
	</FooterLinkGroup>
</Footer>