import { cartContext } from "../../context/cartContext";
import { useContext } from "react";
import "../CartView/CartView.css";
import { CartDetails } from "./CartDetails";
import { CartEmpty } from "../CartEmptyPage/CartEmpty";
import "sweetalert2/src/sweetalert2.scss";

export const CartView = () => {
  const { cart } = useContext(cartContext);

  return <>{cart.length > 0 ? <CartDetails /> : <CartEmpty />}</>;
};
