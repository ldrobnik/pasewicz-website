import { Container } from "@mui/material";
import { styled } from "@mui/system";
import Bio from "../bio/Bio";
import Socials from "../socials/Socials";

const StyledContainer = styled(Container)(({ theme }) => ({
  // Add custom selection styling
  "& ::selection": {
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.background.default,
  },
}));
const Spacer = styled("div")(() => ({
  minHeight: "64 px",
}));

const About = () => {
  return (
    <StyledContainer
      maxWidth="md"
      sx={{
        marginTop: { xs: "56px", sm: "64px" }, // Shift content below AppBar
        padding: 2,
      }}
    >
      <Bio />
      <Socials />
    </StyledContainer>
  );
};

export default About;
