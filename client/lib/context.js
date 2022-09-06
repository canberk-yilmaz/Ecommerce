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
  // Remove product from cart

  const removeFromCart = (product, quantity) => {
    // Check if the product is already in the cart
    const exist = cartItems.find((item) => item.slug === product.slug);
    if (exist.quantity === 1) {
      // If it is, remove the item from cart
      setcartItems(cartItems.filter((item) => item.slug !== product.slug));
    } else {
      setcartItems(
        cartItems.map((item) =>
          item.slug === product.slug
            ? { ...exist, quantity: exist.quantity - quantity }
            : item
        )
      );
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
        removeFromCart,
      }}
    >
      {children}
    </ShopContext.Provider>
  );
};

export const useStateContext = () => useContext(ShopContext);
