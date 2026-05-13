import { motion } from "framer-motion";

const steps = [
  {
    title: "Discover",
    description: "Workshops to align goals, users, and success metrics.",
  },
  {
    title: "Design",
    description: "UX/UI sprints to create a clear, elegant product system.",
  },
  {
    title: "Build",
    description: "Agile delivery with weekly demos and transparent tracking.",
  },
  {
    title: "Launch",
    description: "Production hardening, monitoring, and growth support.",
  },
];

const Process = () => {
  return (
    <section className="section process">
      <motion.div
        className="section-header"
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true, amount: 0.3 }}
      >
        <p className="eyebrow">Process</p>
        <h2>Clear steps, reliable delivery</h2>
        <p className="section-sub">
          A structured journey that keeps stakeholders aligned from day one.
        </p>
      </motion.div>
      <motion.div
        className="timeline"
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        viewport={{ once: true, amount: 0.3 }}
      >
        {steps.map((step, index) => (
          <div key={step.title} className="timeline-item">
            <div className="timeline-index">0{index + 1}</div>
            <div>
              <h3>{step.title}</h3>
              <p className="section-sub">{step.description}</p>
            </div>
          </div>
        ))}
      </motion.div>
    </section>
  );
};

export default Process;
