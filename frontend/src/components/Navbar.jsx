const navLinks = [
  { label: "Home", href: "#home" },
  { label: "Services", href: "#services" },
  { label: "Tech Stack", href: "#tech" },
  { label: "Contact", href: "#contact" },
];

const Navbar = ({ theme, onToggleTheme }) => {
  return (
    <header className="nav-shell">
      <nav className="nav-glass">
        <div className="nav-brand">IT Service Co.</div>
        <div className="nav-links">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} className="nav-link">
              {link.label}
            </a>
          ))}
        </div>
        <button type="button" className="theme-toggle" onClick={onToggleTheme}>
          {theme === "dark" ? "Light" : "Dark"} Mode
        </button>
      </nav>
    </header>
  );
};

export default Navbar;
