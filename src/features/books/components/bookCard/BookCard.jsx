const BookCard = ({ book }) => {
  return (
    <div className="book">
      <p>_________________________________________________</p>
      <p>{book.title}</p>
      <p>{book.year}</p>
      <img src={book.cover} />
      <p>{book.publisher}</p>
      <p>{book.description}</p>
      <p>_________________________________________________</p>
    </div>
  );
};

export default BookCard;
