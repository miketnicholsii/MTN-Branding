import { motion } from "framer-motion";

const Footer = () => {
  return (
    <footer className="py-12 bg-foreground relative overflow-hidden">
      {/* Subtle animated gradient */}
      <motion.div
        animate={{ x: ["-100%", "100%"] }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-secondary/50 to-transparent"
      />
      
      <div className="container mx-auto px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo */}
          <motion.a
            href="#"
            whileHover={{ scale: 1.05 }}
            className="text-2xl font-bold text-background hover:text-secondary transition-colors"
          >
            Mike<span className="text-secondary">.</span>
          </motion.a>

          {/* Navigation */}
          <nav className="flex items-center gap-6">
            {["About", "Experience", "Capabilities", "Contact"].map((item, index) => (
              <motion.a
                key={item}
                href={`#${item.toLowerCase()}`}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -2 }}
                className="text-sm text-background/60 hover:text-background transition-colors"
              >
                {item}
              </motion.a>
            ))}
          </nav>

          {/* Copyright */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-background/40 text-sm"
          >
            © {new Date().getFullYear()} Mike Nichols
          </motion.p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;