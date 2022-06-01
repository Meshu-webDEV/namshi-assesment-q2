// Context
import {} from "./../types";
import CartContext from "./CartContext";
import CartReducer from "./CartReducer";

// Utils
import { backendAPI } from "../../lib/backend";
import { useReducer } from "react";
import { ADD_TO_CART, REMOVE_FROM_CART } from "../types";

const CartState = (props) => {
  const initialState = {
    cart: [],
  };

  const [state, dispatch] = useReducer(CartReducer, initialState);

  const addToCart = (item) => {
    dispatch({
      type: ADD_TO_CART,
      payload: item,
    });
  };
  const removeFromCart = (item) => {
    dispatch({
      type: REMOVE_FROM_CART,
      payload: item,
    });
  };

  return (
    <CartContext.Provider
      value={{
        cart: state.cart,
        removeFromCart,
        addToCart,
      }}
    >
      {props.children}
    </CartContext.Provider>
  );
};

export default CartState;
