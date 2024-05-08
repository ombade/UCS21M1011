import React from 'react';
import './Sidebar.css'
import Category from './Category';

export default function Sidebar({
  selectedCategory,
  setSelectedCategory,
}) {
  return (
  <div>
    <div className='sidebar'>
      <Category setSelectedCategory={setSelectedCategory} />
    </div>
  </div>
  );
}


