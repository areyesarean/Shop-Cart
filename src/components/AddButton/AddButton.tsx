import { useEffect, useState } from "react";
import "./styleAddButton.css";

interface Porps {
  maxCant: number;
  initialCant: number;
  cantSelect: number;
  onCantSelectChange: any;
}

const AddButton = ({
  maxCant,
  initialCant,
  cantSelect,
  onCantSelectChange,
}: Porps) => {
  const [twoBtn, setTwoBtn] = useState(false);

  useEffect(() => {
    initialCant > 0 && setTwoBtn(true);
  }, []);

  const handleDecrement = () =>
    cantSelect - 1 < 0 ? cantSelect : onCantSelectChange(cantSelect - 1);

  const handleIncrement = () =>
    cantSelect + 1 > maxCant ? cantSelect : onCantSelectChange(cantSelect + 1);

  const handleShowTwo = () => {
    onCantSelectChange(cantSelect + 1);
    setTwoBtn(true);
  };

  return twoBtn && cantSelect > 0 ? (
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
