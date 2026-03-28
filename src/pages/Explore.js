import React, { useState } from 'react';
import '../styles/Explore.css';
import { FiHeart, FiSearch, FiSliders } from 'react-icons/fi';

const products = [
  { id: 1, name: 'Luxury Chocolate Hamper', price: 999, category: 'Hampers', occasion: 'Birthday', tag: 'Bestseller', image: 'https://images.unsplash.com/photo-1549465220-1a8b9238cd48?w=400&q=80', keywords: ['chocolate', 'sweets', 'candy', 'hamper', 'birthday', 'gift box'] },
  { id: 2, name: 'Custom Photo Frame', price: 599, category: 'Personalized', occasion: 'Anniversary', tag: 'New', image: 'https://images.unsplash.com/photo-1513519245088-0e12902e5a38?w=400&q=80', keywords: ['photo', 'picture', 'frame', 'memory', 'anniversary', 'couple', 'personalized'] },
  { id: 3, name: 'Aromatherapy Gift Set', price: 1299, category: 'Wellness', occasion: "Valentine's", tag: 'Trending', image: 'https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=400&q=80', keywords: ['aroma', 'candle', 'spa', 'relax', 'wellness', 'scent', 'smell', 'valentine', 'love'] },
  { id: 4, name: 'Personalized Jewellery Box', price: 849, category: 'Personalized', occasion: 'Wedding', tag: 'Bestseller', image: 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=400&q=80', keywords: ['jewellery', 'jewelry', 'ring', 'necklace', 'chain', 'wedding', 'marriage', 'bride'] },
  { id: 5, name: 'Gourmet Tea Collection', price: 749, category: 'Hampers', occasion: 'Birthday', tag: 'New', image: 'https://images.unsplash.com/photo-1564890369478-c89ca6d9cde9?w=400&q=80', keywords: ['tea', 'gourmet', 'drink', 'beverage', 'hamper', 'birthday', 'healthy'] },
  { id: 6, name: 'Scented Candle Set', price: 649, category: 'Wellness', occasion: 'Housewarming', tag: 'Trending', image: 'https://images.unsplash.com/photo-1603006905003-be475563bc59?w=400&q=80', keywords: ['candle', 'scent', 'aroma', 'home', 'housewarming', 'decor', 'fragrance', 'smell'] },
  { id: 7, name: 'Premium Skincare Hamper', price: 1599, category: 'Wellness', occasion: "Valentine's", tag: 'Bestseller', image: 'https://images.unsplash.com/photo-1556228578-8c89e6adf883?w=400&q=80', keywords: ['skin', 'skincare', 'beauty', 'glow', 'face', 'cream', 'spa', 'self care', 'valentine', 'love'] },
  { id: 8, name: 'Custom Name Necklace', price: 899, category: 'Personalized', occasion: 'Anniversary', tag: 'New', image: 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=400&q=80', keywords: ['necklace', 'chain', 'jewellery', 'jewelry', 'name', 'personalized', 'anniversary', 'couple', 'love'] },
  { id: 9, name: 'Dry Fruit Gift Box', price: 1099, category: 'Hampers', occasion: 'Festival', tag: 'Trending', image: 'https://images.unsplash.com/photo-1549465220-1a8b9238cd48?w=400&q=80', keywords: ['dry fruit', 'nuts', 'almonds', 'cashew', 'festival', 'diwali', 'eid', 'healthy', 'hamper'] },
  { id: 10, name: 'Corporate Gift Set', price: 1999, category: 'Corporate', occasion: 'Corporate', tag: 'Bestseller', image: 'https://images.unsplash.com/photo-1513519245088-0e12902e5a38?w=400&q=80', keywords: ['corporate', 'office', 'work', 'boss', 'colleague', 'business', 'professional', 'bulk'] },
  { id: 11, name: 'Baby Shower Hamper', price: 1299, category: 'Hampers', occasion: 'Baby Shower', tag: 'New', image: 'https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=400&q=80', keywords: ['baby', 'newborn', 'infant', 'pregnancy', 'shower', 'mother', 'mom', 'cute'] },
  { id: 12, name: 'Wedding Gift Hamper', price: 2499, category: 'Hampers', occasion: 'Wedding', tag: 'Bestseller', image: 'https://images.unsplash.com/photo-1603006905003-be475563bc59?w=400&q=80', keywords: ['wedding', 'marriage', 'bride', 'groom', 'couple', 'shaadi', 'reception', 'hamper'] },
];

const occasions = ['All', 'Birthday', 'Anniversary', "Valentine's", 'Wedding', 'Housewarming', 'Festival', 'Baby Shower', 'Corporate'];
const categories = ['All', 'Hampers', 'Personalized', 'Wellness', 'Corporate'];
const sortOptions = ['Popularity', 'Price: Low to High', 'Price: High to Low', 'Newest'];

function Explore() {
  const [selectedOccasion, setSelectedOccasion] = useState('All');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedSort, setSelectedSort] = useState('Popularity');
  const [search, setSearch] = useState('');
  const [wishlist, setWishlist] = useState([]);
  const [priceRange, setPriceRange] = useState(3000);

  const toggleWishlist = (id) => {
    setWishlist(prev => prev.includes(id) ? prev.filter(i => i !== id) : [...prev, id]);
  };

const filtered = products
    .filter(p => selectedOccasion === 'All' || p.occasion === selectedOccasion)
    .filter(p => selectedCategory === 'All' || p.category === selectedCategory)
    .filter(p => p.price <= priceRange)
    .filter(p => {
      if (!search) return true;
      const query = search.toLowerCase();
      return (
        p.name.toLowerCase().includes(query) ||
        p.category.toLowerCase().includes(query) ||
        p.occasion.toLowerCase().includes(query) ||
        p.keywords.some(k => k.toLowerCase().includes(query))
      );
    })
    .sort((a, b) => {
      if (selectedSort === 'Price: Low to High') return a.price - b.price;
      if (selectedSort === 'Price: High to Low') return b.price - a.price;
      return 0;
    });

  return (
    <div className="explore">

      {/* Page Header */}
      <div className="explore-header">
        <p className="section-label">OUR COLLECTION</p>
        <h1>Explore Gifts</h1>
        <p className="explore-sub">Discover thoughtfully curated gifts for every occasion</p>
      </div>

      {/* Search Bar */}
      <div className="search-bar-wrapper">
        <div className="search-bar">
          <FiSearch className="search-icon" />
          <input
            type="text"
            placeholder="Search gifts..."
            value={search}
            onChange={e => setSearch(e.target.value)}
          />
        </div>
      </div>

      {/* Occasion Filter Pills */}
      <div className="occasion-pills">
        {occasions.map(o => (
          <button
            key={o}
            className={`pill ${selectedOccasion === o ? 'active' : ''}`}
            onClick={() => setSelectedOccasion(o)}
          >
            {o}
          </button>
        ))}
      </div>

      <div className="explore-body">

        {/* Sidebar Filters */}
        <aside className="sidebar">
          <div className="sidebar-section">
            <h4><FiSliders style={{marginRight:'8px'}}/>Filters</h4>
          </div>

          <div className="sidebar-section">
            <p className="filter-label">Category</p>
            {categories.map(c => (
              <div
                key={c}
                className={`filter-option ${selectedCategory === c ? 'active' : ''}`}
                onClick={() => setSelectedCategory(c)}
              >
                {c}
              </div>
            ))}
          </div>

          <div className="sidebar-section">
            <p className="filter-label">Max Price: ₹{priceRange}</p>
            <input
              type="range"
              min="300"
              max="3000"
              step="100"
              value={priceRange}
              onChange={e => setPriceRange(Number(e.target.value))}
              className="price-range"
            />
            <div className="price-labels">
              <span>₹300</span>
              <span>₹3000</span>
            </div>
          </div>

          <div className="sidebar-section">
            <p className="filter-label">Sort By</p>
            {sortOptions.map(s => (
              <div
                key={s}
                className={`filter-option ${selectedSort === s ? 'active' : ''}`}
                onClick={() => setSelectedSort(s)}
              >
                {s}
              </div>
            ))}
          </div>
        </aside>

        {/* Product Grid */}
        <div className="products-section">
          <p className="results-count">{filtered.length} gifts found</p>
          {filtered.length === 0 ? (
            <div className="no-results">
              <p>No gifts found. Try adjusting your filters.</p>
            </div>
          ) : (
            <div className="products-grid">
              {filtered.map(product => (
                <div className="product-card" key={product.id}>
                  <div className="product-img">
                    <img src={product.image} alt={product.name} />
                    <button
                      className={`wishlist-btn ${wishlist.includes(product.id) ? 'active' : ''}`}
                      onClick={() => toggleWishlist(product.id)}
                    >
                      <FiHeart />
                    </button>
                    <span className="product-tag">{product.tag}</span>
                  </div>
                  <div className="product-info">
                    <p className="product-category">{product.category}</p>
                    <h3>{product.name}</h3>
                    <p className="product-price">₹{product.price.toLocaleString()}</p>
                    <button className="btn-primary small">Customize</button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

      </div>
    </div>
  );
}

export default Explore;