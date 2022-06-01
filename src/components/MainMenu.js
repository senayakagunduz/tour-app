import React from "react";
import items from "./menuData";
import Menu from "./Menu";
import Categories from "./Categories";
import { useState } from "react";
const all = ["all", ...new Set(items.map((item) => item.category))];

function MainMenu() {
  const [menuItems, setMenuItems] = useState(items);
  const [categories, setCategories] = useState(all);

  const filteredItems = (category) => {
    if (category === "all") {
      setMenuItems(items);
      return;
    }
    const newItems = items.filter((item) => item.category === category);
    setMenuItems(newItems);
  };
  return (
    <main>
      <section className="menu-section">
        <div className="title">
          <h2>Our Menu</h2>
          <div className="underline"></div>
        </div>
        <Categories categories={categories} filteredItems={filteredItems} />
        <Menu items={menuItems} />
      </section>
    </main>
  );
}

export default MainMenu;
