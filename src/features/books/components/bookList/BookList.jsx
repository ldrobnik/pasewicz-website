import { Container, Typography } from "@mui/material";
import { styled } from "@mui/system";
import BookCard from "../bookCard/BookCard";
import { SECTIONS, BOOKS } from "../../../../constants";

const StyledContainer = styled(Container)(({ theme }) => ({
  // Add custom selection styling
  "& ::selection": {
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.background.default,
  },
}));

const StyledHeader = styled(Typography)(({ theme }) => ({
  textAlign: "center",
  color: theme.palette.primary.main,
}));

const BookList = (theme) => {
  return (
    <StyledContainer maxWidth="lg">
      <StyledHeader variant="h2" component="div">
        {SECTIONS[1]}
      </StyledHeader>
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
    </StyledContainer>
  );
};

export default BookList;
