<script lang="ts">
import type { TaskData } from './task.ts';

  interface Props {
    task: TaskData;
    onArchiveTask: (id: string) => void;
    onPinTask: (id: string) => void;
  }

  const {
    task = {
      id: '',
      title: '',
      state: 'TASK_INBOX',
    },
    onArchiveTask,
    onPinTask,
  }: Props = $props();
    let isChecked = $derived(task.state === 'TASK_ARCHIVED');
</script>

<div class="list-item {task.state}">
  <label
    for="checked-{task.id}"
    class="checkbox"
    aria-label="archiveTask-{task.id}"
  >
    <input
      type="checkbox"
      checked={isChecked}
      disabled
      name="checked-{task.id}"
      id="archiveTask-{task.id}"
    />
    <span
      role="button"
      class="checkbox-custom"
      aria-label="archivedTask-{task.id}"
      onclick={() => onArchiveTask(task.id ?? "")}
      onkeydown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          onArchiveTask(task.id ?? "");
        }
      }}
      tabindex="-1"
    ></span>
  </label>
  <label for="title-{task.id}" aria-label={task.title} class="title">
    <input
      type="text"
      value={task.title}
      readonly
      name="title"
      id="title-{task.id}"
      placeholder="Input title"
      style="background-color: red;"
      
    />
  </label>
  {#if task.state !== "TASK_ARCHIVED"}
    <button
      class="pin-button"
      onclick={(e) => {
        e.preventDefault();
        onPinTask(task.id ?? "");
      }}
      id="pinTask-{task.id}"
      aria-label="pinTask-{task.id}"
    >
      <span class="icon-star"></span>
    </button>
  {/if}
</div>