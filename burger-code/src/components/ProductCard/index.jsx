import style from "./style.module.scss";

const ProductCard = ({ product, cart, setCart, cartSize, setCartSize }) => {
  const { id, name, img, category, price } = product;

  const addProductToCart = () => {
    if (!cart.includes((cartProduct) => cartProduct.id === id)) {
      setCart([...cart, product]);
      setCartSize(cartSize + 1);
    }
  };

  const formatPrice = (price) => {
    const options = { style: "currency", currency: "BRL" };

    return price.toLocaleString(price, options);
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
            onClick={() => {
              addProductToCart();
            }}
            className="button semibold"
          >
            Adicionar
          </button>
        </div>
      </li>
    </>
  );
};

export default ProductCard;
