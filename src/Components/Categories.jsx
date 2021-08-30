import React, { useState } from "react";
import styles from "./categories.module.scss";

function Categories({ items, onClick }) {
  const [activeItem, setActiveItem] = useState(0);
  const onItemSelect = (idx) => setActiveItem(idx);
  return (
    <div className={styles.categories}>
      <ul>
        <li
          onClick={() => onItemSelect(null)}
          className={activeItem === null ? styles.active : ""}
        >
          Все
        </li>
        {items.map((itemName, idx) => (
          <li
            className={activeItem === idx ? styles.active : ""}
            onClick={() => onItemSelect(idx)}
            key={`${itemName}_${idx}`}
          >
            {itemName}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Categories;
