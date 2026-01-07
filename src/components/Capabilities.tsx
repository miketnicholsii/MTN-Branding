const capabilities = [
  {
    title: "Product Strategy & Roadmapping",
    description:
      "Translating vision into actionable roadmaps that align business objectives with user needs and market opportunities.",
  },
  {
    title: "Agile Program & Delivery Leadership",
    description:
      "Coaching teams, optimizing sprints, and driving efficient delivery through Scrum, Kanban, and hybrid methodologies.",
  },
  {
    title: "Business Analysis & Systems Thinking",
    description:
      "Breaking down complex systems into clear requirements, data flows, and actionable specifications.",
  },
  {
    title: "UX Collaboration & User-Centered Design",
    description:
      "Partnering with designers to create intuitive experiences backed by user research and data insights.",
  },
  {
    title: "Go-to-Market & Platform Launches",
    description:
      "Orchestrating cross-functional teams to bring products from beta to successful market launch.",
  },
  {
    title: "Process Optimization & Automation",
    description:
      "Identifying inefficiencies and implementing solutions that scale — from VBA macros to platform integrations.",
  },
];

const tools = [
  "Jira & Confluence",
  "Scrum & Kanban",
  "UX Prototyping",
  "Data Analysis",
  "VBA & Office Suite",
  "HTML & Web Design",
  "Technical Documentation",
  "Stakeholder Communication",
];

const Capabilities = () => {
  return (
    <section id="capabilities" className="py-24 lg:py-32">
      <div className="container mx-auto px-6 lg:px-8">
        {/* Section header */}
        <div className="mb-16">
          <span className="text-subtle text-sm font-medium tracking-widest uppercase">
            Capabilities
          </span>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-medium text-foreground mt-4">
            What I bring to the table
          </h2>
        </div>

        {/* Capabilities grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-20">
          {capabilities.map((cap, index) => (
            <article
              key={index}
              className="group p-8 rounded-2xl border border-border bg-card hover:bg-muted/50 transition-all hover:border-primary/30"
            >
              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center mb-6">
                <span className="text-primary font-serif text-lg font-medium">
                  {String(index + 1).padStart(2, "0")}
                </span>
              </div>
              <h3 className="font-serif text-xl font-medium text-foreground mb-3">
                {cap.title}
              </h3>
              <p className="text-body leading-relaxed">{cap.description}</p>
            </article>
          ))}
        </div>

        {/* Tools & Frameworks */}
        <div className="border-t border-border pt-16">
          <h3 className="font-serif text-2xl font-medium text-foreground mb-8">
            Tools & Frameworks
          </h3>
          <div className="flex flex-wrap gap-3">
            {tools.map((tool) => (
              <span
                key={tool}
                className="px-5 py-2.5 rounded-full border border-border text-body text-sm font-medium hover:border-primary/50 hover:text-foreground transition-colors"
              >
                {tool}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Capabilities;
