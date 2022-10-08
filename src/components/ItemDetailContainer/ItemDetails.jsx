import { ItemCount } from "../ItemCount/ItemCount";
import { ItemDetailsDescription } from "./ItemDetailsDescription";

const prodImage = require.context("../../images", true);

export const ItemDetails = (props) => {
  return (
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
        <ItemCount stock={props.producto.stock} initial={1} />
      </div>
    </div>
  );
};
