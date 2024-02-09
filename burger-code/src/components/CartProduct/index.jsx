import style from "./style.module.scss";

import trashImg from "../../assets/trash.svg";

const CartProduct = ({
  cartProduct,
  cart,
  setCart,
  cartSize,
  setCartSize,
  formatPrice,
}) => {
  const { id, img, name, price } = cartProduct;

  const removeCartProduct = (id) => {
    const newCart = cart.filter((cartProduct) => cartProduct.id !== id);

    setCart(newCart);
    setCartSize(cartSize - 1);
  };

  return (
    <>
      <li key={id} className={style.cartProductCard}>
        <div className={style.cartProductImgContainer}>
          <img
            src={img}
            alt={`Foto ${name}`}
            className={style.cartProductImg}
          />
        </div>
        <div className={style.cartProductContent}>
          <div className={style.cartProductHeader}>
            <h1 className={`${style.cartProductTitle} bold`}>{name}</h1>
            <button
              onClick={() => {
                removeCartProduct(id);
              }}
              className={style.removeCartProductButton}
            >
              <img src={trashImg} alt="Deletar produto do carrinho" />
            </button>
          </div>
          <span className={style.cartProductPrice}>{formatPrice(price)}</span>
        </div>
      </li>
    </>
  );
};

export default CartProduct;
