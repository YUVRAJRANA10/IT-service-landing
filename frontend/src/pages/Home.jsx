import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import TrustedBy from "../components/TrustedBy";
import Services from "../components/Services";
import Process from "../components/Process";
import TechTabs from "../components/TechTabs";
import Testimonials from "../components/Testimonials";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

const Home = ({ theme, onToggleTheme }) => {
  return (
    <div className="page">
      <div className="ambient" aria-hidden="true" />
      <Navbar theme={theme} onToggleTheme={onToggleTheme} />
      <main>
        <Hero />
        <TrustedBy />
        <Services />
        <Process />
        <TechTabs />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Home;
