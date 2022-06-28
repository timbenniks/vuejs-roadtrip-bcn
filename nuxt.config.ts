import { defineNuxtConfig, type NuxtConfig } from 'nuxt';
import manifestJson from './context-manifest.json';

export default defineNuxtConfig({
  build: {
    transpile: [
      '@uniformdev/uniform-nuxt',
      '@uniformdev/canvas-vue',
      '@uniformdev/context-vue',
      '@uniformdev/canvas',
      '@uniformdev/context',
    ],
  },
  vite: {
    optimizeDeps: {
      include: ['rfdc', 'retry', 'p-throttle', 'p-retry'],
    },
  },
  runtimeConfig: {
    public: {
      contentfulSpaceId: process.env.CONTENTFUL_SPACE_ID,
      contentfulDeliveryApiKey: process.env.CONTENTFUL_DELIVERY_API_KEY
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
  ],
});