import { useEffect, useState } from "react";
import { Card, Box, Typography } from "@mui/material";

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
    <Card sx={{ margin: 5, padding: 5 }}>
      <Typography variant="h2" component="div" color="secondary" gutterBottom>
        {book.title}
      </Typography>
      <Typography variant="subtitle1" gutterBottom>
        {book.publisher}
      </Typography>
      <Typography variant="subtitle2" gutterBottom>
        <em>{book.type}</em>, {book.year}
      </Typography>
      <Box>
        <img src={imageSrc} alt={`Okładka książki ${book.title}`} />
      </Box>
      <Typography variant="body1" gutterBottom>
        {book.description}
      </Typography>
    </Card>
  );
};

export default BookCard;
