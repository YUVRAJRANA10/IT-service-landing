import { motion } from "framer-motion";
import avatarOne from "../assets/avatar-1.svg";
import avatarTwo from "../assets/avatar-2.svg";
import avatarThree from "../assets/avatar-3.svg";

const testimonials = [
  {
    quote:
      "Their team shipped our customer portal in record time without compromising quality.",
    name: "Nina Patel",
    role: "Product Lead, Aurora Labs",
    avatar: avatarOne,
  },
  {
    quote:
      "Reliable delivery and proactive communication. We felt supported every step.",
    name: "Marcus Lee",
    role: "CTO, Horizon Cloud",
    avatar: avatarTwo,
  },
  {
    quote:
      "They modernized our stack and improved performance by 40% in two sprints.",
    name: "Sofia Alvarez",
    role: "Engineering Manager, Vertex Core",
    avatar: avatarThree,
  },
];

const Testimonials = () => {
  return (
    <section className="section testimonials">
      <motion.div
        className="section-header"
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true, amount: 0.3 }}
      >
        <p className="eyebrow">Client stories</p>
        <h2>Teams trust us with mission-critical launches</h2>
        <p className="section-sub">
          A few words from partners who scaled with our delivery squads.
        </p>
      </motion.div>
      <motion.div
        className="testimonial-grid"
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        viewport={{ once: true, amount: 0.3 }}
      >
        {testimonials.map((item) => (
          <article key={item.name} className="testimonial-card">
            <p className="testimonial-quote">“{item.quote}”</p>
            <div className="testimonial-footer">
              <img src={item.avatar} alt={item.name} />
              <div>
                <h3>{item.name}</h3>
                <p className="section-sub">{item.role}</p>
              </div>
            </div>
          </article>
        ))}
      </motion.div>
    </section>
  );
};

export default Testimonials;
