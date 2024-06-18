import { useState, useId } from 'react';
import './Filters.css';
import { useFilters } from '../hooks/useFilters';

// eslint-disable-next-line react/prop-types
export function Filters() {
  const { filters, setFilters } = useFilters();

  const priceUserId = useId();
  const categoryUserId = useId();

  const handleMinPrice = (event) => {
    // eslint-disable-next-line no-unreachable
    setFilters((prevState) => ({
      ...prevState,
      minPrice: event.target.value,
    }));
  };

  const handleChangeCategory = (event) => {
    setFilters((prevState) => ({
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
          id={priceUserId}
          min="0"
          max="1000"
          onChange={handleMinPrice}
          value={filters.minPrice}
        />
        <span>${filters.minPrice}</span>
      </div>

      <div>
        <label htmlFor={categoryUserId}>Categories</label>
        <select
          id={categoryUserId}
          onChange={handleChangeCategory}>
          <option value="all">All</option>
          <option value="groceries">Groceries</option>
          <option value="beauty">Beauty</option>
        </select>
      </div>
    </section>
  );
}
