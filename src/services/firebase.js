import { initializeApp } from "firebase/app";
import {
  getFirestore,
  collection,
  getDocs,
  doc,
  getDoc,
  query,
  where,
  addDoc,
  writeBatch,
  documentId,
} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyC-y6NsidUG_mnatSQzDZ9mUjyUll3uzb8",
  authDomain: "react34765-2fae3.firebaseapp.com",
  projectId: "react34765-2fae3",
  storageBucket: "react34765-2fae3.appspot.com",
  messagingSenderId: "871456533184",
  appId: "1:871456533184:web:497a242ea029d86ceadb25",
};

const FirebaseApp = initializeApp(firebaseConfig);
const db = getFirestore(FirebaseApp);

export async function getProductos() {
  const collectionRef = await getDocs(collection(db, "productos"));
  let dataProuducts = collectionRef.docs.map((element) => {
    return { id: element.id, ...element.data() };
  });

  dataProuducts.sort((a, b) => b.stock - a.stock);
  return dataProuducts;
}

export async function getProducto(productoId) {
  try {
    const docRef = doc(db, "productos", productoId);
    const docResult = await getDoc(docRef);

    if (docResult.exists()) {
      return { id: docResult.id, ...docResult.data() };
    } else {
      throw new Error("El producto no existe!");
    }
  } catch (errorMsg) {
    throw errorMsg;
  }
}

export async function getProductosByCategory(categoriaId) {
  try {
    const q = query(
      collection(db, "productos"),
      where("categoria", "==", categoriaId)
    );

    const queryProducts = await getDocs(q);

    let dataProuducts = queryProducts.docs.map((element) => {
      return { id: element.id, ...element.data() };
    });

    if (dataProuducts.length > 0) {
      dataProuducts.sort((a, b) => b.stock - a.stock);
      return dataProuducts;
    } else {
      throw new Error("No existen productos para la categoría seleccionada!");
    }
  } catch (errorMsg) {
    throw errorMsg;
  }
}

export async function CreateOrder(orderData) {
  const batch = writeBatch(db);
  const collectionRef = collection(db, "orders");
  const collectionItemsRef = collection(db, "productos");

  const arrayIds = orderData.cart.map((item) => item.id);
  const q = query(collectionItemsRef, where(documentId(), "in", arrayIds));

  let itemsToUpdate = await getDocs(q);

  itemsToUpdate.docs.forEach((doc) => {
    let itemInCart = orderData.cart.find((item) => item.id === doc.id);
    batch.update(doc.ref, {
      stock: doc.data().stock - itemInCart.count,
    });
  });

  batch.commit();

  let request = await addDoc(collectionRef, orderData);
  return request.id;
}

export async function getOrderById(orderId) {
  try {
    const docRef = doc(db, "orders", orderId.ordenId);
    const docResult = await getDoc(docRef);

    if (docResult.exists()) {
      return { id: docResult.id, ...docResult.data() };
    } else {
      throw new Error("Disculpe, tuvimos un inconveniente!");
    }
  } catch (errorMsg) {
    throw errorMsg;
  }
}

export default FirebaseApp;
