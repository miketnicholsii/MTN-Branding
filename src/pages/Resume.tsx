import { Download, Linkedin, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

const Resume = () => {
  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-secondary print:bg-white">
      {/* Navigation - hidden when printing */}
      <div className="fixed top-6 left-6 z-50 print:hidden">
        <Link
          to="/"
          className="inline-flex items-center gap-2 px-5 py-2.5 glass-pill rounded-full text-forest-sage text-sm font-medium hover:text-forest-deep hover:shadow-md transition-all duration-300"
        >
          <ArrowLeft size={16} />
          Back to Site
        </Link>
      </div>

      {/* Print button - hidden when printing */}
      <div className="fixed top-6 right-6 z-50 print:hidden">
        <button
          onClick={handlePrint}
          className="inline-flex items-center gap-2 px-6 py-3 bg-forest-deep text-white font-semibold rounded-full hover:bg-forest-dark transition-all shadow-lg hover:shadow-xl hover:shadow-forest-deep/20"
        >
          <Download size={18} />
          Save as PDF
        </button>
      </div>

      {/* Resume Content */}
      <div className="max-w-[8.5in] mx-auto p-8 md:p-12 print:p-8 print:max-w-none pt-24 print:pt-8">
        <div className="glass-card print:bg-white rounded-3xl print:rounded-none p-8 md:p-12 print:p-0 shadow-2xl print:shadow-none">
          
          {/* Header */}
          <header className="border-b border-forest-sage/20 print:border-gray-200 pb-8 mb-8">
            <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
              <div>
                <h1 className="text-4xl md:text-5xl font-bold text-forest-deep print:text-gray-900 mb-2 flex items-baseline gap-2">
                  Mike T. Nichols <span className="text-orange-gold print:text-orange-600 text-2xl font-semibold tracking-wide" style={{ fontFamily: 'Georgia, "Times New Roman", serif' }}>II</span>
                </h1>
                <p className="text-xl text-orange-gold print:text-orange-600 font-medium">
                  Product Leader · Strategist · Builder
                </p>
              </div>
              <div className="flex flex-col gap-2 text-sm text-forest-sage print:text-gray-600">
                <a href="https://www.linkedin.com/in/miketnicholsii/" className="flex items-center gap-2 hover:text-forest-deep print:hover:text-gray-900 transition-colors">
                  <Linkedin size={14} className="text-orange-gold" />
                  linkedin.com/in/miketnicholsii
                </a>
              </div>
            </div>
          </header>

          {/* Summary */}
          <section className="mb-8">
            <h2 className="text-lg font-bold text-orange-gold print:text-orange-600 uppercase tracking-[0.15em] mb-4">Summary</h2>
            <p className="text-forest-deep/80 print:text-gray-700 leading-relaxed">
              Product and strategy leader with 10+ years of experience across fintech, enterprise software, and consulting. 
              Expert in translating ambiguity into action, leading cross-functional teams to ship complex platforms, 
              and delivering measurable results. Passionate about user-centered design, data-driven decisions, and building high-performance teams.
            </p>
          </section>

          {/* Experience */}
          <section className="mb-8">
            <h2 className="text-lg font-bold text-orange-gold print:text-orange-600 uppercase tracking-[0.15em] mb-6">Experience</h2>
            
            <div className="space-y-6">
              {/* NEKO */}
              <div className="border-l-2 border-orange-gold print:border-orange-600 pl-6">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-1 mb-2">
                  <h3 className="text-xl font-bold text-forest-deep print:text-gray-900">NÈKO</h3>
                  <span className="text-sm text-forest-sage print:text-gray-500">2022 — Present</span>
                </div>
                <p className="text-orange-gold print:text-orange-600 font-medium mb-2">Strategist</p>
                <p className="text-forest-deep/80 print:text-gray-700 text-sm leading-relaxed">
                  Leading strategic initiatives and product development at a forward-thinking consultancy. 
                  Driving growth strategy, operational excellence, and client engagement across diverse industries.
                </p>
              </div>

              {/* Worldpay */}
              <div className="border-l-2 border-forest-sage/30 print:border-gray-200 pl-6">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-1 mb-2">
                  <h3 className="text-xl font-bold text-forest-deep print:text-gray-900">Worldpay for Platforms</h3>
                  <span className="text-sm text-forest-sage print:text-gray-500">2021 — 2022</span>
                </div>
                <p className="text-orange-gold print:text-orange-600 font-medium mb-2">Senior Product Manager</p>
                <p className="text-forest-deep/80 print:text-gray-700 text-sm leading-relaxed">
                  Led product management with a focus on UX. Spearheaded comprehensive rebranding strategy. 
                  Managed platform integrations and stakeholder relationships across global markets.
                </p>
              </div>

              {/* Slalom */}
              <div className="border-l-2 border-forest-sage/30 print:border-gray-200 pl-6">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-1 mb-2">
                  <h3 className="text-xl font-bold text-forest-deep print:text-gray-900">Slalom</h3>
                  <span className="text-sm text-forest-sage print:text-gray-500">2020 — 2021</span>
                </div>
                <p className="text-orange-gold print:text-orange-600 font-medium mb-2">Consultant</p>
                <p className="text-forest-deep/80 print:text-gray-700 text-sm leading-relaxed">
                  Managed $1M+ project budgets, designed innovative processes for major telecom. 
                  Led digital transformation initiatives and process optimization for enterprise clients.
                </p>
              </div>

              {/* Equifax */}
              <div className="border-l-2 border-forest-sage/30 print:border-gray-200 pl-6">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-1 mb-2">
                  <h3 className="text-xl font-bold text-forest-deep print:text-gray-900">Equifax</h3>
                  <span className="text-sm text-forest-sage print:text-gray-500">2016 — 2019</span>
                </div>
                <p className="text-orange-gold print:text-orange-600 font-medium mb-2">Senior Product Manager</p>
                <p className="text-forest-deep/80 print:text-gray-700 text-sm leading-relaxed">
                  Led identity protection initiative. Launched products achieving 115% attainment. 
                  Managed product lifecycle from ideation to launch for consumer-facing security products.
                </p>
              </div>

              {/* Mercedes */}
              <div className="border-l-2 border-forest-sage/30 print:border-gray-200 pl-6">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-1 mb-2">
                  <h3 className="text-xl font-bold text-forest-deep print:text-gray-900">Mercedes-Benz USA</h3>
                  <span className="text-sm text-forest-sage print:text-gray-500">2015 — 2016</span>
                </div>
                <p className="text-orange-gold print:text-orange-600 font-medium mb-2">Business Analyst</p>
                <p className="text-forest-deep/80 print:text-gray-700 text-sm leading-relaxed">
                  Transformed dealer performance software deployed across 370 dealerships. 
                  Analyzed business operations and implemented data-driven improvements.
                </p>
              </div>

              {/* Target */}
              <div className="border-l-2 border-forest-sage/30 print:border-gray-200 pl-6">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-1 mb-2">
                  <h3 className="text-xl font-bold text-forest-deep print:text-gray-900">Target</h3>
                  <span className="text-sm text-forest-sage print:text-gray-500">2014 — 2015</span>
                </div>
                <p className="text-orange-gold print:text-orange-600 font-medium mb-2">Scrum Master & Agile Coach</p>
                <p className="text-forest-deep/80 print:text-gray-700 text-sm leading-relaxed">
                  Spearheaded the company's transition to Agile, coaching 16 employees. 
                  Facilitated sprint planning, retrospectives, and continuous improvement initiatives.
                </p>
              </div>
            </div>
          </section>

          {/* Skills */}
          <section className="mb-8">
            <h2 className="text-lg font-bold text-orange-gold print:text-orange-600 uppercase tracking-[0.15em] mb-4">Core Competencies</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
              {[
                "Product Strategy",
                "Agile Leadership",
                "Systems Thinking",
                "UX Collaboration",
                "Go-to-Market",
                "Process Optimization",
                "Stakeholder Management",
                "Data Analysis",
                "Team Coaching",
              ].map((skill) => (
                <div
                  key={skill}
                  className="px-4 py-2 bg-forest-deep/5 print:bg-gray-100 border border-forest-sage/20 print:border-gray-200 rounded-xl text-sm text-forest-deep/80 print:text-gray-700 font-medium"
                >
                  {skill}
                </div>
              ))}
            </div>
          </section>

          {/* Tools */}
          <section className="mb-8">
            <h2 className="text-lg font-bold text-orange-gold print:text-orange-600 uppercase tracking-[0.15em] mb-4">Tools & Frameworks</h2>
            <p className="text-forest-deep/80 print:text-gray-700 text-sm">
              Jira & Confluence · Scrum & Kanban · UX Prototyping · Data Analysis · Technical Documentation · Stakeholder Communications
            </p>
          </section>

          {/* Education */}
          <section>
            <h2 className="text-lg font-bold text-orange-gold print:text-orange-600 uppercase tracking-[0.15em] mb-4">Education & Certifications</h2>
            <div className="space-y-3">
              <div>
                <h3 className="text-lg font-bold text-forest-deep print:text-gray-900">University of Notre Dame</h3>
                <p className="text-forest-sage print:text-gray-700 text-sm">Class of 2014</p>
              </div>
              <div className="flex flex-wrap gap-3">
                <span className="px-4 py-2 bg-forest-deep/5 print:bg-gray-100 border border-forest-sage/20 print:border-gray-200 rounded-xl text-sm text-forest-deep/80 print:text-gray-700 font-medium">
                  Certified Scrum Master
                </span>
                <span className="px-4 py-2 bg-forest-deep/5 print:bg-gray-100 border border-forest-sage/20 print:border-gray-200 rounded-xl text-sm text-forest-deep/80 print:text-gray-700 font-medium">
                  Vanguard Award Winner
                </span>
              </div>
            </div>
          </section>

        </div>
      </div>

      {/* Print styles */}
      <style>{`
        @media print {
          @page {
            size: letter;
            margin: 0.5in;
          }
          body {
            -webkit-print-color-adjust: exact;
            print-color-adjust: exact;
          }
        }
      `}</style>
    </div>
  );
};

export default Resume;
