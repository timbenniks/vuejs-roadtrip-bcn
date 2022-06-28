import { createContentfulEnhancer } from "@uniformdev/canvas-contentful";
export { CANVAS_CONTENTFUL_PARAMETER_TYPES } from "@uniformdev/canvas-contentful";
import { createClient } from "contentful";

export const contentfulEnhancer = () => {
  const { public: { contentfulSpaceId, contentfulDeliveryApiKey } } = useRuntimeConfig()

  const contentfulClient = createClient({
    space: contentfulSpaceId,
    environment: "master",
    accessToken: contentfulDeliveryApiKey,
    adapter: async (config) => {
      const url = new URL(`${config.baseURL}/${config.url}`);
      if (config.params) {
        for (const key of Object.keys(config.params)) {
          url.searchParams.append(key, config.params[key]);
        }
      }

      const request = new Request(url.href, {
        method: config.method ? config.method.toUpperCase() : "GET",
        body: config.data,
        redirect: 'manual',
        headers: config.headers ? config.headers : {}
      });

      const response = await fetch(request);

      return {
        data: await response.json(),
        status: response.status,
        statusText: response.statusText,
        headers: response.headers,
        config: config,
        request: request
      };
    }
  });

  return createContentfulEnhancer({
    client: contentfulClient,
    useBatching: false,
  });
};
