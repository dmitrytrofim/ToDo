<template>
 <button
  class="text-[20px] text-[var(--t-white)] bg-[var(--b-black)] rounded-[5px] p-[5px_10px]"
  type="button"
 >
  <slot></slot>
 </button>
</template>

<script lang="ts">
export default {
 name: 'v-button',
};
</script>
