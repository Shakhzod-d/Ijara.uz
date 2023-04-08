import { FILTER_ITEMS } from "../actions/actions.types";
import data from "../../data";

const initalState = {
  items: data,
};

const filterCategories = (state, category = "") => {
  let arr = data.filter(
    (item) => item.category.toLocaleLowerCase() === category.toLocaleLowerCase()
  );

  return {
    ...state,
    items: arr,
  };
};

const itemReducer = (state = initalState, action) => {
  switch (action.type) {
    case FILTER_ITEMS:
      return filterCategories(state, action.payload);
    default:
      return state;
  }
};

export default itemReducer;
