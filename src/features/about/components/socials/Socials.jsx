import { SOCIALS } from "../../../../constants";
import { styled } from "@mui/system";
import { IconButton } from "@mui/material";

const StyledWrapper = styled("div")(({ theme }) => ({
  width: "100%",
  display: "flex",
  flexWrap: "wrap",
  justifyContent: "center",
  padding: `${theme.spacing(1)} 0`,
}));

const StyledButton = styled(IconButton)(({ theme }) => ({
  borderRadius: 0,
  margin: theme.spacing(1),
  [theme.breakpoints.down("sm")]: {
    margin: theme.spacing(0.8),
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
              variant="text"
              color="primary"
              size="small"
              href={link.url}
              aria-label={link.name}
              target="_blank"
              rel="noopener noreferrer"
            >
              {link.icon}
            </StyledButton>
          );
        })}
        <div id="ksiazki"></div>
      </StyledWrapper>
    </>
  );
};

export default Socials;
