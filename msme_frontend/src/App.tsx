import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import About from "./pages/About";
import Login from "./pages/Login";
import Contact from "./pages/Contact";
import Dashboard from "./pages/Dashboard";
import AIAssistant from "./pages/AIAssistant";
import EligibilityForm from "./pages/EligibilityForm";
import MSMELoans from "./pages/schemes/MSMELoans";
import SubsidyPrograms from "./pages/schemes/SubsidyPrograms";
import MudraYojana from "./pages/schemes/MudraYojana";
import StartupIndia from "./pages/schemes/StartupIndia";
import CreditGuarantee from "./pages/schemes/CreditGuarantee";
import StandUpIndia from "./pages/schemes/StandUpIndia";
import NotFound from "./pages/NotFound";
import Register from "./pages/Register";
import Profile from "./pages/Profile";
import EditProfile from "./pages/EditProfile";
import Results from "./pages/Results";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/about" element={<About />} />
          <Route path="/login" element={<Login />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/ai-assistant" element={<AIAssistant />} />
          <Route path="/eligibility" element={<EligibilityForm />} />
          <Route path="/schemes/msme-loans" element={<MSMELoans />} />
          <Route path="/schemes/subsidy-programs" element={<SubsidyPrograms />} />
          <Route path="/schemes/mudra-yojana" element={<MudraYojana />} />
          <Route path="/schemes/startup-india" element={<StartupIndia />} />
          <Route path="/schemes/credit-guarantee" element={<CreditGuarantee />} />
          <Route path="/schemes/stand-up-india" element={<StandUpIndia />} />
          <Route path="/register" element={<Register />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/edit-profile" element={<EditProfile />} />
          <Route path="/results" element={<Results />}/>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
