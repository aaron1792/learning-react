import { useState } from 'react';
import './Filters.css';

export function Filters() {
  const [minPrice, setMinPrice] = useState(0);

  const handleMinPrice = (event) => {
    return setMinPrice(event.target.value);
  };
  return (
    <section className="filters">
      <div>
        <label htmlFor="price">Price</label>
        <input
          type="range"
          id="price"
          min="0"
          max="1000"
          onChange={handleMinPrice}
        />
        <span>${minPrice}</span>
      </div>

      <div>
        <label htmlFor="categories">Categories</label>
        <select id="category">
          <option value="all">All</option>
          <option value="groceries">Groceries</option>
          <option value="beauty">Beauty</option>
        </select>
      </div>
    </section>
  );
}
