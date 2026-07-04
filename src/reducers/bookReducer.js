import {
  SET_BOOKS,
  SET_SORT_BY,
  SET_ORDER,
} from "../actions/bookActions";

const initialState = {
  books: [  ],
  sortBy: "title",
  order: "asc",
};

const bookReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_BOOKS:
      return {
        ...state,
        books: action.payload,
      };

    case SET_SORT_BY:
      return {
        ...state,
        sortBy: action.payload,
      };

    case SET_ORDER:
      return {
        ...state,
        order: action.payload,
      };

    default:
      return state;
  }
};

export default bookReducer;