import React, { useState } from 'react';
import './Sidebar.css'; // Custom CSS for animations and layout

const Sidebar = ({ setFilters, setSortOption }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [priceRange, setPriceRange] = useState([0, 1000]);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const handleCategoryChange = (e) => {
    setFilters(prev => ({ ...prev, category: e.target.value }));
  };

  const handleMinPriceChange = (e) => {
    const minPrice = Number(e.target.value);
    setPriceRange([minPrice, priceRange[1]]);
    setFilters(prev => ({ ...prev, priceRange: [minPrice, priceRange[1]] }));
  };

  const handleMaxPriceChange = (e) => {
    const maxPrice = Number(e.target.value);
    setPriceRange([priceRange[0], maxPrice]);
    setFilters(prev => ({ ...prev, priceRange: [priceRange[0], maxPrice] }));
  };

  const handleSortChange = (e) => {
    setSortOption(e.target.value);
  };

  return (
    <div>
      {/* Hamburger Menu for Mobile */}
      <button className="hamburger" onClick={toggleSidebar}>
        <span className="navbar-toggler-icon"></span>
      </button>

      {/* Sidebar */}
      <div className={`sidebar-container ${isOpen ? 'open' : ''}`}>
        <h4 className="sidebar-title">Filters</h4>
        <div className="filter-section">
          <label className="filter-label">Category</label>
          <select className="form-select filter-input" onChange={handleCategoryChange}>
            <option value="All">All Categories</option>
            <option value="Dresses">Dresses</option>
            <option value="Accessories">Accessories</option>
            <option value="Goggles">Goggles</option>
            <option value="Smartphones">Smartphones</option>
            <option value="Laptops">Laptops</option>
            <option value="Watches">Watches</option>
            <option value="Shoes">Shoes</option>
          </select>
        </div>

        <div className="filter-section">
          <label className="filter-label">Price Range</label>
          <div className="d-flex align-items-center price-input-group">
            <div className="price-input">
              <label>Min</label>
              <input
                type="number"
                className="form-control"
                value={priceRange[0]}
                min="0"
                max="1000"
                onChange={handleMinPriceChange}
              />
            </div>
            <div className="price-input">
              <label>Max</label>
              <input
                type="number"
                className="form-control"
                value={priceRange[1]}
                min="0"
                max="1000"
                onChange={handleMaxPriceChange}
              />
            </div>
          </div>
          <div className="price-display">
            ${priceRange[0]} - ${priceRange[1]}
          </div>
        </div>

        <div className="filter-section">
          <label className="filter-label">Sort By</label>
          <select className="form-select filter-input" onChange={handleSortChange}>
            <option value="name-asc">Name (A-Z)</option>
            <option value="name-desc">Name (Z-A)</option>
            <option value="price-asc">Price (Low to High)</option>
            <option value="price-desc">Price (High to Low)</option>
          </select>
        </div>
      </div>

      {/* Overlay to close sidebar */}
      {isOpen && <div className="overlay" onClick={toggleSidebar}></div>}
    </div>
  );
};

export default Sidebar;
