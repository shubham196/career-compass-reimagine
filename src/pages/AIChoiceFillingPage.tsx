
import React from "react";
import Navbar from "@/components/Navbar";
import AIChoiceFillingHero from "@/components/AIChoiceFillingHero";
import SampleAIReportSection from "@/components/SampleAIReportSection";
import Footer from "@/components/Footer";

const AIChoiceFillingPage = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <AIChoiceFillingHero />
      <SampleAIReportSection />
      <Footer />
    </div>
  );
};

export default AIChoiceFillingPage;
