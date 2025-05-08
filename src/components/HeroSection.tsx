
import React from "react";
import { Button } from "@/components/ui/button";
import { Calendar, Star } from "lucide-react";

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
          
          <div className="relative z-10">
            <div className="relative">
              <div className="bg-white rounded-2xl shadow-xl p-6 border border-gray-100 max-w-md mx-auto">
                <div className="flex justify-between items-center mb-6">
                  <h3 className="text-xl font-semibold text-purple-700">FREE WEBINAR</h3>
                  <span className="text-sm text-gray-500">Seats Filling Fast!</span>
                </div>
                
                <div className="mb-6">
                  <Calendar className="w-full h-48 mb-4 text-purple-600 opacity-90" />
                  <p className="text-center text-gray-700 mb-2">
                    Save Your Seat Today
                  </p>
                  <p className="text-center text-sm text-gray-500">
                    Join 2000+ students for FREE career guidance
                  </p>
                </div>
                
                <Button className="w-full bg-purple-600 hover:bg-purple-700 text-white rounded-full py-5 text-lg">
                  Register Now
                </Button>
              </div>
              
              <div className="absolute -top-3 -right-3 w-16 h-16 bg-yellow-300 rounded-full flex items-center justify-center animate-pulse-slow">
                <span className="text-xs font-bold text-purple-900 text-center leading-tight">FREE<br />ACCESS</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
