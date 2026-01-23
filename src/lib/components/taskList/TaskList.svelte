
<script lang="ts">
  import { archiveTask, pinTask, store } from '../../state/store.svelte';

  import PureTaskList from './PureTaskList.svelte';
</script>

<PureTaskList
  loading={store.status === "loading"}
  tasks={store.tasks}
  onPinTask={pinTask}
  onArchiveTask={archiveTask}
/>