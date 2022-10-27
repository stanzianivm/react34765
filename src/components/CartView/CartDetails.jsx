import { Fragment, useContext } from "react";
import { cartContext } from "../../context/cartContext";
import { Link } from "react-router-dom";

const prodImage = require.context("../../images", true);

export const CartDetails = () => {
  const { removeItem, getTotalItemCount, clearCart, getTotalPrice, cart } =
    useContext(cartContext);

  return (
    <>
      <div className="item-cart-container">
        <div className="cart-container">
          {cart.map((producto, index) => (
            <Fragment key={producto.id}>
              <div key={index} className="cart-info">
                <Link
                  to={`/productos/${producto.id}`}
                  cursor="pointer"
                  className="cart-details-btn"
                >
                  <div className="item cart-img">
                    <img
                      src={prodImage(`./${producto.img}`)}
                      className="cart-details-img"
                      alt="..."
                    />
                  </div>
                </Link>
                <div className="item cart-details">
                  <Link
                    to={`/productos/${producto.id}`}
                    cursor="pointer"
                    className="cart-details-btn"
                  >
                    <h1>{producto.title}</h1>
                  </Link>
                  <div className="cart-details-items-info">
                    <p>Cantidad: {producto.count}</p>
                    <p>
                      $
                      {(producto.price * producto.count)
                        .toString()
                        .replace(/\B(?=(\d{3})+(?!\d))/g, ".")}
                    </p>
                    <div className="cart-btn-eliminar-div">
                      <Link
                        onClick={() => removeItem(producto.id)}
                        cursor="pointer"
                        className="cart-btn-eliminar"
                      >
                        Eliminar
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              <hr className="cart-line" />
            </Fragment>
          ))}
          <div className="cart-details-summary-container">
            <div className="cart-details-summary-info">
              <div className="cart-details-summary-total-products">
                <span>Cantidad de productos: {getTotalItemCount()}</span>
              </div>
              <div className="cart-details-summary-price">
                <span>
                  Precio total: ${" "}
                  {getTotalPrice()
                    .toString()
                    .replace(/\B(?=(\d{3})+(?!\d))/g, ".")}
                </span>
              </div>
            </div>
            <hr className="cart-line" />
            <div className="cart-details-summary">
              <div className="cart-details-summary-btn">
                <Link
                  onClick={() => clearCart()}
                  className="btn btn-secondary cart-btn-clean"
                >
                  Vaciar carrito
                </Link>
              </div>
              <div className="cart-details-summary-btn">
                <Link
                  to="/userform"
                  cursor="pointer"
                  className="btn btn-primary"
                >
                  Continuar compra
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
