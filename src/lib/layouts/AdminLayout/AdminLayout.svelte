<script>
    import {Layout, SidebarItem, Icon } from 'svelite/components';

	let { children, logo, ...restProps } = $props();

	let showSidebar = $state(false);

	function toggleSidebar() {
		showSidebar = !showSidebar;
	}
</script>

<Layout bind:showSidebar dir="ltr" theme="light" {...restProps}>
	{#snippet header({ hasSidebar })}
		<div class="flex items-center">
			{#if hasSidebar}
				<div class="md:hidden shrink-0 px-4 w-14">
					<Icon onclick={toggleSidebar} name="menu-2" />
				</div>
			{/if}
			<img class="logo" src={logo} />
		</div>

		<div class="hidden md:flex">
			Something here {hasSidebar}
		</div>
	{/snippet}
	<!-- {#snippet sidebar()}
    {#each [] as item}
			<SidebarItem href={item.href} title={item.title} />
		{/each}
    {/snippet} -->
	{@render children()}
</Layout>

<style>
	.logo {
		width: 130px;
	}
</style>
