import style from "./style.module.scss";

import cartImg from "../../assets/cart.svg";

const Header = ({ cartSize, modalCart, setModalCart }) => {
  const openCartModal = () => {
    setModalCart(!modalCart);
  };

  return (
    <>
      <header className={style.header}>
        <div className={`${style.headerContent} container`}>
          <h1 className={`${style.title} bold`}>
            Burguer<span>Code</span>
          </h1>
          <div className={style.cart}>
            <button className={`${style.cartButton} button`}>
              <img
                onClick={() => openCartModal()}
                src={cartImg}
                alt="Carrinho"
              />
            </button>
            <span className={style.cartSizeValue}>{cartSize}</span>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
