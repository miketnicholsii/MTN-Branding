import { motion } from "framer-motion";

const Footer = () => {
  return (
    <footer className="py-12 sm:py-16 relative section-dark">
      {/* Subtle green glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[200px] bg-forest-sage/10 rounded-full blur-[80px]" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="flex flex-col items-center gap-6 sm:gap-8">
          {/* Logo */}
          <motion.a
            href="#"
            whileHover={{ scale: 1.05 }}
            className="text-lg sm:text-xl font-bold text-white flex items-baseline"
          >
            Mike T. Nichols<span className="text-orange-gold ml-1" style={{ fontFamily: 'Georgia, "Times New Roman", serif' }}>II</span>
          </motion.a>

          {/* Navigation */}
          <nav className="flex flex-wrap items-center justify-center gap-4 sm:gap-6">
            {["About", "Experience", "Capabilities", "Contact"].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-xs sm:text-sm text-white/60 hover:text-orange-gold transition-colors duration-300"
              >
                {item}
              </a>
            ))}
          </nav>

          {/* Copyright */}
          <p className="text-white/40 text-xs sm:text-sm text-center">
            © {new Date().getFullYear()} Mike T. Nichols II
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
