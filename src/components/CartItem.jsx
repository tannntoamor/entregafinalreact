import { useContext } from "react";
import { CartContext } from "../context/CartContext";

const CartItem = ({ id, title, price, quantity }) => {
  const { removeItem } = useContext(CartContext);

  return (
    <div>
      <h4>{title}</h4>
      <p>Cantidad: {quantity}</p>
      <p>Subtotal: ${price * quantity}</p>
      <button onClick={() => removeItem(id)}>Eliminar</button>
    </div>
  );
};

export default CartItem;
