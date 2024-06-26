/* eslint-disable react/prop-types */
import './Cart.css';
import { useId } from 'react';
import { CartIcon, ClearCartIcon } from './Icons';
import { useCart } from '../hooks/useCart';

function CartItem({ thumbnail, price, title, quantity, addtoCart }) {
  return (
    <li>
      <img
        src={thumbnail}
        alt={title}
      />

      <div>
        <strong>{title}</strong> - ${price}
      </div>
      <footer>
        <small onClick={addtoCart}>Qty: {quantity}</small>
        <button onClick={addtoCart}>+</button>
      </footer>
    </li>
  );
}

export function Cart() {
  const cartCheckboxId = useId();

  const { cart, clearCart, addtoCart } = useCart();

  return (
    <>
      <label
        className="cart-button"
        htmlFor={cartCheckboxId}>
        <CartIcon />
      </label>
      <input
        id={cartCheckboxId}
        type="checkbox"
        hidden
      />

      <aside className="cart">
        <ul>
          {cart.map((product) => (
            <CartItem
              key={product.id}
              addtoCart={() => addtoCart(product)}
              {...product}
            />
          ))}
        </ul>
        <button onClick={clearCart}>
          <ClearCartIcon />
        </button>
      </aside>
    </>
  );
}
