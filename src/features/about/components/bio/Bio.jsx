import { BIO } from "../../../../constants";
import { Box, Typography, useMediaQuery } from "@mui/material";
import { styled } from "@mui/system";
import AuthorPhoto from "../../authorPhoto/AuthorPhoto";

const StyledWrapper = styled(Box)(() => ({
  display: "flex",
}));

const StyledText = styled(Box)(({ theme }) => ({
  textAlign: "left",
  marginLeft: theme.spacing(3),
  [theme.breakpoints.down("sm")]: {
    textAlign: "center",
    marginLeft: 0,
  },
}));

const StyledTitle = styled(Typography)(({ theme }) => ({
  fontSize: 60,
  paddingBottom: 0,
  [theme.breakpoints.down("sm")]: {
    fontSize: 40,
  },
}));

const StyledSubtitle = styled("p")(() => ({
  marginTop: 0,
  fontStyle: "italic",
}));

const Bio = () => {
  // Check for screen width
  const isLargeScreen = useMediaQuery("(min-width:600px)");

  return (
    <StyledWrapper>
      {isLargeScreen && (
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
          }}
        >
          <AuthorPhoto />
        </Box>
      )}
      <StyledText>
        <StyledTitle variant="h1" component="div">
          {BIO.title}
        </StyledTitle>
        <StyledSubtitle variant="p">{BIO.subtitle}</StyledSubtitle>
        {!isLargeScreen && (
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              padding: "1rem",
            }}
          >
            <AuthorPhoto />
          </Box>
        )}
        {BIO.body}
      </StyledText>
    </StyledWrapper>
  );
};

export default Bio;
