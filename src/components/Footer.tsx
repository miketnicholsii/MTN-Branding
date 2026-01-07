import { motion } from "framer-motion";

const Footer = () => {
  return (
    <footer className="py-12 border-t border-border relative">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo */}
          <motion.a
            href="#"
            whileHover={{ scale: 1.05 }}
            className="text-xl font-bold text-foreground flex items-baseline gap-0.5"
          >
            Mike T. Nichols<span className="text-primary">.</span><span className="text-xs text-primary/60 font-medium tracking-tight">II</span>
          </motion.a>

          {/* Navigation */}
          <nav className="flex items-center gap-6">
            {["About", "Experience", "Capabilities", "Contact"].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-sm text-subtle hover:text-foreground transition-colors"
              >
                {item}
              </a>
            ))}
          </nav>

          {/* Copyright */}
          <p className="text-subtle text-sm">
            © {new Date().getFullYear()} Mike T. Nichols II
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;