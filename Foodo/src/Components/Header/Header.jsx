import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <div className="header">
      <div className="header-contents">
        <h2>Order your favourite food from here</h2>
        <p>
          Indulge in a diverse menu that showcases a curated selection of
          exquisite dishes, each crafted by renowned chefs from well-known
          restaurants. Whether you're craving a gourmet experience or exploring
          new flavors, our menu promises a delightful journey for your taste
          buds.
        </p>
        <button>View Menu</button>
      </div>
    </div>
  );
};

export default Header;
