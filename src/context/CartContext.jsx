import React, { createContext, useState, useContext, useEffect } from 'react';

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState(() => {
    const savedCart = localStorage.getItem('gravelgo_cart');
    return savedCart ? JSON.parse(savedCart) : [];
  });

  useEffect(() => {
    localStorage.setItem('gravelgo_cart', JSON.stringify(cartItems));
  }, [cartItems]);

  // ምርት መጨመሪያ
  const addToCart = (product, quantity = 1) => {
    setCartItems((prevItems) => {
      const exist = prevItems.find((item) => item.id === product.id);
      if (exist) {
        return prevItems.map((item) =>
          item.id === product.id ? { ...exist, qty: exist.qty + quantity } : item
        );
      }
      return [...prevItems, { ...product, qty: quantity }];
    });
  };

  // ምርት መቀነሻ/ማስወገጃ
  const removeFromCart = (id) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== id));
  };

  // የ እያንዳንዱን ዕቃ ብዛት መቀያየሪያ (በካርት ገጽ ላይ)
  const updateQty = (id, qty) => {
    if (qty <= 0) return removeFromCart(id);
    setCartItems((prevItems) =>
      prevItems.map((item) => (item.id === id ? { ...item, qty } : item))
    );
  };

  // ጠቅላላ ዋጋ ማሰያ
  const getCartTotal = () => {
    return cartItems.reduce((total, item) => total + item.price * item.qty, 0);
  };

  // ካርቱን ባዶ ማድረጊያ (ክፍያ ከተፈጸመ በኋላ)
  const clearCart = () => setCartItems([]);

  return (
    <CartContext.Provider value={{ cartItems, addToCart, removeFromCart, updateQty, getCartTotal, clearCart }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);