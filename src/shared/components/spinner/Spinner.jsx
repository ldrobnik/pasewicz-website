import { styled } from "@mui/system";
import spinner from "../../../assets/images/logo.svg";
import { LOADING } from "../../../constants";

const StyledImage = styled("img")(() => ({
  display: "block",
  width: "4rem",
}));

const StyledSpinner = styled("div")(() => ({
  "@keyframes pulsate": {
    "0%": {
      opacity: 1,
    },
    "50%": {
      opacity: 0.2,
    },
    "100%": {
      opacity: 1,
    },
  },
  position: "absolute",
  zIndex: 300,
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -55%)",
  animation: "pulsate 1s ease-in-out infinite",
}));

const StyledWrapper = styled("div")(() => ({
  position: "fixed",
  left: 0,
  right: 0,
  zIndex: 200,
  height: "100vh",
  width: "100vw",
}));

const StyledBackdrop = styled("div")(({ theme }) => ({
  position: "relative",
  left: 0,
  top: 0,
  zIndex: 100,
  width: "100vw",
  height: "100vh",
  backgroundColor: theme.palette.background.main,
  opacity: 1,
}));
const Spinner = () => {
  return (
    <StyledWrapper>
      <StyledSpinner>
        <StyledImage src={spinner} alt={LOADING} />
      </StyledSpinner>
      <StyledBackdrop />
    </StyledWrapper>
  );
};

export default Spinner;
