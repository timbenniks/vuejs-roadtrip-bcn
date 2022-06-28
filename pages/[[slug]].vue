<script lang="ts" setup>
import { resolveRenderer } from '../components/componentMapping';

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

    <main>
      <div class="data">
        <json-viewer :value="composition" :expand-depth="8"></json-viewer>
      </div>
      <div class="content">
        <Composition
          v-if="composition"
          :data="composition"
          :resolve-renderer="resolveRenderer"
        >
          <h1>{{ composition.parameters.title.value }}</h1>
          <fieldset>
            <legend>Slot "components"</legend>
            <SlotContent name="components" />
          </fieldset>

          <fieldset>
            <legend>Slot "anotherSlot"</legend>
            <SlotContent name="anotherSlot" />
          </fieldset>
        </Composition>
      </div>
    </main>
  </main>
</template>
