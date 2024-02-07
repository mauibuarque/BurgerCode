import { useState } from "react";

import Header from "../Header";
import Dashboard from "../Dashboard";
import Cart from "../Cart";

const HomePage = () => {
  const [cart, setCart] = useState([]);
  const [cartSize, setCartSize] = useState(0);

  return (
    <>
      <Header cartSize={cartSize} />
      <Dashboard />
      <Cart />
    </>
  );
};

export default HomePage;
