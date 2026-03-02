import { Banknote } from "lucide-react";
import PageLayout from "@/components/layout/PageLayout";
import SchemePage from "@/components/SchemePage";

const SubsidyPrograms = () => (
  <PageLayout>
    <SchemePage
      title="Subsidy Programs"
      subtitle="Government subsidies that reduce costs, boost competitiveness, and accelerate MSME growth."
      icon={<Banknote className="w-7 h-7" />}
      overview="The Indian government provides numerous subsidy programs for MSMEs covering capital investment, technology upgradation, quality certification, marketing, and more. These subsidies can significantly reduce the cost of doing business and help MSMEs compete in domestic and international markets."
      benefits={[
        "Capital subsidy of up to 15-25% on plant and machinery investments",
        "Technology upgradation subsidies for adopting modern manufacturing processes",
        "Quality certification reimbursement for ISO, BIS, and other certifications",
        "Marketing support subsidies for domestic and international trade fairs",
        "Interest subsidy on term loans reducing effective borrowing cost",
        "Raw material assistance and procurement preference in government tenders",
      ]}
      eligibility={[
        "Valid UDYAM registration as Micro, Small, or Medium enterprise",
        "Manufacturing or service sector enterprise within MSME limits",
        "Business must be operational with proven track record",
        "Compliance with environmental and labor regulations",
        "No default on any government loan or subsidy previously availed",
      ]}
      process={[
        { step: "Identify Applicable Subsidies", description: "Use our platform to find subsidies matching your business type, state, and investment plans." },
        { step: "Prepare Application", description: "Fill out the scheme-specific application form with business and investment details." },
        { step: "Submit Documentation", description: "Submit proof of investment, registration certificates, and financial statements." },
        { step: "Inspection & Approval", description: "Government officials may conduct site inspection to verify claims." },
        { step: "Subsidy Disbursement", description: "Approved subsidy amount is credited to your business account." },
      ]}
    />
  </PageLayout>
);

export default SubsidyPrograms;
