<script lang="ts">
	import { Button } from 'bits-ui';

	interface Props {
		/** Is this the principal call to action on the page? */
		primary?: boolean;
		/** Outlined style */
		outlined?: boolean;
		/** What background color to use */
		backgroundColor?: string;
		/** How large should the button be? */
		size?: 'small' | 'medium' | 'large';
		/** Button contents */
		label: string;
		/** The onclick event handler */
		onclick?: () => void;
		/** Disabled state */
		disabled?: boolean;
	}

	const {
		primary = true,
		outlined = false,
		backgroundColor,
		size = 'medium',
		label,
		disabled = false,
		...restProps
	}: Props = $props();

	// Базовые стили кнопки (Tailwind CSS)
	const baseStyles = `
    inline-flex items-center justify-center
    font-semibold leading-none
    rounded-lg
    transition-all duration-200 ease-in-out
    cursor-pointer
    focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-500
    disabled:opacity-60 disabled:cursor-not-allowed disabled:transform-none
    active:scale-[0.98]
  `;

	// Стили размеров
	const sizeStyles = {
		small: 'h-8 px-3 text-xs',
		medium: 'h-10 px-4 text-sm',
		large: 'h-12 px-6 text-base'
	};

	// Стили вариантов
	const variantStyles = $derived.by(() => {
		if (outlined) {
			return `
        bg-transparent
        text-gray-800
        border-2 border-gray-300
        hover:bg-gray-50 hover:border-gray-400
        active:bg-gray-100
      `;
		}
		if (primary) {
			return `
        bg-black text-white
        shadow-sm
        hover:bg-gray-800 hover:-translate-y-0.5 hover:shadow-md
        active:shadow-sm
      `;
		}
		// Secondary
		return `
      bg-gray-100 text-gray-800
      shadow-sm
      hover:bg-gray-200 hover:-translate-y-0.5 hover:shadow-md
      active:bg-gray-300
    `;
	});

	let buttonClass = $derived(
		`${baseStyles} ${sizeStyles[size]} ${variantStyles}`.replace(/\s+/g, ' ').trim()
	);
</script>

<Button.Root
	class={buttonClass}
	style={backgroundColor ? `background-color: ${backgroundColor}` : ''}
	{disabled}
	{...restProps}
>
	{label}
</Button.Root>
