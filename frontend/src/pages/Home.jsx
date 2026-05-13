import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Services from "../components/Services";
import TechTabs from "../components/TechTabs";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

const Home = ({ theme, onToggleTheme }) => {
  return (
    <div className="page">
      <div className="ambient" aria-hidden="true" />
      <Navbar theme={theme} onToggleTheme={onToggleTheme} />
      <main>
        <Hero />
        <Services />
        <TechTabs />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Home;
