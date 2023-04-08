import React from "react";
import { useDispatch } from "react-redux";
import "./Aside.css";
import { filterCategories } from "../../redux/actions";

export const AsideFilter = () => {
  const dispatch = useDispatch();
  let categories = [];

  const filterItems = (e) => {
    dispatch(filterCategories(e.target.value));
  };

  return (
    <div className="aside">
      <div className="filterItem">
        <h3>Ish</h3>
        <div className="element">
          <input
            type="radio"
            name="filter"
            value={"Ish"}
            onChange={filterItems}
          />
          <label htmlFor="ish">Ish</label>
        </div>
      </div>

      <div className="filterItem">
        <h3>Kvartira</h3>
        <div className="element">
          <input
            type="radio"
            name="filter"
            value={"Dom"}
            onChange={filterItems}
          />
          <label htmlFor="Dom">Dom</label>
        </div>
        <div className="element">
          <input
            type="radio"
            name="filter"
            value={"Hovli"}
            onChange={filterItems}
          />
          <label htmlFor="Hovli">Hovli</label>
        </div>
      </div>

      <div className="filterItem">
        <h3>Restaurants</h3>
        <div className="element">
          <input
            type="radio"
            name="filter"
            value={"Restaurants"}
            onChange={filterItems}
          />
          <label htmlFor="Restaurants">Restaurants</label>
        </div>
      </div>

      <div className="filterItem">
        <h3>Kutubxonalar</h3>
        <div className="element">
          <input
            type="radio"
            name="filter"
            value={"Kutubxonalar"}
            onChange={filterItems}
          />
          <label htmlFor="Kutubxonalar">Kutubxonalar</label>
        </div>
      </div>
    </div>
  );
};
