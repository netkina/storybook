<script lang="ts">
  import "../../../../app.css"
  import { Collapsible } from "bits-ui";
  import CaretUpDown from "phosphor-svelte/lib/CaretUpDown";

  export type CollapsibleItems = {
    items: {
      id: string,
      title: string,
      content: {
        content1: string,
        content2: string,
        content3: string
      };
    }[],
    type: 'closed' | 'opened';
  }
  const {items, type}: CollapsibleItems = $props();
</script>
 
<Collapsible.Root class="w-[327px] space-y-3" open={type === 'opened'} >
  
   {#each items as item (item.id)}
  <div class="flex items-center justify-between space-x-10">
    <h4 class="text-[15px] font-medium">{item.title}</h4>
    <Collapsible.Trigger
      class="rounded-9px border-border-input bg-background-alt text-foreground shadow-btn hover:bg-muted inline-flex h-10 w-10 items-center justify-center border transition-all active:scale-[0.98]"
      aria-label="Show starred repositories"
    >
      <CaretUpDown class="size-4" weight="bold" />
    </Collapsible.Trigger>
  </div>
 
  <Collapsible.Content
    hiddenUntilFound
    class="data-[state=open]:animate-collapsible-down data-[state=closed]:animate-collapsible-up space-y-2 overflow-hidden font-mono text-[15px] tracking-[0.01em]"
  >
    <div
      class="rounded-9px bg-muted inline-flex h-12 w-full items-center px-[18px] py-3"
    >
      {item.content.content1}
    </div>
    <div
      class="rounded-9px bg-muted inline-flex h-12 w-full items-center px-[18px] py-3"
    >
      {item.content.content2}
    </div>
    <div
      class="rounded-9px bg-muted inline-flex h-12 w-full items-center px-[18px] py-3"
    >
     {item.content.content3}
    </div>
  </Collapsible.Content>
    {/each}
</Collapsible.Root>


