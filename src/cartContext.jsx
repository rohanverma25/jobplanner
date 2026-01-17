import React, { createContext, useContext, useState, useEffect } from 'react';

const CartContext = createContext();

export function useCart() {
  return useContext(CartContext);
}

export function CartProvider({ children }) {
  const [items, setItems] = useState(() => {
    try {
      const cartData = localStorage.getItem('jobplannerCart');
      return cartData ? JSON.parse(cartData) : [];
    } catch {
      return [];
    }
  });

  const [onAddCallback, setOnAddCallback] = useState(null);

  function addItem(newItem) {
    setItems(curr => {
      const existing = curr.find(i => i.id === newItem.id);
      if (existing) {
        return curr.map(i =>
          i.id === newItem.id ? { ...i, qty: i.qty + 1 } : i
        );
      }
      return [...curr, { ...newItem, qty: 1 }];
    });
    if (onAddCallback) onAddCallback();
  }

  function removeItem(id) {
    setItems(curr => curr.filter(i => i.id !== id));
  }

  function updateQty(id, qty) {
    setItems(curr =>
      curr.map(i => (i.id === id ? { ...i, qty } : i)).filter(i => i.qty > 0)
    );
  }

  function clearCart() {
    setItems([]);
  }

  const total = items.reduce((sum, i) => sum + i.price * i.qty, 0);

  useEffect(() => {
    localStorage.setItem('jobplannerCart', JSON.stringify(items));
  }, [items]);

  return (
    <CartContext.Provider value={{
      items, addItem, removeItem, updateQty, clearCart, total,
      setOnAddCallback,
    }}>
      {children}
    </CartContext.Provider>
  );
}
