<script lang="ts" setup>
import { resolveRenderer } from '../components/componentMapping';
const slug = useRoute().params?.slug;
const { $useComposition } = useNuxtApp();
const { data } = await $useComposition({ slug: `/${slug}` });

const { data: composition } = await useEnhance(data);
//const composition = computed(() => data.value.composition);
const pageTitle = computed(() => composition.value?._name);
</script>

<template>
  <main>
    <Head>
      <Title>{{ pageTitle }}</Title>
    </Head>

    <div class="data">
      <pre>{{ composition }}</pre>
    </div>
    <div class="content">
      <!-- <Composition v-if="composition" :data="composition">
        <h1>{{ composition.parameters.title.value }}</h1>
      </Composition> -->
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
          <legend>Slot "products"</legend>
          <SlotContent name="products" />
        </fieldset>
      </Composition>
    </div>
  </main>
</template>
