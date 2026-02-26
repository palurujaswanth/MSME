import { motion } from "framer-motion";
import { Award, ChevronRight } from "lucide-react";

interface SchemeCardProps {
  scheme: {
    id: number;
    name: string;
    ministry: string;
    maxLoan: string;
    subsidy: string;
    match: number;
  };
  onClick: () => void;
}

const SchemeCard = ({ scheme, onClick }: SchemeCardProps) => (
  <motion.button
    whileHover={{ y: -4 }}
    whileTap={{ scale: 0.98 }}
    onClick={onClick}
    className="w-full text-left rounded-lg border border-border bg-card p-5 card-shadow transition-shadow hover:card-shadow-hover"
    aria-label={`View details for ${scheme.name}`}
  >
    <div className="flex items-start justify-between gap-3">
      <div className="flex items-center gap-3">
        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg gradient-primary">
          <Award className="h-5 w-5 text-primary-foreground" />
        </div>
        <div>
          <h3 className="font-display font-semibold text-card-foreground line-clamp-2">{scheme.name}</h3>
          <p className="text-xs text-muted-foreground mt-0.5">{scheme.ministry}</p>
        </div>
      </div>
      <div className="flex items-center gap-1 shrink-0 rounded-full bg-success/10 px-2.5 py-1 text-xs font-semibold text-success">
        {scheme.match}% Match
      </div>
    </div>
    <div className="mt-4 grid grid-cols-2 gap-3 text-sm">
      <div>
        <p className="text-muted-foreground text-xs">Max Loan</p>
        <p className="font-medium text-card-foreground">{scheme.maxLoan}</p>
      </div>
      <div>
        <p className="text-muted-foreground text-xs">Subsidy</p>
        <p className="font-medium text-card-foreground">{scheme.subsidy}</p>
      </div>
    </div>
    <div className="mt-3 flex items-center text-xs font-medium text-primary">
      View Details <ChevronRight className="h-3.5 w-3.5 ml-0.5" />
    </div>
  </motion.button>
);

export default SchemeCard;
