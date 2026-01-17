import { motion } from "framer-motion";

const footerLinks = ["About", "Experience", "Projects", "Skills", "Contact"];

const Footer = () => {
  return (
    <footer 
      className="py-8 sm:py-10 relative overflow-hidden"
      style={{ background: 'hsl(var(--forest-900))' }}
    >
      {/* Subtle glow */}
      <div 
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[400px] h-[150px] rounded-full blur-[60px]"
        style={{ background: 'hsla(var(--forest-700) / 0.2)' }}
      />
      
      <div className="container mx-auto px-6 lg:px-8 relative">
        <div className="flex flex-col items-center gap-4 sm:gap-6">
          {/* Logo */}
          <motion.a
            href="#"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
            className="text-base sm:text-lg font-bold flex items-baseline"
            style={{ color: 'hsl(var(--offwhite))' }}
          >
            Mike T. Nichols
            <span 
              className="ml-1" 
              style={{ fontFamily: 'Georgia, serif', color: 'hsl(var(--orange-500))' }}
            >
              II
            </span>
          </motion.a>

          {/* Navigation */}
          <nav className="flex flex-wrap items-center justify-center gap-4 sm:gap-5">
            {footerLinks.map((item) => (
              <motion.a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-xs transition-colors duration-200"
                style={{ color: 'hsl(var(--softwhite))' }}
                whileHover={{ y: -1, color: 'hsl(var(--orange-500))' }}
              >
                {item}
              </motion.a>
            ))}
          </nav>

          {/* Copyright */}
          <p 
            className="text-xs text-center"
            style={{ color: 'hsla(var(--softwhite) / 0.5)' }}
          >
            © {new Date().getFullYear()} Mike T. Nichols II
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;