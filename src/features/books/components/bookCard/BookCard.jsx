import { useEffect, useState } from "react";
import { Button, Box, Paper, Typography } from "@mui/material";

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
    <Paper elevation={4} sx={{ margin: 5, padding: 5 }}>
      <Typography variant="h3" component="div" color="secondary" gutterBottom>
        {book.title}
      </Typography>
      <Typography variant="subtitle1" gutterBottom>
        {book.publisher}
      </Typography>
      <Typography variant="subtitle2" gutterBottom>
        {book.type}, {book.year}
      </Typography>
      <img src={imageSrc} alt={`Okładka książki ${book.title}`} />
      <Typography variant="body1" gutterBottom>
        {book.description}
      </Typography>
      {book.cta && (
        <Box
          sx={{ display: "flex", justifyContent: "center", padding: "20px" }}
        >
          <Button
            variant="contained"
            color="secondary"
            size="large"
            href={book.cta.url}
            target="_blank"
            rel="noopener noreferrer"
          >
            {book.cta.message}
          </Button>
        </Box>
      )}
    </Paper>
  );
};

export default BookCard;
