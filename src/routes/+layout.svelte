<script lang="ts">
	import Header from './Header.svelte';
	import './layout.css';
	  import { Button } from 'bits-ui';
	    import {Collapsible} from 'bits-ui';
	let { children } = $props();
</script>

<div class="app">
	<Header />
	 <Button.Root />
	
	<main>{@render children()}</main>
	
	 <Button.Root
  class="rounded-input bg-dark text-background shadow-mini hover:bg-dark/95 inline-flex
	h-12 items-center justify-center px-[21px] text-[15px]
	font-semibold active:scale-[0.98] active:transition-all"
>
  Unlimited
</Button.Root>

<Collapsible.Root class="w-[327px] space-y-3">
  <div class="flex items-center justify-between space-x-10">
    <h4 class="text-[15px] font-medium">@huntabyte starred 3 repositories</h4>
    <Collapsible.Trigger
      class="rounded-9px border-border-input bg-background-alt text-foreground shadow-btn hover:bg-muted inline-flex h-10 w-10 items-center justify-center border transition-all active:scale-[0.98]"
      aria-label="Show starred repositories"
    >

    </Collapsible.Trigger>
  </div>
 
  <Collapsible.Content
    hiddenUntilFound
    class="data-[state=open]:animate-collapsible-down data-[state=closed]:animate-collapsible-up space-y-2 overflow-hidden font-mono text-[15px] tracking-[0.01em]"
  >
    <div
      class="rounded-9px bg-muted inline-flex h-12 w-full items-center px-[18px] py-3"
    >
      @huntabyte/bits-ui
    </div>
    <div
      class="rounded-9px bg-muted inline-flex h-12 w-full items-center px-[18px] py-3"
    >
      @huntabyte/shadcn-svelte
    </div>
    <div
      class="rounded-9px bg-muted inline-flex h-12 w-full items-center px-[18px] py-3"
    >
      @svecosystem/runed
    </div>
  </Collapsible.Content>
</Collapsible.Root>

	<footer>
		<p>
			visit
			<a href="https://svelte.dev/docs/kit">svelte.dev/docs/kit</a>
			to learn about SvelteKit
		</p>
	</footer>
</div>

<style>
	.app {
		display: flex;
		flex-direction: column;
		min-height: 100vh;
	}

	main {
		flex: 1;
		display: flex;
		flex-direction: column;
		padding: 1rem;
		width: 100%;
		max-width: 64rem;
		margin: 0 auto;
		box-sizing: border-box;
	}

	footer {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		padding: 12px;
	}

	footer a {
		font-weight: bold;
	}

	@media (min-width: 480px) {
		footer {
			padding: 12px 0;
		}
	}
</style>
