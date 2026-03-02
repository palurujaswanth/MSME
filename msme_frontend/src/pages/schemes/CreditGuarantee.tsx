import { ShieldCheck } from "lucide-react";
import PageLayout from "@/components/layout/PageLayout";
import SchemePage from "@/components/SchemePage";

const CreditGuarantee = () => (
  <PageLayout>
    <SchemePage
      title="Credit Guarantee (CGTMSE)"
      subtitle="Collateral-free credit up to ₹5 crore through the Credit Guarantee Fund Trust for MSEs."
      icon={<ShieldCheck className="w-7 h-7" />}
      overview="The Credit Guarantee Fund Scheme for Micro and Small Enterprises (CGTMSE) enables banks and financial institutions to provide collateral-free loans to MSEs. The scheme covers both term loans and working capital facilities up to ₹5 crore, with the guarantee covering up to 85% of the credit facility."
      benefits={[
        "Collateral-free loans up to ₹5 crore — no third-party guarantee needed",
        "Guarantee coverage of 75-85% depending on loan amount and category",
        "Available for both new and existing enterprises",
        "Covers term loans and working capital facilities",
        "Special provisions with higher coverage for women entrepreneurs and micro enterprises",
        "Hybrid security available for loans above ₹2 crore",
      ]}
      eligibility={[
        "Must be a Micro or Small Enterprise (not Medium) as per MSMED Act",
        "Both new and existing enterprises are eligible",
        "Manufacturing and service sector enterprises included",
        "Retail trade and educational/training institutions are excluded",
        "Self-Help Groups (SHGs) are also eligible under the scheme",
      ]}
      process={[
        { step: "Approach Member Lending Institution", description: "Visit any bank, NBFC, or SIDBI branch that is a member of CGTMSE." },
        { step: "Apply for Credit Facility", description: "Submit loan application mentioning CGTMSE guarantee requirement." },
        { step: "Bank Appraisal", description: "Bank evaluates the project viability and creditworthiness." },
        { step: "Guarantee Approval", description: "Bank applies to CGTMSE for guarantee cover after sanctioning the loan." },
        { step: "Loan Disbursement", description: "Collateral-free loan disbursed with CGTMSE guarantee backing." },
      ]}
    />
  </PageLayout>
);

export default CreditGuarantee;
