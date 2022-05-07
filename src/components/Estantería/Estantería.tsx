import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { initProducts } from "../../actions/actionShop";
import useProducts from "../../hooks/useProducts";
import Producto from "../Producto/Producto";
import "./styleEstanteria.css";

const Estanteria = () => {
  const dispatch = useDispatch();
  const productos: any = useSelector<any>((state) => state.shop.products);
  const query = useProducts();

  useEffect(() => {
    if (query.data) {
      dispatch(initProducts(query.data));
    }
  }, [query.data, dispatch]);

  const handleRefetch = () => {
    query.refetch();
  };

  if (query.isLoading) {
    return <p>Cargando...</p>;
  }

  if (query.isRefetching) {
    return <p>Actualizando...</p>;
  }

  if (query.isError) {
    return <p>Error al cargar los datos</p>;
  }

  return (
    <div>
      <h1 style={{ textAlign: "center", color: "white" }}>
        Productos que ofertamos
      </h1>
      <button onClick={handleRefetch}>Refrescar</button>
      <div className="flex-box">
        {productos.map((prod: any) => (
          <Producto key={prod.id} prod={prod} initialCant={0} info={true} />
        ))}
      </div>
    </div>
  );
};

export default Estanteria;
