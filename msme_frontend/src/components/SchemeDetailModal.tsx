import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Award, CheckCircle, ExternalLink } from "lucide-react";

interface SchemeDetailModalProps {
  scheme: {
    name: string;
    ministry: string;
    maxLoan: string;
    subsidy: string;
    match: number;
    criteria: string[];
    benefits: string[];
    applyLink: string;
  } | null;
  open: boolean;
  onClose: () => void;
}

const SchemeDetailModal = ({ scheme, open, onClose }: SchemeDetailModalProps) => {
  if (!scheme) return null;
  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="max-w-lg">
        <DialogHeader>
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg gradient-primary shrink-0">
              <Award className="h-5 w-5 text-primary-foreground" />
            </div>
            <div>
              <DialogTitle className="font-display text-lg">{scheme.name}</DialogTitle>
              <DialogDescription>{scheme.ministry}</DialogDescription>
            </div>
          </div>
        </DialogHeader>
        <div className="grid grid-cols-2 gap-3 mt-2">
          <div className="rounded-lg bg-accent/50 p-3">
            <p className="text-xs text-muted-foreground">Max Loan Amount</p>
            <p className="font-semibold text-sm text-foreground">{scheme.maxLoan}</p>
          </div>
          <div className="rounded-lg bg-success/5 p-3">
            <p className="text-xs text-muted-foreground">Subsidy</p>
            <p className="font-semibold text-sm text-foreground">{scheme.subsidy}</p>
          </div>
        </div>
        <div className="mt-3">
          <h4 className="text-sm font-semibold text-foreground mb-2">Eligibility Criteria</h4>
          <ul className="space-y-1.5">
            {scheme.criteria.map((c) => (
              <li key={c} className="flex items-start gap-2 text-sm text-muted-foreground">
                <CheckCircle className="h-4 w-4 text-success shrink-0 mt-0.5" />
                {c}
              </li>
            ))}
          </ul>
        </div>
        <div className="mt-3">
          <h4 className="text-sm font-semibold text-foreground mb-2">Benefits</h4>
          <ul className="space-y-1.5">
            {scheme.benefits.map((b) => (
              <li key={b} className="flex items-start gap-2 text-sm text-muted-foreground">
                <CheckCircle className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                {b}
              </li>
            ))}
          </ul>
        </div>
        <Button className="w-full mt-4 gradient-primary text-primary-foreground btn-ripple" asChild>
          <a href={scheme.applyLink} target="_blank" rel="noopener noreferrer">
            Apply Now <ExternalLink className="h-4 w-4 ml-1.5" />
          </a>
        </Button>
      </DialogContent>
    </Dialog>
  );
};

export default SchemeDetailModal;
