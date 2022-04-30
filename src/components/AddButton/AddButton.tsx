import { useEffect, useState } from "react";
import "./styleAddButton.css";

interface Porps {
  maxCant: number;
  initialCant: number;
}

const AddButton = ({ maxCant, initialCant }: Porps) => {
  const [twoBtn, setTwoBtn] = useState(false);
  const [cant, setCant] = useState(initialCant);
  useEffect(() => {
    console.log(cant);
  }, [cant]);

  const handleDecrement = () => cant - 1 < initialCant ? cant : setCant(cant - 1);
  const handleIncrement = () => (cant + 1 > maxCant ? cant : setCant(cant + 1));

  const handleShowTwo = () => {
    setCant(cant + 1);
    setTwoBtn(true);
  };

  return twoBtn && cant > 0 ? (
    <div>
      <button className="btn decrement" onClick={handleDecrement}>
        -
      </button>
      <button className="btn increment" onClick={handleIncrement}>
        +
      </button>
    </div>
  ) : (
    <button className="btn add" onClick={handleShowTwo}>
      ADD
    </button>
  );
};

export default AddButton;
