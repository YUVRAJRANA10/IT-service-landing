import { useState } from "react";
import { motion } from "framer-motion";
import toast from "react-hot-toast";
import getApiBase from "../utils/api";

const initialForm = {
  fullName: "",
  email: "",
  description: "",
};

const Contact = () => {
  const [formData, setFormData] = useState(initialForm);
  const [isSending, setIsSending] = useState(false);
  const [status, setStatus] = useState("");

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const validate = () => {
    if (!formData.fullName || !formData.email || !formData.description) {
      toast.error("Please fill in all fields.");
      return false;
    }

    if (!/\S+@\S+\.\S+/.test(formData.email)) {
      toast.error("Please enter a valid email address.");
      return false;
    }

    return true;
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setStatus("");

    if (!validate()) {
      return;
    }

    setIsSending(true);

    try {
      const response = await fetch(`${getApiBase()}/api/contact`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const payload = await response.json();

      if (!response.ok) {
        throw new Error(payload.message || "Something went wrong.");
      }

      toast.success("Message sent successfully!");
      setStatus("Thanks! We will get back to you within 24 hours.");
      setFormData(initialForm);
    } catch (error) {
      toast.error(error.message || "Unable to send message.");
    } finally {
      setIsSending(false);
    }
  };

  return (
    <section id="contact" className="section contact">
      <motion.div
        className="section-header"
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true, amount: 0.3 }}
      >
        <p className="eyebrow">Contact</p>
        <h2>Tell us about your next project</h2>
        <p className="section-sub">
          Share your requirements and we will schedule a discovery call.
        </p>
      </motion.div>
      <motion.div
        className="contact-grid"
        initial={{ opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        viewport={{ once: true, amount: 0.2 }}
      >
        <div className="contact-card">
          <h3>Let us build your roadmap</h3>
          <p>
            We respond quickly with a proposal, timeline, and transparent
            delivery plan.
          </p>
          <div className="contact-points">
            <div>
              <span className="point-title">Response time</span>
              <span>Within 1 business day</span>
            </div>
            <div>
              <span className="point-title">Engagement models</span>
              <span>Dedicated squad, fixed bid, advisory</span>
            </div>
            <div>
              <span className="point-title">Availability</span>
              <span>Global, remote-first delivery</span>
            </div>
          </div>
        </div>
        <form className="contact-form" onSubmit={handleSubmit}>
          <label htmlFor="fullName">Full name</label>
          <input
            id="fullName"
            name="fullName"
            type="text"
            value={formData.fullName}
            onChange={handleChange}
            placeholder="John Carter"
          />

          <label htmlFor="email">Email</label>
          <input
            id="email"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="john@email.com"
          />

          <label htmlFor="description">Project details</label>
          <textarea
            id="description"
            name="description"
            rows="4"
            value={formData.description}
            onChange={handleChange}
            placeholder="Tell us about your goals, timeline, and budget."
          />

          <button type="submit" className="btn-primary" disabled={isSending}>
            {isSending ? "Sending..." : "Send message"}
          </button>
          {status && <p className="form-success">{status}</p>}
        </form>
      </motion.div>
    </section>
  );
};

export default Contact;
