import { motion } from "framer-motion";

const services = [
  {
    title: "Web Development",
    description:
      "Responsive web platforms with clean UI, fast performance, and scalable architecture.",
  },
  {
    title: "Mobile App Development",
    description:
      "Cross-platform mobile apps focused on intuitive UX and reliable delivery pipelines.",
  },
  {
    title: "Desktop Applications",
    description:
      "Secure desktop software that integrates with your existing enterprise stack.",
  },
];

const containerVariants = {
  hidden: { opacity: 0, y: 16 },
  show: {
    opacity: 1,
    y: 0,
    transition: { staggerChildren: 0.12 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 18 },
  show: { opacity: 1, y: 0 },
};

const Services = () => {
  return (
    <section id="services" className="section">
      <motion.div
        className="section-header"
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true, amount: 0.3 }}
      >
        <p className="eyebrow">Services</p>
        <h2>Everything you need to ship digital products</h2>
        <p className="section-sub">
          From concept to launch, we cover the full delivery lifecycle.
        </p>
      </motion.div>
      <motion.div
        className="card-grid"
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
      >
        {services.map((service) => (
          <motion.article
            key={service.title}
            className="service-card"
            variants={itemVariants}
          >
            <h3>{service.title}</h3>
            <p>{service.description}</p>
            <div className="card-link">Learn more</div>
          </motion.article>
        ))}
      </motion.div>
    </section>
  );
};

export default Services;
