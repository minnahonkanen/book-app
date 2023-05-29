import { useContext } from "react";
import BooksContext from "../context/books";
import BookShow from "./BookShow";

function BookList() {
  const { books } = useContext(BooksContext);

  const renderedBooks = books.map((book) => {
    return <BookShow book={book} key={book.id} />;
  });

  return <div className="card-row">{renderedBooks}</div>;
}

export default BookList;
