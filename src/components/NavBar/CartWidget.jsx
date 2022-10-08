import React from "react";
import { useState } from "react";
import { Cart } from "react-bootstrap-icons";
import "../NavBar/NavBar.css";

export const CartWidget = (props) => {
  const [total, setTotal] = useState(0);

  return (
    <a className="cart-icon-button" role="button" href="#">
      <Cart className="icon-cart" />
      <span className="badge rounded-pill badge-counter bg-danger icon-total">
        {total}
      </span>
    </a>
  );
};
