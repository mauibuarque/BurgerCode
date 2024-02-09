import style from "./style.module.scss";

const ProductCard = ({
  product,
  cart,
  setCart,
  cartSize,
  setCartSize,
  formatPrice,
}) => {
  const { id, name, img, category, price } = product;

  const addProductToCart = () => {
    const cartFilter = cart.filter((cartProduct) => cartProduct.id === id);

    if (cartFilter.length === 0) {
      setCart([...cart, product]);
      setCartSize(cartSize + 1);
    }
  };

  return (
    <>
      <li key={id} className={style.card}>
        <img src={img} alt={`Foto ${name}`} />
        <div className={style.cardContent}>
          <div className={style.cardTitlePrice}>
            <h1 className="bold">{name}</h1>
            <span className="semibold">{formatPrice(price)}</span>
          </div>
          <p className={`${style.category} regular`}>{category}</p>
          <button
            onClick={() => addProductToCart()}
            className={`${style.addToCartButton} button semibold`}
          >
            Adicionar
          </button>
        </div>
      </li>
    </>
  );
};

export default ProductCard;
