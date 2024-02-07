import style from "./style.module.scss";

import cartImg from "../../assets/cart.svg";

const Header = ({ cartSize }) => {
  return (
    <>
      <header className={style.header}>
        <section className="container fontPrimary">
          <h1 className="bold">
            Burguer<span>Code</span>
          </h1>
          <div>
            <img src={cartImg} alt="Carrinho" />
            <span>{cartSize}</span>
          </div>
        </section>
      </header>
    </>
  );
};

export default Header;
