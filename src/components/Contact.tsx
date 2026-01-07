import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Mail, Linkedin, ArrowUpRight, Phone } from "lucide-react";

const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="contact" className="py-32 lg:py-40 bg-primary relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-10 left-10 w-40 h-40 border border-white/10 rounded-full" />
        <div className="absolute bottom-20 right-20 w-60 h-60 border border-white/10 rounded-full" />
        <div className="absolute top-1/2 left-1/4 w-20 h-20 bg-white/5 rounded-full" />
      </div>
      
      <div className="container mx-auto px-6 lg:px-8 relative" ref={ref}>
        <div className="max-w-4xl mx-auto text-center">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="inline-block px-4 py-1.5 bg-white/10 text-white text-sm font-semibold rounded-full mb-6"
          >
            Contact
          </motion.span>
          
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6"
          >
            Let's build something
            <br />
            <span className="text-secondary">together</span>
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-white/80 text-xl mb-12 max-w-2xl mx-auto"
          >
            Want to build something, fix something, or talk through an idea? 
            I'm always open to a good conversation.
          </motion.p>

          {/* Contact links */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10"
          >
            <a
              href="mailto:miketnicholsii@gmail.com"
              className="group inline-flex items-center gap-3 px-8 py-4 bg-white text-primary font-semibold rounded-full hover:bg-secondary transition-all hover:shadow-xl hover:-translate-y-1 w-full sm:w-auto justify-center"
            >
              <Mail size={20} />
              <span>miketnicholsii@gmail.com</span>
              <ArrowUpRight
                size={18}
                className="opacity-50 group-hover:opacity-100 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all"
              />
            </a>

            <a
              href="https://www.linkedin.com/in/miketnicholsii/"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-3 px-8 py-4 border-2 border-white/30 text-white font-semibold rounded-full hover:bg-white/10 transition-all hover:-translate-y-1 w-full sm:w-auto justify-center"
            >
              <Linkedin size={20} />
              <span>LinkedIn</span>
              <ArrowUpRight
                size={18}
                className="opacity-50 group-hover:opacity-100 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all"
              />
            </a>
          </motion.div>

          {/* Phone */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex items-center justify-center gap-2 text-white/60"
          >
            <Phone size={16} />
            <span className="text-sm">336-880-2162</span>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;