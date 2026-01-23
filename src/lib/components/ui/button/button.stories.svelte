<script module>
  import { defineMeta } from '@storybook/addon-svelte-csf';
  import { fn } from 'storybook/test';
  import Button from './button.svelte';

  const { Story } = defineMeta({
    title: 'My Examples/Button',
    component: Button,
    tags: ['autodocs'],
     argTypes: {
      backgroundColor: { control: 'color' }
    },
    args: {
      onclick: fn(),
    }
  });

  
</script>

<Story name="default" args={{ 
  variant: 'default'
}} />
<Story name="destructive" args={{ 
  

}} />



<Story name="outline" args={{ size: 'large', label: 'Button' }} />

<Story name="secondary" args={{ size: 'small', label: 'Button' }} />

<Story name="ghost" args={{ size: 'medium', label: 'Button' }} />

<Story name="link" args={{ size: 'medium', label: 'Button' }} />


