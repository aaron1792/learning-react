/* eslint-disable react/prop-types */
import './Products.css';

import { AddToCartIcon, RemoveFromCartIcon } from './Icons';
import { useCart } from '../hooks/useCart';

// eslint-disable-next-line react/prop-types
export function Products({ products }) {
  const { addtoCart, removeFromCart, cart } = useCart();

  const checkProductInCarts = (product) => {
    return cart.some((item) => item.id === product.id);
  };
  return (
    <main className="products">
      <ul>
        {products.slice(0, 20).map((product) => {
          const isProductInCart = checkProductInCarts(product);
          return (
            <li key={product.id}>
              <img
                src={product.thumbnail}
                alt={product.title}
              />

              <div>
                <strong>
                  {product.title} - ${product.price}
                </strong>
              </div>
              <div>
                <button
                  style={{ backgroundColor: isProductInCart ? 'red' : '#09f' }}
                  onClick={() => {
                    isProductInCart
                      ? removeFromCart(product)
                      : addtoCart(product);
                  }}>
                  {isProductInCart ? <RemoveFromCartIcon /> : <AddToCartIcon />}
                </button>
              </div>
            </li>
          );
        })}
      </ul>
    </main>
  );
}
