import React from "react";
import styles from "./styles.module.css";

function Menu() {
    const menus = [
      ["Help", "Contact", "Privacy Policy", "Terms And Conditions"],
      ["Home", "About Us", "Services", "Partners"],
      ["Catalog", "New arrival", "Sale", "Profile"]
    ];
  
    return (
      <React.Fragment>
        {menus.map((menuItems, menuIndex) => (
          <div key={menuIndex} className={styles[`menu${menuIndex + 1}`]}>
            {menuItems.map((title, index) => (
              <div key={index} className={styles.menuTitle}>
                {title}
              </div>
            ))}
          </div>
        ))}
      </React.Fragment>
    );
  }
  
  export default Menu;
