import React, { useContext } from "react";
import { CartContext } from "../CartContext";

const CartItem = ({ item }) => {
  const { removeFromCart } = useContext(CartContext);

  return (
    <div>
      <h4>{item.name}</h4>
      <p>Price: ${item.price}</p>
      <p>Quantity: {item.quantity}</p>
      <button onClick={() => removeFromCart(item.id)}>Remove from Cart</button>
    </div>
  );
};

export default CartItem;
