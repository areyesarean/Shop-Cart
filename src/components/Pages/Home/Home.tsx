import { Link, Outlet } from "react-router-dom";
import useCantProducto from "../../../hooks/useCantProducto";
import "./styleHome.css";

const Home = () => {
  const {cantProd} = useCantProducto();
  return (
    <div>
      <nav className="navigation menu">
        <h1 className="title">Home</h1>
        <div className="link-container">
          <Link to="/products" className="link">
            Productos
          </Link>
        </div>
        <div className="link-container">
          <Link to="/cart" className="link">
            Cart {cantProd}
          </Link>
        </div>
      </nav>
      <section className="content">
        <Outlet />
      </section>
    </div>
  );
};

export default Home;
