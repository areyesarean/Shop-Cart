import { useSelector } from "react-redux";
import Producto from "../Producto/Producto";
import "./styleEstanteria.css";

const Estanteria = () => {
  const productos: any = useSelector<any>((state) => state.shop.products);
  return (
    <div>
      <h1>Productos que ofertamos</h1>
      <div className="flex-box">
        {productos.map((prod: any) => (
          <Producto key={prod.id} prod={prod} />
        ))}
      </div>
    </div>
  );
};

export default Estanteria;
