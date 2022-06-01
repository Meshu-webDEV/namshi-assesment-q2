import { useContext } from "react";
import CartContext from "../context/Cart/CartContext";

const Cart = () => {
  const { cart, removeFromCart } = useContext(CartContext);

  return (
    <div className="cart flex flex-col space-y-8 p-10">
      {cart?.length
        ? cart.map((item) => {
            return (
              <div
                key={item.id}
                className="rounded-md shadow-sm bg-slate-100 flex flex-col space-y-4 p-4"
              >
                <div className="text-base font-bold uppercase">
                  {item.title}
                </div>
                <div className="flex space-x-4">
                  <div>
                    <img
                      src={item.image}
                      className="object-cover w-16 h-16"
                      alt=""
                    />
                  </div>
                  <div className="text-sm font-light w-3/4">
                    {item.description}
                  </div>
                </div>
                <div className="self-end text-green-600">{item.price}$</div>
                <button
                  onClick={(e) => removeFromCart(item, e)}
                  className="self-end rounded-md shadow-md bg-red-500 px-2.5 py-1 text-sm text-white"
                >
                  Remove from cart
                </button>
              </div>
            );
          })
        : "Empty"}

      <div className="font-medium ">
        Total:{" "}
        {cart?.length
          ? cart.reduce((acc, item) => {
              return acc + item.price;
            }, 0)
          : 0}
        $
      </div>
    </div>
  );
};

export default Cart;
