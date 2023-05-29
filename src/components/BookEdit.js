import { useState, useContext } from "react";
import BooksContext from "../context/books";

function BookEdit({ book, onSubmit }) {
  const [title, setTitle] = useState(book.title);
  const { editBook } = useContext(BooksContext);

  const handleInputChange = (event) => {
    setTitle(event.target.value);
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    onSubmit();
    editBook(book.id, title);
  };

  return (
    <form className="edit-form" onSubmit={handleFormSubmit}>
      <div className="label">
        <input value={title} onChange={handleInputChange} />
      </div>
      <button>Save</button>
    </form>
  );
}

export default BookEdit;
