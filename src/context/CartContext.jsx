import React, { createContext, useState, useContext } from 'react';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  // እቃ ወደ ካርት ለመጨመር
  const addToCart = (product) => {
    setCartItems((prevItems) => {
      const exist = prevItems.find((item) => item.id === product.id);
      if (exist) {
        return prevItems.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prevItems, { ...product, quantity: 1 }];
    });
  };

  // የዕቃውን ብዛት ለመቀየር (ለመቀነስ ወይም ለመጨመር)
  const updateQuantity = (id, quantity) => {
    if (quantity <= 0) return;
    setCartItems((prevItems) =>
      prevItems.map((item) => (item.id === id ? { ...item, quantity } : item))
    );
  };

  // እቃ ከካርት ላይ ሙሉ በሙሉ ለማስወገድ
  const removeFromCart = (id) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== id));
  };

  // የካርቱን አጠቃላይ ዋጋ ለመደመር
  const getCartTotal = () => {
    return cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  return (
    <CartContext.Provider value={{ cartItems, addToCart, updateQuantity, removeFromCart, getCartTotal }}>
      {children}
    </CartContext.Provider>
  );
};

// 💡 አዲስ የተጨመረ፡ Navbar እና ሌሎች ገጾች በቀላሉ እንዲጠቀሙት የሚያደርግ custom hook
export const useCart = () => {
  return useContext(CartContext);
};