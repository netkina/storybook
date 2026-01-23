<script lang="ts">
	import Header from './Header.svelte';
	import './layout.css';
	  import { Button } from 'bits-ui';
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
