import { BIO } from "../../../../constants";
import { Box, Typography, useMediaQuery } from "@mui/material";
import { styled } from "@mui/system";

const Bio = () => {
  // Check for screen width
  const isLargeScreen = useMediaQuery("(min-width:620px)");

  return (
    <Box>
      <Box></Box>
      <Box>{BIO}</Box>
    </Box>
  );
};

export default Bio;
