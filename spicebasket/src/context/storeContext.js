import { createContext } from "react";

//**  Context:  Describes the global data
// * will describe the data structure
//* promote
//* WILL NOT HOLD ANY IMPLEMENTATION

let StoreContext = createContext({
  cart: [],
  user: {},

  addProdToCart: () => {},
  removeProdFromCart: () => {},
});

export default StoreContext;
