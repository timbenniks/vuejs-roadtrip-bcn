import { defineNuxtConfig, type NuxtConfig } from 'nuxt';
import manifestJson from './context-manifest.json';

export default defineNuxtConfig({
  vite: {
    optimizeDeps: {
      include: ['rfdc', 'retry', 'p-throttle', 'p-retry'],
    },
  },
  css: ['@/assets/styles.css'],
  runtimeConfig: {
    public: {
      contentfulSpaceId: process.env.CONTENTFUL_SPACE_ID,
      contentfulDeliveryApiKey: process.env.CONTENTFUL_DELIVERY_API_KEY,
      bigcommerceApiToken: process.env.BIGCOMMERCE_API_TOKEN,
      bigcommerceStoreHash: process.env.BIGCOMMERCE_STORE_HASH
    }
  },
  modules: [
    [
      '@uniformdev/uniform-nuxt',
      {
        manifest: manifestJson,
        projectId: process.env.UNIFORM_PROJECT_ID,
        readOnlyApiKey: process.env.UNIFORM_API_KEY,
        apiHost: process.env.UNIFORM_CLI_BASE_URL,
        outputType: process.env.OUTPUT_TYPE,
      },
    ],
  ]
});