import { useEffect, useState } from "react";

const BookCard = ({ book }) => {
  // Specifies the cover image source.
  const [imageSrc, setImageSrc] = useState("");

  // Imports the appropriate cover image.
  const importImage = (fileName) => {
    import(`../../../../assets/images/covers/${fileName}.jpg`)
      .then((res) => {
        setImageSrc(res.default);
      })
      .catch((err) => console.log(src, err));
  };

  useEffect(() => {
    // Imports the image once the component loads.
    importImage(book.cover);
  }, []);

  return (
    <div className="book">
      <p>_________________________________________________</p>
      <p>{book.title}</p>
      <p>{book.year}</p>
      <img src={imageSrc} />
      <p>{book.publisher}</p>
      <p>{book.description}</p>
      <p>_________________________________________________</p>
    </div>
  );
};

export default BookCard;
