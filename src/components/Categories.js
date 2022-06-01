import React from "react";

const Categories = ({ categories, filteredItems }) => {
  return (
    <div className="btn-container">
      {categories.map((category, index) => {
        return (
          <button
            className="category-buttons"
            key={index}
            onClick={() => filteredItems(category)}
          >
            {category}
          </button>
        );
      })}
    </div>
  );
};

export default Categories;
