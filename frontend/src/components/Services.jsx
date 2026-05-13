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

const Services = () => {
  return (
    <section id="services" className="section">
      <div className="section-header">
        <p className="eyebrow">Services</p>
        <h2>Everything you need to ship digital products</h2>
        <p className="section-sub">
          From concept to launch, we cover the full delivery lifecycle.
        </p>
      </div>
      <div className="card-grid">
        {services.map((service) => (
          <article key={service.title} className="service-card">
            <h3>{service.title}</h3>
            <p>{service.description}</p>
            <div className="card-link">Learn more</div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Services;
