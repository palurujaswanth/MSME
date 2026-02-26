import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Shield, BarChart3, FileCheck, Zap, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroBg from "@/assets/hero-bg.jpg";

const features = [
  { icon: Shield, title: "Eligibility Check", desc: "Instantly check your eligibility for 50+ government schemes." },
  { icon: BarChart3, title: "Loan Prediction", desc: "AI-powered prediction of your loan approval probability." },
  { icon: FileCheck, title: "Smart Reports", desc: "Download detailed eligibility reports for lenders." },
  { icon: Zap, title: "Improvement Tips", desc: "Actionable suggestions to boost your credit profile." },
];

const steps = [
  "Register your MSME details",
  "Enter financial information",
  "Get instant eligibility results",
  "Apply to matched schemes",
];

const Landing = () => (
  <div className="min-h-screen bg-background">
    {/* Navbar */}
    <header className="sticky top-0 z-50 border-b border-border bg-card/80 backdrop-blur-md">
      <div className="container flex h-14 items-center justify-between">
        <Link to="/" className="flex items-center gap-2 font-display font-bold text-lg text-foreground">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg gradient-primary">
            <BarChart3 className="h-4 w-4 text-primary-foreground" />
          </div>
          MSME Credit
        </Link>
        <div className="flex gap-2">
          <Link to="/login"><Button variant="ghost" className="text-sm">Login</Button></Link>
          <Link to="/form"><Button className="gradient-primary text-primary-foreground text-sm btn-ripple">Get Started</Button></Link>
        </div>
      </div>
    </header>

 {/* Hero */}
<section className="relative overflow-hidden">
  {/* Background – STARTS BELOW NAVBAR */}
  <div className="absolute inset-x-0 top-14 bottom-0 z-0 pointer-events-none">
    <img
      src={heroBg}
      alt=""
      className="h-full w-full object-cover opacity-20"
    />
    <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-background/85 to-background" />
  </div>

  {/* Content */}
  <div className="container relative z-10 py-20 md:py-32 text-center">
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <span className="inline-flex items-center gap-1.5 rounded-full bg-accent px-3 py-1 text-xs font-medium text-accent-foreground mb-6">
        <Zap className="h-3 w-3" />
      </span>

      <h1 className="font-display text-4xl md:text-6xl font-bold leading-tight text-foreground max-w-3xl mx-auto">
        MSME Credit Eligibility &
        Subsidy Recommender
      </h1>

      <p className="mt-4 text-lg text-muted-foreground max-w-xl mx-auto">
        Check eligibility for government schemes, predict loan approval, and get
        personalized improvement suggestions — all in one place.
      </p>

      <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
        <Link to="/form">
          <Button
            size="lg"
            className="gradient-primary text-primary-foreground btn-ripple px-8"
          >
            Check Eligibility <ArrowRight className="h-4 w-4 ml-2" />
          </Button>
        </Link>

        <Link to="/dashboard">
          <Button size="lg" variant="outline" className="px-8">
            View Demo Dashboard
          </Button>
        </Link>
      </div>
    </motion.div>
  </div>
</section>-+

    {/* How It Works */}
    <section className="bg-muted/50 py-16">
      <div className="container">
        <h2 className="font-display text-2xl md:text-3xl font-bold text-center text-foreground">How It Works</h2>
        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-3xl mx-auto lg:max-w-none">
          {steps.map((step, i) => (
            <div key={step} className="flex items-start gap-3">
              <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full gradient-primary text-primary-foreground text-sm font-bold">
                {i + 1}
              </div>
              <p className="text-sm text-foreground font-medium pt-1">{step}</p>
            </div>
          ))}
        </div>
        <div className="text-center mt-10">
          <Link to="/form">
            <Button className="gradient-primary text-primary-foreground btn-ripple">
              Start Now <ArrowRight className="h-4 w-4 ml-2" />
            </Button>
          </Link>
        </div>
      </div>
    </section>

    {/* Footer */}
    <footer className="border-t border-border py-8 text-center text-sm text-muted-foreground">
      <div className="container">
        © 2026 MSME Credit Eligibility & Subsidy Recommender. Built for India's MSMEs.
      </div>
    </footer>
  </div>
);

export default Landing;
