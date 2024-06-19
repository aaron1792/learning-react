/* eslint-disable react/prop-types */
import { createContext, useReducer } from 'react';
import { cartInitialState, cartReducer } from '../reducer/cart';

export const CartContext = createContext();
function useCartReducer() {
  const [state, dispatch] = useReducer(cartReducer, cartInitialState);

  const addtoCart = (product) =>
    dispatch({
      type: 'ADD_TO_CART',
      payload: product,
    });

  const removeFromCart = (product) =>
    dispatch({
      type: 'REMOVE_FROM_CART',
      payload: product,
    });

  const clearCart = () => dispatch({ type: 'CLEAR_CART' });
  return { state, addtoCart, removeFromCart, clearCart };
}

//testeando que el reducer funciona para anadir un producto al carrito

//expect(reducer([], { type: 'ADD_TO_CART', payload: { id: 1 } })).toEqual([
//{ id: 1, quantity: 1 },
//]);

export function CartProvider({ children }) {
  const { state, addtoCart, removeFromCart, clearCart } = useCartReducer();
  return (
    <CartContext.Provider
      value={{
        cart: state,
        addtoCart,
        removeFromCart,
        clearCart,
      }}>
      {children}
    </CartContext.Provider>
  );
}
