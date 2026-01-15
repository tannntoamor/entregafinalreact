import { useContext, useState } from "react";
import { CartContext } from "../context/CartContext";

const CheckoutForm = () => {
  const { cart, getTotal, clearCart } = useContext(CartContext);
  const [orderId, setOrderId] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    setOrderId("ORDEN-GENERADA");
    clearCart();
  };

  if (orderId) {
    return <h2>Gracias por tu compra. ID: {orderId}</h2>;
  }

  return <button onClick={handleSubmit}>Confirmar compra</button>;
};

export default CheckoutForm;
