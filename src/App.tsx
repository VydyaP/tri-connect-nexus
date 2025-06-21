
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "@/components/ThemeProvider";
import { AuthProvider } from "@/contexts/AuthContext";
import Index from "./pages/Index";
import SignIn from "./pages/SignIn";
import SelectRole from "./pages/SelectRole";
import GoogleAuth from "./pages/GoogleAuth";
import LinkedInAuth from "./pages/LinkedInAuth";
import NotFound from "./pages/NotFound";
import DeveloperMatch from "./pages/DeveloperMatch";
import DoctorMatch from "./pages/DoctorMatch";
import FounderMatch from "./pages/FounderMatch";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <AuthProvider>
      <ThemeProvider>
        <TooltipProvider>
          <Toaster />
          <Sonner />
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/signin" element={<SignIn />} />
              <Route path="/select-role" element={<SelectRole />} />
              <Route path="/auth/google" element={<GoogleAuth />} />
              <Route path="/auth/linkedin" element={<LinkedInAuth />} />
              <Route path="/match/developer" element={<DeveloperMatch />} />
              <Route path="/match/doctor" element={<DoctorMatch />} />
              <Route path="/match/founder" element={<FounderMatch />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </BrowserRouter>
        </TooltipProvider>
      </ThemeProvider>
    </AuthProvider>
  </QueryClientProvider>
);

export default App;
