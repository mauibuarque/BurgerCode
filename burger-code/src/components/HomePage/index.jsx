import { useEffect, useState } from "react";

import burgerAPI from "../../services/api";

import Header from "../Header";
import Dashboard from "../Dashboard";
import Cart from "../Cart";

const HomePage = () => {
  const [products, setProducts] = useState([]);

  const [cart, setCart] = useState([]);
  const [cartSize, setCartSize] = useState(0);
  const [modalCart, setModalCart] = useState(false);

  const [filterProducts, setFilterProducts] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  const [staticSearchValue, setStaticSearchValue] = useState("");

  const getProducts = async () => {
    const { data } = await burgerAPI.get("/products");

    setProducts(data);
    setFilterProducts(data);
  };

  useEffect(() => {
    getProducts();
  }, []);

  const searchProduct = (e) => {
    e.preventDefault();

    const filter = products.filter((product) =>
      product.name.toLowerCase().includes(searchValue.toLowerCase())
    );

    searchValue.length > 0
      ? setFilterProducts(filter)
      : setFilterProducts(products);

    setStaticSearchValue(searchValue);
  };

  const formatPrice = (price) => {
    const options = { style: "currency", currency: "BRL" };

    return price.toLocaleString(price, options);
  };

  return (
    <>
      <Header
        products={products}
        searchValue={searchValue}
        setSearchValue={setSearchValue}
        setFilterProducts={setFilterProducts}
        searchProduct={searchProduct}
        cartSize={cartSize}
        modalCart={modalCart}
        setModalCart={setModalCart}
      />
      <Dashboard
        products={products}
        filterProducts={filterProducts}
        searchValue={searchValue}
        staticSearchValue={staticSearchValue}
        cart={cart}
        setCart={setCart}
        cartSize={cartSize}
        setCartSize={setCartSize}
        formatPrice={formatPrice}
      />
      {modalCart ? (
        <Cart
          modalCart={modalCart}
          setModalCart={setModalCart}
          cart={cart}
          setCart={setCart}
          cartSize={cartSize}
          setCartSize={setCartSize}
          formatPrice={formatPrice}
        />
      ) : null}
    </>
  );
};

export default HomePage;
