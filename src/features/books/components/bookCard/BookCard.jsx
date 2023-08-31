const BookCard = ({ book }) => {
  return (
    <div className="book">
      <p>{book[0].title}</p>
    </div>
  );
};

export default BookCard;
