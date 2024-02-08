import CartProduct from "../CartProduct";

const Cart = ({ cart, setCart, cartSize, setCartSize }) => {
  return (
    <>
      <h1>CARRINHO</h1>
      <ul>
        {cart.map((cartProduct) => (
          <CartProduct
            key={cartProduct.id}
            cartProduct={cartProduct}
            cart={cart}
            setCart={setCart}
            cartSize={cartSize}
            setCartSize={setCartSize}
          />
        ))}
      </ul>
    </>
  );
};

export default Cart;
