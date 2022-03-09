import Client from "shopify-buy";
let connection = null;

export const initConnection = () => {
  console.log("Initializing connection");
  // Initializing a client to return content in the store's primary language
  connection = Client.buildClient({
    domain: "ecom-demo-vmlyr.myshopify.com",
    storefrontAccessToken: "6a3a44d427bc103b2b360eb5fb6416a4",
  });
};

export const getConnection = () => {
  return connection;
};

export default { initConnection, getConnection };
