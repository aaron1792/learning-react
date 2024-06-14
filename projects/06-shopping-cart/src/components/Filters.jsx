import { useState } from 'react';
import './Filters.css';

// eslint-disable-next-line react/prop-types
export function Filters({ onChange }) {
  const [minPrice, setMinPrice] = useState(0);

  const handleMinPrice = (event) => {
    setMinPrice(event.target.value);
    // eslint-disable-next-line no-unreachable
    onChange((prevState) => ({
      ...prevState,
      minPrice: event.target.value,
    }));
  };

  const handleChangeCategory = (event) => {
    onChange((prevState) => ({
      ...prevState,
      category: event.target.value,
    }));
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
        <select
          id="category"
          onChange={handleChangeCategory}>
          <option value="all">All</option>
          <option value="groceries">Groceries</option>
          <option value="beauty">Beauty</option>
        </select>
      </div>
    </section>
  );
}
