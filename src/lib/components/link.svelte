<script>
	import { GradientButton } from 'flowbite-svelte';
	import { GithubSolid, LinkedinSolid } from 'flowbite-svelte-icons';

	export let /** @type string */ name, /** @type string */ url;
</script>

<GradientButton outline shadow size="xl" href={url} rel="noopener noreferrer" class="block my-3">
	<div class="flex justify-between w-full gap-1">
		<div class="w-5 h-5">
			{#if name.toLowerCase() === 'github'}
				<GithubSolid />
			{:else if name.toLowerCase() === 'linkedin'}
				<LinkedinSolid />
			{/if}
		</div>
		<div>{name}</div>
		<div class="w-5 h-5" />
	</div>
</GradientButton>
