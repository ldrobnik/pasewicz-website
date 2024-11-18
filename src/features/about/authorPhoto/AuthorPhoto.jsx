import { styled } from "@mui/system";
import authorPhoto from "../../../assets/images/author_photo.jpg";

const StyledWrapper = styled("div")(({ theme }) => ({
  backgroundColor: theme.palette.primary.main,
  width: "min-content",
}));

const StyledImage = styled("img")(() => ({
  display: "block",
  /* Blend with parent's background: */
  mixBlendMode: "multiply",
}));

const AuthorPhoto = () => {
  return (
    <StyledWrapper>
      <StyledImage
        src={authorPhoto}
        sx={{
          maxWidth: { xs: "10rem", sm: "14rem" },
        }}
      />
    </StyledWrapper>
  );
};

export default AuthorPhoto;
