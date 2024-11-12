import { useEffect, useState } from "react";
import { Button, Box, Paper, Typography } from "@mui/material";
import { styled } from "@mui/system";

// Styled component for the card to apply borders and background color
const StyledPaper = styled(Paper)(({ theme }) => ({
  margin: `${theme.spacing(3)} auto`,
  padding: theme.spacing(3),
  backgroundColor: theme.palette.background.default,
  border: `4px solid ${theme.palette.primary.main}`,
  color: theme.palette.primary.main,
  maxWidth: "44rem",
  overflow: "hidden",
}));

// Image styling
const StyledImage = styled("img")(({ cta }) => ({
  maxWidth: "8rem",
  margin: "0 32px",
  transform: cta ? "translateY(22px)" : "none",
}));

// Book card component
const BookCard = ({ book, index }) => {
  // Specifies the cover image source
  const [imageSrc, setImageSrc] = useState("");

  // Imports the appropriate cover image
  const importImage = (fileName) => {
    import(`../../../../assets/images/covers/${fileName}.jpg`)
      .then((res) => {
        setImageSrc(res.default);
      })
      .catch((err) => console.log(src, err));
  };

  useEffect(() => {
    // Imports the image once the component loads
    importImage(book.cover);
  }, [book.cover]);

  return (
    <StyledPaper elevation={4}>
      {/* Row 1: Image and book description side by side */}
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          marginBottom: "20px",
          flexDirection: index % 2 !== 0 ? "row-reverse" : "row", // Reverse for odd index
        }}
      >
        <StyledImage
          cta={book.cta}
          src={imageSrc}
          alt={`Okładka książki ${book.title}`}
        />
        <Box sx={{ flex: 1, textAlign: index % 2 !== 0 ? "right" : "left" }}>
          <Typography variant="h4" component="div" gutterBottom>
            {book.title}
          </Typography>
          <Typography variant="subtitle1" gutterBottom>
            {book.publisher}
          </Typography>
          <Typography variant="subtitle2" gutterBottom>
            {book.type}, {book.year}
          </Typography>
          <Typography variant="body1" sx={{ marginTop: "8px" }}>
            {book.description}
          </Typography>
        </Box>
      </Box>

      {/* Row 2: Centered button */}
      {book.cta && (
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            marginTop: "20px",
          }}
        >
          <Button
            variant="contained"
            color="primary"
            size="large"
            href={book.cta.url}
            target="_blank"
            rel="noopener noreferrer"
          >
            {book.cta.message}
          </Button>
        </Box>
      )}
    </StyledPaper>
  );
};

export default BookCard;
