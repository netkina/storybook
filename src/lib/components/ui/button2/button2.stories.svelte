<script module>
  import { defineMeta } from '@storybook/addon-svelte-csf';
  import Button2 from './button2.svelte';
  import { fn } from 'storybook/test';
  import { within } from 'storybook/test';

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
  name="Primary"
  args={{
    primary: true,
    outlined: false,
    label: 'Button',
  }}

/>
<Story
  name="Secondary"
  args={{
    primary: false,
    outlined: false,
    label: 'Button',
  }}
/>
<Story
  name="Outlined"
  parameters={{
    docs: {
      description: {
        story: 'Кнопка с прозрачным фоном'
      },
    },
  }}
  args={{
    outlined: true,
    label: 'Button',
  }}
   />
<Story
  name="Large"
  args={{
    size: 'large',
    label: 'Button',
  }}
/>
<Story
  name="Small"
  args={{
    size: 'small',
    label: 'Button',
  }}
/>
 
 
