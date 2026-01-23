<script module>
	import { defineMeta } from '@storybook/addon-svelte-csf';
	import { fn } from 'storybook/test';
	import Button from './button.svelte';

	const { Story } = defineMeta({
		title: 'Components/ButtonBits',
		component: Button,
		tags: ['autodocs'],
		argTypes: {
			label: {
				control: 'text',
				description: 'Текст кнопки'
			},
			primary: {
				control: 'boolean',
				description: 'Основной стиль кнопки (primary/secondary)'
			},
			outlined: {
				control: 'boolean',
				description: 'Контурный стиль кнопки'
			},
			backgroundColor: {
				control: 'color',
				description: 'Пользовательский цвет фона'
			},
			size: {
				control: { type: 'select' },
				options: ['small', 'medium', 'large'],
				description: 'Размер кнопки'
			},
			disabled: {
				control: 'boolean',
				description: 'Отключённое состояние кнопки'
			}
		},
		args: {
			onclick: fn(),
			label: 'Button',
			primary: true,
			outlined: false,
			size: 'medium',
			disabled: false
		}
	});
</script>

<!-- Базовая история с настройками по умолчанию -->
<Story name="Default">
	<Button label="Кнопка" />
</Story>

<!-- Primary кнопка -->
<Story name="Primary">
	<Button label="Primary Button" primary={true} />
</Story>

<!-- Secondary кнопка -->
<Story name="Secondary">
	<Button label="Secondary Button" primary={false} />
</Story>

<!-- Outlined кнопка -->
<Story name="Outlined">
	<Button label="Outlined Button" outlined={true} primary={false} />
</Story>

<!-- Размеры кнопок -->
<Story name="Small">
	<Button label="Small" size="small" />
</Story>

<Story name="Medium">
	<Button label="Medium" size="medium" />
</Story>

<Story name="Large">
	<Button label="Large" size="large" />
</Story>

<!-- С пользовательским цветом фона -->
<Story name="Custom Background">
	<Button label="Custom Color" backgroundColor="#6366f1" />
</Story>

<!-- Отключённое состояние -->
<Story name="Disabled">
	<div style="display: flex; gap: 12px; flex-wrap: wrap;">
		<Button label="Disabled Primary" primary={true} disabled={true} />
		<Button label="Disabled Secondary" primary={false} disabled={true} />
		<Button label="Disabled Outlined" outlined={true} disabled={true} />
	</div>
</Story>

<!-- Все варианты вместе -->
<Story name="All Variants">
	<div style="display: flex; flex-direction: column; gap: 16px; align-items: flex-start;">
		<div style="display: flex; gap: 12px; align-items: center; flex-wrap: wrap;">
			<span style="width: 80px; font-weight: 500;">Primary:</span>
			<Button label="Small" primary={true} size="small" />
			<Button label="Medium" primary={true} size="medium" />
			<Button label="Large" primary={true} size="large" />
		</div>
		<div style="display: flex; gap: 12px; align-items: center; flex-wrap: wrap;">
			<span style="width: 80px; font-weight: 500;">Secondary:</span>
			<Button label="Small" primary={false} size="small" />
			<Button label="Medium" primary={false} size="medium" />
			<Button label="Large" primary={false} size="large" />
		</div>
		<div style="display: flex; gap: 12px; align-items: center; flex-wrap: wrap;">
			<span style="width: 80px; font-weight: 500;">Outlined:</span>
			<Button label="Small" outlined={true} primary={false} size="small" />
			<Button label="Medium" outlined={true} primary={false} size="medium" />
			<Button label="Large" outlined={true} primary={false} size="large" />
		</div>
		<div style="display: flex; gap: 12px; align-items: center; flex-wrap: wrap;">
			<span style="width: 80px; font-weight: 500;">Custom:</span>
			<Button label="Purple" backgroundColor="#8b5cf6" size="medium" />
			<Button label="Green" backgroundColor="#10b981" size="medium" />
			<Button label="Red" backgroundColor="#ef4444" size="medium" />
		</div>
	</div>
</Story>
