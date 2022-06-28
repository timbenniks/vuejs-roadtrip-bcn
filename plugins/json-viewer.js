import JsonViewer from 'vue-json-viewer/ssr';
import 'vue-json-viewer/style.css';

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.use(JsonViewer);
});
