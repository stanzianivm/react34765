import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getOrderById } from "../../services/firebase";
import { Loading } from "../Loding/Loading";
import "../ThankYou/ThankYou.css";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { purchaseDetailContext } from "../../context/purchaseDetailContext";

export const ThankYou = () => {
  const orderId = useParams();
  const [isLoading, setIsLoading] = useState(true);

  const { detailPurchase, addToPurchaseDetail, dateFormat, getTotalPrice } =
    useContext(purchaseDetailContext);

  useEffect(() => {
    getOrderById(orderId).then((item) => {
      addToPurchaseDetail(item);
      setIsLoading(false);
    });
  }, []);

  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        <div className="thankyou-container">
          <div className="thankyou-title">
            <h1>Detalle de la compra</h1>
            <p>ID de la compra: {detailPurchase.id}</p>
          </div>

          <div className="thankyou-userdata-container">
            <div className="thankyou-userdata-span">
              <span>Nombre: {detailPurchase.buyerData.name}</span>
              <span>Email: {detailPurchase.buyerData.email}</span>
              <span>Teléfono: {detailPurchase.buyerData.phone}</span>
            </div>
          </div>
          <div className="thankyou-userdata-items">
            <div className="thanyou-payment">
              <span>Fecha: {dateFormat()}</span>
              <hr />
              <table className="table">
                <thead>
                  <tr>
                    <th scope="col">Producto</th>
                    <th scope="col">Cantidad</th>
                    <th scope="col">Precio Unidad</th>
                    <th scope="col">Precio Total</th>
                  </tr>
                </thead>
                <tbody>
                  {detailPurchase.cart.map((producto) => (
                    <tr key={producto.id}>
                      <td>{producto.title}</td>
                      <td>{producto.count}</td>
                      <td>
                        ${" "}
                        {producto.price
                          .toString()
                          .replace(/\B(?=(\d{3})+(?!\d))/g, ".")}
                      </td>
                      <td>
                        ${" "}
                        {(producto.price * producto.count)
                          .toString()
                          .replace(/\B(?=(\d{3})+(?!\d))/g, ".")}
                      </td>
                    </tr>
                  ))}
                  <tr>
                    <td></td>
                    <td></td>
                    <td>Total</td>
                    <td>
                      ${" "}
                      {getTotalPrice()
                        .toString()
                        .replace(/\B(?=(\d{3})+(?!\d))/g, ".")}
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div className="thankyou-btn">
            <Link to="/" className="btn btn-primary">
              Volver al listado
            </Link>
          </div>
        </div>
      )}
    </>
  );
};
