import { Link } from "react-router-dom";

const Footer = () => (
  <footer className="bg-foreground text-primary-foreground/70 pt-16 pb-8">
    <div className="container mx-auto px-4 lg:px-8">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
        <div className="col-span-2 md:col-span-1">
          <div className="flex items-center gap-2 mb-4">
            <div className="w-8 h-8 rounded-lg gradient-bg flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-sm">CI</span>
            </div>
            <span className="font-display font-bold text-lg text-primary-foreground">CreditIntel</span>
          </div>
          <p className="text-sm leading-relaxed">AI-powered credit intelligence for Indian MSMEs. Discover schemes, check eligibility, and grow your business.</p>
        </div>
        <div>
          <h4 className="font-display font-semibold text-primary-foreground mb-4 text-sm">Schemes</h4>
          <div className="space-y-2.5">
            {["MSME Loans", "Subsidy Programs", "Mudra Yojana", "Startup India", "Credit Guarantee", "Stand-Up India"].map((s, i) => (
              <Link key={i} to={`/schemes/${s.toLowerCase().replace(/ /g, "-")}`} className="block text-sm hover:text-primary-foreground transition-colors">{s}</Link>
            ))}
          </div>
        </div>
        <div>
          <h4 className="font-display font-semibold text-primary-foreground mb-4 text-sm">Platform</h4>
          <div className="space-y-2.5">
            <Link to="/eligibility" className="block text-sm hover:text-primary-foreground transition-colors">Eligibility Check</Link>
            <Link to="/ai-assistant" className="block text-sm hover:text-primary-foreground transition-colors">AI Assistant</Link>
            <Link to="/dashboard" className="block text-sm hover:text-primary-foreground transition-colors">Dashboard</Link>
            <Link to="/about" className="block text-sm hover:text-primary-foreground transition-colors">About Us</Link>
          </div>
        </div>
        <div>
          <h4 className="font-display font-semibold text-primary-foreground mb-4 text-sm">Support</h4>
          <div className="space-y-2.5">
            <Link to="/contact" className="block text-sm hover:text-primary-foreground transition-colors">Contact Us</Link>
            <a href="#" className="block text-sm hover:text-primary-foreground transition-colors">FAQs</a>
            <a href="#" className="block text-sm hover:text-primary-foreground transition-colors">Privacy Policy</a>
            <a href="#" className="block text-sm hover:text-primary-foreground transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
      <div className="border-t border-primary-foreground/10 pt-6 text-center text-xs">
        © {new Date().getFullYear()} MSME Credit Intelligence Platform. All rights reserved.
      </div>
    </div>
  </footer>
);

export default Footer;
