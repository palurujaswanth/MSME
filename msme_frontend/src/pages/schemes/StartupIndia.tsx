import { Rocket } from "lucide-react";
import PageLayout from "@/components/layout/PageLayout";
import SchemePage from "@/components/SchemePage";

const StartupIndia = () => (
  <PageLayout>
    <SchemePage
      title="Startup India"
      subtitle="Tax benefits, funding support, and simplified compliance for DPIIT-recognized startups."
      icon={<Rocket className="w-7 h-7" />}
      overview="Startup India is a flagship initiative launched to build a strong ecosystem for nurturing innovation and startups. DPIIT-recognized startups get access to tax exemptions, self-certification for compliance, fast-tracked patent applications, and access to the Fund of Funds with a corpus of ₹10,000 crore."
      benefits={[
        "Income tax exemption for 3 consecutive years out of the first 10 years",
        "Exemption from Angel Tax under Section 56(2)(viib) of Income Tax Act",
        "Self-certification for 6 labour laws and 3 environmental laws",
        "Fast-tracked patent examination with 80% rebate on patent filing fees",
        "Access to Fund of Funds (₹10,000 Cr) through SEBI-registered AIFs",
        "Easy winding up of company within 90 days under Insolvency & Bankruptcy Code",
      ]}
      eligibility={[
        "Entity incorporated as Private Limited, LLP, or Registered Partnership Firm",
        "Age of entity must be less than 10 years from date of incorporation",
        "Annual turnover should not exceed ₹100 crore in any financial year",
        "Entity must be working towards innovation, development, or improvement of products/services",
        "Must not have been formed by splitting up or reconstruction of existing business",
      ]}
      process={[
        { step: "Incorporate Your Entity", description: "Register as a Private Limited Company, LLP, or Partnership Firm." },
        { step: "Apply on Startup India Portal", description: "Create an account and apply for DPIIT recognition at startupindia.gov.in." },
        { step: "Submit Recognition Application", description: "Provide entity details, innovation description, and supporting documents." },
        { step: "Get DPIIT Recognition", description: "Receive recognition number and certificate within 2-3 working days." },
        { step: "Avail Benefits", description: "Apply for tax exemptions, funding, and other benefits through the portal." },
      ]}
    />
  </PageLayout>
);

export default StartupIndia;
