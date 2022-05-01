import { useSelector } from "react-redux";
import { Link, Outlet } from "react-router-dom";
import "./styleHome.css";

const Home = () => {

  const cart: any = useSelector<any>((state) => state.shop.cart.length);
  return (
    <div>
      <nav className="navigation menu">
        <h1 className="title">Home</h1>
        <div className="link-container">
          <Link to="/products" className="link" >Productos</Link>
        </div>
        <div className="link-container">
          <Link to="/cart" className="link">Cart {cart}</Link>
        </div>
      </nav>
      <section className="content">
        <Outlet />
      </section>
    </div>
  );
};

export default Home;
