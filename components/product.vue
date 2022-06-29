<script lang="ts" setup>
import type { ComponentInstance } from '@uniformdev/canvas';
const props = defineProps<{
  component: ComponentInstance;
}>();

const image = computed(() => props.component.parameters.entry.value.image);
const title = computed(() => props.component.parameters.entry.value.name);
const price = computed(() => props.component.parameters.entry.value.price);
</script>

<template>
  <fieldset>
    <legend>
      Component: {{ component.type }} (variant:
      {{ component.variant || 'default' }})
    </legend>
    <h1 v-if="title">{{ title }}</h1>
    <img v-if="image" :src="image" :alt="title" width="250" />
    <p>&euro;{{ price }}</p>
    <div class="code">
      <json-viewer
        :value="component.parameters.entry.value"
        :expand-depth="8"
      ></json-viewer>
    </div>
  </fieldset>
</template>
