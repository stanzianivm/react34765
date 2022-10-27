import { Button } from "../Button/Button";
import { useState } from "react";
import "../ItemCount/ItemCount.css";

export const ItemCount = ({ onAddToCart, stock, initial, text }) => {
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
            <Button
              onClick={onLess}
              text={"-"}
              class="input-group-text"
              id="inputGroup-sizing-sm"
            />
            <input
              type="text"
              className="form-control input-number input-total"
              placeholder={count}
              aria-label="Sizing example input"
              aria-describedby="inputGroup-sizing-sm"
            />
            <Button
              onClick={onAdd}
              text={"+"}
              class="input-group-text"
              id="inputGroup-sizing-sm"
            />
          </div>
          <div>
            <span className="count-warning">
              Stock disponible: <b>{stock}</b>
            </span>
          </div>
        </div>
        <div className="count-btn-add">
          <button
            className="input-group-text btn btn-primary"
            type="button"
            onClick={() => {
              onAddToCart(count);
            }}
          >
            {text}
          </button>
        </div>
      </div>
    </>
  );
};
