
import React from 'react';
import './Category.css';

export default function Category({ setSelectedCategory }) {
  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  };


  return (
    <div>
      <h2 className="sidebar-title">Category</h2>
      <div>
        <label className='sidebar-label-container' >
          <input
            type="radio"
            name="category"
            value="All"
            onChange={() => handleCategoryChange("All")}
          />
          <span className='checkmark'></span>All
        </label>
        <label className='sidebar-label-container' >
          <input
            type="radio"
            name="category"
            value="TV"
            onChange={() => handleCategoryChange("TV")}
          />
          <span className='checkmark'></span>TV
        </label>
        <label className='sidebar-label-container'>
          <input
            type="radio"
            name="category"
            value="Camera"
            onChange={() => handleCategoryChange("mobile")}
          />
          <span className='checkmark'></span>mobile
        </label>
        <label className='sidebar-label-container' >
          <input
            type="radio"
            name="category"
            value="Oven"
            onChange={() => handleCategoryChange("aptop")}
          />
          <span className='checkmark'></span>laptop
        </label>
      </div>
    </div>
  );
}

