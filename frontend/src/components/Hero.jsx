import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section id="home" className="section hero">
      <div className="hero-content">
        <motion.p
          className="eyebrow"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          IT Services for modern businesses
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          Transforming ideas into reliable digital products
        </motion.h1>
        <motion.p
          className="hero-sub"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          We design, build, and scale software with performance, security, and
          clarity at the center of every delivery.
        </motion.p>
        <motion.div
          className="hero-actions"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <a href="#contact" className="btn-primary">
            Get in Touch
          </a>
          <a href="#services" className="btn-ghost">
            Explore Services
          </a>
        </motion.div>
      </div>
      <motion.div
        className="hero-card"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.35 }}
      >
        <div>
          <p className="card-label">Delivery approach</p>
          <h3>Strategy, design, engineering</h3>
          <p className="card-text">
            Cross-functional squads that own each product end-to-end.
          </p>
        </div>
        <div className="hero-stats">
          <div>
            <span className="stat-value">98%</span>
            <span className="stat-label">Client satisfaction</span>
          </div>
          <div>
            <span className="stat-value">24/7</span>
            <span className="stat-label">Support coverage</span>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
