<script lang="ts" setup>
import type { ComponentInstance } from '@uniformdev/canvas';
const props = defineProps<{
  component: ComponentInstance;
}>();

const image = computed(() => props.component.parameters.entry.value.image);
const title = computed(() => props.component.parameters.entry.value.title);
</script>

<template>
  <fieldset :class="component.variant">
    <legend>
      Component: {{ component.type }} (variant:
      {{ component.variant || 'default' }})
    </legend>
    <h1 v-if="title">{{ title }}</h1>
    <img v-if="image" :src="image" :alt="title" width="250" />
    <div class="code">
      <pre>{{ component.parameters.entry.value }}</pre>
    </div>
  </fieldset>
</template>
