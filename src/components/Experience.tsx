const experiences = [
  {
    company: "NÈKO",
    role: "Strategist",
    period: "2022 — Present",
    location: "Brooklyn, NY",
    description: "Leading strategic initiatives and product development at a forward-thinking consultancy.",
  },
  {
    company: "Worldpay for Platforms",
    role: "Senior Product Manager",
    period: "2021 — 2022",
    location: "Atlanta, GA",
    description:
      "Led product management with a focus on UX and streamlined development. Managed cross-functional team through full product lifecycle. Spearheaded comprehensive rebranding strategy, revamping UI and standardizing backend code for enhanced consistency.",
  },
  {
    company: "Slalom",
    role: "Consultant",
    period: "2020 — 2021",
    location: "Atlanta, GA",
    description:
      "Dispatched as Business Analyst to major telecom. Managed $1M+ project budgets, designed innovative processes, and developed data-driven analytics to identify high-value business opportunities.",
  },
  {
    company: "Equifax",
    role: "Senior Product Manager",
    period: "2016 — 2019",
    location: "Atlanta, GA",
    description:
      "Led identity protection initiative with 300 employees nationwide. Launched Canadian consumer products achieving 115% attainment and $500K projected revenue. Managed legacy platform enabling access for 700K consumers.",
  },
  {
    company: "Mercedes-Benz USA",
    role: "Business Analyst",
    period: "2015 — 2016",
    location: "Atlanta, GA",
    description:
      "Transformed dealer performance scorecard software deployed across 370 dealerships. Designed UX interfaces and technical requirements, custom-tailoring the system to dealer size and market segments.",
  },
  {
    company: "Target",
    role: "Scrum Master & Agile Coach",
    period: "2014 — 2015",
    location: "Minneapolis, MN",
    description:
      "Spearheaded the company's transition to Agile, coaching 16 employees in developing strategic roadmaps and implementing efficient, structured approaches.",
  },
];

const Experience = () => {
  return (
    <section id="experience" className="py-24 lg:py-32 bg-card/50">
      <div className="container mx-auto px-6 lg:px-8">
        {/* Section header */}
        <div className="mb-16">
          <span className="text-subtle text-sm font-medium tracking-widest uppercase">
            Experience
          </span>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-medium text-foreground mt-4">
            A decade of building and leading
          </h2>
        </div>

        {/* Experience list */}
        <div className="space-y-0">
          {experiences.map((exp, index) => (
            <article
              key={index}
              className="group py-10 border-t border-border last:border-b transition-colors hover:bg-muted/30"
            >
              <div className="grid md:grid-cols-12 gap-6 md:gap-8">
                {/* Left - Meta info */}
                <div className="md:col-span-4 lg:col-span-3">
                  <p className="text-foreground font-medium">{exp.company}</p>
                  <p className="text-body text-sm mt-1">{exp.role}</p>
                  <p className="text-subtle text-sm mt-2">{exp.period}</p>
                  <p className="text-subtle text-sm">{exp.location}</p>
                </div>

                {/* Right - Description */}
                <div className="md:col-span-8 lg:col-span-9">
                  <p className="text-body leading-relaxed">{exp.description}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
