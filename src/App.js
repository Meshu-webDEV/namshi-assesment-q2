import { Link } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Cart from "./Pages/Cart";

// Utils
import { useContext, useEffect, useState } from "react";
import ProductsState from "./context/Products/ProductsState";
import CartContext from "./context/Cart/CartContext";

function App() {
  const { cart, addToCart } = useContext(CartContext);

  return (
    <div className="App bg-slate-50 min-h-screen w-full">
      <div className="flex justify-between px-10 items-center bg-slate-100 w-full">
        <nav className="flex space-x-32 items-center py-3  bg-slate-100 filter shadow-sm w-full">
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-48"
              viewBox="0 0 700.275 136.878"
            >
              <g id="Group_2210" transform="translate(-93.449 -38.762)">
                <g id="logo192" transform="translate(93.449 38.762)">
                  <path
                    id="Rectangle_1078"
                    d="M225,618.027l53.756-29,53.756,29-53.756,28.355Z"
                    transform="translate(-212.638 -589.026)"
                    fill="#fd7382"
                  />
                  <path
                    id="Rectangle_1078-2"
                    d="M207.427,713.453l-.385-58.237,55.794,29.758V746.53Z"
                    transform="translate(-207.041 -609.651)"
                    fill="#4be6c9"
                  />
                  <path
                    id="Rectangle_1078-3"
                    d="M318.092,684.974l55.793-29.758-.386,58.237L318.092,746.53Z"
                    transform="translate(-241.647 -609.651)"
                    fill="#7c49e9"
                  />
                </g>
                <text
                  id="MeshuwebDEV"
                  transform="translate(260.725 144.152)"
                  fill="#060b43"
                  fontSize="69"
                  fontFamily="Poppins-Black, Poppins"
                  fontWeight="800"
                >
                  <tspan x="0" y="0">
                    Meshu
                  </tspan>
                  <tspan
                    y="0"
                    fontFamily="Poppins-Light, Poppins"
                    fontWeight="300"
                  >
                    web
                  </tspan>
                  <tspan y="0">DEV</tspan>
                </text>
                <g
                  id="Group_2204"
                  transform="translate(656.483 73.152)"
                  opacity="0.8"
                >
                  <rect
                    id="Rectangle_1076"
                    width="32.796"
                    height="11.478"
                    transform="translate(0 0)"
                    fill="#4be6c9"
                  />
                  <rect
                    id="Rectangle_1077"
                    width="32.796"
                    height="11.478"
                    transform="translate(50.833 0)"
                    fill="#7c49e9"
                  />
                  <rect
                    id="Rectangle_1078-4"
                    width="32.796"
                    height="11.478"
                    transform="translate(101.666 0)"
                    fill="#fd7382"
                  />
                </g>
              </g>
            </svg>
          </div>
          <ul className="flex uppercase font-semibold space-x-10 pt-1 items-center justify-center text-black">
            <Link to="/">Home</Link>
          </ul>
        </nav>
        <Link to="/cart" className="flex space-x-2 justify-center items-center">
          <span>{cart.length}</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 text-violet-600"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" />
          </svg>
        </Link>
      </div>
      <div className="">
        <Routes>
          <Route
            path="/"
            element={
              <ProductsState>
                <Home />
              </ProductsState>
            }
          />

          <Route path="/cart" element={<Cart />} />
          <Route
            path="/*"
            element={
              <ProductsState>
                <Home />
              </ProductsState>
            }
          />
        </Routes>
      </div>
    </div>
  );
}

export default App;
