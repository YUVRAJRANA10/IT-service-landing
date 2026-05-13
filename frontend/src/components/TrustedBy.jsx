import { motion } from "framer-motion";
import logoAurora from "../assets/logo-aurora.svg";
import logoQuantum from "../assets/logo-quantum.svg";
import logoVertex from "../assets/logo-vertex.svg";
import logoHorizon from "../assets/logo-horizon.svg";

const logos = [
  { src: logoAurora, alt: "Aurora Labs" },
  { src: logoQuantum, alt: "Quantum Grid" },
  { src: logoVertex, alt: "Vertex Core" },
  { src: logoHorizon, alt: "Horizon Cloud" },
];

const TrustedBy = () => {
  return (
    <section className="section trusted">
      <motion.div
        className="trusted-inner"
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true, amount: 0.3 }}
      >
        <p className="eyebrow">Trusted by teams</p>
        <div className="logo-strip">
          {logos.map((logo) => (
            <div key={logo.alt} className="logo-pill">
              <img src={logo.src} alt={logo.alt} />
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default TrustedBy;
