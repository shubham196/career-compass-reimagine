
import React from "react";
import { Brain, Target, CheckCircle, Clock } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import WhyAIChoiceFillingSVG from "@/components/WhyAIChoiceFillingSVG";

const WhyAISection = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-8">
            <Badge className="mb-2 px-3 py-1 bg-theme-primary/20 text-theme-secondary border-none">WHY?</Badge>
            <h2 className="text-3xl font-bold text-gray-900">Why Students Trust Our AI-Powered College Report</h2>
          </div>
          
          <div className="flex flex-col md:flex-row gap-16 items-center">
            <div className="md:w-1/2 order-2 md:order-1">
              <div className="relative h-80 md:h-96">
                <WhyAIChoiceFillingSVG />
              </div>
            </div>
            <div className="md:w-1/2 order-1 md:order-2">
              <div className="space-y-6">
                <div className="flex items-start gap-4 bg-purple-50 p-4 rounded-lg transform transition-all duration-300 hover:scale-105 hover:shadow-md">
                  <div className="mt-1 bg-purple-100 p-2 rounded-lg">
                    <Brain className="w-6 h-6 text-theme-primary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-theme-secondary">Guidance You Can Trust</h3>
                    <p className="text-gray-600">No more confusion. Get college & branch choices arranged by AI experts who understand your rank, category, and preferences.</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4 bg-blue-50 p-4 rounded-lg transform transition-all duration-300 hover:scale-105 hover:shadow-md">
                  <div className="mt-1 bg-blue-100 p-2 rounded-lg">
                    <Target className="w-6 h-6 text-theme-primary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-theme-secondary">Smart Rank-Based Matching</h3>
                    <p className="text-gray-600">Instantly find the best-fit colleges for your marks using data from past cutoffs, seat trends & quota rules.</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4 bg-green-50 p-4 rounded-lg transform transition-all duration-300 hover:scale-105 hover:shadow-md">
                  <div className="mt-1 bg-green-100 p-2 rounded-lg">
                    <CheckCircle className="w-6 h-6 text-theme-primary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-theme-secondary">Boost Your Admission Chances</h3>
                    <p className="text-gray-600">We help you prioritize colleges in the right order – just like expert counsellors do – so you never waste a seat choice.</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4 bg-amber-50 p-4 rounded-lg transform transition-all duration-300 hover:scale-105 hover:shadow-md">
                  <div className="mt-1 bg-amber-100 p-2 rounded-lg">
                    <Clock className="w-6 h-6 text-theme-primary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-theme-secondary">Stress-Free, Fast & Accurate</h3>
                    <p className="text-gray-600">Skip hours of research. Download your ready-to-use counselling report and focus on exam prep or college planning.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyAISection;
