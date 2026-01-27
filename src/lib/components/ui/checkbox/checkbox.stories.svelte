<script module lang="ts">
	import { defineMeta } from "@storybook/addon-svelte-csf";
    import Checkbox from "./checkbox.svelte"
  import { fn } from 'storybook/test';

  // More on how to set up stories at: https://storybook.js.org/docs/writing-stories
  const { Story } = defineMeta({
    title: 'UI Components/Checkbox',
    component: Checkbox,
    tags: ['autodocs'],
    args: {
      onclick: fn(),
        label: 'checkbox',
        checked: false,
        disabled: false,
        indeterminate: false
    }
  });
</script>

<!-- More on writing stories with args: https://storybook.js.org/docs/writing-stories/args -->
<Story name="NotChecked" args={{ checked: false,  disabled: false, indeterminate: false  }} />

<Story name="IsChecked" args={{ checked: true }} />

<Story name="Indeterminated" args={{ indeterminate: true }} />

<Story name="Disabled" args={{ disabled: true }} />

