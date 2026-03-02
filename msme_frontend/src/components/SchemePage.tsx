import { ReactNode } from "react";
import { motion } from "framer-motion";

interface SchemePageProps {
  title: string;
  subtitle: string;
  overview: string;
  benefits: string[];
  eligibility: string[];
  process: { step: string; description: string }[];
  icon: ReactNode;
}

const SchemePage = ({ title, subtitle, overview, benefits, eligibility, process, icon }: SchemePageProps) => (
  <div>
    {/* Hero */}
    <section className="gradient-bg-soft py-24 lg:py-32">
      <div className="container mx-auto px-4 lg:px-8 text-center">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
          <div className="w-16 h-16 rounded-2xl gradient-bg flex items-center justify-center mx-auto mb-6 text-primary-foreground">
            {icon}
          </div>
          <h1 className="font-display font-bold text-4xl lg:text-5xl text-foreground mb-4">{title}</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">{subtitle}</p>
        </motion.div>
      </div>
    </section>

    {/* Overview */}
    <section className="py-20 lg:py-24">
      <div className="container mx-auto px-4 lg:px-8 max-w-4xl">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <h2 className="font-display font-bold text-2xl lg:text-3xl text-foreground mb-6">Overview</h2>
          <p className="text-muted-foreground leading-relaxed text-lg">{overview}</p>
        </motion.div>
      </div>
    </section>

    {/* Benefits */}
    <section className="py-20 lg:py-24 bg-accent/30">
      <div className="container mx-auto px-4 lg:px-8 max-w-5xl">
        <h2 className="font-display font-bold text-2xl lg:text-3xl text-foreground mb-10 text-center">Key Benefits</h2>
        <div className="grid md:grid-cols-2 gap-5">
          {benefits.map((b, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
              className="bg-card rounded-2xl p-6 soft-shadow hover-lift">
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 rounded-xl gradient-bg flex items-center justify-center text-primary-foreground text-sm font-bold shrink-0">{i + 1}</div>
                <p className="text-foreground">{b}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    {/* Eligibility */}
    <section className="py-20 lg:py-24">
      <div className="container mx-auto px-4 lg:px-8 max-w-4xl">
        <h2 className="font-display font-bold text-2xl lg:text-3xl text-foreground mb-10 text-center">Eligibility Criteria</h2>
        <div className="bg-card rounded-3xl p-8 soft-shadow-lg">
          <ul className="space-y-4">
            {eligibility.map((e, i) => (
              <li key={i} className="flex items-start gap-3">
                <span className="w-2 h-2 rounded-full gradient-bg mt-2 shrink-0" />
                <span className="text-muted-foreground">{e}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>

    {/* Application Process */}
    <section className="py-20 lg:py-24 gradient-bg-soft">
      <div className="container mx-auto px-4 lg:px-8 max-w-4xl">
        <h2 className="font-display font-bold text-2xl lg:text-3xl text-foreground mb-10 text-center">Application Process</h2>
        <div className="space-y-5">
          {process.map((p, i) => (
            <motion.div key={i} initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
              className="bg-card rounded-2xl p-6 soft-shadow flex items-start gap-5">
              <div className="w-10 h-10 rounded-xl gradient-bg flex items-center justify-center text-primary-foreground font-bold shrink-0">{i + 1}</div>
              <div>
                <h3 className="font-display font-semibold text-foreground mb-1">{p.step}</h3>
                <p className="text-muted-foreground text-sm">{p.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    {/* CTA */}
    <section className="py-20 lg:py-24">
      <div className="container mx-auto px-4 lg:px-8 text-center">
        <h2 className="font-display font-bold text-2xl lg:text-3xl text-foreground mb-4">Ready to Apply?</h2>
        <p className="text-muted-foreground mb-8 max-w-lg mx-auto">Check your eligibility now and get AI-powered guidance on your application.</p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a href="/eligibility" className="px-6 py-3 gradient-bg text-primary-foreground font-semibold rounded-xl hover:opacity-90 transition-opacity">
            Check Eligibility
          </a>
          <a href="/ai-assistant" className="px-6 py-3 bg-card border border-border text-foreground font-semibold rounded-xl hover-lift">
            Talk to AI Assistant
          </a>
        </div>
      </div>
    </section>
  </div>
);

export default SchemePage;
