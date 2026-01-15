import { Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import ItemListContainer from "./components/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer";
import NotFound from "./components/NotFound";

function App() {
  return (
    <>
      <NavBar />
      <main className="app-main">
        <Routes>
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<CheckoutForm />} />

          <Route
            path="/"
            element={
              <ItemListContainer greeting="Bienvenidx a Tanto Amor Store 💘" />
            }
          />
          <Route
            path="/category/:categoryId"
            element={
              <ItemListContainer greeting="Explorá la categoría seleccionada 💣" />
            }
          />
          <Route path="/item/:id" element={<ItemDetailContainer />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
    </>
  );
}

export default App;
import Cart from "./components/Cart";
import CheckoutForm from "./components/CheckoutForm";
