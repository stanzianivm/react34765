import { useState, useEffect } from "react";
import { getProducto } from "../../services/firebase";
import { useParams } from "react-router-dom";
import { ItemDetails } from "./ItemDetails.jsx";
import { Loading } from "../Loding/Loading.jsx";
import { NotFoundPage } from "../NotFoundPage/NotFoundPage.jsx";
import "../Loding/Loading.css";
import "../ItemDetailContainer/ItemDetailsContainer.css";

export const ItemDetailsContainer = () => {
  const [producto, setProducto] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [warning, setWarning] = useState({ isOk: false, message: "" });

  const { productoId } = useParams();

  useEffect(() => {
    getProducto(productoId)
      .then((data) => {
        setProducto(data);
        setIsLoading(false);
      })
      .catch((e) => {
        setWarning({ isOk: true, message: e.toString() });
        setIsLoading(false);
      });
  }, [productoId]);

  return (
    <>
      {isLoading ? (
        <Loading />
      ) : warning.isOk ? (
        <NotFoundPage
          titulo="Lo sentimos"
          subtitulo={warning.message}
          next="Podés realizar otra búsqueda"
        />
      ) : (
        <div className="item-details-container">
          <ItemDetails producto={producto} />
        </div>
      )}
    </>
  );
};
