import React from "react";
import { useSelector } from "react-redux";

import { Item } from "../Item/Item";
import "./ItemContainer.css";

export const ItemContainer = () => {
  const { items } = useSelector((state) => state.itemReducer);

  return (
    <div className="itemContainer">
      {items.map((item) => {
        return <Item key={item.id} {...item} />;
      })}
    </div>
  );
};
