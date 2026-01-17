import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { useRef, memo } from "react";
import { Quote } from "lucide-react";
import { StaggerContainer, StaggerItem } from "./StaggerReveal";
import SectionTransition from "./SectionTransition";

const recommendations = [
  {
    name: "Peter Coughlin",
    title: "Creative Technologist | Product & Program Leader",
    relationship: "Former Manager",
    quote: "A living, breathing example of exemplary Product Management and servant leadership. He seeks to understand needs first and gives excellent, actionable feedback.",
  },
  {
    name: "Kevin Bottino",
    title: "Certified Professional Résumé Writer & Career Strategist",
    relationship: "Colleague",
    quote: "His expertise in product management and strategic consultation is unmatched. Hiring Mike translates to an immediate win.",
  },
  {
    name: "Jane Lloyd",
    title: "Senior Director, Marketing",
    relationship: "Worked Together at Equifax",
    quote: "I appreciated Mike's willingness to roll up his sleeves and do the hard work. These products overachieved our budget expectations.",
  },
  {
    name: "Trent Boyd",
    title: "Customer Account Risk at Chick-fil-A",
    relationship: "Teammate",
    quote: "The person in the organization you never forget—passionate, hard-working, talented. A truly unique gifting in bringing people together.",
  },
  {
    name: "Joella Duncan",
    title: "Senior Vice President, Audience & Measurement",
    relationship: "Teammate",
    quote: "Working with Michael is a breath of fresh air. He is detail oriented, his knowledge base is deep, and I can always count on him.",
  },
  {
    name: "Joel Hiller",
    title: "Sr. Business Consultant, Adobe Analytics",
    relationship: "Teammate",
    quote: "He displays mastery of his core role but also a willingness to go beyond what is expected. His positive attitude brings amazing energy.",
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
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.1, ease: "easeOut" }}
      className="group h-full"
    >
      <div className="glass-card rounded-3xl p-6 lg:p-8 h-full flex flex-col hover:shadow-xl hover:shadow-forest-deep/10 transition-all duration-500 hover:-translate-y-1.5">
        {/* Quote icon */}
        <div className="w-10 h-10 rounded-xl bg-orange-gold/10 border border-orange-gold/20 flex items-center justify-center mb-5">
          <Quote size={18} className="text-orange-gold" aria-hidden="true" />
        </div>

        {/* Quote text */}
        <blockquote className="text-forest-deep/80 text-base leading-relaxed mb-6 flex-1 font-medium italic">
          "{recommendation.quote}"
        </blockquote>

        {/* Attribution */}
        <footer className="border-t border-forest-sage/10 pt-5">
          <cite className="not-italic">
            <div className="font-bold text-forest-deep text-base">
              {recommendation.name}
            </div>
            <div className="text-forest-sage text-sm font-medium mt-0.5">
              {recommendation.title}
            </div>
            <div className="text-orange-gold/80 text-xs font-semibold mt-1.5 uppercase tracking-wider">
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

  // Parallax transforms
  const bg1Y = useTransform(scrollYProgress, [0, 1], [-80, 120]);
  const bg2Y = useTransform(scrollYProgress, [0, 1], [60, -100]);

  return (
    <section id="recommendations" className="py-24 sm:py-28 lg:py-32 relative overflow-hidden" ref={ref}>
      {/* Parallax background */}
      <motion.div 
        style={{ y: bg1Y }}
        className="absolute top-1/4 -right-32 w-[500px] h-[500px] bg-forest-sage/8 rounded-full blur-[120px]" 
      />
      <motion.div 
        style={{ y: bg2Y }}
        className="absolute bottom-1/4 -left-32 w-[400px] h-[400px] bg-orange-gold/5 rounded-full blur-[100px]" 
      />
      
      <SectionTransition>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
          <StaggerContainer>
            {/* Section header */}
            <StaggerItem>
              <div className="text-center mb-6">
                <span className="text-orange-gold text-sm font-bold tracking-[0.2em] uppercase">Testimonials</span>
              </div>
            </StaggerItem>

            <StaggerItem>
              <div className="text-center mb-6">
                <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-forest-deep">
                  What People Say
                </h2>
              </div>
            </StaggerItem>

            <StaggerItem>
              <p className="text-body text-lg text-center max-w-2xl mx-auto mb-16 font-medium">
                Feedback from colleagues, managers, and partners I've had the privilege to work with.
              </p>
            </StaggerItem>

            {/* Recommendations grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto auto-rows-fr">
              {recommendations.map((rec, index) => (
                <RecommendationCard key={rec.name} recommendation={rec} index={index} />
              ))}
            </div>
          </StaggerContainer>
        </div>
      </SectionTransition>
    </section>
  );
};

export default Recommendations;
