import React from "react";

import "./Item.css";

export const Item = (props) => {
  const { summa, img, info, category, address, title, tel, id } = props;
  // console.log(props);

  return (
    <div className="item">
      <div>
        <img src={img} alt="item" width={320} />
      </div>
      <h2>{title}</h2>
      <p>{summa}</p>
      <p>{address}</p>
      <button>More info</button>
    </div>
  );
};
