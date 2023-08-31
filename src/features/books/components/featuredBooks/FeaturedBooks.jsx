import { BOOKS } from "../../../../constants";
import BookCard from "../bookCard/BookCard";

const FeaturedBooks = () => {
  return (
    <>
      <div>Featured Books</div>
      {displayBooks(BOOKS[0])}
      {displayBooks(BOOKS[1])}
      {displayBooks(BOOKS[2])}
    </>
  );
};

const displayBooks = (book) => {
  return (
    <>
      <BookCard book={book} />
    </>
  );
};

export default FeaturedBooks;
