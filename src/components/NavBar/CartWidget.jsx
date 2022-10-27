import { useState, useContext } from "react";
import { Cart } from "react-bootstrap-icons";
import { cartContext } from "../../context/cartContext";
import { Link } from "react-router-dom";
import "../NavBar/NavBar.css";

export const CartWidget = () => {
  const { getTotalItemCount } = useContext(cartContext);

  return (
    <Link to="/cart" className="cart-icon-button" role="button">
      <Cart className="icon-cart" />
      <span className="badge rounded-pill badge-counter bg-danger icon-total">
        {getTotalItemCount()}
      </span>
    </Link>
  );
};
