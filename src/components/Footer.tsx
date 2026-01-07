const Footer = () => {
  return (
    <footer className="py-12 border-t border-border">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo / Name */}
          <a
            href="#"
            className="font-serif text-xl font-medium text-foreground hover:text-primary transition-colors"
          >
            Mike Nichols
          </a>

          {/* Navigation */}
          <nav className="flex items-center gap-8">
            <a
              href="#about"
              className="text-sm text-body hover:text-foreground transition-colors"
            >
              About
            </a>
            <a
              href="#experience"
              className="text-sm text-body hover:text-foreground transition-colors"
            >
              Experience
            </a>
            <a
              href="#capabilities"
              className="text-sm text-body hover:text-foreground transition-colors"
            >
              Capabilities
            </a>
            <a
              href="#contact"
              className="text-sm text-body hover:text-foreground transition-colors"
            >
              Contact
            </a>
          </nav>

          {/* Copyright */}
          <p className="text-subtle text-sm">
            © {new Date().getFullYear()} Mike Nichols
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
