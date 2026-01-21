import type { Preview } from '@storybook/sveltekit';
import 'tailwindcss'
import '../src/lib/components/ui/button2/button2.css'

const preview: Preview = {
	parameters: {
		backgrounds: {
			default: 'dark',
			values: [
				{
					name: 'dark',
					value: '#c57f7f'
				}
			]
		},
		controls: {
			matchers: {
				color: /(background|color)$/i,
				date: /Date$/i
			}
		},

		a11y: {
			// 'todo' - show a11y violations in the test UI only
			// 'error' - fail CI on a11y violations
			// 'off' - skip a11y checks entirely
			test: 'todo'
		}
	}
};

export default preview;
