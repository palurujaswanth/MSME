import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, ArrowLeft, Check } from "lucide-react";
import { useNavigate } from "react-router-dom";
import PageLayout from "@/components/layout/PageLayout";

const steps = ["Business Info", "Enterprise Details", "Special Eligibility", "Review"];

const indianStates = [
  "Andhra Pradesh","Arunachal Pradesh","Assam","Bihar","Chhattisgarh","Goa",
  "Gujarat","Haryana","Himachal Pradesh","Jharkhand","Karnataka","Kerala",
  "Madhya Pradesh","Maharashtra","Manipur","Meghalaya","Mizoram","Nagaland",
  "Odisha","Punjab","Rajasthan","Sikkim","Tamil Nadu","Telangana",
  "Tripura","Uttar Pradesh","Uttarakhand","West Bengal",
  "Delhi","Jammu and Kashmir","Ladakh","Puducherry"
];

const EligibilityForm = () => {
  const navigate = useNavigate();
  const [step, setStep] = useState(0);

  const [form, setForm] = useState({
    businessName: "",
    businessType: "",
    sector: "",
    state: "",

    investment_amount: "",
    annual_turnover: "",
    years_in_business: "",
    number_of_employees: "",
    gst_registered: "",
    udyam_registered: "",

    gender: "",
    social_category: "",
    age: "",
    rural_urban: "",

    exporter: "",
    startup_dpiit: "",
    green_business: "",
    women_owned: "",
    aspirational_district: "",
    north_east_region: ""
  });

  const update = (key: string, value: string) =>
    setForm((prev) => ({ ...prev, [key]: value }));

  const inputClass =
    "w-full px-4 py-3 bg-background border border-border rounded-xl text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring/50 transition";

  const validateStep = () => {
    if (step === 0 && (!form.businessType || !form.state)) {
      alert("Business Type and State are required");
      return false;
    }

    if (step === 1 && (!form.investment_amount || !form.annual_turnover)) {
      alert("Investment and Annual Turnover are required");
      return false;
    }

    return true;
  };

  const handleNext = () => {
    if (!validateStep()) return;

    if (step === steps.length - 1) {
      handleSubmit();
    } else {
      setStep((prev) => prev + 1);
    }
  };

  const handleSubmit = () => {
    const payload = {
      investment_amount: Number(form.investment_amount),
      annual_turnover: Number(form.annual_turnover),
      business_type: form.businessType === "Manufacturing" ? 0 :
                     form.businessType === "Service" ? 1 : 2,
      sector: 0, // Replace with sector encoding if needed
      years_in_business: Number(form.years_in_business),
      number_of_employees: Number(form.number_of_employees),
      udyam_registered: form.udyam_registered === "Yes" ? 1 : 0,
      gst_registered: form.gst_registered === "Yes" ? 1 : 0,
      gender: form.gender === "Female" ? 1 : form.gender === "Other" ? 2 : 0,
      social_category:
        form.social_category === "SC" ? 1 :
        form.social_category === "ST" ? 2 :
        form.social_category === "OBC" ? 3 : 0,
      minority_status: 0,
      disability_status: 0,
      age: Number(form.age),
      rural_urban: form.rural_urban === "Rural" ? 1 : 0,
      state: 0, // encode later
      aspirational_district: form.aspirational_district === "Yes" ? 1 : 0,
      north_east_region: form.north_east_region === "Yes" ? 1 : 0,
      exporter: form.exporter === "Yes" ? 1 : 0,
      startup_dpiit: form.startup_dpiit === "Yes" ? 1 : 0,
      green_business: form.green_business === "Yes" ? 1 : 0,
      women_owned: form.women_owned === "Yes" ? 1 : 0
    };

    navigate("/results", { state: payload });
  };

  return (
    <PageLayout>
      <section className="py-16 lg:py-20">
        <div className="container mx-auto px-4 lg:px-8 max-w-2xl">

          {/* STEPPER */}
          <div className="flex items-center justify-center gap-2 mb-10">
            {steps.map((s, i) => (
              <div key={s} className="flex items-center gap-2">
                <div className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold ${
                  i <= step ? "gradient-bg text-white" : "bg-muted text-muted-foreground"
                }`}>
                  {i < step ? <Check className="w-4 h-4" /> : i + 1}
                </div>
                {i < steps.length - 1 && (
                  <div className={`w-8 h-0.5 ${i < step ? "gradient-bg" : "bg-muted"}`} />
                )}
              </div>
            ))}
          </div>

          <div className="bg-card rounded-3xl p-8 soft-shadow-lg border border-border/30">
            <AnimatePresence mode="wait">
              <motion.div
                key={step}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
              >

                {/* STEP 0 */}
                {step === 0 && (
                  <div className="space-y-5">
                    <h2 className="text-xl font-semibold">Business Information</h2>

                    <input className={inputClass} placeholder="Business Name"
                      value={form.businessName}
                      onChange={(e) => update("businessName", e.target.value)} />

                    <select className={inputClass}
                      value={form.businessType}
                      onChange={(e) => update("businessType", e.target.value)}>
                      <option value="">Select Business Type</option>
                      <option>Manufacturing</option>
                      <option>Service</option>
                      <option>Trading</option>
                    </select>

                    <select className={inputClass}
                      value={form.state}
                      onChange={(e) => update("state", e.target.value)}>
                      <option value="">Select State</option>
                      {indianStates.map((state) => (
                        <option key={state}>{state}</option>
                      ))}
                    </select>
                  </div>
                )}

                {/* STEP 1 */}
                {step === 1 && (
                  <div className="space-y-5">
                    <h2 className="text-xl font-semibold">Enterprise Details</h2>

                    <input className={inputClass} placeholder="Investment Amount (₹)"
                      value={form.investment_amount}
                      onChange={(e) => update("investment_amount", e.target.value)} />

                    <input className={inputClass} placeholder="Annual Turnover (₹)"
                      value={form.annual_turnover}
                      onChange={(e) => update("annual_turnover", e.target.value)} />

                    <input className={inputClass} placeholder="Years in Business"
                      value={form.years_in_business}
                      onChange={(e) => update("years_in_business", e.target.value)} />

                    <input className={inputClass} placeholder="Number of Employees"
                      value={form.number_of_employees}
                      onChange={(e) => update("number_of_employees", e.target.value)} />

                    <select className={inputClass}
                      value={form.udyam_registered}
                      onChange={(e) => update("udyam_registered", e.target.value)}>
                      <option value="">UDYAM Registered?</option>
                      <option>Yes</option>
                      <option>No</option>
                    </select>
                  </div>
                )}

                {/* STEP 2 */}
                {step === 2 && (
                  <div className="space-y-5">
                    <h2 className="text-xl font-semibold">Special Eligibility</h2>

                    <select className={inputClass}
                      value={form.gender}
                      onChange={(e) => update("gender", e.target.value)}>
                      <option value="">Gender</option>
                      <option>Male</option>
                      <option>Female</option>
                      <option>Other</option>
                    </select>

                    <select className={inputClass}
                      value={form.social_category}
                      onChange={(e) => update("social_category", e.target.value)}>
                      <option value="">Social Category</option>
                      <option>General</option>
                      <option>SC</option>
                      <option>ST</option>
                      <option>OBC</option>
                    </select>

                    <select className={inputClass}
                      value={form.exporter}
                      onChange={(e) => update("exporter", e.target.value)}>
                      <option value="">Exporter?</option>
                      <option>Yes</option>
                      <option>No</option>
                    </select>

                    <select className={inputClass}
                      value={form.startup_dpiit}
                      onChange={(e) => update("startup_dpiit", e.target.value)}>
                      <option value="">DPIIT Startup?</option>
                      <option>Yes</option>
                      <option>No</option>
                    </select>
                  </div>
                )}

                {/* REVIEW */}
                {step === 3 && (
                  <div className="space-y-4">
                    <h2 className="text-xl font-semibold">Review & Submit</h2>
                    {Object.entries(form).map(([key, value]) => (
                      <div key={key} className="flex justify-between text-sm">
                        <span className="capitalize text-muted-foreground">
                          {key.replace(/_/g, " ")}
                        </span>
                        <span className="font-medium">{value || "—"}</span>
                      </div>
                    ))}
                  </div>
                )}

              </motion.div>
            </AnimatePresence>

            <div className="flex justify-between mt-8">
              <button onClick={() => setStep((s) => Math.max(0, s - 1))}
                disabled={step === 0}
                className="flex items-center gap-2 text-muted-foreground">
                <ArrowLeft className="w-4 h-4" /> Back
              </button>

              <button onClick={handleNext}
                className="flex items-center gap-2 px-6 py-2.5 gradient-bg text-white rounded-xl">
                {step === steps.length - 1 ? "Submit" : "Next"}
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default EligibilityForm;