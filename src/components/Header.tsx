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
    { label: "Projects", href: "#projects" },
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
    handleScroll();
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
    <header 
      className="fixed top-0 left-0 right-0 z-50"
      style={{
        height: '72px',
        background: 'hsl(var(--forest-900))',
        borderBottom: '1px solid hsla(var(--offwhite) / 0.10)',
        boxShadow: 'var(--shadow-2), var(--bevel-highlight)',
      }}
    >
      <div 
        className="h-full mx-auto flex items-center justify-between"
        style={{
          maxWidth: '1200px',
          paddingLeft: '24px',
          paddingRight: '24px',
        }}
      >
        {/* Brand / Owner Name - NEVER CROPS */}
        <motion.a
          href="#"
          onClick={(e) => scrollToSection(e, "#")}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="flex items-center focus-ring"
          style={{
            minHeight: '72px',
            maxWidth: '220px',
            textWrap: 'balance',
          }}
          whileHover={{ opacity: 0.92 }}
        >
          <span 
            className="font-bold leading-snug"
            style={{
              fontSize: '18px',
              letterSpacing: '-0.2px',
              color: 'hsl(var(--offwhite))',
              lineHeight: '22px',
            }}
          >
            Mike T. Nichols II
          </span>
        </motion.a>

        {/* Center Navigation - Pill style */}
        <motion.nav
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="hidden lg:block"
        >
          <ul 
            className="flex items-center"
            style={{ gap: '20px' }}
          >
            {navLinks.map((link, index) => {
              const isActive = activeSection === link.href.replace("#", "");
              return (
                <li key={link.href}>
                  <motion.a
                    href={link.href}
                    onClick={(e) => scrollToSection(e, link.href)}
                    className="relative inline-block font-semibold text-sm transition-colors duration-200 focus-ring"
                    style={{
                      color: isActive ? 'hsl(var(--offwhite))' : 'hsl(var(--softwhite))',
                      paddingBottom: '4px',
                    }}
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.05, duration: 0.3 }}
                    whileHover={{ color: 'hsl(var(--offwhite))' }}
                  >
                    {link.label}
                    {/* Active indicator */}
                    {isActive && (
                      <motion.span
                        layoutId="nav-indicator"
                        className="absolute left-0 right-0 bottom-0"
                        style={{
                          height: '2px',
                          background: 'hsl(var(--orange-500))',
                          borderRadius: '1px',
                        }}
                        transition={{ type: "spring", stiffness: 500, damping: 30 }}
                      />
                    )}
                  </motion.a>
                </li>
              );
            })}
          </ul>
        </motion.nav>

        {/* Right side CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="hidden lg:flex items-center gap-3"
        >
          <motion.a
            href="#contact"
            onClick={(e) => scrollToSection(e, "#contact")}
            className="btn-primary inline-flex items-center gap-2 text-sm font-semibold focus-ring"
            style={{
              padding: '10px 14px',
            }}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <span>Let's Talk</span>
            <motion.span 
              animate={{ x: [0, 3, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            >
              →
            </motion.span>
          </motion.a>
        </motion.div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="lg:hidden p-2 focus-ring"
          style={{
            width: '40px',
            height: '40px',
            borderRadius: '10px',
            color: 'hsl(var(--offwhite))',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2, ease: [0.2, 0.8, 0.2, 1] }}
            className="lg:hidden absolute left-4 right-4 top-full mt-2"
            style={{
              background: 'hsl(var(--forest-900))',
              borderRadius: '14px',
              boxShadow: 'var(--shadow-2)',
              overflow: 'hidden',
            }}
          >
            <ul className="flex flex-col py-2">
              {navLinks.map((link) => {
                const isActive = activeSection === link.href.replace("#", "");
                return (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      onClick={(e) => scrollToSection(e, link.href)}
                      className="block px-5 font-semibold text-lg transition-colors duration-200"
                      style={{
                        height: '44px',
                        lineHeight: '44px',
                        color: isActive ? 'hsl(var(--offwhite))' : 'hsl(var(--softwhite))',
                        borderBottom: '1px solid hsla(var(--offwhite) / 0.10)',
                      }}
                    >
                      {link.label}
                    </a>
                  </li>
                );
              })}
              <li className="p-4">
                <a
                  href="#contact"
                  onClick={(e) => scrollToSection(e, "#contact")}
                  className="btn-primary block text-center text-sm font-bold"
                  style={{
                    padding: '12px 16px',
                  }}
                >
                  Let's Talk
                </a>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;