import style from "./style.module.scss";

import cartImg from "../../assets/cart.svg";

const Header = () => {
  return (
    <>
      <div className="container">
        <header className={style.header}>
          <h1 className="fontPrimary bold">
            Burguer<span>Code</span>
          </h1>
          <div>
            <img src={cartImg} alt="Carrinho" />
            <span>0</span>
          </div>
        </header>
      </div>
    </>
  );
};

export default Header;
