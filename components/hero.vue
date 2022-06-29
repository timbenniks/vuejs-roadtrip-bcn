<script lang="ts" setup>
import type { ComponentInstance } from '@uniformdev/canvas';
const props = defineProps<{
  component: ComponentInstance;
}>();

const image = computed(() => props.component.parameters.entry.value.image);
const title = computed(() => props.component.parameters.entry.value.title);
</script>

<template>
  <fieldset>
    <legend>
      Component: {{ component.type }} (variant:
      {{ component.variant || 'default' }})
    </legend>
    <h1>{{ title }}</h1>
    <img :src="image" :alt="title" width="250" />
    <div class="code">
      <json-viewer
        :value="component.parameters.entry.value"
        :expand-depth="8"
      ></json-viewer>
    </div>
  </fieldset>
</template>
