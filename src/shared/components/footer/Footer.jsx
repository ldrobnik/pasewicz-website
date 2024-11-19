import React from "react";
import { Box, Typography } from "@mui/material";
import { styled } from "@mui/system";
import { FOOTER } from "../../../constants/";

const StyledFooter = styled(Box)(({ theme }) => ({
  padding: `0 0 ${theme.spacing(3)} 0`,
  color: theme.palette.primary.main,
  width: "100%",
  display: "flex",
  justifyContent: "center",
  fontSize: "0.8rem",
  // Add custom selection styling
  "& ::selection": {
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.background.default,
  },
}));

const Footer = () => {
  return (
    <StyledFooter component="section">
      <Typography variant="p">{FOOTER.copyrightNote}</Typography>
    </StyledFooter>
  );
};

export default Footer;
