
import React, { useState , useEffect} from 'react';
import Sidebar from './Sidebar/Sidebar';

import './Shop.css';
import './Shop_res.css';

import Axios from 'axios';


export default function Shop({ addToCart }) {


  const [search, setSearch] = useState('');
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedPriceRange, setSelectedPriceRange] = useState(null);
  const [successMessage, setSuccessMessage] = useState('');
  
  // const [filteredProducts, setFilteredProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const[movieReviewList,setMovieReviewList]=useState([])


  useEffect(() => {
    Axios.get("http://localhost:3030/Products").then((response) => {
      const movies = response.data;
      setMovieReviewList(movies);
  
      // Apply filtering logic here
      const filtered = movies.filter((product) => {
        const matchesCategory =
          !selectedCategory || selectedCategory === 'All' || product.category === selectedCategory;
  
        const matchesPriceRange =
          !selectedPriceRange ||
          selectedPriceRange === 'all' ||
          (selectedPriceRange === 'price-range-1' && product.price <= 10000) ||
          (selectedPriceRange === 'price-range-2' && product.price > 10000 && product.price <= 30000) ||
          (selectedPriceRange === 'price-range-3' && product.price > 30000 && product.price <= 80000);
  
        return matchesCategory && matchesPriceRange;
      });
  
      setFilteredProducts(filtered);
    });
  }, [search, selectedCategory, selectedPriceRange]);


return (
  <div>
    <Sidebar
      selectedCategory={selectedCategory}
      setSelectedCategory={setSelectedCategory}
      
    />
    <div className="shop-container">
      <div className="product-list">
        {filteredProducts.map((val, index) => (
          <div className="product" key={index}>
            <div className="product-details">
              <h3 className="product-name">{val.productname}</h3>      
              <p className="product-category">{val.productname}</p>
              <p className="product-category">{val.discount}</p>
              <p className="product-category">{val.rating}</p>
              <p className="product-category">{val.availability}</p>
              <p className="product-price">₹{val.price}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
);
}