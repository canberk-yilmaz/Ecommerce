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

  // Add product to cart

  const addToCart = (product, quantity) => {
    console.log(product, quantity);
    // Check if the product is already in the cart
    const exist = cartItems.find((item) => item.slug === product.slug);
    if (exist) {
      // If it is, increase the quantity
      setcartItems(
        cartItems.map((item) =>
          item.slug === product.slug
            ? { ...exist, quantity: exist.quantity + quantity }
            : item
        )
      );
    } else {
      setcartItems([...cartItems, { ...product, quantity }]);
    }
    console.log(cartItems);
  };

  return (
    <ShopContext.Provider
      value={{
        qty,
        increaseQty,
        decreaseQty,
        showCart,
        setShowCart,
        cartItems,
        addToCart,
      }}
    >
      {children}
    </ShopContext.Provider>
  );
};

export const useStateContext = () => useContext(ShopContext);
