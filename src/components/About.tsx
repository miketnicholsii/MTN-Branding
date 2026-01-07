const About = () => {
  return (
    <section id="about" className="py-24 lg:py-32">
      <div className="container mx-auto px-6 lg:px-8">
        {/* Section header */}
        <div className="mb-16">
          <span className="text-subtle text-sm font-medium tracking-widest uppercase">
            About
          </span>
        </div>

        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Left column - Main text */}
          <div className="lg:col-span-7">
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-medium text-foreground leading-tight mb-8">
              I solve problems with clarity — and occasionally a dad joke.
            </h2>
            
            <div className="space-y-6 text-body text-lg leading-relaxed">
              <p>
                I'm a product and strategy leader who thrives on turning ambiguity into action. 
                With over a decade of experience across fintech, enterprise software, and consulting, 
                I've led cross-functional teams to ship complex platforms and deliver measurable results.
              </p>
              <p>
                My work lives at the intersection of strategy, data, and user-centered design. 
                I care deeply about clarity: clear thinking, clear communication, and clear outcomes. 
                Whether I'm roadmapping a product, coaching a team, or diving into data, I bring the 
                same rigor and empathy to the table.
              </p>
              <p>
                Notre Dame '14. Certified Scrum Master. 18,000+ connections who can vouch for my 
                networking alchemy. Let's build something awesome.
              </p>
            </div>
          </div>

          {/* Right column - Quick facts */}
          <div className="lg:col-span-5">
            <div className="bg-card rounded-2xl p-8 lg:p-10 border border-border">
              <h3 className="font-serif text-xl font-medium text-foreground mb-8">
                At a glance
              </h3>
              
              <dl className="space-y-6">
                <div className="flex justify-between items-start border-b border-border pb-4">
                  <dt className="text-subtle text-sm font-medium">Location</dt>
                  <dd className="text-foreground text-sm text-right">United States</dd>
                </div>
                <div className="flex justify-between items-start border-b border-border pb-4">
                  <dt className="text-subtle text-sm font-medium">Education</dt>
                  <dd className="text-foreground text-sm text-right">Notre Dame, Mendoza<br />IT, Class of 2014</dd>
                </div>
                <div className="flex justify-between items-start border-b border-border pb-4">
                  <dt className="text-subtle text-sm font-medium">Certification</dt>
                  <dd className="text-foreground text-sm text-right">Certified Scrum Master</dd>
                </div>
                <div className="flex justify-between items-start border-b border-border pb-4">
                  <dt className="text-subtle text-sm font-medium">Languages</dt>
                  <dd className="text-foreground text-sm text-right">English (Native)</dd>
                </div>
                <div className="flex justify-between items-start">
                  <dt className="text-subtle text-sm font-medium">Recognition</dt>
                  <dd className="text-foreground text-sm text-right">Vanguard Award for<br />Student Leadership</dd>
                </div>
              </dl>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
