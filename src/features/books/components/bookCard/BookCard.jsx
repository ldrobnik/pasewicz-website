import { useEffect, useState } from "react";
import { Button, Box, Paper, Typography, useMediaQuery } from "@mui/material";
import { styled } from "@mui/system";

const StyledPaper = styled(Paper)(({ theme }) => ({
  margin: `${theme.spacing(3)} auto`,
  padding: theme.spacing(3),
  backgroundColor: theme.palette.background.default,
  border: `5px solid ${theme.palette.primary.main}`,
  borderRadius: 0,
  color: theme.palette.primary.main,
  maxWidth: "44rem",
  overflow: "hidden",
}));

const StyledImage = styled("img")(({ cta, isLargeScreen }) => ({
  maxWidth: isLargeScreen ? "8rem" : "6rem",
  margin: isLargeScreen ? "0 2rem" : "0 auto",
  transform: isLargeScreen && cta ? "translateY(22px)" : "none",
}));

const StyledWrapper = styled(Box)(({ theme, margin }) => ({
  display: "flex",
  alignItems: "center",
  // Adds a top or bottom margin depending on the margin parameter value
  marginTop: margin === "top" && theme.spacing(1),
  marginBottom: margin === "bottom" && theme.spacing(1),
}));

const StyledButton = styled(Button)(() => ({
  borderRadius: 0,
}));

const BookCard = ({ book, index }) => {
  // Specifies the cover image source
  const [imageSrc, setImageSrc] = useState("");

  // Check for screen width
  const isLargeScreen = useMediaQuery("(min-width:600px)");

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
      {/* Row for image rendered on small screens */}
      {!isLargeScreen && (
        <StyledWrapper margin="bottom">
          <StyledImage
            cta={book.cta}
            isLargeScreen={isLargeScreen}
            src={imageSrc}
            alt={`Okładka książki ${book.title}`}
          />
        </StyledWrapper>
      )}
      {/* Row with an image and book description side by side */}
      <StyledWrapper
        sx={{
          flexDirection: index % 2 !== 0 ? "row-reverse" : "row", // Reverse every other card
        }}
      >
        {/* Render the image on large screens */}
        {isLargeScreen && (
          <StyledImage
            cta={book.cta}
            isLargeScreen={isLargeScreen}
            src={imageSrc}
            alt={`Okładka książki ${book.title}`}
          />
        )}
        <Box
          sx={{
            flex: 1,
            textAlign: isLargeScreen
              ? index % 2 !== 0
                ? "right"
                : "left"
              : "center", // Center on small screens
          }}
        >
          <Typography
            variant="h4"
            component="div"
            gutterBottom
            sx={{
              textAlign: isLargeScreen
                ? index % 2 !== 0
                  ? "right"
                  : "left"
                : "center", // Center on small screens
            }}
          >
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
      </StyledWrapper>

      {/* Row with a button */}
      {book.cta && (
        <StyledWrapper
          margin="top"
          sx={{
            display: "flex",
            justifyContent: "center",
            marginTop: "20px",
          }}
        >
          <StyledButton
            variant="contained"
            color="primary"
            size="medium"
            href={book.cta.url}
            target="_blank"
            rel="noopener noreferrer"
          >
            {book.cta.message}
          </StyledButton>
        </StyledWrapper>
      )}
    </StyledPaper>
  );
};

export default BookCard;
