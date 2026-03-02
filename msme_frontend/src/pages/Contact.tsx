import { useState } from "react";
import { motion } from "framer-motion";
import { MapPin, Phone, Mail as MailIcon, Send } from "lucide-react";
import PageLayout from "@/components/layout/PageLayout";

const contactInfo = [
  { icon: MapPin, title: "Address", value: "Connaught Place, New Delhi, India 110001" },
  { icon: Phone, title: "Phone", value: "+91 11 2345 6789" },
  { icon: MailIcon, title: "Email", value: "support@creditintel.in" },
];

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  return (
    <PageLayout>
      <section className="gradient-bg-soft py-24 lg:py-32">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <h1 className="font-display font-bold text-4xl lg:text-5xl text-foreground mb-4">Contact Us</h1>
            <p className="text-lg text-muted-foreground max-w-xl mx-auto">Have questions? Our team is here to help your MSME journey.</p>
          </motion.div>
        </div>
      </section>

      <section className="py-20 lg:py-24">
        <div className="container mx-auto px-4 lg:px-8 max-w-5xl">
          <div className="grid lg:grid-cols-5 gap-10">
            <div className="lg:col-span-2 space-y-5">
              {contactInfo.map((c, i) => (
                <motion.div key={i} initial={{ opacity: 0, x: -15 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                  className="bg-card rounded-2xl p-6 soft-shadow border border-border/30">
                  <div className="w-10 h-10 rounded-xl gradient-bg-soft flex items-center justify-center mb-3">
                    <c.icon className="w-5 h-5 text-accent-foreground" />
                  </div>
                  <h3 className="font-display font-semibold text-foreground text-sm mb-1">{c.title}</h3>
                  <p className="text-sm text-muted-foreground">{c.value}</p>
                </motion.div>
              ))}
            </div>
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="lg:col-span-3">
              <div className="bg-card rounded-3xl p-8 soft-shadow-lg border border-border/30">
                <h2 className="font-display font-bold text-xl text-foreground mb-6">Send a Message</h2>
                <form onSubmit={(e) => e.preventDefault()} className="space-y-5">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-1.5">Name</label>
                    <input type="text" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} placeholder="Your full name"
                      className="w-full px-4 py-3 bg-background border border-border rounded-xl text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring/50 transition" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-1.5">Email</label>
                    <input type="email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} placeholder="you@company.com"
                      className="w-full px-4 py-3 bg-background border border-border rounded-xl text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring/50 transition" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-1.5">Message</label>
                    <textarea value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} placeholder="How can we help?" rows={5}
                      className="w-full px-4 py-3 bg-background border border-border rounded-xl text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring/50 transition resize-none" />
                  </div>
                  <button type="submit" className="w-full py-3 gradient-bg text-primary-foreground font-semibold rounded-xl hover:opacity-90 transition-opacity flex items-center justify-center gap-2 text-sm">
                    Send Message <Send className="w-4 h-4" />
                  </button>
                </form>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default Contact;
