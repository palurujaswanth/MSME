import { cn } from "@/lib/utils";
import { Check } from "lucide-react";

interface Step {
  label: string;
  description?: string;
}

interface StepIndicatorProps {
  steps: Step[];
  currentStep: number;
}

const StepIndicator = ({ steps, currentStep }: StepIndicatorProps) => (
  <div className="flex items-center w-full" aria-label="Form progress">
    {steps.map((step, i) => {
      const isCompleted = i < currentStep;
      const isCurrent = i === currentStep;
      return (
        <div key={step.label} className={cn("flex items-center", i < steps.length - 1 && "flex-1")}>
          <div className="flex flex-col items-center">
            <div
              className={cn(
                "flex h-9 w-9 items-center justify-center rounded-full border-2 text-sm font-semibold transition-all duration-300",
                isCompleted && "gradient-primary border-transparent text-primary-foreground",
                isCurrent && "border-primary bg-primary/10 text-primary",
                !isCompleted && !isCurrent && "border-border text-muted-foreground"
              )}
            >
              {isCompleted ? <Check className="h-4 w-4" /> : i + 1}
            </div>
            <span className={cn(
              "mt-1.5 text-xs font-medium whitespace-nowrap hidden sm:block",
              isCurrent ? "text-primary" : "text-muted-foreground"
            )}>
              {step.label}
            </span>
          </div>
          {i < steps.length - 1 && (
            <div className={cn(
              "h-0.5 flex-1 mx-2 rounded transition-colors duration-300",
              isCompleted ? "bg-primary" : "bg-border"
            )} />
          )}
        </div>
      );
    })}
  </div>
);

export default StepIndicator;
