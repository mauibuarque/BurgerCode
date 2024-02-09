import { useState } from "react";

import Header from "../Header";
import Dashboard from "../Dashboard";
import Cart from "../Cart";

const HomePage = () => {
  const [modalCart, setModalCart] = useState(false);
  const [cart, setCart] = useState([]);
  const [cartSize, setCartSize] = useState(0);

  const formatPrice = (price) => {
    const options = { style: "currency", currency: "BRL" };

    return price.toLocaleString(price, options);
  };

  return (
    <>
      <Header
        cartSize={cartSize}
        modalCart={modalCart}
        setModalCart={setModalCart}
      />
      <Dashboard
        cart={cart}
        setCart={setCart}
        cartSize={cartSize}
        setCartSize={setCartSize}
        formatPrice={formatPrice}
      />
      {modalCart ? (
        <Cart
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
