import { BIO } from "../../../../constants";
import { Box, Typography, useMediaQuery } from "@mui/material";
import { styled } from "@mui/system";
import AuthorPhoto from "../../authorPhoto/AuthorPhoto";

const Bio = () => {
  // Check for screen width
  const isLargeScreen = useMediaQuery("(min-width:620px)");

  return (
    <Box>
      <Box>
        <AuthorPhoto />
      </Box>
      <Box>{BIO.body}</Box>
    </Box>
  );
};

export default Bio;
