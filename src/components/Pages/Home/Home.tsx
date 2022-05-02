import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Link, Outlet } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";
import useCantProducto from "../../../hooks/useCantProducto";
import { actionAuthTypes } from "../../../types/actionTypes";
import "./styleHome.css";

const Home = () => {
  const { cantProd } = useCantProducto();
  const { isLogin } = useAuth();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({ type: actionAuthTypes.INITSTATE });
  }, [dispatch]);


  return (
    <div>
      <nav className="navigation menu">
        <h1 className="title">Home </h1>
        <div className="link-container">
          <Link to="products" className="link">
            Productos
          </Link>
        </div>
        <div className="link-container">
          <Link to="cart" className="link">
            Cart {cantProd}
          </Link>
        </div>
        <div className="link-container">
          <button onClick={()=> dispatch({ type: actionAuthTypes.LOGOUT })}>Logout</button>
        </div>
      </nav>
      <section className="content">
        <Outlet />
      </section>
    </div>
  );
};

export default Home;
