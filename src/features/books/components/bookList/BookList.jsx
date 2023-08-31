import BookCard from "../bookCard/BookCard";

import { BOOKS } from "../../../../constants";

const BookList = () => {
  return (
    <>
      <div>Book List</div>
      {BOOKS?.length > 0 ? (
        <div>
          {BOOKS.map((book) => (
            <BookCard key={book.title} book={book} />
          ))}
        </div>
      ) : (
        <div>
          <h2>
            Opps... It looks like an error has occured. Please try refreshing
            the page.
          </h2>
        </div>
      )}
    </>
  );
};

export default BookList;
