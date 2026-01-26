<script lang="ts">
  import { Checkbox, Label } from "bits-ui";
  import Check from "phosphor-svelte/lib/Check";
  import Minus from "phosphor-svelte/lib/Minus";

 export interface Props {
    label: string;
    indeterminate?: boolean;
    checked?: boolean;
    disabled?: boolean;
    onclick?: () => void;
  }

  const { label, checked = false,  indeterminate = false, disabled = false, ...props }: Props = $props();
  
</script>
 
<div class="flex items-center space-x-3">
  <Checkbox.Root
    id="terms"
    aria-labelledby="terms-label"
    class="border-muted bg-foreground data-[state=unchecked]:border-border-input data-[state=unchecked]:bg-background data-[state=unchecked]:hover:border-dark-40 peer inline-flex size-[25px] items-center justify-center rounded-md border transition-all duration-150 ease-in-out active:scale-[0.98]"
    name="hello"
    indeterminate={indeterminate}
disabled={disabled}
   checked={checked}
  >
    {#snippet children({ checked, indeterminate })}
      <div class="text-background inline-flex items-center justify-center">
        {#if indeterminate}
          <Minus class="size-[15px]" weight="bold" />
        {:else if checked}
            
          <Check class="size-[15px]" weight="bold" />
        {/if}
      </div>
    {/snippet}
  </Checkbox.Root>
  <Label.Root
    id="terms-label"
    for="terms"
    class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
  >{label}
  </Label.Root>
</div>