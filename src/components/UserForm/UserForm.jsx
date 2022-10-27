import { useNavigate } from "react-router-dom";
import { CreateOrder } from "../../services/firebase";
import { InputForm } from "./InputForm";
import { useContext, useState } from "react";
import { cartContext } from "../../context/cartContext";

import "sweetalert2/src/sweetalert2.scss";
import Swal from "sweetalert2/dist/sweetalert2.js";
import { Loading } from "../Loding/Loading";
import "../UserForm/UserForm.css";

export const UserForm = () => {
  const { clearCart, getTotalPrice, cart } = useContext(cartContext);
  const [isLoading, setIsLoading] = useState(false);

  const navigate = useNavigate();

  const [userData, setUserData] = useState({
    name: "",
    email: "",
    phone: "",
  });

  const onInputChange = (evt) => {
    const name = evt.target.name;
    const value = evt.target.value;
    let newUserData = { ...userData };
    newUserData[name] = value;
    setUserData(newUserData);
  };

  const onSubmit = (evt) => {
    evt.preventDefault();
    setIsLoading(true);

    const orderData = {
      buyerData: userData,
      cart: cart,
      totalPrice: getTotalPrice(),
      date: new Date(),
    };

    CreateOrder(orderData).then((request) => {
      Swal.fire({
        title: "Gracias!",
        text: `Tu compra fue realizada con éxito!`,
        icon: "success",
        confirmButtonText: "Ver detalle",
      }).then(() => {
        setIsLoading(false);
        clearCart();
        navigate(`/thankyou/${request}`);
      });
    });
  };

  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        <div className="form-container">
          <div className="form-data">
            <h1>Ingrese sus datos</h1>

            <form onSubmit={onSubmit}>
              <div className="form-div-data">
                <InputForm
                  value={userData.name}
                  title="Nombre"
                  name="name"
                  required={true}
                  onChange={onInputChange}
                />
                <InputForm
                  value={userData.email}
                  title="Email"
                  name="email"
                  required={true}
                  onChange={onInputChange}
                />
                <InputForm
                  value={userData.phone}
                  title="Teléfono"
                  name="phone"
                  onChange={onInputChange}
                />
              </div>
              <div className="form-btn-order">
                <button type="submit" className="btn btn-primary">
                  Crear orden
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
};
