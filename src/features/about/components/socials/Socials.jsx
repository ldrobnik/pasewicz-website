import { SOCIALS } from "../../../../constants";
import { styled } from "@mui/system";
import { Button } from "@mui/material";

const StyledWrapper = styled("div")(({ theme }) => ({
  width: "100%",
  display: "flex",
  flexWrap: "wrap",
  justifyContent: "center",
  padding: `${theme.spacing(1)} 0`,
}));

const StyledButton = styled(Button)(({ theme }) => ({
  borderRadius: 0,
  margin: theme.spacing(2),
  [theme.breakpoints.down("sm")]: {
    margin: theme.spacing(1.2),
    fontSize: 12,
  },
}));

const Socials = () => {
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
