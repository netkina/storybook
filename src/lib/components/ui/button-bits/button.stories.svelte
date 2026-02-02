<script module>
	import { defineMeta } from '@storybook/addon-svelte-csf';
	import { fn } from 'storybook/test';
	import ButtonBits from './button.svelte';

	const { Story } = defineMeta({
		title: 'UI Components/Button Bits',
		component: ButtonBits,
		tags: ['autodocs'],
		argTypes: {
			variant: {
				control: { type: 'select' },
				options: ['default', 'primary', 'secondary', 'destructive', 'outline', 'ghost'],
				description: 'Вариант стиля кнопки'
			},
			size: {
				control: { type: 'select' },
				options: ['default', 'sm', 'lg', 'icon'],
				description: 'Размер кнопки'
			},
			label: {
				control: 'text',
				description: 'Текст кнопки'
			},
			disabled: {
				control: 'boolean',
				description: 'Отключена ли кнопка'
			}
		},
		args: {
			onclick: fn(),
			label: 'Button'
		}
	});

	
</script>

<Story
	name="Default"
	args={{
		variant: 'default',
		label: 'Default Button'
	}}
/>

<Story
	name="Primary"
	args={{
		variant: 'primary',
		label: 'Primary Button'
	}}
/>

<Story
	name="Secondary"
	args={{
		variant: 'secondary',
		label: 'Secondary Button'
	}}
/>

<Story
	name="Destructive"
	args={{
		variant: 'destructive',
		label: 'Delete'
	}}
/>

<Story
	name="Outline"
	args={{
		variant: 'outline',
		label: 'Outline Button'
	}}
/>

<Story
	name="Ghost"
	args={{
		variant: 'ghost',
		label: 'Ghost Button'
	}}
/>

<Story
	name="Small"
	args={{
		size: 'sm',
		label: 'Small'
	}}
/>

<Story
	name="Large"
	args={{
		size: 'lg',
		label: 'Large Button'
	}}
/>

<Story
	name="Disabled"
	args={{
		disabled: true,
		label: 'Disabled'
	}}
	
/>
