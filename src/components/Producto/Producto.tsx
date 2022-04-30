import AddButton from "../AddButton/AddButton";
import "./styleProducto.css";

interface Props {
  prod: any;
}

const Producto = ({ prod }: Props) => {
  return (
    <div className="card-producto">
      <p className="text-desc">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eaque quia
        molestias...
      </p>
      <p className="product-info">
        {prod.name} . ${prod.price}
      </p>
      <AddButton maxCant={prod.cantStock} initialCant={0}/>
    </div>
  );
};

export default Producto;
