/* eslint-disable react/prop-types */
import { createContext, useState } from 'react';

export const CartContext = createContext();

export function CartProvider({ children }) {
  const [cart, setCart] = useState([]);

  const addtoCart = (product) => {
    //check if the product is already in the cart

    const productInCartIndex = cart.findIndex((item) => item.id === product.id);

    if (productInCartIndex >= 0) {
      //Una forma seria usando structuredClone

      const newCart = structuredClone(cart);
      newCart[productInCartIndex].quantity += 1;
      return setCart(newCart);
    }

    //product no esta en el arrito

    setCart((prevState) => [
      ...prevState,

      {
        ...product,
        quantity: 1,
      },
    ]);
  };

  const removeFromCart = (product) => {
    setCart((prevState) => prevState.filter((item) => item.id !== product.id));
  };

  const clearCart = () => {
    setCart([]);
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        addtoCart,
        removeFromCart,
        clearCart,
      }}>
      {children}
    </CartContext.Provider>
  );
}
