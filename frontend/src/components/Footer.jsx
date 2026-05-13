const Footer = () => {
  return (
    <footer className="footer">
      <div>
        <div className="footer-brand">IT Service Co.</div>
        <p>Built for teams that need reliable delivery partners.</p>
      </div>
      <div className="footer-links">
        <a href="#home">Home</a>
        <a href="#services">Services</a>
        <a href="#tech">Tech Stack</a>
        <a href="#contact">Contact</a>
      </div>
      <div className="footer-links">
        <a href="https://www.linkedin.com" target="_blank" rel="noreferrer">
          LinkedIn
        </a>
        <a href="https://www.github.com" target="_blank" rel="noreferrer">
          GitHub
        </a>
        <a href="https://www.x.com" target="_blank" rel="noreferrer">
          X
        </a>
      </div>
      <div className="footer-meta">
        <span>© 2026 IT Service Co. All rights reserved.</span>
      </div>
    </footer>
  );
};

export default Footer;
