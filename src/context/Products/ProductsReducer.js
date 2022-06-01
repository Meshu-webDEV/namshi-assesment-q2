import { INITIAL_PRODUCTS_LOAD } from "./../types";

export default (state, action) => {
  switch (action.type) {
    case INITIAL_PRODUCTS_LOAD:
      return {
        ...state,
        products: action.payload.products,
        categories: action.payload.categories,
      };

    default:
      return state;
  }
};
