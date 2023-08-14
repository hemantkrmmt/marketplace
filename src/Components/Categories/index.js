import React, { useState } from "react";
import "./index.css";

export default function Categories({ categories }) {
  const [show, toggleShow] = useState(false);

  const [selectedCategories, setSelectedCategories] = useState([]);
  let count = 0;
  function handleSelectCategories(selectedCategoryId) {
    setSelectedCategories(selectedCategories => {
      if (selectedCategories.indexOf !== -1) {
        return [...selectedCategories, selectedCategoryId];
      }

      return;
    });
  }

  function handleRemove(removeCategory) {
    setSelectedCategories(
      selectedCategories.filter(category => {
        return category !== removeCategory;
      })
    );
  }
  return (
    <div className="categories-container">
      <div className="selections-container">
        {selectedCategories.map((selectedCategory, index) => {
          count++;
          return count <= 2 ? (
            <div className="selected" key={index}>
              {selectedCategory}
              <span
                onClick={() => {
                  handleRemove(selectedCategory);
                }}
              >
                X
              </span>
            </div>
          ) : (
            <></>
          );
        })}
        {count > 2 && "..."}
      </div>
      <div
        className="dropdown-container"
        onClick={() => {
          toggleShow(show => {
            return !show;
          });
        }}
      >
        &gt;
      </div>
      <div className="options">
        {show &&
          categories.map((category, index) => {
            return (
              <div
                className="category"
                key={index}
                onClick={() => {
                  handleSelectCategories(category);
                }}
              >
                {category}
              </div>
            );
          })}
      </div>
    </div>
  );
}
