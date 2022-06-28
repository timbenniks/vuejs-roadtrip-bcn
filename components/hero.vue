<script lang="ts" setup>
import type { ComponentInstance } from '@uniformdev/canvas';
defineProps<{
  component: ComponentInstance;
}>();
</script>

<template>
  <fieldset>
    <legend>
      Component: {{ component.type }} (variant:
      {{ component.variant || 'default' }})
    </legend>
    <div class="code">
      <json-viewer
        :value="component.parameters.entry"
        :expand-depth="8"
      ></json-viewer>
    </div>
  </fieldset>
</template>
