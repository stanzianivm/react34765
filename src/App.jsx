import "./App.css";
import { ItemDetailsContainer } from "./components/ItemDetailContainer/ItemDetailsContainer";
import { ItemListContainer } from "./components/ItemListContainer/ItemListContainer";
import { NavBar } from "./components/NavBar/NavBar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { NotFoundPage } from "./components/NotFoundPage/NotFoundPage";
import "./components/NotFoundPage/NotFoundPage.css";

function App() {
  return (
    // <div className="main">
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<ItemListContainer />} />
        <Route />
        <Route path="/categoria/:categoriaId" element={<ItemListContainer />} />
        <Route />
        <Route
          path="/productos/:productoId"
          element={<ItemDetailsContainer />}
        />
        <Route />
        <Route
          path="*"
          element={
            <NotFoundPage
              titulo="404"
              subtitulo="Page not found."
              next="Esta página no exuste"
            />
          }
        />
      </Routes>
    </BrowserRouter>
    // </div>
  );
}

export default App;
