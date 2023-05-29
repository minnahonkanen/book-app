import { useEffect, useContext } from "react";
import BooksContext from "./context/books";
import BookList from "./components/BookList";
import BookCreate from "./components/BookCreate";

function App() {
  const { fetchBooks } = useContext(BooksContext);

  useEffect(() => {
    fetchBooks();
  }, [fetchBooks]);

  return (
    <div className="panel">
      <h1>A Book App</h1>
      <BookList />
      <BookCreate />
    </div>
  );
}

export default App;
