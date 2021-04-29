export const ADD_CART = "ADD_CART"
export const REMOVE_CART= "REMOVE_CART"
export const CLEAR_CART ="CLEAR_CART"
export const addCart = (user,post,price) => {
    return { type: ADD_CART, user: user ,post : post ,price:price };
  };
  export const removeCart = (user,post,price) => {
    return { type: REMOVE_CART, user: user ,post : post,price:price};
  };
  export const clearCart = () => {
    return { type: ADD_CART, user: user ,post : post };
  };