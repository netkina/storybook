<script lang="ts">
      import './button2.css';


  interface Props {
    /** Is this the principal call to action on the page? */
    primary?: boolean;
    /** What background color to use */
    backgroundColor?: string;
    /** How large should the button be? */
    size?: 'small' | 'medium' | 'large';
    /** Button contents */
    label: string;
    /** The onclick event handler */
    onclick?: () => void;
  }

  const { primary = false, backgroundColor, size = 'medium', label, ...props }: Props = $props();
  
  let mode = $derived(primary ? 'button2--primary' : 'button2--secondary');
  let style = $derived(backgroundColor ? `background-color: ${backgroundColor}` : '');
</script>

<button2
  type="button"
  class={['button2', `button2--${size}`, mode].join(' ')}
  {style}
  {...props}
>
  {label}
</button2>
