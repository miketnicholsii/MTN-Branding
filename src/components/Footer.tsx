import { motion } from "framer-motion";

const Footer = () => {
  return (
    <footer className="py-8 sm:py-12 border-t border-border relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center gap-6 sm:gap-8">
          {/* Logo */}
          <motion.a
            href="#"
            whileHover={{ scale: 1.05 }}
            className="text-lg sm:text-xl font-bold text-foreground flex items-baseline"
          >
            Mike T. Nichols<span className="text-primary ml-1" style={{ fontFamily: 'Georgia, "Times New Roman", serif' }}>II</span>
          </motion.a>

          {/* Navigation */}
          <nav className="flex flex-wrap items-center justify-center gap-4 sm:gap-6">
            {["About", "Experience", "Capabilities", "Contact"].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-xs sm:text-sm text-subtle hover:text-foreground transition-colors"
              >
                {item}
              </a>
            ))}
          </nav>

          {/* Copyright */}
          <p className="text-subtle text-xs sm:text-sm text-center">
            © {new Date().getFullYear()} Mike T. Nichols II
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;