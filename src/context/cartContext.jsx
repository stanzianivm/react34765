import { createContext, useState } from "react";

const cartContext = createContext();

function CartContextProvider(props) {
  const [cart, setCart] = useState([]);

  const addToCart = (item, count) => {
    let newCart = [...cart];
    let newItem = { ...item, count };
    newCart.push(newItem);
    setCart(newCart);
  };

  const getTotalItemCount = () => {
    let total = 0;

    cart.forEach((item) => {
      total = total + item.count;
    });

    return total;
  };

  const clearCart = () => {
    setCart([]);
  };

  const removeItem = (itemID) => {
    let newCart = cart.filter((item) => {
      return item.id !== itemID;
    });
    setCart(newCart);
  };

  const checkExistProductInArray = (val) => {
    return cart.some((arrVal) => val === arrVal.id);
  };

  const isInCart = (productoID) => {
    return checkExistProductInArray(productoID);
  };

  const getTotalPrice = () => {
    let totalPrice = 0;
    cart.forEach(
      (producto) => (totalPrice = totalPrice + producto.price * producto.count)
    );

    return totalPrice;
  };

  return (
    <>
      <cartContext.Provider
        value={{
          cart,
          addToCart,
          getTotalItemCount,
          removeItem,
          clearCart,
          isInCart,
          getTotalPrice,
        }}
      >
        {props.children}
      </cartContext.Provider>
    </>
  );
}

export { cartContext, CartContextProvider };
