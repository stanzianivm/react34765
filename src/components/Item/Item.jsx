import { Link } from "react-router-dom";

const productoImage = require.context("../../images", true);

export const Item = (props) => {
  return (
    <Link
      to={`/productos/${props.id}`}
      className="card-container"
      cursor="pointer"
    >
      <img
        src={productoImage(`./${props.img}`)}
        className="card-img-top"
        alt="..."
      />
      <div className="card-detail">
        <h5>{props.title}</h5>
        <p>${props.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")}</p>
      </div>
    </Link>
  );
};
