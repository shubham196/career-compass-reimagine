
import React from "react";
import { Button } from "@/components/ui/button";
import { Star, FileText, CheckCircle, BarChart4, BookOpen, Calendar, Headset, Clock, Users, Shield, User, Target, GraduationCap, MapPin, DollarSign, MessageCircle } from "lucide-react";
import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <div className="relative overflow-hidden bg-gradient-to-br from-white via-purple-50/30 to-purple-100/20 py-8 md:py-12">
      {/* Enhanced decorative shapes */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-gradient-to-br from-purple-200 to-purple-100 rounded-full -translate-x-1/3 -translate-y-1/3 opacity-60 blur-xl"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-br from-yellow-200 to-yellow-100 rounded-full translate-x-1/4 translate-y-1/4 opacity-60 blur-xl"></div>
      <div className="absolute top-1/2 right-1/4 w-32 h-32 bg-gradient-to-br from-pink-200 to-purple-200 rounded-full opacity-40 blur-lg"></div>
      
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Left Side - Main Hero Content */}
          <div className="relative z-10 max-w-[500px] space-y-6 px-6 md:px-8">
            {/* Top Badge */}
            <div className="inline-flex">
              <div className="bg-purple-100 text-purple-700 px-3 py-1.5 rounded-full text-xs font-semibold">
                Expert Counselling
              </div>
            </div>
            
            {/* Main Heading */}
            <div>
              <h1 className="text-3xl md:text-4xl font-bold leading-tight font-poppins">
                Get a{" "}
                <span className="text-purple-700 font-bold">
                  15 min 1-on-1
                </span>
                <br />
                <span className="text-gray-800">
                  Counselling Session
                </span>
              </h1>
            </div>
            
            {/* Subheading */}
            <div>
              <p className="text-gray-600 text-base font-medium leading-relaxed">
                Guidance to choose your best-fit college and career path.
              </p>
            </div>
            
            {/* Hero Illustration Placeholder */}
            <div className="flex justify-center py-4">
              <div className="w-24 h-24 rounded-2xl bg-gradient-to-br from-purple-100 to-purple-200 flex items-center justify-center shadow-lg">
                <div className="flex items-center gap-2">
                  <User className="w-8 h-8 text-purple-600" />
                  <MessageCircle className="w-6 h-6 text-purple-500" />
                </div>
              </div>
            </div>
            
            {/* Benefits List with Icons */}
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="w-5 h-5 rounded-full bg-purple-700 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <BarChart4 className="w-3 h-3 text-white" />
                </div>
                <p className="text-gray-700 text-sm leading-relaxed">
                  Personalised analysis of your score and rank
                </p>
              </div>
              
              <div className="flex items-start gap-3">
                <div className="w-5 h-5 rounded-full bg-purple-700 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Target className="w-3 h-3 text-white" />
                </div>
                <p className="text-gray-700 text-sm leading-relaxed">
                  Realistic vs aspirational college options
                </p>
              </div>
              
              <div className="flex items-start gap-3">
                <div className="w-5 h-5 rounded-full bg-purple-700 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <GraduationCap className="w-3 h-3 text-white" />
                </div>
                <p className="text-gray-700 text-sm leading-relaxed">
                  Expert insights on admission strategies
                </p>
              </div>
              
              <div className="flex items-start gap-3">
                <div className="w-5 h-5 rounded-full bg-purple-700 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <MapPin className="w-3 h-3 text-white" />
                </div>
                <p className="text-gray-700 text-sm leading-relaxed">
                  Transparent cost and relocation guidance
                </p>
              </div>
              
              <div className="flex items-start gap-3">
                <div className="w-5 h-5 rounded-full bg-purple-700 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <MessageCircle className="w-3 h-3 text-white" />
                </div>
                <p className="text-gray-700 text-sm leading-relaxed">
                  Quick FAQs to clarify your doubts
                </p>
              </div>
            </div>
            
            {/* Pricing Section */}
            <div className="flex items-center gap-3">
              <span className="text-base font-medium text-gray-400 line-through">₹1199</span>
              <div className="bg-yellow-200 text-gray-800 px-4 py-2 rounded-full font-bold text-lg">
                ₹999 only
              </div>
            </div>
            
            {/* Primary CTA Button */}
            <div>
              <Button className="bg-gradient-to-r from-purple-600 to-purple-800 hover:from-purple-700 hover:to-purple-900 text-white rounded-xl px-6 py-3 text-base font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200 w-full max-w-xs">
                <Calendar className="w-5 h-5 mr-2" />
                Book a Session Now
              </Button>
            </div>
            
            {/* Trust Signals */}
            <div className="space-y-3">
              <div className="flex items-center gap-4 text-sm text-gray-600">
                <div className="flex items-center gap-1">
                  <div className="flex">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star key={star} className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <span className="font-semibold ml-1">4.9/5</span>
                </div>
                <div className="flex items-center gap-1">
                  <Users className="w-4 h-4 text-purple-600" />
                  <span className="font-semibold">10k+ sessions conducted</span>
                </div>
              </div>
              
              <div className="bg-white/60 rounded-lg p-3 border border-purple-100">
                <p className="text-sm italic text-gray-700">
                  "Got into VIT Vellore with their counselling help"
                </p>
                <p className="text-xs text-gray-500 mt-1">
                  – Neha, JEE Rank 8721
                </p>
              </div>
            </div>
          </div>
          
          {/* Right Side - AI Choice Filling Report card */}
          <div className="relative z-10">
            <div className="w-full max-w-[450px] mx-auto bg-gradient-to-br from-purple-50 to-white rounded-3xl shadow-2xl p-6 transform transition-all duration-300 hover:shadow-3xl hover:scale-105 border border-purple-100">
              {/* Card Header */}
              <div className="mb-6 text-center">
                <h3 className="text-xl font-bold text-transparent bg-gradient-to-r from-purple-600 to-purple-800 bg-clip-text mb-2">
                  AI Choice Filling Report
                </h3>
                <p className="text-gray-600 text-sm">Your Personalized College List – Delivered Instantly</p>
              </div>
              
              {/* Features Grid */}
              <div className="grid grid-cols-1 gap-4 mb-6">
                {/* Feature 1 */}
                <div className="flex items-start gap-3 p-3 bg-white/50 rounded-xl hover:bg-white/70 transition-all duration-200">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-r from-purple-100 to-purple-200 flex items-center justify-center flex-shrink-0">
                    <CheckCircle className="w-5 h-5 text-purple-600" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-800 text-sm mb-1">Smart College Picks</h4>
                    <p className="text-xs text-gray-600">Based on rank, category & preferences</p>
                  </div>
                </div>
                
                {/* Feature 2 */}
                <div className="flex items-start gap-3 p-3 bg-white/50 rounded-xl hover:bg-white/70 transition-all duration-200">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-r from-purple-100 to-purple-200 flex items-center justify-center flex-shrink-0">
                    <BarChart4 className="w-5 h-5 text-purple-600" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-800 text-sm mb-1">Branch Insights</h4>
                    <p className="text-xs text-gray-600">Explore placement stats & future scope</p>
                  </div>
                </div>
                
                {/* Feature 3 */}
                <div className="flex items-start gap-3 p-3 bg-white/50 rounded-xl hover:bg-white/70 transition-all duration-200">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-r from-purple-100 to-purple-200 flex items-center justify-center flex-shrink-0">
                    <BookOpen className="w-5 h-5 text-purple-600" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-800 text-sm mb-1">Counselling Strategy</h4>
                    <p className="text-xs text-gray-600">Round-wise list to boost chances</p>
                  </div>
                </div>
                
                {/* Feature 4 */}
                <div className="flex items-start gap-3 p-3 bg-white/50 rounded-xl hover:bg-white/70 transition-all duration-200">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-r from-purple-100 to-purple-200 flex items-center justify-center flex-shrink-0">
                    <FileText className="w-5 h-5 text-purple-600" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-800 text-sm mb-1">Instant PDF</h4>
                    <p className="text-xs text-gray-600">Delivered to your email instantly</p>
                  </div>
                </div>
              </div>
              
              {/* Enhanced Offer Section */}
              <div className="mb-5 bg-gradient-to-r from-yellow-100 to-yellow-200 p-4 rounded-xl flex items-center justify-between border border-yellow-300">
                <p className="font-semibold text-yellow-800 text-base">Limited Time Offer</p>
                <div className="w-14 h-14 bg-gradient-to-r from-yellow-400 to-yellow-500 rounded-full flex items-center justify-center shadow-lg">
                  <div className="text-center leading-tight">
                    <span className="text-xs font-bold block text-yellow-900">ONLY</span>
                    <span className="text-sm font-bold text-yellow-900">₹499</span>
                  </div>
                </div>
              </div>
              
              {/* Enhanced CTA Section */}
              <div className="text-center">
                <p className="font-bold text-base mb-3 text-transparent bg-gradient-to-r from-purple-600 to-purple-800 bg-clip-text">
                  Don't Guess Your College – Predict It!
                </p>
                <Link to="/ai-choice-filling">
                  <Button className="w-full bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 text-white font-bold py-3 px-5 rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200 text-base">
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
