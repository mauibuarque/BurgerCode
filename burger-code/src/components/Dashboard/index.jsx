import style from "./style.module.scss";

import { useEffect, useState } from "react";

import burgerAPI from "../../services/api";

import ProductCard from "../ProductCard";

const Dashboard = () => {
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
            <ProductCard key={product.name} product={product} />
          ))}
        </ul>
      </section>
    </>
  );
};

export default Dashboard;
