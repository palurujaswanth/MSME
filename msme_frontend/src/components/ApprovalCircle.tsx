import { useEffect, useState } from "react";

interface ApprovalCircleProps {
  percentage: number;
  size?: number;
  strokeWidth?: number;
}

const ApprovalCircle = ({ percentage, size = 160, strokeWidth = 10 }: ApprovalCircleProps) => {
  const [animatedPercent, setAnimatedPercent] = useState(0);
  const radius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (animatedPercent / 100) * circumference;

  useEffect(() => {
    const timer = setTimeout(() => setAnimatedPercent(percentage), 300);
    return () => clearTimeout(timer);
  }, [percentage]);

  const getColor = () => {
    if (percentage >= 70) return "hsl(152, 55%, 42%)";
    if (percentage >= 40) return "hsl(38, 92%, 50%)";
    return "hsl(0, 72%, 55%)";
  };

  return (
    <div className="relative inline-flex items-center justify-center">
      <svg width={size} height={size} className="-rotate-90">
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          fill="none"
          stroke="hsl(var(--muted))"
          strokeWidth={strokeWidth}
        />
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          fill="none"
          stroke={getColor()}
          strokeWidth={strokeWidth}
          strokeDasharray={circumference}
          strokeDashoffset={offset}
          strokeLinecap="round"
          className="transition-all duration-[1.5s] ease-out"
        />
      </svg>
      <div className="absolute flex flex-col items-center">
        <span className="text-3xl font-bold font-display text-foreground">{animatedPercent}%</span>
        <span className="text-xs text-muted-foreground">Approval</span>
      </div>
    </div>
  );
};

export default ApprovalCircle;
