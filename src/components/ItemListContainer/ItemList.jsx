import "../ItemListContainer/ItemListContainer.css";
import { Item } from "../Item/Item";

export const ItemList = (props) => {
  return (
    <>
      {props.productList?.map((producto) => {
        return (
          <Item
            key={producto.id}
            id={producto.id}
            title={producto.title}
            img={producto.img}
            price={producto.price}
          />
        );
      })}
    </>
  );
};
