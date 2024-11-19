import Layout from "../shared/components/layout/Layout";
import About from "../features/about/components/about/About";
import Books from "../features/books/components/books/Books";
import Footer from "../shared/components/footer/Footer";

const Home = () => {
  return (
    <Layout>
      <About />
      <Books />
      <Footer />
    </Layout>
  );
};

export default Home;
