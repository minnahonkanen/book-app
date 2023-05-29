import { useState, useContext } from "react";
import BooksContext from "../context/books";
import BookEdit from "./BookEdit";

function BookShow({ book }) {
  const [showEdit, setShowEdit] = useState(false);
  const { deleteBook } = useContext(BooksContext);

  const handleEditClick = () => {
    setShowEdit(!showEdit);
  };

  const handleDeleteClick = () => {
    deleteBook(book.id);
  };

  const handleSubmit = () => {
    setShowEdit(false);
  };

  let content = <h2 className="card-title">{book.title}</h2>;

  if (showEdit) {
    content = <BookEdit book={book} onSubmit={handleSubmit} />;
  }

  return (
    <div className="card">
      <span className="triangle"></span>
      <div className="content">{content}</div>
      <img
        alt="placeholder-pic"
        src={`https://picsum.photos/seed/${book.id}/200/150`}
      />
      <div className="action-row">
        <button onClick={handleEditClick}>edit</button>
        <button onClick={handleDeleteClick}>delete</button>
      </div>
    </div>
  );
}

export default BookShow;
