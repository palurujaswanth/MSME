import { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Download, FileText, Lightbulb, ArrowRight, CheckCircle } from "lucide-react";
import { BarChart, Bar, XAxis, YAxis, Tooltip as RechartsTooltip, ResponsiveContainer, Cell } from "recharts";
import Navbar from "@/components/Navbar";
import ApprovalCircle from "@/components/ApprovalCircle";
import RiskBadge from "@/components/RiskBadge";
import SchemeCard from "@/components/SchemeCard";
import SchemeDetailModal from "@/components/SchemeDetailModal";
import RiskExplanationModal from "@/components/RiskExplanationModal";
import FloatingActions from "@/components/FloatingActions";
import { mockSchemes, mockImprovements, mockChartData, mockUserProfile } from "@/data/mockData";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { useToast } from "@/hooks/use-toast";

const Results = () => {
  const [selectedScheme, setSelectedScheme] = useState<typeof mockSchemes[0] | null>(null);
  const [riskModalOpen, setRiskModalOpen] = useState(false);
  const [improvementModal, setImprovementModal] = useState<typeof mockImprovements[0] | null>(null);
  const { toast } = useToast();

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="container pt-4">
        <nav className="text-xs text-muted-foreground" aria-label="Breadcrumb">
          <Link to="/" className="hover:text-foreground">Home</Link>
          <span className="mx-1.5">/</span>
          <Link to="/dashboard" className="hover:text-foreground">Dashboard</Link>
          <span className="mx-1.5">/</span>
          <span className="text-foreground font-medium">Results</span>
        </nav>
      </div>

      <main className="container py-6 space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div>
            <h1 className="font-display text-2xl font-bold text-foreground">Eligibility Results</h1>
            <p className="text-sm text-muted-foreground">Based on your submitted financial information</p>
          </div>
          <Button
            variant="outline"
            onClick={() => toast({ title: "Report Downloaded", description: "Eligibility report saved as PDF." })}
          >
            <Download className="h-4 w-4 mr-1.5" /> Download Report
          </Button>
        </div>

        {/* Summary Cards */}
        <div className="grid md:grid-cols-3 gap-6">
          <motion.div initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} className="rounded-xl border border-border bg-card p-6 card-shadow flex flex-col items-center">
            <h2 className="font-display font-semibold text-foreground mb-4">Approval Probability</h2>
            <ApprovalCircle percentage={mockUserProfile.loanApprovalProbability} />
            <div className="mt-4">
              <RiskBadge level={mockUserProfile.riskLevel} onClick={() => setRiskModalOpen(true)} />
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="rounded-xl border border-border bg-card p-6 card-shadow">
            <h2 className="font-display font-semibold text-foreground mb-4">Financial Snapshot</h2>
            <ResponsiveContainer width="100%" height={180}>
              <BarChart data={mockChartData} barSize={32}>
                <XAxis dataKey="name" tick={{ fontSize: 11 }} stroke="hsl(var(--muted-foreground))" />
                <YAxis tick={{ fontSize: 11 }} stroke="hsl(var(--muted-foreground))" tickFormatter={(v) => `₹${(v / 100000).toFixed(0)}L`} />
                <RechartsTooltip contentStyle={{ borderRadius: 8, border: "1px solid hsl(var(--border))", background: "hsl(var(--card))" }} />
                <Bar dataKey="value" radius={[6, 6, 0, 0]}>
                  {mockChartData.map((e) => <Cell key={e.name} fill={e.fill} />)}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="rounded-xl border border-border bg-card p-6 card-shadow">
            <h2 className="font-display font-semibold text-foreground mb-3">Quick Summary</h2>
            <div className="space-y-3">
              {[
                { label: "Credit Score", value: "680", status: "warning" },
                { label: "Debt-to-Income", value: "45%", status: "warning" },
                { label: "GST Compliance", value: "18 months", status: "good" },
                { label: "Matched Schemes", value: "3", status: "good" },
              ].map((item) => (
                <div key={item.label} className="flex items-center justify-between text-sm">
                  <span className="text-muted-foreground">{item.label}</span>
                  <span className={`font-medium ${item.status === "good" ? "text-success" : "text-warning"}`}>{item.value}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Schemes */}
        <div>
          <h2 className="font-display text-lg font-semibold text-foreground mb-4 flex items-center gap-2">
            <FileText className="h-5 w-5 text-primary" /> Eligible Government Schemes
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {mockSchemes.map((s) => <SchemeCard key={s.id} scheme={s} onClick={() => setSelectedScheme(s)} />)}
          </div>
        </div>

        {/* Improvements */}
        <div>
          <h2 className="font-display text-lg font-semibold text-foreground mb-4 flex items-center gap-2">
            <Lightbulb className="h-5 w-5 text-warning" /> How to Improve Your Score
          </h2>
          <div className="grid sm:grid-cols-2 gap-4">
            {mockImprovements.map((imp, i) => (
              <motion.button
                key={imp.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.08 }}
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

        {/* CTA */}
        <div className="rounded-xl gradient-primary p-8 text-center">
          <h2 className="font-display text-xl font-bold text-primary-foreground">Ready to Apply?</h2>
          <p className="text-primary-foreground/80 text-sm mt-1">Start your application with any of the matched schemes above.</p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center mt-5">
            <Link to="/form">
              <Button variant="outline" className="bg-primary-foreground/10 border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/20">
                Update Details
              </Button>
            </Link>
            <Button
              className="bg-primary-foreground text-primary hover:bg-primary-foreground/90"
              onClick={() => toast({ title: "Report Downloaded", description: "Your detailed eligibility report has been saved." })}
            >
              <Download className="h-4 w-4 mr-1.5" /> Download Full Report
            </Button>
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

export default Results;
