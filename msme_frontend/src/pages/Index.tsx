import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles, Building2, Banknote, Landmark, Rocket, ShieldCheck, Users } from "lucide-react";
import PageLayout from "@/components/layout/PageLayout";
import heroIllustration from "@/assets/hero-illustration.png";

const schemes = [
  { title: "MSME Loan Schemes", desc: "Access government-backed loans tailored for micro, small & medium enterprises.", icon: Building2, href: "/schemes/msme-loans" },
  { title: "Subsidy Programs", desc: "Discover subsidies that reduce costs and accelerate your business growth.", icon: Banknote, href: "/schemes/subsidy-programs" },
  { title: "Mudra Yojana", desc: "Micro-funding for non-corporate small businesses up to ₹10 lakh.", icon: Landmark, href: "/schemes/mudra-yojana" },
  { title: "Startup India", desc: "Tax benefits, funding support, and simplified compliance for startups.", icon: Rocket, href: "/schemes/startup-india" },
  { title: "Credit Guarantee", desc: "Collateral-free credit up to ₹5 crore through CGTMSE guarantee.", icon: ShieldCheck, href: "/schemes/credit-guarantee" },
  { title: "Stand-Up India", desc: "Loans from ₹10 lakh to ₹1 crore for SC/ST and women entrepreneurs.", icon: Users, href: "/schemes/stand-up-india" },
];

const Index = () => (
  <PageLayout>
    {/* Hero */}
    <section className="relative overflow-hidden py-20 lg:py-32">
      <div className="absolute inset-0 gradient-bg-soft opacity-60" />
      <div className="container mx-auto px-4 lg:px-8 relative">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-accent text-accent-foreground text-sm font-medium mb-6">
              <Sparkles className="w-4 h-4" /> AI-Powered Credit Intelligence
            </div>
            <h1 className="font-display font-extrabold text-4xl md:text-5xl lg:text-6xl text-foreground leading-tight mb-6">
              Unlock <span className="gradient-text">Government Funding</span> for Your MSME
            </h1>
            <p className="text-lg text-muted-foreground mb-8 max-w-lg leading-relaxed">
              Discover 50+ government schemes, check eligibility instantly, and get AI-guided assistance to secure funding for your business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/eligibility" className="inline-flex items-center justify-center gap-2 px-6 py-3.5 gradient-bg text-primary-foreground font-semibold rounded-xl hover:opacity-90 transition-opacity text-sm">
                Check Eligibility <ArrowRight className="w-4 h-4" />
              </Link>
              <Link to="/ai-assistant" className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-card border border-border text-foreground font-semibold rounded-xl hover-lift text-sm">
                Talk to AI Assistant
              </Link>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.7, delay: 0.2 }} className="relative flex justify-center">
            <div className="absolute inset-0 gradient-bg rounded-full blur-3xl opacity-10 scale-75" />
            <img src={heroIllustration} alt="Credit Intelligence Platform" className="relative z-10 w-full max-w-md animate-float" />
            {/* Floating card */}
            <motion.div
              initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.8 }}
              className="absolute bottom-4 right-0 lg:-right-4 bg-card rounded-2xl p-4 soft-shadow-lg border border-border/50 z-20"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl gradient-bg flex items-center justify-center text-primary-foreground font-bold text-sm">50+</div>
                <div>
                  <p className="font-display font-semibold text-foreground text-sm">Supported Schemes</p>
                  <p className="text-xs text-muted-foreground">Government verified</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>

    {/* Schemes Grid */}
    <section className="py-20 lg:py-28">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-14">
          <h2 className="font-display font-bold text-3xl lg:text-4xl text-foreground mb-4">Explore Targeted Schemes</h2>
          <p className="text-muted-foreground max-w-xl mx-auto">Browse government-backed financial programs designed specifically for Indian MSMEs.</p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {schemes.map((s, i) => (
            <motion.div key={s.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }}>
              <Link to={s.href} className="block bg-card rounded-3xl p-7 soft-shadow hover-lift border border-border/30 group h-full">
                <div className="w-12 h-12 rounded-2xl gradient-bg-soft flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                  <s.icon className="w-6 h-6 text-accent-foreground" />
                </div>
                <h3 className="font-display font-semibold text-lg text-foreground mb-2">{s.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    {/* Stats */}
    <section className="py-20 gradient-bg-soft">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {[
            { value: "50+", label: "Government Schemes" },
            { value: "10K+", label: "MSMEs Assisted" },
            { value: "₹500Cr+", label: "Credit Facilitated" },
            { value: "95%", label: "Eligibility Accuracy" },
          ].map((stat, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}>
              <p className="font-display font-extrabold text-3xl lg:text-4xl gradient-text mb-2">{stat.value}</p>
              <p className="text-sm text-muted-foreground">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    {/* CTA */}
    <section className="py-20 lg:py-28">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="gradient-bg rounded-3xl p-10 lg:p-16 text-center">
          <h2 className="font-display font-bold text-3xl lg:text-4xl text-primary-foreground mb-4">Ready to Grow Your Business?</h2>
          <p className="text-primary-foreground/80 max-w-lg mx-auto mb-8">Let our AI analyze your profile and match you with the perfect government schemes.</p>
          <Link to="/eligibility" className="inline-flex items-center gap-2 px-8 py-4 bg-card text-foreground font-semibold rounded-xl hover-lift text-sm">
            Get Started Free <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  </PageLayout>
);

export default Index;
