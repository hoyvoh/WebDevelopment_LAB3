import React, { useContext } from "react";
import { CartContext } from "../CartContext";
import CartItem from "./CartItem";

const Cart = () => {
  const { cart } = useContext(CartContext);

  const totalPrice = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <div>
      <h2>Shopping Cart</h2>
      {cart.length > 0 ? (
        <>
          {cart.map((item) => (
            <CartItem key={item.id} item={item} />
          ))}
          <h3>Total Price: ${totalPrice.toFixed(2)}</h3>
        </>
      ) : (
        <p>Your cart is empty</p>
      )}
    </div>
  );
};

export default Cart;
