import { useState } from "react";
import "../ItemCount/ItemCount.css";

export const ItemCount = ({ stock, initial }) => {
  const [count, setCount] = useState(initial);

  const onAdd = () => {
    if (count >= 1 && count < stock) {
      setCount(count + 1);
    }
  };

  const onLess = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  };

  return (
    <>
      <div className="count-container">
        <div className="center">
          <div className="input-group input-group-sm mb-3 div-count">
            <button
              onClick={onLess}
              className="input-group-text"
              id="inputGroup-sizing-sm"
            >
              -
            </button>
            <input
              type="text"
              className="form-control input-number input-total"
              placeholder={count}
              aria-label="Sizing example input"
              aria-describedby="inputGroup-sizing-sm"
            />
            <button
              onClick={onAdd}
              className="input-group-text"
              id="inputGroup-sizing-sm"
            >
              +
            </button>
          </div>
          <div>
            <span className="count-warning">
              Stock disponible: <b>{stock}</b>
            </span>
          </div>
        </div>
        <div className="count-btn-add">
          <button type="button" className="btn btn-primary btn-add-products">
            Agregar al Carrito
          </button>
        </div>
      </div>
    </>
  );
};
