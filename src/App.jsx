import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CartView } from "./components/CartView/CartView";
import { ItemDetailsContainer } from "./components/ItemDetailContainer/ItemDetailsContainer";
import { ItemListContainer } from "./components/ItemListContainer/ItemListContainer";
import { NavBar } from "./components/NavBar/NavBar";
import { NotFoundPage } from "./components/NotFoundPage/NotFoundPage";
import { CartContextProvider } from "./context/cartContext";
import "./components/NotFoundPage/NotFoundPage.css";
import { UserForm } from "./components/UserForm/UserForm";
import { ThankYou } from "./components/ThankYou/ThankYou";
import { PurchaseDetailContextProvider } from "./context/purchaseDetailContext";
import { FooterPage } from "./components/FooterPage/FooterPage";

function App() {
  return (
    <>
      <div className="main">
        <CartContextProvider>
          <PurchaseDetailContextProvider>
            <BrowserRouter>
              <NavBar />
              <Routes>
                <Route path="/" element={<ItemListContainer />} />
                <Route />
                <Route
                  path="/categoria/:categoriaId"
                  element={<ItemListContainer />}
                />
                <Route />
                <Route
                  path="/productos/:productoId"
                  element={<ItemDetailsContainer />}
                />
                <Route />
                <Route path="/cart" element={<CartView />} />
                <Route />
                <Route />
                <Route path="/userform" element={<UserForm />} />
                <Route />
                <Route path="/thankyou/:ordenId" element={<ThankYou />} />
                <Route />
                <Route
                  path="*"
                  element={
                    <NotFoundPage
                      titulo="404"
                      subtitulo="Page not found."
                      next="Esta página no existe"
                    />
                  }
                />
              </Routes>
            </BrowserRouter>
          </PurchaseDetailContextProvider>
        </CartContextProvider>
        <FooterPage />
      </div>
    </>
  );
}

export default App;
