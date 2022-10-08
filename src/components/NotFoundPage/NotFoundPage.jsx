import { Link } from "react-router-dom";

export const NotFoundPage = ({ titulo, subtitulo, next }) => {
  return (
    <div className="d-flex align-items-center justify-content-center vh-100">
      <div className="text-center">
        <h1 className="display-1 fw-bold">{titulo}</h1>
        <p className="fs-3">
          {" "}
          <span className="text-danger">Opps!</span> {subtitulo}
        </p>
        <p className="lead">{next}</p>
        <Link to="/" className="btn btn-primary">
          Ir a la Home
        </Link>
      </div>
    </div>
  );
};
