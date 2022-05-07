import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

const useCantProducto = () => {
  const [cant, setCant] = useState(0);
  const [totalPagar, setTotalPagar] = useState(0);
  const cart: any = useSelector<any>((state) => state.shop.cart);

  useEffect(() => {
    setTotalPagar(0);
    setCant(0);
    cart.forEach((prod: any) => {
      setTotalPagar((total) => (total += prod.price * prod.cantSelect));
      setCant((cant) => (cant += prod.cantSelect));
    });
  }, [cart]);

  return {
    cantProd: cant,
    totalPagar: totalPagar.toFixed(2),
    cartIsEmpty: cart.length === 0,
  };
};

export default useCantProducto;
