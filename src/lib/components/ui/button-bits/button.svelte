<script lang="ts">
  import { Button } from "bits-ui";
  import type { ButtonRootProps } from "bits-ui";
  interface Props {
    /** Is this the principal call to action on the page? */
    primary?: boolean;
    outlined?: boolean;
    /** What background color to use */
    backgroundColor?: string;
    /** How large should the button be? */
    size?: 'small' | 'medium' | 'large';
    /** Button contents */
    label: string;
    /** The onclick event handler */
    onclick?: () => void;
  }

  
  const { 
    primary = true, 
    outlined = false, 
    backgroundColor, 
    size = 'medium', 
    label,
    ...restProps 
  }: Props = $props();

  let buttonClass = $derived(`
    rounded-input bg-black text-background shadow-mini hover:bg-dark/95 
    inline-flex h-12 items-center justify-center px-[21px] text-[15px]
    font-semibold active:scale-[0.98] active:transition-all
    ${primary ? 'button--primary' : 'button--secondary'}
    ${outlined ? 'button--outlined' : ''}
    button--${size}
  `);

 // let mode = $derived(primary ? 'button--primary' : 'button--secondary');
 // let mode1 = $derived(outlined ? 'button--outlined' : 'button--primary');
 // let style = $derived(backgroundColor ? `background-color: ${backgroundColor}` : '');
</script>
 
<Button.Root
  class={buttonClass}
  style={backgroundColor ? `background-color: ${backgroundColor}` : ''}
  {...restProps}
>
  {label}
</Button.Root>
