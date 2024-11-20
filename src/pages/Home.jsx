import { styled } from "@mui/system";
import Layout from "../shared/components/layout/Layout";
import About from "../features/about/components/about/About";
import Books from "../features/books/components/books/Books";
import Footer from "../shared/components/footer/Footer";
import Spinner from "../shared/components/spinner/spinner";

const StyledFadeIn = styled("div")(() => ({
  "@keyframes fadein": {
    from: {
      opacity: 0,
    },
    to: {
      opacity: 1,
    },
  },
  animation: "fadein 0.5s ease-in-out",
  animationDelay: "1.5s",
  animationFillMode: "both",
}));

const StyledFadeOut = styled("div")(() => ({
  "@keyframes fadeout": {
    from: {
      opacity: 1,
    },
    to: {
      opacity: 0,
    },
  },
  animation: "fadeout 0.5s ease-in-out",
  animationDelay: "1.2s",
  animationFillMode: "both",
}));

const Home = () => {
  return (
    <>
      <StyledFadeOut>
        <Spinner />
      </StyledFadeOut>
      <StyledFadeIn>
        <Layout>
          <About />
          <Books />
          <Footer />
        </Layout>
      </StyledFadeIn>
    </>
  );
};

export default Home;
