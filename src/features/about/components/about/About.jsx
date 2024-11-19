import { Container } from "@mui/material";
import { styled } from "@mui/system";
import Bio from "../bio/Bio";
import Socials from "../socials/Socials";

const StyledContainer = styled(Container)(({ theme }) => ({
  color: theme.palette.primary.main,
  // Add custom selection styling
  "& ::selection": {
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.background.default,
  },
}));

const About = () => {
  return (
    <>
      <div id="oautorze"></div>
      <StyledContainer
        maxWidth="md"
        sx={{
          marginTop: "1rem",
          paddingTop: { xs: "56px", sm: "64px" }, // Shift content below AppBar
          padding: 2,
        }}
      >
        <Bio />
        <Socials />
      </StyledContainer>
    </>
  );
};

export default About;
