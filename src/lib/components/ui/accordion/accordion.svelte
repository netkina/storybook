<script lang="ts" >
  import { Accordion } from "bits-ui";
  import CaretDown from "phosphor-svelte/lib/CaretDown";
  export type AccordionItems = {
    items: {
      id: string,
      title: string,
      content: string;
    }[],
    disabled?: boolean;
    type: 'single' | 'multiple';
  }
  const {items, type, disabled}: AccordionItems = $props();
</script>

<Accordion.Root class="w-full sm:max-w-[70%]" 
  type={type}
  disabled={disabled}
  >
  {#each items as item (item.id)}
    <Accordion.Item
      value={item.id}
      class="border-dark-10 group border-b px-1.5"
          disabled={disabled}
    >

      <Accordion.Header>
        <Accordion.Trigger
          class="flex w-full flex-1 select-none items-center justify-between py-5 text-[15px] font-medium transition-all [&[data-state=open]>span>svg]:rotate-180"
        
          >
          <span class="w-full text-left">
            {item.title}
          </span>
          <span
            class="hover:bg-dark-10 inline-flex size-8 items-center justify-center rounded-[7px] bg-transparent"
          > <CaretDown class="size-[18px] transition-transform duration-200" />
          </span>
        </Accordion.Trigger>
      </Accordion.Header>
      <Accordion.Content
        class="data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down overflow-hidden text-sm tracking-[-0.01em]"
      >
        <div class="pb-[25px]">
          {item.content}
        </div>
      </Accordion.Content>
    </Accordion.Item>
  {/each}

  {#if disabled}
  <div>хуууууууууууууууй</div>
  {/if}
</Accordion.Root>

