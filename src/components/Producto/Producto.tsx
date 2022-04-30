import { useState } from "react";
import AddButton from "../AddButton/AddButton";
import "./styleProducto.css";

interface Props {
  prod: any;
}

const Producto = ({ prod }: Props) => {
  const [cantSelec, setCantSelec] = useState(0);

  const handleCantSelect = (cant: number) => {
    console.log(cant);
    setCantSelec(cant);
  };

  return (
    <div className="card-producto">
      <p className="text-desc">
        {cantSelec} Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eaque quia
        molestias...
      </p>
      <p className="product-info">
        {prod.name} . ${prod.price}
      </p>
      <AddButton
        cantSelect={cantSelec}
        onCantSelectChange={handleCantSelect}
        maxCant={prod.cantStock}
        initialCant={0}
      />
    </div>
  );
};

export default Producto;
