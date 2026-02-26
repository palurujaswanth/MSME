export const mockSchemes = [
  {
    id: 1,
    name: "PMEGP - Prime Minister Employment Generation Programme",
    ministry: "Ministry of MSME",
    maxLoan: "₹25 Lakhs (Manufacturing) / ₹10 Lakhs (Service)",
    subsidy: "15-35% of project cost",
    eligible: true,
    match: 92,
    criteria: [
      "Age above 18 years",
      "Minimum 8th pass for projects above ₹10 lakhs",
      "No income ceiling for setting up projects",
      "New projects only (not for upgrades)"
    ],
    benefits: [
      "Subsidy of 15-35% of project cost",
      "No collateral for loans up to ₹10 lakhs",
      "Both manufacturing and service sector eligible",
      "Available pan-India"
    ],
    applyLink: "https://www.kviconline.gov.in/pmegpeportal/"
  },
  {
    id: 2,
    name: "CGTMSE - Credit Guarantee Fund Trust for MSEs",
    ministry: "Ministry of MSME & SIDBI",
    maxLoan: "₹5 Crores",
    subsidy: "Guarantee cover up to 85%",
    eligible: true,
    match: 85,
    criteria: [
      "New and existing Micro & Small Enterprises",
      "Manufacturing and service sector",
      "Credit facility up to ₹5 crore",
      "No collateral / third party guarantee required"
    ],
    benefits: [
      "Collateral-free credit facility",
      "Guarantee cover up to 85%",
      "Both term loans and working capital",
      "Low annual guarantee fee"
    ],
    applyLink: "https://www.cgtmse.in/"
  },
  {
    id: 3,
    name: "MUDRA Yojana - Shishu/Kishor/Tarun",
    ministry: "Ministry of Finance",
    maxLoan: "₹10 Lakhs",
    subsidy: "No processing fee, low interest",
    eligible: true,
    match: 78,
    criteria: [
      "Non-farm income generating activities",
      "Manufacturing, trading, service sector",
      "Business plan/project report required",
      "For micro enterprises and individuals"
    ],
    benefits: [
      "Shishu: up to ₹50,000",
      "Kishor: ₹50,001 to ₹5 Lakhs",
      "Tarun: ₹5,00,001 to ₹10 Lakhs",
      "No collateral required"
    ],
    applyLink: "https://www.mudra.org.in/"
  },
];

export const mockImprovements = [
  {
    id: 1,
    title: "Improve Credit Score",
    impact: "High",
    description: "Your credit score of 680 is below optimal. Improving it to 750+ can increase approval probability by 15-20%.",
    details: "Pay all EMIs on time for the next 6 months. Reduce credit utilization below 30%. Avoid multiple loan inquiries. Check your credit report for errors and dispute any inaccuracies. Consider becoming an authorized user on an account with good history.",
    icon: "trending-up"
  },
  {
    id: 2,
    title: "Maintain GST Filing Consistency",
    impact: "Medium",
    description: "Regular GST filing demonstrates business stability. Filing for 12+ months continuously improves eligibility.",
    details: "Ensure all GST returns (GSTR-1, GSTR-3B) are filed on time. Maintain consistency in reported revenue. Keep digital records of all transactions. Consider hiring a GST consultant if filing is complex.",
    icon: "file-check"
  },
  {
    id: 3,
    title: "Reduce Existing Debt Ratio",
    impact: "Medium",
    description: "Your debt-to-income ratio of 45% is high. Reducing it below 35% significantly improves loan chances.",
    details: "Prioritize paying off high-interest debts first. Consolidate multiple loans if possible. Avoid taking new loans before applying. Increase revenue streams to improve the ratio naturally.",
    icon: "percent"
  },
  {
    id: 4,
    title: "Add Collateral Documentation",
    impact: "High",
    description: "Having collateral can unlock higher loan amounts and better interest rates from lenders.",
    details: "Property documents, machinery, inventory, or fixed deposits can serve as collateral. Get proper valuation done by certified valuers. Ensure all property documents are clear of disputes.",
    icon: "shield"
  },
];

export const mockChartData = [
  { name: "Revenue", value: 1200000, fill: "hsl(212, 72%, 50%)" },
  { name: "Expenses", value: 800000, fill: "hsl(215, 20%, 70%)" },
  { name: "EMI", value: 180000, fill: "hsl(38, 92%, 50%)" },
  { name: "Profit", value: 220000, fill: "hsl(152, 55%, 42%)" },
];

export const mockUserProfile = {
  name: "Rajesh Kumar",
  business: "Kumar Manufacturing Pvt. Ltd.",
  type: "Manufacturing",
  category: "Micro Enterprise",
  gstin: "27AABCU9603R1ZM",
  pan: "AABCU9603R",
  yearEstablished: 2019,
  employees: 12,
  annualRevenue: 1200000,
  creditScore: 680,
  existingLoans: 2,
  monthlyEMI: 15000,
  gstFilingMonths: 18,
  hasCollateral: false,
  loanApprovalProbability: 72,
  riskLevel: "medium" as const,
};
