import { Info } from "lucide-react";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";

interface InfoTooltipProps {
  content: string;
}

const InfoTooltip = ({ content }: InfoTooltipProps) => (
  <Tooltip>
    <TooltipTrigger asChild>
      <button
        type="button"
        className="inline-flex items-center justify-center rounded-full p-0.5 text-muted-foreground hover:text-primary transition-colors"
        aria-label="More information"
      >
        <Info className="h-4 w-4" />
      </button>
    </TooltipTrigger>
    <TooltipContent className="max-w-xs text-sm" side="top">
      <p>{content}</p>
    </TooltipContent>
  </Tooltip>
);

export default InfoTooltip;
