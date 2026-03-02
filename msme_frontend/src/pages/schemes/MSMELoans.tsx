import { Building2 } from "lucide-react";
import PageLayout from "@/components/layout/PageLayout";
import SchemePage from "@/components/SchemePage";

const MSMELoans = () => (
  <PageLayout>
    <SchemePage
      title="MSME Loan Schemes"
      subtitle="Government-backed loans designed specifically for micro, small and medium enterprises across India."
      icon={<Building2 className="w-7 h-7" />}
      overview="The Government of India offers a comprehensive range of loan schemes for MSMEs through various financial institutions. These schemes provide affordable credit with subsidized interest rates, longer repayment periods, and simplified documentation. Whether you're starting a new venture or expanding an existing business, MSME loan schemes can provide the financial support you need."
      benefits={[
        "Subsidized interest rates as low as 4% per annum for eligible MSMEs",
        "Collateral-free loans up to ₹2 crore under various scheme categories",
        "Extended repayment periods of up to 7 years with moratorium options",
        "Special provisions for women entrepreneurs and SC/ST category businesses",
        "Technology upgradation funding for modernizing manufacturing processes",
        "Working capital loans with flexible repayment schedules",
      ]}
      eligibility={[
        "Business must be registered under the MSMED Act with valid UDYAM registration",
        "Annual turnover within MSME classification limits (Micro: up to ₹5 Cr, Small: up to ₹50 Cr, Medium: up to ₹250 Cr)",
        "Minimum 2 years of business operations for most schemes",
        "Good credit history and no existing defaults with financial institutions",
        "Valid GST registration and PAN card for the business entity",
      ]}
      process={[
        { step: "Register on UDYAM Portal", description: "Complete your MSME registration on the UDYAM registration portal to get your unique enterprise number." },
        { step: "Check Eligibility", description: "Use our AI-powered tool to match your profile with the best-suited loan schemes." },
        { step: "Prepare Documentation", description: "Gather business plan, financial statements, KYC documents, and registration certificates." },
        { step: "Apply Through Bank/Portal", description: "Submit your application through the designated bank or online portal for the chosen scheme." },
        { step: "Verification & Disbursement", description: "After verification of documents, the loan amount is disbursed to your business account." },
      ]}
    />
  </PageLayout>
);

export default MSMELoans;
