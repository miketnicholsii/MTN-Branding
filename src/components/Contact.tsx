import { Mail, Linkedin, ArrowUpRight } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-24 lg:py-32 bg-card/50">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          {/* Section header */}
          <span className="text-subtle text-sm font-medium tracking-widest uppercase">
            Contact
          </span>
          
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-medium text-foreground mt-4 mb-6">
            Let's build something together
          </h2>
          
          <p className="text-body text-lg md:text-xl leading-relaxed mb-12">
            Want to build something, fix something, or talk through an idea? 
            I'm always open to a good conversation.
          </p>

          {/* Contact links */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="mailto:miketnicholsii@gmail.com"
              className="group inline-flex items-center gap-3 px-7 py-4 bg-primary text-primary-foreground font-medium rounded-full hover:bg-primary/90 transition-all hover:shadow-lg hover:shadow-primary/20"
            >
              <Mail size={18} />
              <span>miketnicholsii@gmail.com</span>
              <ArrowUpRight
                size={16}
                className="opacity-60 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all"
              />
            </a>

            <a
              href="https://www.linkedin.com/in/miketnicholsii/"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-3 px-7 py-4 border border-border text-foreground font-medium rounded-full hover:bg-muted transition-colors"
            >
              <Linkedin size={18} />
              <span>LinkedIn</span>
              <ArrowUpRight
                size={16}
                className="opacity-60 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all"
              />
            </a>
          </div>

          {/* Phone */}
          <p className="text-subtle text-sm mt-8">
            Or give me a call: <span className="text-body">336-880-2162</span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
