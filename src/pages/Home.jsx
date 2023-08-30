import Layout from "../shared/components/layout/Layout";
import About from "../features/about/components/about/About";
import Books from "../features/books/components/books/Books";

const Home = () => {
  return (
    <Layout>
      <About />
      <Books />
    </Layout>
  );
};

export default Home;
