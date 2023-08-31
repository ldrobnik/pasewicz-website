import { BOOKS } from "../../../../constants";
import BookCard from "../bookCard/BookCard";

const FeaturedBooks = () => {
  return (
    <>
      <div>Featured Books</div>
      {BOOKS?.length > 0 ? (
        <div>
          {BOOKS.slice(0, 3).map((book) => (
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

export default FeaturedBooks;
