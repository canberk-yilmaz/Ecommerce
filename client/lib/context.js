import React, { createContext, useContext, useState } from "react";

const ShopContext = createContext();

export const StateContext = ({ children }) => {
  const [showCart, setShowCart] = useState(false);
  const [cartItems, setcartItems] = useState([]);

  // Add our data for the state
  const [qty, setQty] = useState(1);

  // Increase the quantity by 1

  const increaseQty = () => {
    setQty((prevQty) => prevQty + 1);
  };

  // Decrease the quantity by 1
  const decreaseQty = () => {
    setQty((prevQty) => {
      if (prevQty === 1) {
        return 1;
      }
      return prevQty - 1;
    });
  };

  return (
    <ShopContext.Provider value={{ qty, increaseQty, decreaseQty }}>
      {children}
    </ShopContext.Provider>
  );
};

export const useStateContext = () => useContext(ShopContext);
