import style from "./style.module.scss";

import ProductCard from "../ProductCard";

const Dashboard = ({
  filterProducts,
  staticSearchValue,
  cart,
  setCart,
  cartSize,
  setCartSize,
  formatPrice,
}) => {
  return (
    <>
      <section className="container">
        <p
          className={
            staticSearchValue.length > 0
              ? `${style.resultSearch} semibold`
              : style.hideResultSearch
          }
        >
          Resultados para: "{staticSearchValue}"
        </p>
        <ul className={style.productsList}>
          {filterProducts.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              cart={cart}
              setCart={setCart}
              cartSize={cartSize}
              setCartSize={setCartSize}
              formatPrice={formatPrice}
            />
          ))}
        </ul>
      </section>
    </>
  );
};

export default Dashboard;
