import { Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
import Cart from "./components/Cart/Cart";
import Estanteria from "./components/Estantería/Estantería";
import Home from "./components/Pages/Home/Home";
import Login from "./components/Pages/Login/Login";
import PrivateRoute from "./router/PrivateRoute";
import PublicRoute from "./router/PublicRoute";

function App() {
  return (
    <Routes>
      <Route path="/" element={<PublicRoute />}>
        <Route path="" element={<Login />} />
      </Route>
      <Route path="/store" element={<PrivateRoute />}>
        <Route path="" element={<Home />}>
          <Route path="products" element={<Estanteria />} />
          <Route path="cart" element={<Cart />} />
        </Route>
      </Route>
      <Route path="*" element={<Navigate to={"/store"} />} />
    </Routes>
  );
}

export default App;
