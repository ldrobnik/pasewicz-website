import { styled } from "@mui/system";
import authorPhoto from "../../../assets/images/author_photo.jpg";
import { BIO } from "../../../constants";

const StyledWrapper = styled("div")(({ theme }) => ({
  backgroundColor: theme.palette.primary.main,
  width: "min-content",
}));

const StyledImage = styled("img")(() => ({
  display: "block",
  // Blend with the parent's background
  mixBlendMode: "multiply",
}));

const AuthorPhoto = () => {
  return (
    <StyledWrapper>
      <StyledImage
        src={authorPhoto}
        alt={BIO.altText}
        sx={{
          maxWidth: { sm: "10rem", md: "14rem" },
        }}
      />
    </StyledWrapper>
  );
};

export default AuthorPhoto;
