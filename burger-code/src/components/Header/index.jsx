import style from "./style.module.scss";

import searchImg from "../../assets/search.svg";
import cartImg from "../../assets/cart.svg";

const Header = ({
  products,
  searchValue,
  setSearchValue,
  setFilterProducts,
  searchProduct,
  cartSize,
  modalCart,
  setModalCart,
}) => {
  const ResetSearchValue = () => {
    setSearchValue("");
    setFilterProducts(products);
  };

  const openCartModal = () => {
    setModalCart(!modalCart);
  };

  return (
    <>
      <header className={style.header}>
        <div className={`${style.headerContent} container`}>
          <h1
            onClick={() => ResetSearchValue()}
            className={`${style.title} bold`}
          >
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
        <form onSubmit={(e) => searchProduct(e)}>
          <input type="text" value={searchValue} onChange={(e) => setSearchValue(e.target.value)} />
          <button type="submit">
            <img src={searchImg} alt="Pesquisar" />
          </button>
        </form>
      </header>
    </>
  );
};

export default Header;
