const Footer = () => {
  return (
    <footer className="py-8 bg-foreground">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo */}
          <a
            href="#"
            className="text-xl font-bold text-background hover:text-secondary transition-colors"
          >
            Mike<span className="text-secondary">.</span>
          </a>

          {/* Navigation */}
          <nav className="flex items-center gap-6">
            {["About", "Experience", "Capabilities", "Contact"].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-sm text-background/60 hover:text-background transition-colors"
              >
                {item}
              </a>
            ))}
          </nav>

          {/* Copyright */}
          <p className="text-background/40 text-sm">
            © {new Date().getFullYear()} Mike Nichols
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;