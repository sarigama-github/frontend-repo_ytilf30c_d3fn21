import { createContext, useContext, useEffect, useMemo, useState } from "react";

const CartContext = createContext(null);

export function CartProvider({ children }) {
  const [cart, setCart] = useState(() => {
    try {
      const raw = localStorage.getItem("mca_cart");
      return raw ? JSON.parse(raw) : [];
    } catch {
      return [];
    }
  });
  const [wishlist, setWishlist] = useState(() => {
    try {
      const raw = localStorage.getItem("mca_wishlist");
      return raw ? JSON.parse(raw) : [];
    } catch {
      return [];
    }
  });
  const [currency, setCurrency] = useState(() => localStorage.getItem("mca_currency") || "DZD");
  const [lang, setLang] = useState(() => localStorage.getItem("mca_lang") || "en");

  useEffect(() => {
    localStorage.setItem("mca_cart", JSON.stringify(cart));
  }, [cart]);

  useEffect(() => {
    localStorage.setItem("mca_wishlist", JSON.stringify(wishlist));
  }, [wishlist]);

  useEffect(() => {
    localStorage.setItem("mca_currency", currency);
  }, [currency]);

  useEffect(() => {
    localStorage.setItem("mca_lang", lang);
  }, [lang]);

  const addToCart = (item) => {
    setCart((prev) => {
      const idx = prev.findIndex((p) => p.product_id === item.product_id && p.size === item.size);
      if (idx >= 0) {
        const copy = [...prev];
        copy[idx] = { ...copy[idx], qty: copy[idx].qty + (item.qty || 1) };
        return copy;
      }
      return [...prev, { ...item, qty: item.qty || 1 }];
    });
  };

  const removeFromCart = (product_id, size) => {
    setCart((prev) => prev.filter((p) => !(p.product_id === product_id && p.size === size)));
  };

  const updateQty = (product_id, size, qty) => {
    setCart((prev) => prev.map((p) => (p.product_id === product_id && p.size === size ? { ...p, qty } : p)));
  };

  const toggleWishlist = (product) => {
    setWishlist((prev) => {
      const exists = prev.find((p) => p.id === product.id);
      if (exists) return prev.filter((p) => p.id !== product.id);
      return [...prev, product];
    });
  };

  const total = useMemo(() => cart.reduce((acc, i) => acc + i.price * i.qty, 0), [cart]);

  const value = { cart, addToCart, removeFromCart, updateQty, total, wishlist, toggleWishlist, currency, setCurrency, lang, setLang };
  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart() {
  return useContext(CartContext);
}
