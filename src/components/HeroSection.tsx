
import React from "react";
import { Button } from "@/components/ui/button";
import { Star, FileText, CheckCircle, BarChart4, BookOpen, Calendar, Headset, Clock, Users, Shield } from "lucide-react";
import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <div className="relative overflow-hidden bg-gradient-to-br from-purple-50 via-white to-lavender-50 py-16 md:py-24">
      {/* Enhanced decorative shapes */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-gradient-to-br from-purple-200 to-purple-100 rounded-full -translate-x-1/3 -translate-y-1/3 opacity-60 blur-xl"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-br from-yellow-200 to-yellow-100 rounded-full translate-x-1/4 translate-y-1/4 opacity-60 blur-xl"></div>
      <div className="absolute top-1/2 right-1/4 w-32 h-32 bg-gradient-to-br from-pink-200 to-purple-200 rounded-full opacity-40 blur-lg"></div>
      
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div className="relative z-10">
            {/* Enhanced main heading */}
            <div className="mb-8">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                <span className="text-gray-900">Get a </span>
                <span className="bg-gradient-to-r from-purple-600 to-purple-800 text-white px-4 py-2 rounded-2xl inline-block transform hover:scale-105 transition-transform duration-200">
                  15 min 1-on-1
                </span>
                <br />
                <span className="bg-gradient-to-r from-purple-600 to-purple-800 bg-clip-text text-transparent font-extrabold">
                  Counselling Session
                </span>
                <br />
                <span className="text-gray-700 text-3xl md:text-4xl lg:text-5xl font-semibold">
                  from our experts
                </span>
              </h1>
            </div>
            
            {/* Enhanced service features list with icons */}
            <div className="space-y-5 mb-10">
              <div className="flex items-start gap-4 group">
                <div className="w-10 h-10 rounded-full bg-gradient-to-r from-purple-100 to-purple-200 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-200">
                  <BarChart4 className="w-5 h-5 text-purple-600" />
                </div>
                <p className="text-lg text-gray-700 leading-relaxed">
                  <strong className="text-gray-900">Personalised analysis</strong> of your academic scores, entrance rank, and reservation category.
                </p>
              </div>
              
              <div className="flex items-start gap-4 group">
                <div className="w-10 h-10 rounded-full bg-gradient-to-r from-purple-100 to-purple-200 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-200">
                  <CheckCircle className="w-5 h-5 text-purple-600" />
                </div>
                <p className="text-lg text-gray-700 leading-relaxed">
                  <strong className="text-gray-900">Realistic vs aspirational</strong> college list guidance to optimize your choices.
                </p>
              </div>
              
              <div className="flex items-start gap-4 group">
                <div className="w-10 h-10 rounded-full bg-gradient-to-r from-purple-100 to-purple-200 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-200">
                  <BookOpen className="w-5 h-5 text-purple-600" />
                </div>
                <p className="text-lg text-gray-700 leading-relaxed">
                  <strong className="text-gray-900">Expert help</strong> choosing colleges based on key parameters and your preferences.
                </p>
              </div>
              
              <div className="flex items-start gap-4 group">
                <div className="w-10 h-10 rounded-full bg-gradient-to-r from-purple-100 to-purple-200 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-200">
                  <Shield className="w-5 h-5 text-purple-600" />
                </div>
                <p className="text-lg text-gray-700 leading-relaxed">
                  <strong className="text-gray-900">Transparent discussion</strong> on career options, costs, relocation, and alternatives.
                </p>
              </div>
              
              <div className="flex items-start gap-4 group">
                <div className="w-10 h-10 rounded-full bg-gradient-to-r from-purple-100 to-purple-200 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-200">
                  <Headset className="w-5 h-5 text-purple-600" />
                </div>
                <p className="text-lg text-gray-700 leading-relaxed">
                  <strong className="text-gray-900">Get all your FAQs</strong> answered by our experienced counsellors.
                </p>
              </div>
            </div>
            
            {/* Enhanced pricing and CTA */}
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-white/20 mb-8">
              <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
                <div className="text-center sm:text-left">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-2xl font-bold text-gray-400 line-through">₹1199</span>
                    <div className="bg-gradient-to-r from-yellow-400 to-yellow-500 text-black px-4 py-2 rounded-full font-bold text-xl shadow-md">
                      ₹999 <span className="text-sm font-medium">only</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 text-red-600 font-medium">
                    <Clock className="w-4 h-4" />
                    <span className="text-sm">Limited slots available today</span>
                  </div>
                </div>
                
                <Button className="bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 text-white rounded-full px-8 py-6 text-lg font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200 group">
                  <Calendar className="w-5 h-5 mr-2 group-hover:animate-bounce" />
                  Book Your Session Now
                </Button>
              </div>
            </div>
            
            {/* Enhanced trust indicators */}
            <div className="flex flex-wrap items-center gap-6 text-gray-600">
              <div className="flex items-center gap-2">
                <div className="flex">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star key={star} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <span className="font-semibold text-gray-900">4.9/5</span>
              </div>
              <div className="h-6 w-0.5 bg-gray-300"></div>
              <div className="flex items-center gap-2">
                <Users className="w-5 h-5 text-purple-600" />
                <span className="font-semibold text-gray-900">Trusted by 250k+ students</span>
              </div>
            </div>
          </div>
          
          {/* Enhanced AI Choice Filling Report card */}
          <div className="relative z-10">
            <div className="w-full max-w-[500px] mx-auto bg-gradient-to-br from-purple-50 to-white rounded-3xl shadow-2xl p-8 transform transition-all duration-300 hover:shadow-3xl hover:scale-105 border border-purple-100">
              {/* Card Header */}
              <div className="mb-8 text-center">
                <h3 className="text-2xl font-bold text-transparent bg-gradient-to-r from-purple-600 to-purple-800 bg-clip-text mb-2">
                  AI Choice Filling Report
                </h3>
                <p className="text-gray-600 text-sm">Your Personalized College List – Delivered Instantly</p>
              </div>
              
              {/* Features Grid */}
              <div className="grid grid-cols-1 gap-6 mb-8">
                {/* Feature 1 */}
                <div className="flex items-start gap-4 p-4 bg-white/50 rounded-xl hover:bg-white/70 transition-all duration-200">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-purple-100 to-purple-200 flex items-center justify-center flex-shrink-0">
                    <CheckCircle className="w-6 h-6 text-purple-600" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-800 text-base mb-1">Smart College Picks</h4>
                    <p className="text-sm text-gray-600">Based on rank, category & preferences</p>
                  </div>
                </div>
                
                {/* Feature 2 */}
                <div className="flex items-start gap-4 p-4 bg-white/50 rounded-xl hover:bg-white/70 transition-all duration-200">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-purple-100 to-purple-200 flex items-center justify-center flex-shrink-0">
                    <BarChart4 className="w-6 h-6 text-purple-600" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-800 text-base mb-1">Branch Insights</h4>
                    <p className="text-sm text-gray-600">Explore placement stats & future scope</p>
                  </div>
                </div>
                
                {/* Feature 3 */}
                <div className="flex items-start gap-4 p-4 bg-white/50 rounded-xl hover:bg-white/70 transition-all duration-200">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-purple-100 to-purple-200 flex items-center justify-center flex-shrink-0">
                    <BookOpen className="w-6 h-6 text-purple-600" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-800 text-base mb-1">Counselling Strategy</h4>
                    <p className="text-sm text-gray-600">Round-wise list to boost chances</p>
                  </div>
                </div>
                
                {/* Feature 4 */}
                <div className="flex items-start gap-4 p-4 bg-white/50 rounded-xl hover:bg-white/70 transition-all duration-200">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-purple-100 to-purple-200 flex items-center justify-center flex-shrink-0">
                    <FileText className="w-6 h-6 text-purple-600" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-800 text-base mb-1">Instant PDF</h4>
                    <p className="text-sm text-gray-600">Delivered to your email instantly</p>
                  </div>
                </div>
              </div>
              
              {/* Enhanced Offer Section */}
              <div className="mb-6 bg-gradient-to-r from-yellow-100 to-yellow-200 p-5 rounded-xl flex items-center justify-between border border-yellow-300">
                <p className="font-semibold text-yellow-800 text-lg">Limited Time Offer</p>
                <div className="w-16 h-16 bg-gradient-to-r from-yellow-400 to-yellow-500 rounded-full flex items-center justify-center shadow-lg">
                  <div className="text-center leading-tight">
                    <span className="text-xs font-bold block text-yellow-900">ONLY</span>
                    <span className="text-sm font-bold text-yellow-900">₹499</span>
                  </div>
                </div>
              </div>
              
              {/* Enhanced CTA Section */}
              <div className="text-center">
                <p className="font-bold text-lg mb-4 text-transparent bg-gradient-to-r from-purple-600 to-purple-800 bg-clip-text">
                  Don't Guess Your College – Predict It!
                </p>
                <Link to="/ai-choice-filling">
                  <Button className="w-full bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 text-white font-bold py-4 px-6 rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200 text-lg">
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
