import BookCard from "../bookCard/BookCard";

import { BOOKS } from "../../../../constants";

const BookList = () => {
  return (
    <>
      <div>Book List</div>
      {BOOKS?.length > 0 ? (
        <div>
          {BOOKS.sort((a, b) => (a.year < b.year ? 1 : -1)).map(
            (book, index) => (
              <BookCard key={index} book={book} index={index} />
            )
          )}
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
