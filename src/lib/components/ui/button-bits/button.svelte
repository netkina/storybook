<script lang="ts" module>
	import { tv, type VariantProps } from 'tailwind-variants';

	export const buttonBitsVariants = tv({
		base: 'inline-flex items-center justify-center font-semibold transition-all active:scale-[0.98] active:transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50',
		variants: {
			variant: {
				default:
					'rounded-lg bg-slate-900 text-white shadow-sm hover:bg-slate-900/95 focus-visible:ring-slate-500',
				primary:
					'rounded-lg bg-blue-600 text-white shadow-sm hover:bg-blue-600/90 focus-visible:ring-blue-500',
				secondary:
					'rounded-lg bg-slate-100 text-slate-900 shadow-sm hover:bg-slate-200 focus-visible:ring-slate-400',
				destructive:
					'rounded-lg bg-red-600 text-white shadow-sm hover:bg-red-600/90 focus-visible:ring-red-500',
				outline:
					'rounded-lg border-2 border-slate-300 bg-transparent text-slate-900 hover:bg-slate-100 focus-visible:ring-slate-400',
				ghost: 'rounded-lg text-slate-900 hover:bg-slate-100 focus-visible:ring-slate-400'
			},
			size: {
				default: 'h-12 px-[21px] text-[15px]',
				sm: 'h-9 px-4 text-sm',
				lg: 'h-14 px-8 text-base',
				icon: 'h-10 w-10'
			}
		},
		defaultVariants: {
			variant: 'default',
			size: 'default'
		}
	});

	export type ButtonBitsVariant = VariantProps<typeof buttonBitsVariants>['variant'];
	export type ButtonBitsSize = VariantProps<typeof buttonBitsVariants>['size'];

	export interface ButtonBitsProps {
		/** Текст кнопки */
		label?: string;
		/** Вариант стиля кнопки */
		variant?: ButtonBitsVariant;
		/** Размер кнопки */
		size?: ButtonBitsSize;
		/** Отключена ли кнопка */
		disabled?: boolean;
		/** Дополнительные CSS классы */
		class?: string;
		/** Обработчик клика */
		onclick?: () => void;
	}
</script>

<script lang="ts">
	import { Button } from 'bits-ui';

	let {
		label = 'Button',
		variant = 'default',
		size = 'default',
		disabled = false,
		class: className = '',
		onclick,
		...restProps
	}: ButtonBitsProps = $props();
</script>

<Button.Root
	class={buttonBitsVariants({ variant, size, class: className })}
	{disabled}
	onclick={onclick}
	{...restProps}
>
	{label}
</Button.Root>