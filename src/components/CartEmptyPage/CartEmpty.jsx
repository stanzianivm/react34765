import { Link } from "react-router-dom";
import "../CartEmptyPage/CartEmptyPage.css";

export const CartEmpty = () => {
  return (
    <>
      <div className="item-cart-empty-container">
        <div className="cart-empty-container">
          <div className="cart-empty-info">
            <h1 className="cart-empty-title">Tu carrito está vacío!</h1>
            <p className="cart-empty-subtitle">
              Seguí buscando y aprovechá todos los productos que necesitás!
            </p>
            <div className="cart-empty-btn">
              <Link to="/" className="btn btn-primary cart-empty-btn">
                Ir a la Home
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
