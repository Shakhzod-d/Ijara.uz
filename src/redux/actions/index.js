import { FILTER_ITEMS } from "./actions.types";

export const filterCategories = (categories) => {
  return {
    type: FILTER_ITEMS,
    payload: categories,
  };
};
