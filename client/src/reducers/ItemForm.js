import { types } from "../actions/ItemForm";

const initialState = {
  name: "",
  price: "",
  type: "adult",
  soup: false
};

export const ItemFormReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case types.CHANGE_ITEM_FORM_INPUT:
      return { ...state, [payload.name]: payload.value };

    default:
      return state;
  }
};
