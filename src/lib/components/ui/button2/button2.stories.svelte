<script module>
  import { defineMeta } from '@storybook/addon-svelte-csf';
  import Button2 from './button2.svelte';
  import { fn } from 'storybook/test';

  const { Story } = defineMeta({
    title: 'My Examples/Button2',
    component: Button2,
    tags: ['autodocs'],
     argTypes: {
      backgroundColor: { control: 'color' },
      size: {
        control: { type: 'select' },
        options: ['small', 'medium', 'large'],
      },
    },
    args: {
      onclick: fn(),
    }
  });
</script>

<Story
  name="primary"
  args={{
    primary: true,
    label: 'Button',
  }}
/>
 
<Story
  name="hover"
  args={{
    backgroundColor: '#0284C7',
    label: 'Button',
  }}
/>
 
<Story
  name="disabled"
  args={{
    backgroundColor:'#0369A1',
    label: 'Button',
  }}
/>


