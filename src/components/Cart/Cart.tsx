import { useSelector } from "react-redux";
import useCantProducto from "../../hooks/useCantProducto";
import Producto from "../Producto/Producto";
import './styleCart.css'

const Cart = () => {
  const cart: any = useSelector<any>((state) => state.shop.cart);
  const {cantProd, totalPagar, cartIsEmpty} = useCantProducto();

  return (
    <div>
      <header className="header-cart">
        <h1>Carrito de compras</h1>
        <h3>Total pagar: ${totalPagar}</h3>
        <h3>Total de productos: {cantProd}</h3>
      </header>
      <div className="content">
        {cartIsEmpty && <h3>No hay elementos en el carrito :(</h3>}
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
