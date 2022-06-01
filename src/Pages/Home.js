import React, { useContext, useEffect } from "react";
import CartContext from "../context/Cart/CartContext";
import ProductsContext from "../context/Products/ProductsContext";

const Home = () => {
  const { categories, products } = useContext(ProductsContext);
  const { cart, addToCart } = useContext(CartContext);

  const handleAddToCart = (item, e) => {
    e.preventDefault();

    addToCart(item);
  };

  return (
    <div className="grid grid-cols-12 gap-1 px-2">
      {/* sidemenu */}
      <div className="col-start-1 col-span-2 shadow-sm rounded-sm bg-slate-100 min-h-screen w-full py-10"></div>
      {/* products */}
      <div className="col-start-3 col-end-10 shadow-sm rounded-sm min-h-screen w-full flex flex-col space-y-10 px-6 pt-5">
        {products?.length
          ? products.map((product) => {
              return (
                <div
                  key={product.id}
                  className="rounded-md shadow-sm bg-slate-100 flex flex-col space-y-4 p-4"
                >
                  <div className="text-base font-bold uppercase">
                    {product.title}
                  </div>
                  <div className="flex space-x-4">
                    <div>
                      <img
                        src={product.image}
                        className="object-cover w-16 h-16"
                        alt=""
                      />
                    </div>
                    <div className="text-sm font-light w-3/4">
                      {product.description}
                    </div>
                  </div>
                  <div className="self-end text-green-600">
                    {product.price}$
                  </div>
                  <button
                    onClick={(e) => handleAddToCart(product, e)}
                    className="self-end rounded-md shadow-md bg-violet-600 px-2.5 py-1 text-sm text-white"
                  >
                    Add to cart +
                  </button>
                </div>
              );
            })
          : "loading.."}
      </div>
      {/* cart */}
      <div className="col-span-3  shadow-sm rounded-sm bg-slate-100 min-h-screen w-full pt-2">
        <div className="flex flex-col space-y-4 p-1">
          {cart?.length
            ? cart.map((item) => {
                return (
                  <div
                    className="text-xs bg-violet-100 p-2 rounded-sm text-black font-medium"
                    key={item.id}
                  >
                    {item.title}
                  </div>
                );
              })
            : "Empty"}
        </div>
      </div>
    </div>
  );
};

export default Home;
