import "../ItemListContainer/ItemListContainer.css";
import { getProductos, getProductosByCategory } from "../../MockAPI/MockAPI.js";
import { useState, useEffect } from "react";
import { ItemList } from "./ItemList";
import { Loading } from "../Loding/Loading.jsx";
import { useParams } from "react-router-dom";
import { NotFoundPage } from "../NotFoundPage/NotFoundPage";
import "../Loding/Loading.css";
import "../NotFoundPage/NotFoundPage.css";

export const ItemListContainer = (props) => {
  const [productList, setProductList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const { categoriaId } = useParams();
  const [warning, setWarning] = useState({ isOk: false, message: "" });

  useEffect(() => {
    setIsLoading(true);
    if (categoriaId === undefined) {
      setWarning({ isOk: false, message: "" });
      getProductos().then((data) => {
        setProductList(data);
        setIsLoading(false);
      });
    } else {
      getProductosByCategory(categoriaId)
        .then((data) => {
          setProductList(data);
          setIsLoading(false);
        })
        .catch((e) => {
          setWarning({ isOk: true, message: e });
          setIsLoading(false);
        });
    }
  }, [categoriaId]);

  return (
    <>
      {isLoading ? (
        <Loading />
      ) : warning.isOk ? (
        <div className="row">
          <NotFoundPage
            titulo="Lo sentimos"
            subtitulo={warning.message}
            next="Podés realizar otra búsqueda"
          />
        </div>
      ) : (
        <div className="container">
          <div className="item-list-container">
            <ItemList productList={productList} />
          </div>
        </div>
      )}
    </>
  );
};
