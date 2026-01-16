import { useState, useEffect, useCallback } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  const navLinks = [
    { label: "About", href: "#about" },
    { label: "Experience", href: "#experience" },
    { label: "Skills", href: "#skills" },
    { label: "Capabilities", href: "#capabilities" },
    { label: "Contact", href: "#contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      // Detect active section
      const sections = navLinks.map(link => link.href.replace("#", ""));
      const scrollPosition = window.scrollY + 100;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i]);
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(sections[i]);
          return;
        }
      }
      setActiveSection("");
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Check initial position
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = useCallback((e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetId = href.replace("#", "");
    const element = targetId ? document.getElementById(targetId) : null;
    
    if (element) {
      const offsetTop = element.offsetTop - 80;
      window.scrollTo({
        top: offsetTop,
        behavior: "smooth"
      });
    } else if (href === "#") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
    
    setIsMobileMenuOpen(false);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 py-3 sm:py-4">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <nav className="flex items-center justify-between">
          {/* Logo */}
          <motion.a
            href="#"
            onClick={(e) => scrollToSection(e, "#")}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-lg sm:text-xl font-bold text-foreground flex items-baseline"
          >
            <span className="hidden sm:inline">Mike T. Nichols</span>
            <span className="sm:hidden">MTN</span>
            <span className="text-orange-gold ml-1" style={{ fontFamily: 'Georgia, "Times New Roman", serif' }}>II</span>
          </motion.a>

          {/* Center Navigation - Pill style like NEKO */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="hidden md:block"
          >
            <ul className="flex items-center gap-1 px-2 py-2 glass-pill rounded-full">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={(e) => scrollToSection(e, link.href)}
                    className={`px-5 py-2 text-sm font-medium rounded-full transition-all duration-300 ${
                      activeSection === link.href.replace("#", "")
                        ? "bg-forest-deep text-white"
                        : "text-body hover:text-headline hover:bg-muted"
                    }`}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Right side CTA */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="hidden md:flex items-center gap-4"
          >
            <a
              href="#contact"
              onClick={(e) => scrollToSection(e, "#contact")}
              className="group inline-flex items-center gap-2 px-6 py-2.5 bg-forest-deep text-white text-sm font-semibold rounded-full hover:bg-forest-mid transition-all duration-300"
            >
              <span>Let's Talk</span>
              <span className="group-hover:translate-x-0.5 transition-transform">→</span>
            </a>
          </motion.div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 text-foreground"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </nav>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
              className="md:hidden mt-4 glass-card rounded-2xl overflow-hidden"
            >
              <ul className="flex flex-col py-4 px-4 gap-1">
                {navLinks.map((link) => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      onClick={(e) => scrollToSection(e, link.href)}
                      className={`block px-4 py-3 text-lg font-medium rounded-xl transition-colors duration-300 ${
                        activeSection === link.href.replace("#", "")
                          ? "bg-forest-deep text-white"
                          : "text-body hover:text-headline hover:bg-muted"
                      }`}
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
                <li className="pt-2 px-4">
                  <a
                    href="#contact"
                    onClick={(e) => scrollToSection(e, "#contact")}
                    className="block text-center text-sm font-semibold px-6 py-3 bg-forest-deep text-white rounded-full"
                  >
                    Let's Talk
                  </a>
                </li>
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
};

export default Header;