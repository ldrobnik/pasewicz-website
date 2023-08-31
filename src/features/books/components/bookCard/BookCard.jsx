const BookCard = ({ book }) => {
  return (
    <div className="book">
      <p>_________________________________________________</p>
      <p>{book[0]}</p>
      <p>{book[1]}</p>
      <img src={book[2]} />
      {publisher(book[3])}
      <p>_________________________________________________</p>
    </div>
  );
};

const publisher = (name) => {
  if (name === "N/A") {
    return <p>unknown</p>;
  } else {
    return <p>{name}</p>;
  }
};

export default BookCard;
