<script module lang="ts">
	import { defineMeta } from "@storybook/addon-svelte-csf";
	import type { DialogItems } from "./dialog.svelte";
    import Dialog from "./dialog.svelte"
   import { expect, within } from "storybook/test";
  import{ screen } from "storybook/test";

	import { use } from "chai";
    
  const { items }: DialogItems = {
    items: 
    { id: "item-1", placeholder: "secret_api_key"},

  
    };

    const { Story } = defineMeta({
          title: "UI Components/Dialog",
        component: Dialog,
        tags: ['autodocs'],
    }) 
</script>


<Story name="Closed" args={{ items: items}}
  play={async ({ canvasElement, userEvent }) => {

        const canvas = within(canvasElement);
          const wait = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));
        const openButton = await canvas.getByRole('button', { name: 'New API key' });
        await wait(300);
        if (openButton) {
            await userEvent.click(openButton)
        }
          await wait(500); 
        const inputComponent = await screen.getByTestId("apiKey")
         await wait(200); 
        if (inputComponent) {
          await userEvent.type(inputComponent, "ывыаыаыа")
        }
await wait(500); 
        const closeDialog = await screen.getByRole('button', { name: 'Save'})

        if (closeDialog) {
          await userEvent.click(closeDialog)
        }
        expect(openButton).toBeInTheDocument();
        expect(openButton).toBeVisible();
    }}
/>
<Story name="Opened" args={{ items: items}}
    
/>
