<script lang="ts">
      import './button2.css';


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

  const { primary = true, outlined = false, backgroundColor, size = 'medium', label, ...props }: Props = $props();
  
  let mode = $derived(primary ? 'button2--primary' : 'button2--secondary');
  let mode1 = $derived(outlined ? 'button2--outlined' : 'button2--primary');
  let style = $derived(backgroundColor ? `background-color: ${backgroundColor}` : '');
</script>

<button2
  type="button"
  class={['button2', `button2--${size}`, mode, mode1 ].join(' ')}
  {style}
  {...props}
>
  {label}
</button2>
