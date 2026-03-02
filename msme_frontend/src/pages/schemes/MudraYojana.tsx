import { Landmark } from "lucide-react";
import PageLayout from "@/components/layout/PageLayout";
import SchemePage from "@/components/SchemePage";

const MudraYojana = () => (
  <PageLayout>
    <SchemePage
      title="Mudra Yojana"
      subtitle="Pradhan Mantri MUDRA Yojana — micro-funding for non-corporate small businesses up to ₹10 lakh."
      icon={<Landmark className="w-7 h-7" />}
      overview="PMMY (Pradhan Mantri MUDRA Yojana) provides loans up to ₹10 lakh to non-corporate, non-farm small/micro enterprises. The scheme has three categories: Shishu (up to ₹50,000), Kishore (₹50,001 to ₹5 lakh), and Tarun (₹5,00,001 to ₹10 lakh). Since inception, over 40 crore loans worth ₹23 lakh crore have been sanctioned."
      benefits={[
        "No collateral required — loans are backed by the Credit Guarantee Fund",
        "Three flexible categories (Shishu, Kishore, Tarun) for different business stages",
        "Low interest rates starting from 7.3% per annum",
        "MUDRA Card for working capital management with flexible withdrawal facility",
        "Special focus on women entrepreneurs — 68% of loans disbursed to women",
        "Available through all banks, NBFCs, MFIs, and online platforms",
      ]}
      eligibility={[
        "Any Indian citizen with a business plan for non-farm income generating activity",
        "Small/micro enterprises including manufacturing, trading, and services",
        "No existing loan default with any financial institution",
        "Business can be new or existing — startup ventures are eligible under Shishu",
        "Both individual proprietorships and partnership firms are eligible",
      ]}
      process={[
        { step: "Choose Loan Category", description: "Select Shishu (up to ₹50K), Kishore (up to ₹5L), or Tarun (up to ₹10L) based on your needs." },
        { step: "Visit Nearest Bank/NBFC", description: "Approach any commercial bank, RRB, cooperative bank, or MFI offering MUDRA loans." },
        { step: "Submit Application Form", description: "Fill the MUDRA loan application with business plan and identity/address proof." },
        { step: "Document Verification", description: "Bank verifies your documents and assesses the business viability." },
        { step: "Loan Disbursement", description: "Upon approval, loan is disbursed within 7-10 working days along with MUDRA Card." },
      ]}
    />
  </PageLayout>
);

export default MudraYojana;
