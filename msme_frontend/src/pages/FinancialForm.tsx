import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, ArrowRight } from "lucide-react";
import Navbar from "@/components/Navbar";
import StepIndicator from "@/components/StepIndicator";
import InfoTooltip from "@/components/InfoTooltip";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";

const steps = [
  { label: "Business Info" },
  { label: "Financial Details" },
  { label: "Loan Requirements" },
  { label: "Review & Submit" },
];

const FinancialForm = () => {
  const [current, setCurrent] = useState(0);
  const { toast } = useToast();
  const navigate = useNavigate();

  const [form, setForm] = useState({
    businessName: "", businessType: "", category: "", gstin: "", pan: "", yearEstablished: "", employees: "",
    annualRevenue: "", monthlyExpenses: "", creditScore: "", existingLoans: "", monthlyEMI: "", gstFilingMonths: "",
    hasCollateral: "", collateralValue: "",
    loanAmount: "", loanPurpose: "", urgency: "",
  });

  const update = (key: string, value: string) => setForm((p) => ({ ...p, [key]: value }));

  const isStepValid = () => {
    if (current === 0) return form.businessName && form.businessType && form.category;
    if (current === 1) return form.annualRevenue && form.creditScore;
    if (current === 2) return form.loanAmount && form.loanPurpose;
    return true;
  };

  const next = () => {
    if (current < 3) {
      toast({ title: "Progress Saved", description: `Step ${current + 1} completed.` });
      setCurrent(current + 1);
    } else {
      toast({ title: "Eligibility Calculated", description: "Redirecting to results..." });
      setTimeout(() => navigate("/results"), 600);
    }
  };

  const slideVariants = {
    enter: { x: 30, opacity: 0 },
    center: { x: 0, opacity: 1 },
    exit: { x: -30, opacity: 0 },
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="container pt-4">
        <nav className="text-xs text-muted-foreground" aria-label="Breadcrumb">
          <Link to="/" className="hover:text-foreground">Home</Link>
          <span className="mx-1.5">/</span>
          <Link to="/dashboard" className="hover:text-foreground">Dashboard</Link>
          <span className="mx-1.5">/</span>
          <span className="text-foreground font-medium">Financial Input</span>
        </nav>
      </div>

      <main className="container max-w-2xl py-8">
        <h1 className="font-display text-2xl font-bold text-foreground mb-6">Eligibility Assessment</h1>
        <StepIndicator steps={steps} currentStep={current} />

        <div className="mt-8 rounded-xl border border-border bg-card p-6 md:p-8 card-shadow">
          <AnimatePresence mode="wait">
            <motion.div key={current} variants={slideVariants} initial="enter" animate="center" exit="exit" transition={{ duration: 0.25 }}>
              {current === 0 && (
                <div className="space-y-5">
                  <h2 className="font-display font-semibold text-lg text-foreground">Business Information</h2>
                  <div className="space-y-1.5">
                    <Label htmlFor="businessName">Business Name *</Label>
                    <Input id="businessName" value={form.businessName} onChange={(e) => update("businessName", e.target.value)} placeholder="Kumar Manufacturing Pvt. Ltd." />
                  </div>
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <Label>Business Type *</Label>
                      <Select value={form.businessType} onValueChange={(v) => update("businessType", v)}>
                        <SelectTrigger><SelectValue placeholder="Select type" /></SelectTrigger>
                        <SelectContent>
                          <SelectItem value="manufacturing">Manufacturing</SelectItem>
                          <SelectItem value="service">Service</SelectItem>
                          <SelectItem value="trading">Trading</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-1.5">
                      <Label>Enterprise Category *</Label>
                      <Select value={form.category} onValueChange={(v) => update("category", v)}>
                        <SelectTrigger><SelectValue placeholder="Select category" /></SelectTrigger>
                        <SelectContent>
                          <SelectItem value="micro">Micro</SelectItem>
                          <SelectItem value="small">Small</SelectItem>
                          <SelectItem value="medium">Medium</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <Label htmlFor="gstin">GSTIN</Label>
                      <Input id="gstin" value={form.gstin} onChange={(e) => update("gstin", e.target.value)} placeholder="22AAAAA0000A1Z5" />
                    </div>
                    <div className="space-y-1.5">
                      <Label htmlFor="employees">Number of Employees</Label>
                      <Input id="employees" type="number" value={form.employees} onChange={(e) => update("employees", e.target.value)} placeholder="12" />
                    </div>
                  </div>
                </div>
              )}

              {current === 1 && (
                <div className="space-y-5">
                  <h2 className="font-display font-semibold text-lg text-foreground">Financial Details</h2>
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <Label className="flex items-center gap-1.5">
                        Annual Revenue (₹) *
                        <InfoTooltip content="Total revenue from your last financial year including all income sources." />
                      </Label>
                      <Input type="number" value={form.annualRevenue} onChange={(e) => update("annualRevenue", e.target.value)} placeholder="1200000" />
                    </div>
                    <div className="space-y-1.5">
                      <Label>Monthly Expenses (₹)</Label>
                      <Input type="number" value={form.monthlyExpenses} onChange={(e) => update("monthlyExpenses", e.target.value)} placeholder="80000" />
                    </div>
                  </div>
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <Label className="flex items-center gap-1.5">
                        Credit Score *
                        <InfoTooltip content="A score above 700 increases loan approval chances. Check on CIBIL website." />
                      </Label>
                      <Input type="number" value={form.creditScore} onChange={(e) => update("creditScore", e.target.value)} placeholder="680" />
                    </div>
                    <div className="space-y-1.5">
                      <Label className="flex items-center gap-1.5">
                        Monthly EMI (₹)
                        <InfoTooltip content="Total EMI you pay monthly for all existing loans." />
                      </Label>
                      <Input type="number" value={form.monthlyEMI} onChange={(e) => update("monthlyEMI", e.target.value)} placeholder="15000" />
                    </div>
                  </div>
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <Label>Existing Loans</Label>
                      <Input type="number" value={form.existingLoans} onChange={(e) => update("existingLoans", e.target.value)} placeholder="2" />
                    </div>
                    <div className="space-y-1.5">
                      <Label className="flex items-center gap-1.5">
                        GST Filing Months
                        <InfoTooltip content="Number of consecutive months you've filed GST returns." />
                      </Label>
                      <Input type="number" value={form.gstFilingMonths} onChange={(e) => update("gstFilingMonths", e.target.value)} placeholder="18" />
                    </div>
                  </div>
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <Label className="flex items-center gap-1.5">
                        Collateral Available
                        <InfoTooltip content="Property, machinery, or assets that can secure the loan." />
                      </Label>
                      <Select value={form.hasCollateral} onValueChange={(v) => update("hasCollateral", v)}>
                        <SelectTrigger><SelectValue placeholder="Select" /></SelectTrigger>
                        <SelectContent>
                          <SelectItem value="yes">Yes</SelectItem>
                          <SelectItem value="no">No</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    {form.hasCollateral === "yes" && (
                      <div className="space-y-1.5">
                        <Label>Collateral Value (₹)</Label>
                        <Input type="number" value={form.collateralValue} onChange={(e) => update("collateralValue", e.target.value)} placeholder="500000" />
                      </div>
                    )}
                  </div>
                </div>
              )}

              {current === 2 && (
                <div className="space-y-5">
                  <h2 className="font-display font-semibold text-lg text-foreground">Loan Requirements</h2>
                  <div className="space-y-1.5">
                    <Label>Desired Loan Amount (₹) *</Label>
                    <Input type="number" value={form.loanAmount} onChange={(e) => update("loanAmount", e.target.value)} placeholder="500000" />
                  </div>
                  <div className="space-y-1.5">
                    <Label>Purpose of Loan *</Label>
                    <Select value={form.loanPurpose} onValueChange={(v) => update("loanPurpose", v)}>
                      <SelectTrigger><SelectValue placeholder="Select purpose" /></SelectTrigger>
                      <SelectContent>
                        <SelectItem value="working-capital">Working Capital</SelectItem>
                        <SelectItem value="equipment">Equipment Purchase</SelectItem>
                        <SelectItem value="expansion">Business Expansion</SelectItem>
                        <SelectItem value="inventory">Inventory</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-1.5">
                    <Label>Urgency</Label>
                    <Select value={form.urgency} onValueChange={(v) => update("urgency", v)}>
                      <SelectTrigger><SelectValue placeholder="How soon?" /></SelectTrigger>
                      <SelectContent>
                        <SelectItem value="immediate">Immediate (within 1 week)</SelectItem>
                        <SelectItem value="soon">Soon (within 1 month)</SelectItem>
                        <SelectItem value="planning">Just Planning</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              )}

              {current === 3 && (
                <div className="space-y-5">
                  <h2 className="font-display font-semibold text-lg text-foreground">Review Your Information</h2>
                  <div className="space-y-3">
                    {[
                      ["Business Name", form.businessName],
                      ["Business Type", form.businessType],
                      ["Annual Revenue", form.annualRevenue ? `₹${Number(form.annualRevenue).toLocaleString()}` : ""],
                      ["Credit Score", form.creditScore],
                      ["Loan Amount", form.loanAmount ? `₹${Number(form.loanAmount).toLocaleString()}` : ""],
                      ["Purpose", form.loanPurpose],
                    ].filter(([, v]) => v).map(([label, value]) => (
                      <div key={label} className="flex justify-between text-sm border-b border-border pb-2">
                        <span className="text-muted-foreground">{label}</span>
                        <span className="font-medium text-foreground capitalize">{value}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </motion.div>
          </AnimatePresence>

          {/* Navigation */}
          <div className="flex justify-between mt-8 pt-4 border-t border-border">
            <Button
              variant="outline"
              onClick={() => setCurrent(Math.max(0, current - 1))}
              disabled={current === 0}
            >
              <ArrowLeft className="h-4 w-4 mr-1.5" /> Back
            </Button>
            <Button
              className="gradient-primary text-primary-foreground btn-ripple"
              onClick={next}
              disabled={!isStepValid()}
            >
              {current === 3 ? "Calculate Eligibility" : "Next"} <ArrowRight className="h-4 w-4 ml-1.5" />
            </Button>
          </div>
        </div>
      </main>

      {/* Mobile sticky bar */}
      <div className="fixed bottom-0 left-0 right-0 border-t border-border bg-card p-3 flex justify-between sm:hidden z-40">
        <Button variant="outline" size="sm" onClick={() => setCurrent(Math.max(0, current - 1))} disabled={current === 0}>
          <ArrowLeft className="h-4 w-4" />
        </Button>
        <span className="text-xs text-muted-foreground self-center">Step {current + 1} of {steps.length}</span>
        <Button size="sm" className="gradient-primary text-primary-foreground" onClick={next} disabled={!isStepValid()}>
          {current === 3 ? "Submit" : "Next"} <ArrowRight className="h-3.5 w-3.5 ml-1" />
        </Button>
      </div>
    </div>
  );
};

export default FinancialForm;
