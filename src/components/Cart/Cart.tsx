import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Producto from "../Producto/Producto";
import './styleCart.css'

const Cart = () => {
  const cart: any = useSelector<any>((state) => state.shop.cart);
  const [totalPagar, setTotalPagar] = useState(0);

  useEffect(() => {
    setTotalPagar(0);
    cart.map((prod: any) =>
      setTotalPagar((total) => (total += prod.price * prod.cantSelect))
    );
  }, [cart]);

  return (
    <div>
      <header className="header-cart">
        <h1>Carrito de compras</h1>
        <h3>Total pagar: ${totalPagar.toFixed(2)}</h3>
        <h3>Total de productos: {cart.length}</h3>
      </header>
      <div className="content">
        {cart.length === 0 && <h3>No hay elementos en el carrito :(</h3>}
        {cart.map((prodCart: any) => (
          <Producto
            key={prodCart.id}
            prod={prodCart}
            initialCant={prodCart.cantSelect}
            info={true}
            textCart={true}
          />
        ))}
      </div>
    </div>
  );
};

export default Cart;
