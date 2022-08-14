import About from "../components/About";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Layout from "../components/Layout";
import Work from "../components/Work";

export default function Home() {
  return (
    <>
      <Layout>
        <Hero />
        <About />
        <Work />
        <Footer />
      </Layout>
    </>
  );
}
