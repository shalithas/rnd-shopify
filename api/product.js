import { getConnection } from "./index";

export const getAll = () => {
  const connection = getConnection();
  // Fetch all products in your shop
  return connection.product.fetchAll().catch((e) => {
    console.error(e);
  });
};

export default { getAll };
