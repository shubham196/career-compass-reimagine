
import React from "react";
import { Button } from "@/components/ui/button";
import { FileText, CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";

const AIChoiceFillingHero = () => {
  return (
    <div className="w-full bg-gradient-to-r from-[#A855F7] to-[#9333EA] py-20 px-6 relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-20 left-10 w-32 h-32 rounded-full bg-white/10 blur-2xl"></div>
      <div className="absolute bottom-10 right-20 w-24 h-24 rounded-full bg-white/5 blur-xl"></div>
      <div className="absolute top-1/2 left-3/4 w-12 h-12 rounded-full bg-white/10 animate-pulse"></div>
      
      <div className="container mx-auto max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div>
            {/* Badge */}
            <div className="inline-block px-3 py-1.5 bg-[#E0E7FF] text-[#3730A3] rounded-full text-xs font-medium mb-6">
              12th Grade Counselling
            </div>
            
            {/* Main Heading */}
            <h1 className="text-4xl md:text-5xl font-extrabold text-white leading-tight mb-4 max-w-[700px]">
              AI-Generated College Choice Filling Report
            </h1>
            
            {/* Subheading */}
            <p className="text-[#F3E8FF] text-lg leading-relaxed mb-8 max-w-[600px]">
              Unlock your dream college with smart, data-driven recommendations tailored to your rank
            </p>
            
            <Button className="bg-white text-[#7C3AED] hover:bg-white/90 rounded-full px-6 py-6 text-lg font-medium">
              Generate My College Report Now
            </Button>
          </div>
          
          {/* Card Section */}
          <div className="relative">
            <div className="bg-[#7C3AED] rounded-3xl p-8 shadow-lg max-w-[500px] mx-auto">
              {/* Icon Box */}
              <div className="relative w-24 h-24 mx-auto mb-6">
                <div className="w-24 h-24 rounded-2xl bg-purple-400/30 flex items-center justify-center">
                  <FileText className="w-12 h-12 text-white" />
                </div>
                
                {/* Price Badge */}
                <div className="absolute -top-3 -right-3 w-14 h-14 bg-[#FACC15] rounded-full flex items-center justify-center shadow-md">
                  <div className="text-center leading-tight">
                    <span className="text-xs font-bold block">₹499</span>
                    <span className="text-[10px] font-bold">ONLY</span>
                  </div>
                </div>
              </div>
              
              {/* Feature List */}
              <div className="space-y-4 mb-6">
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-[#10B981]/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <CheckCircle className="w-4 h-4 text-[#10B981]" />
                  </div>
                  <p className="text-white text-base">
                    Personalized college recommendations based on your rank & category
                  </p>
                </div>
                
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-[#10B981]/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <CheckCircle className="w-4 h-4 text-[#10B981]" />
                  </div>
                  <p className="text-white text-base">
                    Branch-specific insights & placement stats
                  </p>
                </div>
                
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-[#10B981]/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <CheckCircle className="w-4 h-4 text-[#10B981]" />
                  </div>
                  <p className="text-white text-base">
                    Round-by-round counselling strategy
                  </p>
                </div>
                
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-[#10B981]/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <CheckCircle className="w-4 h-4 text-[#10B981]" />
                  </div>
                  <p className="text-white text-base">
                    Instant PDF via email after payment
                  </p>
                </div>
              </div>
              
              <Button className="w-full bg-white text-[#7C3AED] hover:bg-white/90 rounded-full py-4 text-base font-medium">
                Generate My College Report Now
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AIChoiceFillingHero;
