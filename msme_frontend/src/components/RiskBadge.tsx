import { cn } from "@/lib/utils";

interface RiskBadgeProps {
  level: "low" | "medium" | "high";
  onClick?: () => void;
  className?: string;
}

const config = {
  low: { label: "Low Risk", className: "bg-success/10 text-success border-success/20" },
  medium: { label: "Medium Risk", className: "bg-warning/10 text-warning border-warning/20" },
  high: { label: "High Risk", className: "bg-destructive/10 text-destructive border-destructive/20" },
};

const RiskBadge = ({ level, onClick, className }: RiskBadgeProps) => {
  const c = config[level];
  return (
    <button
      onClick={onClick}
      className={cn(
        "inline-flex items-center gap-1.5 rounded-full border px-3 py-1 text-sm font-medium transition-all hover:scale-105 cursor-pointer",
        c.className,
        className
      )}
      aria-label={`Risk level: ${c.label}. Click for details.`}
    >
      <span className={cn("h-2 w-2 rounded-full", {
        "bg-success": level === "low",
        "bg-warning": level === "medium",
        "bg-destructive": level === "high",
      })} />
      {c.label}
    </button>
  );
};

export default RiskBadge;
