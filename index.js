import { initConnection } from "./api";
import { getAll } from "./api/product";
import { addLineItem, fetch } from "./api/checkout";
import config from './config.json'

initConnection();

getAll().then((items) => {
  const product = items[0];
  console.log(product);

  const checkoutId = config.key;

  addLineItem(checkoutId, product.variants[0].id, 5);
  fetch(checkoutId);
});
