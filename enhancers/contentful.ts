import { createContentfulEnhancer } from "@uniformdev/canvas-contentful";
export { CANVAS_CONTENTFUL_PARAMETER_TYPES } from "@uniformdev/canvas-contentful";
import { createClient } from "contentful";

export const contentfulEnhancer = () => {
  const { public: { contentfulSpaceId, contentfulDeliveryApiKey } } = useRuntimeConfig()

  const contentfulClient = createClient({
    space: contentfulSpaceId,
    environment: "master",
    accessToken: contentfulDeliveryApiKey,
  });

  return createContentfulEnhancer({
    client: contentfulClient,
  });
};
