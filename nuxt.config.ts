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
      include: ['rfdc', 'retry'],
    },
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