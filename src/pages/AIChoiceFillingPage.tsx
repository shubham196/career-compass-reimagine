
import React from "react";
import Navbar from "@/components/Navbar";
import AIChoiceFillingHero from "@/components/AIChoiceFillingHero";
import SampleAIReportSection from "@/components/SampleAIReportSection";
import Footer from "@/components/Footer";
import StickyFooter from "@/components/StickyFooter";

const AIChoiceFillingPage = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <AIChoiceFillingHero />
      <SampleAIReportSection />
      <Footer />
      <StickyFooter />
    </div>
  );
};

export default AIChoiceFillingPage;
