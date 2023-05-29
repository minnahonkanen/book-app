import { useState, useContext } from "react";
import BooksContext from "../context/books";

function BookCreate() {
  const [title, setTitle] = useState("");
  const { createBook } = useContext(BooksContext);

  const handleInputChange = (event) => {
    setTitle(event.target.value);
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    createBook(title);
    setTitle("");
  };

  return (
    <div className="book-create">
      <h2>Add a new book</h2>
      <form onSubmit={handleFormSubmit}>
        <div className="label">
          <label>Title:</label>
          <input value={title} onChange={handleInputChange} />
        </div>
        <button>Save book</button>
      </form>
    </div>
  );
}

export default BookCreate;
