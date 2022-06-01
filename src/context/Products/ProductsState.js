// Context
import {} from "./../types";
import ProductsContext from "./ProductsContext";
import ProductsReducer from "./ProductsReducer";

// Utils
import { backendAPI } from "../../lib/backend";
import { useEffect, useReducer } from "react";
import { INITIAL_PRODUCTS_LOAD } from "../types";

const ProductsState = (props) => {
  const initialState = {
    products: [],
    categories: [],
  };

  const [state, dispatch] = useReducer(ProductsReducer, initialState);

  const getProducts = () => {
    return new Promise(async (resolve, reject) => {
      try {
        const { data } = await backendAPI.get("/products");
        resolve(data);
      } catch (error) {
        reject(error);
      }
    });
  };

  const getCategories = () => {
    return new Promise(async (resolve, reject) => {
      try {
        const { data } = await backendAPI.get("/products/categories");
        resolve(data);
      } catch (error) {
        reject(error);
      }
    });
  };

  useEffect(() => {
    const _getInitial = async () => {
      try {
        const products_response = await getProducts();
        const categories_response = await getCategories();

        dispatch({
          type: INITIAL_PRODUCTS_LOAD,
          payload: {
            products: products_response,
            categories: categories_response,
          },
        });
      } catch (error) {
        console.log(error);
      }
    };

    _getInitial();
  }, []);

  return (
    <ProductsContext.Provider
      value={{
        products: state.products,
        categories: state.categories,
        getProducts,
        getCategories,
      }}
    >
      {props.children}
    </ProductsContext.Provider>
  );
};

export default ProductsState;
