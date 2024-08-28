import React from "react";
import "./ExploreMenu.css";
import { menu_list } from "../../assets/assets";

const ExploreMenu = ({ category, setCategory }) => { // Destructure the props here

  return (
    <div className="explore-menu" id="explore-menu">
      <h1>Explore our menu</h1>
      <p className="explore-menu-text">
        Discover a world of flavors with our diverse menu, featuring expertly
        crafted dishes from renowned chefs at top restaurants. Whether you're a
        gourmet enthusiast or eager to explore new tastes, our menu offers a
        delightful culinary journey that promises to captivate your palate.
      </p>
      <div className="explore-menu-list">
        {menu_list.map((item, index) => (
          <div
            onClick={() =>
              setCategory(prev => prev === item.menu_name ? "All" : item.menu_name)
            }
            key={index}
            className="explore-menu-list-item"
          >
            <img
              className={category === item.menu_name ? "active" : ""}
              src={item.menu_img}
              alt={item.menu_name} // Added alt text
            />
            <p>{item.menu_name}</p>
          </div>
        ))}
      </div>
      <hr />
    </div>
  );
};

export default ExploreMenu;
