import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { initProducts } from "../../actions/actionShop";
import Producto from "../Producto/Producto";
import "./styleEstanteria.css";

async function fetchApi() {
  const response = await fetch("http://localhost:4000/prod");
  const json = await response.json();
  return json;
}

const Estanteria = () => {
  const dispatch = useDispatch();
  const productos: any = useSelector<any>((state) => state.shop.products);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetch("http://localhost:4000/prod")
      .then((res) => {
        if (res.ok) {
          res.json().then((prod: any) => {
            dispatch(initProducts(prod));
            setLoading(false);
            setError("");
          });
        } else {
          setError("No pudimos obtener los productos");
        }
      })
      .catch((e: any) => {
        setError("No hay conexion");
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <p>Cargando...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <div>
      <h1 style={{ textAlign: "center", color: "white" }}>
        Productos que ofertamos
      </h1>
      <div className="flex-box">
        {productos.map((prod: any) => (
          <Producto key={prod.id} prod={prod} initialCant={0} info={true} />
        ))}
      </div>
    </div>
  );
};

export default Estanteria;
