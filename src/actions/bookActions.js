export const SET_BOOKS = "SET_BOOKS";
export const SET_SORT_BY = "SET_SORT_BY";
export const SET_ORDER = "SET_ORDER";

export const fetchBooks = () => {
  return (dispatch) => {
    fetch("API_URL_HERE")
      .then((response) => response.json())
      .then((data) => {
        dispatch(setBooks(data));
      });
  };
};

export const setBooks = (books) => {
  return {
    type: SET_BOOKS,
    payload: books,
  };
};

export const setSortBy = (sortBy) => {
  return {
    type: SET_SORT_BY,
    payload: sortBy,
  };
};

export const setOrder = (order) => {
  return {
    type: SET_ORDER,
    payload: order,
  };
};