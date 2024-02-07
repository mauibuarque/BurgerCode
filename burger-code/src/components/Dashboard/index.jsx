import { useEffect, useState } from "react";

import burgerAPI from "../../services/api";

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
      <ul>
        {products.map(({ name, category, price, img }) => (
          <li key={name}>
            <img src={img} alt={`Foto ${name}`} />
            <h1>{name}</h1>
            <span>{category}</span>
            <span>{price}</span>
          </li>
        ))}
      </ul>
    </>
  );
};

export default Dashboard;
