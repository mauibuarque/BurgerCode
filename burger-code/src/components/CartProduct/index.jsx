import trashImg from "../../assets/trash.svg";

const CartProduct = ({ cartProduct, cart, setCart, cartSize, setCartSize }) => {
  const { id, img, name, price, category } = cartProduct;

  const removeCartProduct = (id) => {
    const newCart = cart.filter((cartProduct) => cartProduct.id !== id);

    setCart(newCart);
    setCartSize(cartSize - 1);
  };

  return (
    <>
      <li key={id}>
        <img src={img} alt={`Foto ${name}`} />
        <div>
          <div>
            <h1>{name}</h1>
            <span>{price}</span>
          </div>
          <p>{category}</p>
        </div>
        <button
          onClick={() => {
            removeCartProduct(id);
          }}
        >
          <img src={trashImg} alt="Deletar produto do carrinho" />
        </button>
      </li>
    </>
  );
};

export default CartProduct;
