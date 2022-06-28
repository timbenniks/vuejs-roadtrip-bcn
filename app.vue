<script lang="ts" setup>
import { resolveRenderer } from './components/componentMapping';

const { $useComposition } = useNuxtApp();
const { data } = await $useComposition({ slug: '/' });
const { data: composition } = await useEnhance(data);

const pageTitle = computed(() => composition.value?._name);
</script>

<template>
  <main>
    <Head>
      <Title>{{ pageTitle }}</Title>
    </Head>

    <Composition
      v-if="composition"
      :data="composition"
      :resolve-renderer="resolveRenderer"
    >
      <slotContent name="components" />
      <slotContent name="anotherSlot" />
    </Composition>
  </main>
</template>
