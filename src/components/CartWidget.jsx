import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { Link } from "react-router-dom";

const CartWidget = () => {
  const { getTotalQuantity } = useContext(CartContext);
  const total = getTotalQuantity();

  return <Link to="/cart">🛒 {total > 0 && <span>{total}</span>}</Link>;
};

export default CartWidget;
