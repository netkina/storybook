<script module lang="ts">
    import "../../../../app.css"
	import { defineMeta } from "@storybook/addon-svelte-csf";
	import type { CollapsibleItems } from "./collapsible.svelte";
    import Collapsible from "./collapsible.svelte"
    
  const { items }: CollapsibleItems = {
    items: [
    { id: "item-1", title: "Title 1", 
    content: {
      content1: "Content 1",
      content2: "Content 2",
      content3: "Content 3"
    }}
  ], 
      type: 'closed'
    };

    const { Story } = defineMeta({
        title: "Collapsible",
        component: Collapsible,
        tags: ['autodocs'],
    }) 
</script>


<Story name="Closed" args={{ items: items, type: "closed" }}/>
<Story name="Opened" args={{ items: items,  type: "opened"}}/>
