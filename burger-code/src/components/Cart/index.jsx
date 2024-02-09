import style from "./style.module.scss";

import CartProduct from "../CartProduct";

import closeImg from "../../assets/close.svg";

const Cart = ({
  modalCart,
  setModalCart,
  cart,
  setCart,
  cartSize,
  setCartSize,
  formatPrice,
}) => {
  const closeCartModal = () => {
    setModalCart(!modalCart);
  };

  const cartTotal = () => {
    return cart.reduce((prev, curr) => prev + curr.price, 0);
  };

  const removeAllCart = () => {
    setCart([]);
  };

  return (
    <>
      <div className={`${style.overlayCartModal} container`}>
        <div className={style.cartModal}>
          <div className={style.cartHeader}>
            <h1 className="bold">Carrinho de compras</h1>
            <button
              onClick={() => closeCartModal()}
              className={`${style.closeModalButton} button`}
            >
              <img src={closeImg} alt="Fechar carrinho" />
            </button>
          </div>
          <div className={style.cartContent}>
            {cartSize > 0 ? (
              <>
                <ul className={style.cartList}>
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
                <div className={style.cartFooter}>
                  <div className={style.cartTotalValue}>
                    <p>Total</p>
                    <span>{formatPrice(cartTotal())}</span>
                  </div>
                  <button
                    onClick={() => removeAllCart()}
                    className={`${style.removeAllCartButton} button bold`}
                  >
                    Remover todos
                  </button>
                </div>
              </>
            ) : (
              <div className={style.noCartProducts}>
                <p className="semibold">
                  Você ainda não adicionou itens ao carrinho
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Cart;
