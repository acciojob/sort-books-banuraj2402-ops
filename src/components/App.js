import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setSortBy, setOrder } from "../actions/bookActions";
import { fetchBooks } from "../actions/bookActions";
import "./../styles/App.css";

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchBooks());
  }, [dispatch]);

  const { books, sortBy, order } = useSelector((state) => state);

  const sortedBooks = [...books].sort((a, b) => {
    const first = (a[sortBy] || "").toLowerCase();
    const second = (b[sortBy] || "").toLowerCase();

    if (first < second) return order === "asc" ? -1 : 1;
    if (first > second) return order === "asc" ? 1 : -1;
    return 0;
  });

  return (
    <div>
      {/* Do not remove the main div */}

      <h1>Books List</h1>

      <div>
       <div>
        <label>Sort by:</label>
        <select 
          id="sortBy"
          value={sortBy}
          onChange={(e) => dispatch(setSortBy(e.target.value))}
        >
          <option value="title">Title</option>
          <option value="author">Author</option>
          <option value="publisher">Publisher</option>
        </select>
      </div>

      <div>
        <label>Order:</label>
        <select 
          id="order"
          value={order}
          onChange={(e) => dispatch(setOrder(e.target.value))}
        >
          <option value="asc">Ascending</option>
          <option value="desc">Descending</option>
        </select>
      </div>
    </div>

      <br />

      <table id="bookTable" border="1" cellPadding="8">
        <thead>
          <tr>
            <th>Title</th>
            <th>Author</th>
            <th>Publisher</th>
            <th>ISBN</th>
          </tr>
        </thead>

        <tbody>
          {sortedBooks.map((book, index) => (
            <tr key={index}>
              <td>{book.title}</td>
              <td>{book.author}</td>
              <td>{book.publisher}</td>
              <td>{book.isbn}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default App;