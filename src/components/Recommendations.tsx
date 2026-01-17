import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { useRef, memo } from "react";
import { Quote } from "lucide-react";
import { StaggerContainer, StaggerItem } from "./StaggerReveal";

const recommendations = [
  {
    name: "Peter Coughlin",
    title: "Creative Technologist | Product Leader",
    relationship: "Former Manager",
    quote: "A living example of exemplary Product Management and servant leadership. He gives excellent, actionable feedback.",
  },
  {
    name: "Kevin Bottino",
    title: "Professional Résumé Writer",
    relationship: "Colleague",
    quote: "His expertise in product management and strategic consultation is unmatched. Hiring Mike is an immediate win.",
  },
  {
    name: "Jane Lloyd",
    title: "Senior Director, Marketing",
    relationship: "Equifax",
    quote: "Mike's willingness to roll up his sleeves and do the hard work. Products overachieved budget expectations.",
  },
  {
    name: "Trent Boyd",
    title: "Customer Account Risk, Chick-fil-A",
    relationship: "Teammate",
    quote: "Passionate, hard-working, talented. A unique gifting in bringing people together.",
  },
  {
    name: "Joella Duncan",
    title: "SVP, Audience & Measurement",
    relationship: "Teammate",
    quote: "Working with Michael is a breath of fresh air. Detail oriented with a deep knowledge base.",
  },
  {
    name: "Joel Hiller",
    title: "Sr. Business Consultant, Adobe",
    relationship: "Teammate",
    quote: "Displays mastery of his core role with willingness to go beyond. Amazing positive energy.",
  },
];

const RecommendationCard = memo(({ recommendation, index }: { 
  recommendation: typeof recommendations[0]; 
  index: number;
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <motion.article
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      className="group h-full"
    >
      <div 
        className="glass-card rounded-xl p-5 h-full flex flex-col hover:-translate-y-1 transition-transform duration-300"
      >
        {/* Quote icon */}
        <div 
          className="w-8 h-8 rounded-lg flex items-center justify-center mb-4"
          style={{ background: 'hsla(var(--orange-500) / 0.15)' }}
        >
          <Quote size={14} style={{ color: 'hsl(var(--orange-500))' }} />
        </div>

        {/* Quote text */}
        <blockquote 
          className="text-sm leading-relaxed mb-4 flex-1 italic"
          style={{ color: 'hsl(var(--softwhite))' }}
        >
          "{recommendation.quote}"
        </blockquote>

        {/* Attribution */}
        <footer 
          className="pt-4"
          style={{ borderTop: '1px solid hsla(var(--offwhite) / 0.10)' }}
        >
          <cite className="not-italic">
            <div 
              className="font-semibold text-sm"
              style={{ color: 'hsl(var(--offwhite))' }}
            >
              {recommendation.name}
            </div>
            <div 
              className="text-xs mt-0.5"
              style={{ color: 'hsl(var(--softwhite))' }}
            >
              {recommendation.title}
            </div>
            <div 
              className="text-[10px] font-medium mt-1 uppercase tracking-wider"
              style={{ color: 'hsla(var(--orange-500) / 0.7)' }}
            >
              {recommendation.relationship}
            </div>
          </cite>
        </footer>
      </div>
    </motion.article>
  );
});

RecommendationCard.displayName = "RecommendationCard";

const Recommendations = () => {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const bgY = useTransform(scrollYProgress, [0, 1], [-30, 30]);

  return (
    <section 
      id="recommendations" 
      className="py-20 sm:py-24 lg:py-28 relative overflow-hidden" 
      ref={ref}
      style={{ background: 'hsl(var(--forest-700))' }}
    >
      {/* Background */}
      <motion.div 
        style={{ y: bgY }}
        className="absolute top-1/4 -right-20 w-[350px] h-[350px] rounded-full blur-[100px]"
      >
        <div className="w-full h-full rounded-full" style={{ background: 'hsla(var(--forest-900) / 0.5)' }} />
      </motion.div>
      
      <div className="container mx-auto px-6 lg:px-8 relative">
        <StaggerContainer>
          {/* Section header */}
          <StaggerItem>
            <div className="text-center mb-4">
              <span 
                className="text-xs font-bold tracking-[0.2em] uppercase"
                style={{ color: 'hsl(var(--orange-500))' }}
              >
                Testimonials
              </span>
            </div>
          </StaggerItem>

          <StaggerItem>
            <div className="text-center mb-3">
              <h2 
                className="text-3xl sm:text-4xl md:text-5xl font-bold"
                style={{ color: 'hsl(var(--offwhite))' }}
              >
                What People Say
              </h2>
            </div>
          </StaggerItem>

          <StaggerItem>
            <p 
              className="text-base text-center max-w-lg mx-auto mb-10"
              style={{ color: 'hsl(var(--softwhite))' }}
            >
              Feedback from colleagues, managers, and partners I've worked with.
            </p>
          </StaggerItem>

          {/* Recommendations grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-5xl mx-auto">
            {recommendations.map((rec, index) => (
              <RecommendationCard key={rec.name} recommendation={rec} index={index} />
            ))}
          </div>
        </StaggerContainer>
      </div>
    </section>
  );
};

export default Recommendations;