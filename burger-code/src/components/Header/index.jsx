import style from "./style.module.scss";

import searchImg from "../../assets/search.svg";
import cartImg from "../../assets/cart.svg";

const Header = ({
  products,
  searchValue,
  setSearchValue,
  setFilterProducts,
  searchProduct,
  setStaticSearchValue,
  cartSize,
  modalCart,
  setModalCart,
}) => {
  const ResetSearchValue = () => {
    setSearchValue("");
    setStaticSearchValue("");
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
            Burger<span>Code</span>
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
        <div className="container">
          <form onSubmit={(e) => searchProduct(e)} className={style.searchForm}>
            <input
              type="text"
              value={searchValue}
              placeholder="Digite aqui..."
              onChange={(e) => setSearchValue(e.target.value)}
              className={`${style.searchInput} semibold`}
            />
            <button type="submit" className={`${style.searchButton} button`}>
              <img src={searchImg} alt="Pesquisar" />
            </button>
          </form>
        </div>
      </header>
    </>
  );
};

export default Header;
