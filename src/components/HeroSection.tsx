
import React from "react";
import { Button } from "@/components/ui/button";
import { Star, FileText, CheckCircle, BarChart4, BookOpen } from "lucide-react";
import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <div className="relative overflow-hidden bg-white py-12 md:py-20">
      {/* Decorative shapes */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-purple-100 rounded-full -translate-x-1/2 -translate-y-1/2 opacity-70"></div>
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-yellow-100 rounded-full translate-x-1/4 translate-y-1/4 opacity-70"></div>
      
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="relative z-10">
            <div className="inline-block px-3 py-1 mb-5 bg-purple-100 text-purple-700 rounded-full text-sm font-medium">
              #1 Career Counselling Platform
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-gray-900 leading-tight">
              Complete <span className="text-purple-600">Handholding</span> for Career Counselling Guidance
            </h1>
            <p className="text-lg mb-8 text-gray-600 max-w-lg">
              We guide every student through all stages of career planning, from self-assessment to admission guidance.
            </p>
            
            <div className="flex flex-wrap items-center gap-3 mb-8">
              <div className="flex items-center gap-1">
                <div className="flex">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star key={star} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <span className="text-sm font-medium">4.9/5</span>
              </div>
              <div className="h-4 w-0.5 bg-gray-300"></div>
              <div className="flex items-center">
                <span className="text-sm font-medium">Trusted by 250k+ students</span>
              </div>
              <div className="h-4 w-0.5 bg-gray-300"></div>
              <div className="flex items-center gap-1">
                <div className="flex -space-x-2">
                  {[1, 2, 3, 4].map((item) => (
                    <div key={item} className="w-6 h-6 rounded-full bg-gray-200 border-2 border-white"></div>
                  ))}
                </div>
                <span className="text-sm font-medium">Google</span>
                <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
              </div>
            </div>
            
            <div className="flex flex-wrap gap-4">
              <Button className="bg-purple-600 hover:bg-purple-700 text-white rounded-full px-8 py-6 text-lg">
                Explore Features
              </Button>
              <Button variant="outline" className="rounded-full px-8 py-6 text-lg border-gray-300 hover:border-purple-600 hover:text-purple-600">
                Book a Session
              </Button>
            </div>
          </div>
          
          {/* AI Choice Filling Report card based on Figma specifications */}
          <div className="relative z-10">
            <div className="w-full max-w-[480px] mx-auto bg-[#F9F5FF] rounded-2xl shadow-[0px_4px_16px_rgba(0,0,0,0.05)] p-6 transform transition-all duration-300 hover:shadow-lg">
              {/* Card Header */}
              <div className="mb-6">
                <h3 className="text-[22px] font-semibold text-[#7E22CE] mb-1 font-inter">AI Choice Filling Report</h3>
                <p className="text-[14px] text-[#6B7280]">Your Personalized College List – Delivered Instantly</p>
              </div>
              
              {/* Features Grid */}
              <div className="grid grid-cols-2 gap-5 mb-6">
                {/* Feature 1 */}
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-full bg-[#F3E8FF] flex items-center justify-center flex-shrink-0">
                    <CheckCircle className="w-5 h-5 text-[#9333EA]" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-800 text-sm">Smart College Picks</h4>
                    <p className="text-xs text-gray-500">Based on rank, category & preferences</p>
                  </div>
                </div>
                
                {/* Feature 2 */}
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-full bg-[#F3E8FF] flex items-center justify-center flex-shrink-0">
                    <BarChart4 className="w-5 h-5 text-[#9333EA]" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-800 text-sm">Branch Insights</h4>
                    <p className="text-xs text-gray-500">Explore placement stats & future scope</p>
                  </div>
                </div>
                
                {/* Feature 3 */}
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-full bg-[#F3E8FF] flex items-center justify-center flex-shrink-0">
                    <BookOpen className="w-5 h-5 text-[#9333EA]" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-800 text-sm">Counselling Strategy</h4>
                    <p className="text-xs text-gray-500">Round-wise list to boost chances</p>
                  </div>
                </div>
                
                {/* Feature 4 */}
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-full bg-[#F3E8FF] flex items-center justify-center flex-shrink-0">
                    <FileText className="w-5 h-5 text-[#9333EA]" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-800 text-sm">Instant PDF</h4>
                    <p className="text-xs text-gray-500">Delivered to your email instantly</p>
                  </div>
                </div>
              </div>
              
              {/* Offer Section */}
              <div className="mb-6 bg-[#FEF9C3] p-4 rounded-lg flex items-center justify-between">
                <p className="font-medium text-[16px] text-[#92400E]">Limited Time Offer – Just ₹499</p>
                <div className="w-[60px] h-[60px] bg-[#FACC15] rounded-full flex items-center justify-center shadow-md">
                  <div className="text-center leading-tight">
                    <span className="text-xs font-bold block">ONLY</span>
                    <span className="text-sm font-bold">₹499</span>
                  </div>
                </div>
              </div>
              
              {/* CTA Section */}
              <div>
                <p className="text-center font-bold text-[16px] mb-4" style={{ background: "linear-gradient(90deg, #BB53CC, #8E24AA)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
                  Don't Guess Your College – Predict It!
                </p>
                <Link to="/ai-choice-filling">
                  <Button className="w-full bg-[#8B5CF6] hover:bg-[#7C3AED] text-white font-bold py-3 px-5 rounded-lg shadow-md text-[16px]">
                    🎯 Get My AI Report Now
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
