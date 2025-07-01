
import React from "react";
import { Button } from "@/components/ui/button";
import { Star, FileText, CheckCircle, BarChart4, BookOpen, Calendar, Headset, Clock, Users, Shield, User, Target, GraduationCap, MapPin, DollarSign, MessageCircle, TrendingUp, Building2 } from "lucide-react";
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
          {/* Left Side - Updated Content */}
          <div className="relative z-10">
            <div className="relative bg-theme-gradient rounded-3xl p-8 max-w-[500px] overflow-hidden">
              {/* Abstract Background Patterns */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-white/10 to-transparent rounded-full blur-2xl"></div>
              <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-white/20 to-transparent rounded-full blur-xl"></div>
              <div className="absolute top-1/2 left-1/2 w-16 h-16 bg-gradient-to-br from-white/10 to-transparent rounded-full blur-lg"></div>
              
              {/* Main Content */}
              <div className="relative space-y-6">
                {/* Main Heading */}
                <div>
                  <h1 className="text-3xl md:text-4xl font-bold leading-tight text-white font-poppins">
                    Get a <span className="text-yellow-300">15 min 1-on-1</span>
                    <br />
                    Counselling Session
                    <br />
                    from our experts
                  </h1>
                </div>
                
                {/* Benefits List */}
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-purple-200 flex items-center justify-center flex-shrink-0 mt-1">
                      <BarChart4 className="w-3.5 h-3.5 text-purple-700" />
                    </div>
                    <span className="text-white text-sm leading-relaxed">
                      Analysis of your academic score, entrance rank, reservation category.
                    </span>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-purple-200 flex items-center justify-center flex-shrink-0 mt-1">
                      <Target className="w-3.5 h-3.5 text-purple-700" />
                    </div>
                    <span className="text-white text-sm leading-relaxed">
                      Positioning you in the 'realistic vs aspirational' college list.
                    </span>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-purple-200 flex items-center justify-center flex-shrink-0 mt-1">
                      <GraduationCap className="w-3.5 h-3.5 text-purple-700" />
                    </div>
                    <span className="text-white text-sm leading-relaxed">
                      Get help choosing colleges based on key parameters.
                    </span>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-purple-200 flex items-center justify-center flex-shrink-0 mt-1">
                      <MessageCircle className="w-3.5 h-3.5 text-purple-700" />
                    </div>
                    <span className="text-white text-sm leading-relaxed">
                      Transparent discussion on career options, costs, relocation, and alternatives.
                    </span>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-purple-200 flex items-center justify-center flex-shrink-0 mt-1">
                      <Headset className="w-3.5 h-3.5 text-purple-700" />
                    </div>
                    <span className="text-white text-sm leading-relaxed">
                      FAQs.
                    </span>
                  </div>
                </div>
                
                {/* CTA Button */}
                <div className="pt-4">
                  <Button className="bg-white text-purple-800 hover:bg-purple-50 rounded-full px-8 py-3 text-base font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200">
                    Book a Session
                  </Button>
                </div>
                
                {/* Trust Signal */}
                <div className="flex items-center gap-6 pt-4">
                  <div>
                    <div className="text-white text-2xl font-bold">10k+</div>
                    <div className="text-purple-100 text-xs">Sessions Conducted</div>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="flex items-center">
                      {[...Array(4)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 text-yellow-300 fill-current" />
                      ))}
                      <Star className="w-4 h-4 text-yellow-300 fill-current opacity-50" />
                    </div>
                    <div className="text-white text-sm">
                      <span className="font-semibold">4.9/5</span>
                      <span className="text-purple-100"> | 194 Reviews</span>
                    </div>
                  </div>
                </div>
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
