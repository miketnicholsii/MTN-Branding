import { motion } from "framer-motion";

const footerLinks = ["About", "Experience", "Capabilities", "Contact"];

const Footer = () => {
  return (
    <footer className="py-12 sm:py-16 relative section-dark overflow-hidden">
      {/* Subtle green glow */}
      <motion.div 
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[200px] bg-forest-sage/10 rounded-full blur-[80px]"
        animate={{ opacity: [0.5, 0.7, 0.5] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="flex flex-col items-center gap-6 sm:gap-8">
          {/* Logo */}
          <motion.a
            href="#"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            className="text-lg sm:text-xl font-bold text-white flex items-baseline"
          >
            Mike T. Nichols<span className="text-orange-gold ml-1" style={{ fontFamily: 'Georgia, "Times New Roman", serif' }}>II</span>
          </motion.a>

          {/* Navigation */}
          <nav className="flex flex-wrap items-center justify-center gap-4 sm:gap-6">
            {footerLinks.map((item, index) => (
              <motion.a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-xs sm:text-sm text-white/60 hover:text-orange-gold transition-colors duration-300 link-animated"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.4 }}
                viewport={{ once: true }}
                whileHover={{ y: -2 }}
              >
                {item}
              </motion.a>
            ))}
          </nav>

          {/* Copyright */}
          <motion.p 
            className="text-white/40 text-xs sm:text-sm text-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.5 }}
            viewport={{ once: true }}
          >
            © {new Date().getFullYear()} Mike T. Nichols II
          </motion.p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
