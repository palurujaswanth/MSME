import { useState } from "react";
import { Plus, Calculator, Download, MessageCircle, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { useToast } from "@/hooks/use-toast";

const FloatingActions = () => {
  const [open, setOpen] = useState(false);
  const { toast } = useToast();

  const actions = [
    {
      label: "Recalculate",
      icon: Calculator,
      onClick: () => toast({ title: "Eligibility Recalculated", description: "Results updated with latest data." }),
    },
    {
      label: "Download Report",
      icon: Download,
      onClick: () => toast({ title: "Report Downloaded", description: "Your eligibility report has been saved." }),
    },
    {
      label: "Talk to Advisor",
      icon: MessageCircle,
      onClick: () => toast({ title: "Advisor Request Sent", description: "An advisor will contact you shortly." }),
    },
  ];

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col-reverse items-end gap-2">
      <Button
        onClick={() => setOpen(!open)}
        className="h-14 w-14 rounded-full gradient-primary shadow-elevated btn-ripple"
        size="icon"
        aria-label={open ? "Close actions" : "Open actions"}
      >
        {open ? <X className="h-5 w-5 text-primary-foreground" /> : <Plus className="h-5 w-5 text-primary-foreground" />}
      </Button>
      {open && actions.map((action, i) => (
        <div key={action.label} className="flex items-center gap-2 animate-fade-in" style={{ animationDelay: `${i * 60}ms` }}>
          <span className="rounded-md bg-card px-2 py-1 text-xs font-medium card-shadow text-foreground">{action.label}</span>
          <Button
            onClick={() => { action.onClick(); setOpen(false); }}
            variant="outline"
            size="icon"
            className={cn("h-11 w-11 rounded-full border-border bg-card card-shadow hover:card-shadow-hover")}
            aria-label={action.label}
          >
            <action.icon className="h-4 w-4 text-foreground" />
          </Button>
        </div>
      ))}
    </div>
  );
};

export default FloatingActions;
