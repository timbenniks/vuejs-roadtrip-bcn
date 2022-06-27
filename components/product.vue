<script lang="ts" setup>
import type { ComponentInstance } from '@uniformdev/canvas';
defineProps<{
  component: ComponentInstance;
}>();
</script>

<template>
  <pre>{{ component }}</pre>
</template>
