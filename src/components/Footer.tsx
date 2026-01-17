import { motion } from "framer-motion";

const footerLinks = ["About", "Experience", "Projects", "Skills", "Contact"];

const Footer = () => {
  return (
    <footer className="py-8 sm:py-10 relative section-dark overflow-hidden">
      {/* Subtle glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[400px] h-[150px] bg-forest-sage/8 rounded-full blur-[60px]" />
      
      <div className="container mx-auto px-6 lg:px-8 relative">
        <div className="flex flex-col items-center gap-4 sm:gap-6">
          {/* Logo */}
          <motion.a
            href="#"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
            className="text-base sm:text-lg font-bold text-white flex items-baseline"
          >
            Mike T. Nichols<span className="text-orange-gold ml-1" style={{ fontFamily: 'Georgia, serif' }}>II</span>
          </motion.a>

          {/* Navigation */}
          <nav className="flex flex-wrap items-center justify-center gap-4 sm:gap-5">
            {footerLinks.map((item) => (
              <motion.a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-xs text-white/50 hover:text-orange-gold transition-colors"
                whileHover={{ y: -1 }}
              >
                {item}
              </motion.a>
            ))}
          </nav>

          {/* Copyright */}
          <p className="text-white/30 text-xs text-center">
            © {new Date().getFullYear()} Mike T. Nichols II
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
