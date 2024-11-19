import { SOCIALS } from "../../../../constants";
import { styled } from "@mui/system";
import { Button, useMediaQuery } from "@mui/material";

const StyledWrapper = styled("div")(({ theme }) => ({
  width: "100%",
  display: "flex",
  flexWrap: "wrap",
  justifyContent: "center",
  padding: "2rem 0",
}));

const StyledButton = styled(Button)(({ isLargeScreen }) => ({
  borderRadius: 0,
  margin: isLargeScreen ? "1rem" : "0.4rem",
}));

const Socials = () => {
  // Check for screen width
  const isLargeScreen = useMediaQuery("(min-width:620px)");

  return (
    <>
      <StyledWrapper>
        {SOCIALS.map((link) => {
          return (
            <StyledButton
              key={link.name}
              variant="contained"
              color="primary"
              size="small"
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              isLargeScreen={isLargeScreen}
            >
              {link.name}
            </StyledButton>
          );
        })}
        <div id="ksiazki"></div>
      </StyledWrapper>
    </>
  );
};

export default Socials;
