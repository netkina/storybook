<script module>
  import { defineMeta } from '@storybook/addon-svelte-csf';
  import { fn } from 'storybook/test';
  import Button from './button.svelte';

  const { Story } = defineMeta({
    title: 'Components/Button',
    component: Button,
    tags: ['autodocs'],
     argTypes: {
         label: {
        control: 'text',
        description: 'Текст кнопки',
      },
      primary: {
        control: 'boolean',
        description: 'Основной стиль кнопки',
      },
      outlined: {
        control: 'boolean',
        description: 'Контурный стиль',
      },
      backgroundColor: { 
        control: 'color',
        description: 'Цвет фона',
      },
      size: {
        control: { type: 'select' },
        options: ['small', 'medium', 'large'],
        description: 'Размер кнопки',
      },
      disabled: {
        control: 'boolean',
        description: 'Состояние отключения',
      },
    },
    args: {
       onClick: fn(),
      label: 'Button',
       primary: true,
      outlined: false,
      size: 'medium',
      disabled: false,
    }
  });

  
  export const args = {
    label: 'Button',
    variant: 'default',
    disabled: false,
    class: '',
  };
</script>


  <!-- Базовая история -->
  <Story name="Default Button">
    <Button label="dhdth" />
  </Story>
  
  <!-- История с вариантами -->

 


