import React, { createContext, useContext, useState, ReactNode } from 'react';
import { ProductType } from '@/src/types/type';
import AsyncStorage from '@react-native-async-storage/async-storage';

// Cart item includes quantity
export type CartItem = ProductType & { quantity: number };

type CartContextType = {
  cartItems: CartItem[];
  addToCart: (product: ProductType) => void;
  removeFromCart: (id: number) => void;
  incrementQuantity: (id: number) => void;
  decrementQuantity: (id: number) => void;
};

// Create context
const CartContext = createContext<CartContextType | undefined>(undefined);

// Hook
export const useCart = (): CartContextType => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};

// Provider
type CartProviderProps = { children: ReactNode };

export const CartProvider = ({ children }: CartProviderProps) => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  const storeToStorage=async (items: CartItem[]) => {
    await AsyncStorage.setItem('cartItems', JSON.stringify(items));
  };

  const incrementQuantity = (id: number) => {
  setCartItems((prevItems) =>
    prevItems.map(item =>
      item.id === id ? { ...item, quantity: item.quantity + 1 } : item
    )
  );
};

const decrementQuantity = (id: number) => {
  setCartItems((prevItems) =>
    prevItems
      .map(item => {
        if (item.id === id) {
          return { ...item, quantity: item.quantity - 1 };
        }
        return item;
      })
      .filter(item => item.quantity > 0) // remove from cart if quantity becomes 0
  );
};


  const addToCart = (product: ProductType) => {
    setCartItems((prevItems) => {
      const existingItem = prevItems.find(item => item.id === product.id);

      if (existingItem) {
        return prevItems.map(item =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 } // Increase quantity
            : item
        );
      }

      // Add new product with quantity 1
      return [...prevItems, { ...product, quantity: 1 }];
    });
  };

  const removeFromCart = (id: number) => {
    setCartItems(prev => prev.filter(item => item.id !== id));
  };

  return (
    <CartContext.Provider value={{ cartItems, addToCart, removeFromCart, incrementQuantity,
    decrementQuantity }}>
      {children}
    </CartContext.Provider>
  );
};
