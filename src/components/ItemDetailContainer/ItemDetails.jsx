import { useContext } from "react";
import { ItemCount } from "../ItemCount/ItemCount";
import { ItemDetailsDescription } from "./ItemDetailsDescription";
import { cartContext } from "../../context/cartContext";
import { Link } from "react-router-dom";
import { Breadcrumb } from "../Breadcrumb/Breadcrumb";

const prodImage = require.context("../../images", true);

export const ItemDetails = (props) => {
  const { addToCart, isInCart } = useContext(cartContext);

  const handleAddToCart = (count) => {
    addToCart(props.producto, count);
  };

  return (
    <>
      <div className="item-details-breadcrumb">
        <Breadcrumb producto={props.producto} />
      </div>
      <div className="details-container">
        <div className="details-div-img">
          <img
            src={prodImage(`./${props.producto.img}`)}
            className="details-img"
            alt="..."
          />
        </div>
        <div className="details-body">
          <h3 className="details-title">{props.producto.title}</h3>
          <hr className="details-line" />
          <ItemDetailsDescription
            description={props.producto.details.description}
            features={props.producto.details.features}
          />
          <hr className="details-line" />
          <p className="details-price">
            $
            {props.producto.price
              .toString()
              .replace(/\B(?=(\d{3})+(?!\d))/g, ".")}
          </p>
          <hr className="details-line" />
          {props.producto.stock === 0 ? (
            <div
              className="alert alert-danger item-details-warning"
              role="alert"
            >
              No hay stock disponible
            </div>
          ) : props.producto.stock > 0 && !isInCart(props.producto.id) ? (
            <ItemCount
              onAddToCart={handleAddToCart}
              stock={props.producto.stock}
              initial={1}
              text="Agregar al carrito"
            />
          ) : (
            <>
              <div
                className="alert alert-primary item-details-warning"
                role="alert"
              >
                El producto se encuentra en el carrito
              </div>
              <div className="item-details-show-cart-btn">
                <Link to="/cart" className=" btn btn-primary">
                  Ver carrito
                </Link>
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
};
