import { products as initialProducs } from './mocks/products.json';

import { Products } from './components/Products';
import { useState } from 'react';
import { Header } from './components/Header';

function App() {
  const [products] = useState(initialProducs);
  const [filters, setFilters] = useState({
    category: 'all',
    minPrice: 0,
  });

  const FiltersProducts = (products) => {
    return products.filter((product) => {
      return (
        product.price >= filters.minPrice &&
        (filters.category === 'all' || product.category === filters.category)
      );
    });
  };

  const filteredProducts = FiltersProducts(products);

  return (
    <>
      <Header changeFilters={setFilters} />
      <Products products={filteredProducts} />
    </>
  );
}

export default App;
