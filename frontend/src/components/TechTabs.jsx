import { useState } from "react";
import { motion } from "framer-motion";

const tabs = [
  {
    key: "fe",
    label: "Frontend",
    items: [
      "React",
      "Angular",
      "Vue",
      "Next.js",
      "Tailwind CSS",
      "HTML5 / CSS3",
    ],
  },
  {
    key: "be",
    label: "Backend",
    items: [
      "Node.js",
      "Express",
      "Python / Django",
      "Java Spring Boot",
      "Go",
    ],
  },
  {
    key: "db",
    label: "Database",
    items: ["MongoDB", "PostgreSQL", "MySQL", "Redis"],
  },
  {
    key: "devops",
    label: "DevOps",
    items: ["Docker", "AWS", "Vercel", "Heroku", "GitHub Actions"],
  },
];

const TechTabs = () => {
  const [activeTab, setActiveTab] = useState(tabs[0]);

  return (
    <section id="tech" className="section tech">
      <motion.div
        className="section-header"
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true, amount: 0.3 }}
      >
        <p className="eyebrow">Technology stack</p>
        <h2>Modern tools, proven frameworks</h2>
        <p className="section-sub">
          Select a focus area to explore the technologies we deliver with.
        </p>
      </motion.div>
      <motion.div
        className="tabs"
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        viewport={{ once: true, amount: 0.2 }}
      >
        <div className="tab-list">
          {tabs.map((tab) => (
            <button
              key={tab.key}
              type="button"
              className={`tab-button ${
                activeTab.key === tab.key ? "tab-active" : ""
              }`}
              onClick={() => setActiveTab(tab)}
            >
              {tab.label}
            </button>
          ))}
        </div>
        <div className="tab-panel">
          {activeTab.items.map((item) => (
            <div key={item} className="tech-pill">
              {item}
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default TechTabs;
