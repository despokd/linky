<script>
	export let data;
</script>

<ul>
    {#each data.links as link}
        <li>
            <a href={link.url}>{link.title}</a>
        </li>
    {/each}
</ul>