import { useState } from "react";
import { motion } from "framer-motion";
import { TrendingUp, IndianRupee, CreditCard, FileText, Lightbulb } from "lucide-react";
import { BarChart, Bar, XAxis, YAxis, Tooltip as RechartsTooltip, ResponsiveContainer, Cell } from "recharts";
import Navbar from "@/components/Navbar";
import ApprovalCircle from "@/components/ApprovalCircle";
import RiskBadge from "@/components/RiskBadge";
import SchemeCard from "@/components/SchemeCard";
import SchemeDetailModal from "@/components/SchemeDetailModal";
import RiskExplanationModal from "@/components/RiskExplanationModal";
import FloatingActions from "@/components/FloatingActions";
import InfoTooltip from "@/components/InfoTooltip";
import { mockSchemes, mockImprovements, mockChartData, mockUserProfile } from "@/data/mockData";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle } from "lucide-react";

const statCards = [
  { label: "Credit Score", value: "680", icon: CreditCard, tip: "A score above 700 increases loan approval chances significantly." },
  { label: "Annual Revenue", value: "₹12L", icon: IndianRupee, tip: "Higher revenue demonstrates business viability to lenders." },
  { label: "GST Filing", value: "18 mo", icon: FileText, tip: "Continuous GST filing for 12+ months improves eligibility." },
  { label: "Eligible Schemes", value: "3", icon: TrendingUp, tip: "Number of government schemes matching your profile." },
];

const Dashboard = () => {
  const [selectedScheme, setSelectedScheme] = useState<typeof mockSchemes[0] | null>(null);
  const [riskModalOpen, setRiskModalOpen] = useState(false);
  const [improvementModal, setImprovementModal] = useState<typeof mockImprovements[0] | null>(null);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Breadcrumb */}
      <div className="container pt-4">
        <nav className="text-xs text-muted-foreground" aria-label="Breadcrumb">
          <Link to="/" className="hover:text-foreground">Home</Link>
          <span className="mx-1.5">/</span>
          <span className="text-foreground font-medium">Dashboard</span>
        </nav>
      </div>

      <main className="container py-6 space-y-6">
        {/* Welcome */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div>
            <h1 className="font-display text-2xl font-bold text-foreground">Welcome, {mockUserProfile.name}</h1>
            <p className="text-sm text-muted-foreground">{mockUserProfile.business} • {mockUserProfile.category}</p>
          </div>
          <Link to="/form">
            <Button className="gradient-primary text-primary-foreground btn-ripple">
              Update Details <ArrowRight className="h-4 w-4 ml-1.5" />
            </Button>
          </Link>
        </div>

        {/* Stat Cards */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {statCards.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.08 }}
              className="rounded-xl border border-border bg-card p-4 card-shadow hover:card-shadow-hover transition-shadow"
            >
              <div className="flex items-center justify-between">
                <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-accent">
                  <s.icon className="h-4 w-4 text-accent-foreground" />
                </div>
                <InfoTooltip content={s.tip} />
              </div>
              <p className="mt-3 text-2xl font-bold font-display text-foreground">{s.value}</p>
              <p className="text-xs text-muted-foreground">{s.label}</p>
            </motion.div>
          ))}
        </div>

        {/* Main Grid */}
        <div className="grid lg:grid-cols-3 gap-6">
          {/* Approval + Risk */}
          <div className="rounded-xl border border-border bg-card p-6 card-shadow flex flex-col items-center">
            <h2 className="font-display font-semibold text-foreground mb-4">Loan Approval Probability</h2>
            <ApprovalCircle percentage={mockUserProfile.loanApprovalProbability} />
            <div className="mt-4">
              <RiskBadge level={mockUserProfile.riskLevel} onClick={() => setRiskModalOpen(true)} />
            </div>
          </div>

          {/* Chart */}
          <div className="lg:col-span-2 rounded-xl border border-border bg-card p-6 card-shadow">
            <h2 className="font-display font-semibold text-foreground mb-4">Financial Overview</h2>
            <ResponsiveContainer width="100%" height={220}>
              <BarChart data={mockChartData} barSize={40}>
                <XAxis dataKey="name" tick={{ fontSize: 12 }} stroke="hsl(var(--muted-foreground))" />
                <YAxis tick={{ fontSize: 12 }} stroke="hsl(var(--muted-foreground))" tickFormatter={(v) => `₹${(v / 100000).toFixed(0)}L`} />
                <RechartsTooltip
                  contentStyle={{ borderRadius: 8, border: "1px solid hsl(var(--border))", background: "hsl(var(--card))" }}
                  formatter={(value: number) => [`₹${(value / 100000).toFixed(1)}L`, ""]}
                />
                <Bar dataKey="value" radius={[6, 6, 0, 0]}>
                  {mockChartData.map((entry) => (
                    <Cell key={entry.name} fill={entry.fill} />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Schemes */}
        <div>
          <h2 className="font-display text-lg font-semibold text-foreground mb-4">Eligible Government Schemes</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {mockSchemes.map((s) => (
              <SchemeCard key={s.id} scheme={s} onClick={() => setSelectedScheme(s)} />
            ))}
          </div>
        </div>

        {/* Improvements */}
        <div>
          <h2 className="font-display text-lg font-semibold text-foreground mb-4 flex items-center gap-2">
            <Lightbulb className="h-5 w-5 text-warning" /> Improvement Suggestions
          </h2>
          <div className="grid sm:grid-cols-2 gap-4">
            {mockImprovements.map((imp) => (
              <motion.button
                key={imp.id}
                whileHover={{ y: -2 }}
                onClick={() => setImprovementModal(imp)}
                className="w-full text-left rounded-xl border border-border bg-card p-5 card-shadow hover:card-shadow-hover transition-shadow"
              >
                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-semibold text-sm text-foreground">{imp.title}</h3>
                  <span className={`text-xs font-medium px-2 py-0.5 rounded-full ${imp.impact === "High" ? "bg-destructive/10 text-destructive" : "bg-warning/10 text-warning"}`}>
                    {imp.impact} Impact
                  </span>
                </div>
                <p className="text-xs text-muted-foreground line-clamp-2">{imp.description}</p>
              </motion.button>
            ))}
          </div>
        </div>
      </main>

      {/* Modals */}
      <SchemeDetailModal scheme={selectedScheme} open={!!selectedScheme} onClose={() => setSelectedScheme(null)} />
      <RiskExplanationModal open={riskModalOpen} onClose={() => setRiskModalOpen(false)} riskLevel={mockUserProfile.riskLevel} />
      <Dialog open={!!improvementModal} onOpenChange={() => setImprovementModal(null)}>
        <DialogContent className="max-w-md">
          <DialogHeader>
            <DialogTitle className="font-display">{improvementModal?.title}</DialogTitle>
            <DialogDescription>{improvementModal?.description}</DialogDescription>
          </DialogHeader>
          <p className="text-sm text-muted-foreground leading-relaxed">{improvementModal?.details}</p>
        </DialogContent>
      </Dialog>

      <FloatingActions />
    </div>
  );
};

export default Dashboard;
