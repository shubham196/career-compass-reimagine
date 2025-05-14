
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import IqTestPage from "./pages/IqTestPage";
import CareerCounsellorPage from "./pages/CareerCounsellorPage";
import IqTest10thGradePage from "./pages/IqTest10thGradePage";
import IqTest11th12thGradePage from "./pages/IqTest11th12thGradePage";
import AIChoiceFillingPage from "./pages/AIChoiceFillingPage";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/iq-test" element={<IqTestPage />} />
          <Route path="/iq-test-10th-grade" element={<IqTest10thGradePage />} />
          <Route path="/iq-test-11th-12th-grade" element={<IqTest11th12thGradePage />} />
          <Route path="/career-counsellor" element={<CareerCounsellorPage />} />
          <Route path="/ai-choice-filling" element={<AIChoiceFillingPage />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
