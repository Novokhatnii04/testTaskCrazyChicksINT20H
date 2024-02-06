import React from "react";
import styles from "./styles.module.css";

function Menu() {
    const menus = [
      ["Our partners:", "TacticUA", "Prof1 Group", "MILITORG"],
      ["Soon:", "About Us", "Press", "Other projects"]
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
