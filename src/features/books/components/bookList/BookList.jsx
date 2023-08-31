import BookCard from "../bookCard/BookCard";

import { BOOKS } from "../../../../constants";

const BookList = () => {
  return (
    <>
      <div>Book List</div>
      {BOOKS?.length > 0 ? (
        <div className="bookContainer">
          {BOOKS.map((book) => (
            <BookCard book={book} />
          ))}
        </div>
      ) : (
        <div className="empty">
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
