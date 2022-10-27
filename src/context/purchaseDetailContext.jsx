import { createContext, useState } from "react";
import React from "react";

const purchaseDetailContext = createContext();

const PurchaseDetailContextProvider = (props) => {
  const [detailPurchase, setDetailPurchase] = useState([]);

  const addToPurchaseDetail = (item) => {
    setDetailPurchase(item);
  };

  const dateFormat = () => {
    let timeSpan = detailPurchase.date.seconds;
    let dateFormat = new Date(timeSpan * 1000);

    let date =
      dateFormat.getDate() +
      "/" +
      (dateFormat.getMonth() + 1) +
      "/" +
      dateFormat.getFullYear() +
      " " +
      dateFormat.getHours() +
      ":" +
      dateFormat.getMinutes() +
      ":" +
      dateFormat.getSeconds();
    return date;
  };

  const getTotalPrice = () => {
    let totalPrice = 0;
    detailPurchase.cart.forEach(
      (producto) => (totalPrice = totalPrice + producto.price * producto.count)
    );
    return totalPrice;
  };

  return (
    <>
      <purchaseDetailContext.Provider
        value={{
          detailPurchase,
          dateFormat,
          addToPurchaseDetail,
          getTotalPrice,
        }}
      >
        {props.children}
      </purchaseDetailContext.Provider>
    </>
  );
};

export { purchaseDetailContext, PurchaseDetailContextProvider };
