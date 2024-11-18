import { BIO } from "../../../../constants";
import { Box, Typography, useMediaQuery } from "@mui/material";
import { styled } from "@mui/system";
import AuthorPhoto from "../../authorPhoto/AuthorPhoto";

const StyledWrapper = styled(Box)(() => ({
  display: "flex",
}));

const StyledText = styled(Box)(({ isLargeScreen }) => ({
  textAlign: isLargeScreen ? "left" : "center",
  marginLeft: isLargeScreen ? "2rem" : 0,
}));

const StyledTitle = styled(Typography)(({ isLargeScreen }) => ({
  fontSize: isLargeScreen ? "4rem" : "2.5rem",
  paddingBottom: 0,
}));

const StyledSubtitle = styled("p")(({ isLargeScreen }) => ({
  marginTop: 0,
  fontStyle: "italic",
}));

const Bio = () => {
  // Check for screen width
  const isLargeScreen = useMediaQuery("(min-width:620px)");

  return (
    <StyledWrapper>
      {isLargeScreen && (
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
          }}
        >
          <AuthorPhoto isLargeScreen={isLargeScreen} />
        </Box>
      )}
      <StyledText isLargeScreen={isLargeScreen}>
        <StyledTitle variant="h1" component="div" isLargeScreen={isLargeScreen}>
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
