import React, { useState } from 'react';
import Sidebar from './Sidebar';
import ProductList from './ProductList';
import { products } from './data';
import './App.css';

const App = () => {
  const [filters, setFilters] = useState({ category: 'All', priceRange: [0, 1000] });
  const [sortOption, setSortOption] = useState('name-asc');

  const filteredProducts = products
    .filter(product => filters.category === 'All' || product.category === filters.category)
    .filter(product => product.price >= filters.priceRange[0] && product.price <= filters.priceRange[1])
    .sort((a, b) => {
      if (sortOption === 'name-asc') return a.name.localeCompare(b.name);
      if (sortOption === 'name-desc') return b.name.localeCompare(a.name);
      if (sortOption === 'price-asc') return a.price - b.price;
      if (sortOption === 'price-desc') return b.price - a.price;
      return 0;
    });

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-3">
          <Sidebar setFilters={setFilters} setSortOption={setSortOption} />
        </div>
        <div className="col-md-9">
          <ProductList products={filteredProducts} />
        </div>
      </div>
    </div>
  );
};

export default App;
