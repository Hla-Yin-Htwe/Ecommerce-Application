import React, { createContext, useContext, useState, ReactNode } from 'react';

type CartContextType = {
  cart: number[];
  addToCart: (id: number) => void;
};

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [cart, setCart] = useState<number[]>([]);

  const addToCart = (id: number) => {
    setCart((prev) => [...prev, id]);
    console.log('Added to cart:', id);
  };

  return (
    <CartContext.Provider value={{ cart, addToCart }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) throw new Error('useCart must be used within a CartProvider');
  return context;
};
