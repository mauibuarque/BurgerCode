import style from "./style.module.scss";

import cartImg from "../../assets/cart.svg";

const Header = ({ cartSize, modalCart, setModalCart }) => {
  const cartModal = () => {
    modalCart ? setModalCart(false) : setModalCart(true);
  };

  return (
    <>
      <header className={style.header}>
        <div className={`${style.headerContent} container`}>
          <h1 className={`${style.title} bold`}>
            Burguer<span>Code</span>
          </h1>
          <div className={style.cart}>
            <img onClick={() => cartModal()} src={cartImg} alt="Carrinho" />
            <span>{cartSize}</span>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
