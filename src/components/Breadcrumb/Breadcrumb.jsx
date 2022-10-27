import { Link } from "react-router-dom";
import "../Breadcrumb/Breadcrumb.css";

export const Breadcrumb = ({ producto }) => {
  return (
    <nav>
      <Link to="/" className="breadcrumb-home">
        Volver al listado
      </Link>
      <span>|</span>
      <Link
        to={"/categoria/" + producto.categoria}
        className="breadcrumb-category"
      >
        {producto.categoria.toUpperCase()}
      </Link>
    </nav>
  );
};
