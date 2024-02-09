import style from "./style.module.scss";

import { useEffect, useState } from "react";

import burgerAPI from "../../services/api";

import ProductCard from "../ProductCard";

const Dashboard = ({ cart, setCart, cartSize, setCartSize, formatPrice }) => {
  const [products, setProducts] = useState([]);

  const getProducts = async () => {
    const { data } = await burgerAPI.get("/products");

    setProducts(data);
  };

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <>
      <section className="container">
        <ul className={style.productsList}>
          {products.map((product) => (
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
