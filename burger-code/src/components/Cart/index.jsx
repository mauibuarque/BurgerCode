import CartProduct from "../CartProduct";

import closeImg from "../../assets/close.svg";

const Cart = ({ cart, setCart, cartSize, setCartSize, formatPrice }) => {
  const cartTotal = () => {
    return cart.reduce((prev, curr) => prev + curr.price, 0);
  };

  const removeAllCart = () => {
    setCart([]);
  };

  return (
    <>
      <div>
        <h1>Carrinho de compras</h1>
        <button>
          <img src={closeImg} alt="Fechar carrinho" />
        </button>
      </div>
      <ul>
        {cart.map((cartProduct) => (
          <CartProduct
            key={cartProduct.id}
            cartProduct={cartProduct}
            cart={cart}
            setCart={setCart}
            cartSize={cartSize}
            setCartSize={setCartSize}
            formatPrice={formatPrice}
          />
        ))}
      </ul>
      <div>
        <p>Total</p>
        <span>{formatPrice(cartTotal())}</span>
      </div>
      <button onClick={() => removeAllCart()}>Remover todos</button>
    </>
  );
};

export default Cart;
