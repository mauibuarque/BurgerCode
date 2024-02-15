import { useEffect, useState } from "react";

import burgerAPI from "../../services/api";

import { Header, Dashboard, Cart } from "../index";

const HomePage = () => {
  const [products, setProducts] = useState([]);

  const [filterProducts, setFilterProducts] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  const [staticSearchValue, setStaticSearchValue] = useState("");

  const getCartList = JSON.parse(localStorage.getItem("cartList")) || [];
  const getModalCart = JSON.parse(localStorage.getItem("modalCart")) || false;

  const [cart, setCart] = useState(getCartList);
  const [cartSize, setCartSize] = useState(getCartList.length);
  const [modalCart, setModalCart] = useState(getModalCart);

  const getProducts = async () => {
    const { data } = await burgerAPI.get("/products");

    setProducts(data);
    setFilterProducts(data);
  };

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

  useEffect(() => {
    getProducts();
  }, []);

  useEffect(() => {
    localStorage.setItem("cartList", JSON.stringify(cart));
  }, [cart]);

  useEffect(() => {
    localStorage.setItem("modalCart", JSON.stringify(modalCart));
  }, [modalCart]);

  return (
    <>
      <Header
        products={products}
        searchValue={searchValue}
        setSearchValue={setSearchValue}
        setStaticSearchValue={setStaticSearchValue}
        setFilterProducts={setFilterProducts}
        searchProduct={searchProduct}
        cartSize={cartSize}
        modalCart={modalCart}
        setModalCart={setModalCart}
      />
      <Dashboard
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
