<script>
	import { GradientButton } from 'flowbite-svelte';
	import '@fortawesome/fontawesome-free/css/all.min.css';

	export let /** @type string */ name, /** @type string */ url;

	let iconClass = 'fa-brands fa-' + name.toLowerCase();
	switch (name.toLowerCase()) {
		case 'tequilian.de':
			iconClass = 'fa-regular fa-lemon';
			break;
		case 'kdomaratius.de':
			iconClass = 'fa-regular fa-user';
			break;
	}
</script>

<GradientButton outline shadow size="xl" href={url} rel="noopener noreferrer" class="block my-3">
	<div class="flex justify-between w-full gap-1">
		<div class="w-5 h-5">
			<slot name="icon">
				<i class="{iconClass}"></i>
			</slot>
		</div>
		<div>{name}</div>
		<div class="w-5 h-5" />
	</div>
</GradientButton>

<style>
	i {
		font-size: 1.25rem;
	}
</style>