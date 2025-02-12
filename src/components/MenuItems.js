import React, { useState } from "react";

const MenuItems = ({ category, showItems, setShowItems, index }) => {
  const handleCategoryToggle = () => {
    setShowItems(index);
  };
  return (
    <div
      className="flex justify-between items-center "
      onClick={handleCategoryToggle}
    >
      <h1 className="font-semibold text-[18px]">
        {category?.card?.card?.title}{" "}
        <span>({category?.card?.card?.itemCards?.length})</span>
      </h1>
      <span class="material-symbols-outlined">
        {showItems ? "keyboard_arrow_up" : "keyboard_arrow_down"}
      </span>
    </div>
  );
};

export default MenuItems;
