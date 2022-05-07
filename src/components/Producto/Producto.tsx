import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../../actions/actionShop";
import AddButton from "../AddButton/AddButton";
import "./styleProducto.css";

interface Props {
  prod: any;
  initialCant: number;
  info?: boolean;
  textCart?: boolean;
}

const Producto = ({ prod, initialCant, info, textCart }: Props) => {
  const [cantSelec, setCantSelec] = useState(initialCant);
  const dispatch = useDispatch();

  const handleCantSelect = (cant: number) => {
    setCantSelec(cant);
  };

  useEffect(() => {
    dispatch(addToCart(prod.id, cantSelec));
  }, [cantSelec, dispatch, prod.id]);

  return (
    <div className="card-producto">
      {cantSelec > 0 && <div className="badge">{cantSelec}</div>}
      <h2 className="prod-name">{prod.name}</h2>
      {info && (
        <p className="text-desc">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eaque quia
          molestias...
        </p>
      )}
      <span>Disponibles: {prod.cantStock}</span>
      <p className="product-info">
        ${prod.price}{" "}
        {textCart && `x${cantSelec} -- $${(prod.price * cantSelec).toFixed(2)}`}
      </p>
      <AddButton
        cantSelect={cantSelec}
        onCantSelectChange={handleCantSelect}
        maxCant={prod.cantStock}
        initialCant={initialCant}
      />
    </div>
  );
};

export default Producto;
