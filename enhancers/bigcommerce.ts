import {
  createBigCommerceClient,
  createBigCommerceEnhancer,
} from "@uniformdev/canvas-bigcommerce";

export { CANVAS_BIGCOMMERCE_PARAMETER_TYPES } from "@uniformdev/canvas-bigcommerce";

// export const bigcommerceEnhancer = () => {
//   const { public: { bigcommerceApiToken, bigcommerceStoreHash } } = useRuntimeConfig()

//   const bigCommerceClient = createBigCommerceClient({
//     storeHash: bigcommerceStoreHash,
//     token: bigcommerceApiToken,
//   });

//   return createBigCommerceEnhancer({
//     client: bigCommerceClient,
//     createProductOptions: () => {
//       return {
//         include_fields: ["id", "name", "price", "description"],
//       };
//     },
//     createProductQueryOptions: () => {
//       return {
//         include_fields: ["id", "name", "price", "description"],
//       };
//     },
//   });
// };

export const bigcommerceEnhancer = () => {
  const { public: { bigcommerceApiToken, bigcommerceStoreHash } } = useRuntimeConfig()

  return createBigCommerceEnhancer({
    client: createBigCommerceClient({
      storeHash: bigcommerceStoreHash,
      token: bigcommerceApiToken,
    }),
    createProductOptions: () => {
      return {
        include_fields: ['id', 'name', 'price'],
      };
    },
    createProductQueryOptions: () => {
      return {
        include_fields: ['id', 'name', 'price'],
      };
    },
  });
};

export const bigcommerceModelCleaner = ({ parameter }) => {
  const { id, name, description, price, images } = parameter.value;

  parameter.value = {
    id,
    name,
    description,
    price,
    image: images[0].url_standard,
  };

  return parameter.value;
}
