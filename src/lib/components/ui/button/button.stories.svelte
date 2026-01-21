<script module>
  import { defineMeta } from '@storybook/addon-svelte-csf';

  import Button from './button.svelte';
  const { Story } = defineMeta({
    title: 'UI/Button',
  component: Button,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['default', 'destructive', 'outline', 'secondary', 'ghost', 'link'],
      description: 'Вариант стиля кнопки',
      table: {
        defaultValue: { summary: 'default' },
      },
    },
    size: {
      control: 'select',
      options: ['default', 'sm', 'lg', 'icon', 'icon-sm', 'icon-lg'],
      description: 'Размер кнопки',
      table: {
        defaultValue: { summary: 'default' },
      },
    },
    disabled: {
      control: 'boolean',
      description: 'Отключенное состояние',
      table: {
        defaultValue: { summary: 'false' },
      },
    },
    href: {
      control: 'text',
      description: 'URL для ссылки-кнопки',
    },
    type: {
      control: 'select',
      options: ['button', 'submit', 'reset'],
      description: 'Тип кнопки',
      table: {
        defaultValue: { summary: 'button' },
      },
    },
    class: {
      control: 'text',
      description: 'Дополнительные CSS классы',
    },
  },
  args: {
    variant: 'default',
    size: 'default',
    disabled: false,
    type: 'button',
  },
  });
  </script>
  <Story
  name="default"
  args={{
    children: 'Button',
  }}
  />

  <Story
  name="destructive"
  args={{
    variant: 'destructive',
    children: 'Delete',
  }}
  />

