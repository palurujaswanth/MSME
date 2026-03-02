import { Users } from "lucide-react";
import PageLayout from "@/components/layout/PageLayout";
import SchemePage from "@/components/SchemePage";

const StandUpIndia = () => (
  <PageLayout>
    <SchemePage
      title="Stand-Up India"
      subtitle="Bank loans from ₹10 lakh to ₹1 crore for SC/ST and women entrepreneurs."
      icon={<Users className="w-7 h-7" />}
      overview="The Stand-Up India scheme facilitates bank loans between ₹10 lakh and ₹1 crore to at least one Scheduled Caste/Scheduled Tribe borrower and one woman borrower per bank branch. The loan is for setting up a greenfield enterprise in manufacturing, services, or trading sectors."
      benefits={[
        "Composite loans covering 75% of project cost (term loan + working capital)",
        "Repayment period up to 7 years with moratorium up to 18 months",
        "Margin money of up to 25% — can include convergence with state/central schemes",
        "Dedicated portal for connecting borrowers with banks and support agencies",
        "Handholding support through SIDBI's Stand-Up Connect Centers",
        "No processing fees for loans under the scheme",
      ]}
      eligibility={[
        "Applicant must be SC/ST and/or Woman entrepreneur aged 18 years or above",
        "Must be a first-time borrower — no prior business loans from institutional sources",
        "Enterprise must be greenfield (new) in manufacturing, services, or trading sector",
        "In case of non-individual enterprises, 51% shareholding must be held by SC/ST or woman",
        "Must not be a defaulter with any bank or financial institution",
      ]}
      process={[
        { step: "Visit standupmitra.in Portal", description: "Register on the Stand-Up India portal and explore available bank branches." },
        { step: "Connect with Bank Branch", description: "Get connected with the nearest bank branch offering Stand-Up India loans." },
        { step: "Submit Business Plan", description: "Present a viable business plan with project cost details and revenue projections." },
        { step: "Document Submission", description: "Submit KYC, caste/gender certificate, project report, and quotations for machinery." },
        { step: "Loan Sanction & Disbursement", description: "Upon approval, the composite loan is sanctioned and disbursed in stages." },
      ]}
    />
  </PageLayout>
);

export default StandUpIndia;
