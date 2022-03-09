import { getConnection } from "./index";

export const create = () => {
  const connection = getConnection();

  return connection.checkout.create().then((checkout) => {
    console.log(checkout);
  });
};

export const fetch = (id) => {
  const connection = getConnection();

  return connection.checkout.fetch(id).then((checkout) => {
    console.log(checkout);
  });
};

export const addLineItem = (id, variantId, quantity) => {
  const connection = getConnection();

  const items = [{ variantId, quantity, customAttributes: [] }];

  return connection.checkout.addLineItems(id, items).then((checkout) => {
    console.log(checkout.lineItems);
  });
};

export const removeLineItem = (id, variantId) => {
  const connection = getConnection();

  const items = [variantId];

  return connection.checkout.removeLineItems(id, items).then((checkout) => {
    console.log(checkout.lineItems);
  });
};

export default { create };
