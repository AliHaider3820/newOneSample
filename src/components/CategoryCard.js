import React from 'react';
import './CategoryCard.css';

const CategoryCard = ({ category }) => {
  return (
    <div className="category-card" style={{ background: category.gradient }}>
      <div className="category-image" style={{ backgroundImage: `url(${category.image})` }}>
        <div className="category-content">
          <i className={category.icon} style={{ color: category.iconColor }}></i>
          <h3>{category.name}</h3>
        </div>
      </div>
    </div>
  );
};

export default CategoryCard;