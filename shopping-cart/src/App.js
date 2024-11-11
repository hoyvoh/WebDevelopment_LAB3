import React from "react";
import { CartProvider } from "./CartContext";
import ProductList from "./components/ProductList";
import Cart from "./components/Cart";

const products = [
  { id: 1, name: "Laptop", price: 999 },
  { id: 2, name: "Phone", price: 699 },
  { id: 3, name: "Headphones", price: 199 },
];

const App = () => {
  return (
    <CartProvider>
      <div>
        <h1>Shopping Cart</h1>
        <ProductList products={products} />
        <Cart />
      </div>
    </CartProvider>
  );
};

export default App;
