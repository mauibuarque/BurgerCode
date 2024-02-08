import { useState } from "react";

import Header from "../Header";
import Dashboard from "../Dashboard";
import Cart from "../Cart";

const HomePage = () => {
  const [modalCart, setModalCart] = useState(false);
  const [cart, setCart] = useState([]);
  const [cartSize, setCartSize] = useState(0);

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
      />
      {modalCart ? <Cart cart={cart} /> : null}
    </>
  );
};

export default HomePage;
