import { motion } from "framer-motion";
import { Target, Eye, Heart, Zap } from "lucide-react";
import { Link } from "react-router-dom";
import PageLayout from "@/components/layout/PageLayout";

const features = [
  { icon: Zap, title: "AI-Powered Matching", desc: "Our algorithms match MSMEs with the most relevant government schemes instantly." },
  { icon: Target, title: "Eligibility Analysis", desc: "Get real-time eligibility checks across 50+ schemes with detailed guidance." },
  { icon: Eye, title: "Transparent Process", desc: "Clear application steps, document checklists, and status tracking." },
  { icon: Heart, title: "MSME-First Design", desc: "Built specifically for the challenges Indian micro and small businesses face." },
];

const About = () => (
  <PageLayout>
    <section className="gradient-bg-soft py-24 lg:py-32">
      <div className="container mx-auto px-4 lg:px-8 text-center">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
          <h1 className="font-display font-bold text-4xl lg:text-5xl text-foreground mb-4">About CreditIntel</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">Empowering Indian MSMEs with intelligent access to government funding.</p>
        </motion.div>
      </div>
    </section>

    <section className="py-20 lg:py-24">
      <div className="container mx-auto px-4 lg:px-8 max-w-4xl">
        <div className="grid md:grid-cols-2 gap-12">
          <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
            <h2 className="font-display font-bold text-2xl text-foreground mb-4">Our Mission</h2>
            <p className="text-muted-foreground leading-relaxed">To democratize access to government financial support for every MSME in India. We believe no business should miss out on funding simply because they didn't know about it or found the process too complex.</p>
          </motion.div>
          <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
            <h2 className="font-display font-bold text-2xl text-foreground mb-4">Our Vision</h2>
            <p className="text-muted-foreground leading-relaxed">A future where every Indian MSME has instant, AI-guided access to the government schemes they deserve — enabling 63 million businesses to grow, create jobs, and strengthen the economy.</p>
          </motion.div>
        </div>
      </div>
    </section>

    <section className="py-20 lg:py-24 bg-accent/30">
      <div className="container mx-auto px-4 lg:px-8 max-w-5xl">
        <h2 className="font-display font-bold text-2xl lg:text-3xl text-foreground mb-4 text-center">Why MSMEs Need This</h2>
        <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-12">Indian MSMEs contribute 30% of GDP yet most lack awareness of schemes that could transform their growth trajectory.</p>
        <div className="grid sm:grid-cols-2 gap-6">
          {features.map((f, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
              className="bg-card rounded-3xl p-7 soft-shadow hover-lift">
              <div className="w-12 h-12 rounded-2xl gradient-bg-soft flex items-center justify-center mb-4">
                <f.icon className="w-6 h-6 text-accent-foreground" />
              </div>
              <h3 className="font-display font-semibold text-foreground mb-2">{f.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    <section className="py-20 lg:py-24">
      <div className="container mx-auto px-4 lg:px-8 text-center">
        <div className="gradient-bg rounded-3xl p-10 lg:p-16">
          <h2 className="font-display font-bold text-3xl text-primary-foreground mb-4">Join Thousands of MSMEs</h2>
          <p className="text-primary-foreground/80 max-w-lg mx-auto mb-8">Start your journey towards government-backed funding today.</p>
          <Link to="/eligibility" className="inline-flex px-8 py-4 bg-card text-foreground font-semibold rounded-xl hover-lift text-sm">
            Check Your Eligibility
          </Link>
        </div>
      </div>
    </section>
  </PageLayout>
);

export default About;
