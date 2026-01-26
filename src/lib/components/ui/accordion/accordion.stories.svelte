<script module lang="ts">
	import { defineMeta } from "@storybook/addon-svelte-csf";
	import type { AccordionItems } from "./accordion.svelte";
    import Accordion from "./accordion.svelte"
    
  const { items }: AccordionItems = {
    items: [
    { id: "item-1", title: "Title 1", content: "Content 1"},
    { id: "item-2", title: "Title 2", content: "Content 2"},
    { id: "item-3", title: "Title 3", content: "Content 3"}
  ], 
      disabled: false,
      type: 'single'
    };

    const { Story } = defineMeta({
        title: "Accordion",
        component: Accordion,
        tags: ['autodocs'],
    }) 
</script>


<Story name="Single" args={{ items: items}}/>
<Story name="Multiple" args={{ items: items,  type: "multiple"}}/>
<Story name="Disabled" args={{ items: items, disabled: true}}/>