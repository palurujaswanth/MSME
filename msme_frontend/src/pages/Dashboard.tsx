import { motion } from "framer-motion";
import { User, FileCheck, Star, TrendingUp, BarChart3, BookOpen } from "lucide-react";
import PageLayout from "@/components/layout/PageLayout";
import { Link } from "react-router-dom";

const recommendedSchemes = [
  { name: "Mudra Yojana - Shishu", match: 92, status: "High Match" },
  { name: "CGTMSE Guarantee", match: 87, status: "High Match" },
  { name: "PMEGP Scheme", match: 74, status: "Medium Match" },
  { name: "Stand-Up India", match: 61, status: "Medium Match" },
];

const Dashboard = () => (
  <PageLayout>
    <div className="py-8 lg:py-12">
      <div className="container mx-auto px-4 lg:px-8 max-w-6xl">
        {/* Welcome */}
        <motion.div initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} className="mb-8">
          <h1 className="font-display font-bold text-2xl lg:text-3xl text-foreground">Welcome back, Rajesh 👋</h1>
          <p className="text-muted-foreground mt-1">Here's your credit intelligence overview.</p>
        </motion.div>

        {/* Top cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-8">
          {[
            { icon: FileCheck, label: "Eligible Schemes", value: "12", color: "text-accent-foreground" },
            { icon: TrendingUp, label: "Approval Probability", value: "78%", color: "text-success" },
            { icon: BarChart3, label: "Credit Score", value: "720", color: "text-info" },
            { icon: BookOpen, label: "Applications", value: "3", color: "text-warning" },
          ].map((card, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.08 }}
              className="bg-card rounded-2xl p-6 soft-shadow border border-border/30">
              <card.icon className={`w-5 h-5 ${card.color} mb-3`} />
              <p className="text-sm text-muted-foreground">{card.label}</p>
              <p className="font-display font-bold text-2xl text-foreground">{card.value}</p>
            </motion.div>
          ))}
        </div>

        <div className="grid lg:grid-cols-3 gap-6">
          {/* Recommended Schemes */}
          <motion.div initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }} className="lg:col-span-2">
            <div className="bg-card rounded-3xl p-7 soft-shadow-lg border border-border/30">
              <h2 className="font-display font-semibold text-lg text-foreground mb-5">Recommended Schemes</h2>
              <div className="space-y-4">
                {recommendedSchemes.map((s, i) => (
                  <div key={i} className="flex items-center justify-between p-4 bg-background rounded-2xl">
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 rounded-xl gradient-bg-soft flex items-center justify-center">
                        <Star className="w-5 h-5 text-accent-foreground" />
                      </div>
                      <div>
                        <p className="font-medium text-foreground text-sm">{s.name}</p>
                        <p className="text-xs text-muted-foreground">{s.status}</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="font-display font-bold text-foreground">{s.match}%</p>
                      <div className="w-20 h-1.5 bg-muted rounded-full mt-1">
                        <div className="h-full gradient-bg rounded-full" style={{ width: `${s.match}%` }} />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <Link to="/eligibility" className="block mt-5 text-center text-sm text-accent-foreground font-medium hover:underline">
                View All Matches →
              </Link>
            </div>
          </motion.div>

          {/* Profile Summary */}
          <motion.div initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }}>
            <div className="bg-card rounded-3xl p-7 soft-shadow-lg border border-border/30">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-2xl gradient-bg flex items-center justify-center">
                  <User className="w-6 h-6 text-primary-foreground" />
                </div>
                <div>
                  <p className="font-display font-semibold text-foreground">Rajesh Kumar</p>
                  <p className="text-xs text-muted-foreground">Manufacturing • Mumbai</p>
                </div>
              </div>
              <div className="space-y-4">
                {[
                  { label: "Business Type", value: "Micro Enterprise" },
                  { label: "Annual Turnover", value: "₹45 Lakhs" },
                  { label: "Employees", value: "12" },
                  { label: "UDYAM Registered", value: "Yes" },
                  { label: "Years in Business", value: "4 years" },
                ].map((item, i) => (
                  <div key={i} className="flex justify-between text-sm">
                    <span className="text-muted-foreground">{item.label}</span>
                    <span className="font-medium text-foreground">{item.value}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  </PageLayout>
);

export default Dashboard;
