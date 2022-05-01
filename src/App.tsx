import { Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
import Cart from "./components/Cart/Cart";
import Estanteria from "./components/Estantería/Estantería";
import Home from "./components/Pages/Home/Home";

function App() {
  return (
    <Routes>
      <Route path="" element={<Home />}>
        <Route path="/products" element={<Estanteria />}/>
        <Route path="/cart" element={<Cart />}/>
      </Route>
      <Route path="*" element={<Navigate to={""} />}/>
    </Routes>
  );
}

export default App;
