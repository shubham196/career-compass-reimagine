
import React from "react";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import FeaturesSection from "@/components/FeaturesSection";
import IqTestSection from "@/components/IqTestSection";
import NewsSection from "@/components/NewsSection";
import CollegesSection from "@/components/CollegesSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import FaqSection from "@/components/FaqSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import StickyFooter from "@/components/StickyFooter";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <HeroSection />
      <FeaturesSection />
      <IqTestSection />
      <NewsSection />
      <CollegesSection />
      <TestimonialsSection />
      <FaqSection />
      <ContactSection />
      <Footer />
      <StickyFooter />
    </div>
  );
};

export default Index;
