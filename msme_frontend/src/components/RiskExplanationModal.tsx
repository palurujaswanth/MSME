import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { AlertTriangle, TrendingDown, CreditCard, FileText } from "lucide-react";
import RiskBadge from "./RiskBadge";

interface RiskExplanationModalProps {
  open: boolean;
  onClose: () => void;
  riskLevel: "low" | "medium" | "high";
}

const factors = [
  { icon: CreditCard, label: "Credit Score: 680", detail: "Below the ideal threshold of 750. This moderately increases risk.", impact: "medium" as const },
  { icon: TrendingDown, label: "Debt-to-Income Ratio: 45%", detail: "Above recommended 35%. High existing debt reduces repayment capacity.", impact: "high" as const },
  { icon: FileText, label: "GST Filing: 18 months", detail: "Good filing history. Meets most scheme requirements.", impact: "low" as const },
  { icon: AlertTriangle, label: "No Collateral", detail: "Lack of collateral limits access to secured loans and higher amounts.", impact: "medium" as const },
];

const impactColors = {
  low: "text-success",
  medium: "text-warning",
  high: "text-destructive",
};

const RiskExplanationModal = ({ open, onClose, riskLevel }: RiskExplanationModalProps) => (
  <Dialog open={open} onOpenChange={onClose}>
    <DialogContent className="max-w-md">
      <DialogHeader>
        <DialogTitle className="font-display flex items-center gap-3">
          Risk Assessment <RiskBadge level={riskLevel} />
        </DialogTitle>
        <DialogDescription>Factors contributing to your risk classification</DialogDescription>
      </DialogHeader>
      <div className="space-y-3 mt-2">
        {factors.map((f) => (
          <div key={f.label} className="flex items-start gap-3 rounded-lg border border-border p-3">
            <f.icon className={`h-5 w-5 shrink-0 mt-0.5 ${impactColors[f.impact]}`} />
            <div>
              <p className="text-sm font-medium text-foreground">{f.label}</p>
              <p className="text-xs text-muted-foreground mt-0.5">{f.detail}</p>
            </div>
          </div>
        ))}
      </div>
    </DialogContent>
  </Dialog>
);

export default RiskExplanationModal;
