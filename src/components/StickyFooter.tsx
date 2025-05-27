
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Drawer, DrawerContent, DrawerTrigger } from '@/components/ui/drawer';
import { GraduationCap, Stethoscope, Wrench, Sparkles, Brain, Zap, Star } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const StickyFooter = () => {
  const [isDesktopExpanded, setIsDesktopExpanded] = useState(false);
  const navigate = useNavigate();

  const handlePredictClick = () => {
    setIsDesktopExpanded(!isDesktopExpanded);
  };

  const handleEngineeringClick = () => {
    navigate('/iq-test');
    setIsDesktopExpanded(false);
  };

  const handleMedicalClick = () => {
    navigate('/iq-test');
    setIsDesktopExpanded(false);
  };

  const handleAIReportClick = () => {
    navigate('/ai-choice-filling');
  };

  return (
    <>
      {/* Desktop Footer with Enhanced Design */}
      <div className="hidden md:block fixed bottom-0 left-0 right-0 z-50">
        {/* Gradient Background with Glass Effect */}
        <div className="bg-gradient-to-r from-white/95 via-purple-50/95 to-white/95 backdrop-blur-xl border-t border-purple-200/60 shadow-[0_-20px_40px_-5px_rgba(139,92,246,0.15)]">
          <div className="container mx-auto px-8 py-6">
            <div className="flex items-center justify-center gap-12">
              
              {/* Left Button - Predict My College with Enhanced Styling */}
              <div className="relative">
                <Button
                  onClick={handlePredictClick}
                  className="group relative bg-gradient-to-r from-purple-600 via-purple-700 to-indigo-700 hover:from-purple-700 hover:via-purple-800 hover:to-indigo-800 text-white px-12 py-5 rounded-2xl font-bold text-lg shadow-[0_8px_30px_rgba(139,92,246,0.4)] hover:shadow-[0_12px_40px_rgba(139,92,246,0.6)] transition-all duration-500 hover:scale-105 hover:-translate-y-2 overflow-hidden min-h-[64px]"
                  aria-expanded={isDesktopExpanded}
                  aria-label="Predict My College - Choose your field"
                >
                  {/* Animated gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                  
                  {/* Glowing border effect */}
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-purple-400 to-indigo-400 opacity-0 group-hover:opacity-30 blur-sm transition-opacity duration-500"></div>
                  
                  <div className="relative z-10 flex items-center">
                    <GraduationCap className="mr-4 h-7 w-7 group-hover:rotate-12 group-hover:scale-110 transition-all duration-500" />
                    <span>Predict My College</span>
                    <Sparkles className="ml-3 h-5 w-5 text-yellow-300 opacity-0 group-hover:opacity-100 animate-pulse transition-all duration-500" />
                  </div>
                </Button>
                
                {/* Enhanced Desktop Expansion Panel */}
                <div className={`absolute bottom-full right-0 mb-6 transition-all duration-700 ease-out ${
                  isDesktopExpanded 
                    ? 'opacity-100 transform translate-y-0 scale-100 translate-x-0' 
                    : 'opacity-0 transform translate-y-8 scale-95 translate-x-4 pointer-events-none'
                }`}>
                  <div className="relative bg-white/98 backdrop-blur-xl rounded-3xl shadow-[0_20px_60px_rgba(139,92,246,0.25)] border border-purple-200/50 p-8 min-w-[320px]">
                    {/* Animated border glow */}
                    <div className="absolute inset-0 bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 rounded-3xl opacity-20 blur-sm animate-pulse"></div>
                    
                    <div className="relative z-10 space-y-6">
                      <div className="text-center">
                        <h3 className="text-2xl font-bold bg-gradient-to-r from-purple-600 via-pink-600 to-purple-600 bg-clip-text text-transparent mb-2">
                          Choose Your Path 🚀
                        </h3>
                        <p className="text-gray-600 text-sm font-medium">Select your field of interest</p>
                      </div>
                      
                      <Button
                        onClick={handleEngineeringClick}
                        className="w-full group bg-gradient-to-r from-blue-500 via-blue-600 to-cyan-600 hover:from-blue-600 hover:via-blue-700 hover:to-cyan-700 text-white py-5 rounded-2xl font-bold text-lg shadow-[0_8px_25px_rgba(59,130,246,0.4)] hover:shadow-[0_12px_35px_rgba(59,130,246,0.6)] transition-all duration-400 hover:scale-105 hover:-translate-y-1 min-h-[60px]"
                        aria-label="Engineering IQ Test"
                      >
                        <Wrench className="mr-4 h-6 w-6 group-hover:rotate-12 transition-transform duration-300" />
                        <span className="flex-1">Engineering</span>
                        <Zap className="ml-4 h-5 w-5 opacity-0 group-hover:opacity-100 text-yellow-300 transition-all duration-300" />
                      </Button>
                      
                      <Button
                        onClick={handleMedicalClick}
                        className="w-full group bg-gradient-to-r from-green-500 via-emerald-600 to-teal-600 hover:from-green-600 hover:via-emerald-700 hover:to-teal-700 text-white py-5 rounded-2xl font-bold text-lg shadow-[0_8px_25px_rgba(34,197,94,0.4)] hover:shadow-[0_12px_35px_rgba(34,197,94,0.6)] transition-all duration-400 hover:scale-105 hover:-translate-y-1 min-h-[60px]"
                        aria-label="Medical IQ Test"
                      >
                        <Stethoscope className="mr-4 h-6 w-6 group-hover:rotate-12 transition-transform duration-300" />
                        <span className="flex-1">Medical</span>
                        <Star className="ml-4 h-5 w-5 opacity-0 group-hover:opacity-100 text-yellow-300 transition-all duration-300" />
                      </Button>
                    </div>
                  </div>
                </div>
              </div>

              {/* Enhanced Animated Centerpiece */}
              <div className="flex items-center justify-center px-6">
                <div className="relative">
                  {/* Main animated brain with enhanced effects */}
                  <div className="relative">
                    <Brain className="h-10 w-10 text-purple-600 animate-pulse" />
                    <GraduationCap className="absolute -top-2 -right-2 h-6 w-6 text-yellow-500 animate-bounce" />
                    
                    {/* Orbiting elements */}
                    <div className="absolute inset-0 animate-spin" style={{ animationDuration: '8s' }}>
                      <Sparkles className="absolute -top-3 left-1/2 h-3 w-3 text-pink-400 opacity-70" />
                    </div>
                    <div className="absolute inset-0 animate-spin" style={{ animationDuration: '12s', animationDirection: 'reverse' }}>
                      <Star className="absolute -bottom-3 right-1/2 h-2 w-2 text-blue-400 opacity-60" />
                    </div>
                  </div>
                  
                  {/* Enhanced pulsing rings */}
                  <div className="absolute inset-0 h-10 w-10 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full animate-ping opacity-20"></div>
                  <div className="absolute inset-0 h-10 w-10 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-full animate-ping opacity-15" style={{ animationDelay: '1s' }}></div>
                  <div className="absolute inset-0 h-10 w-10 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full animate-ping opacity-10" style={{ animationDelay: '2s' }}></div>
                </div>
              </div>

              {/* Right Button - AI Choice Filling Report with Enhanced Styling */}
              <Button
                onClick={handleAIReportClick}
                className="group relative bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 hover:from-yellow-500 hover:via-orange-600 hover:to-red-600 text-black px-12 py-5 rounded-2xl font-bold text-lg shadow-[0_8px_30px_rgba(245,158,11,0.4)] hover:shadow-[0_12px_40px_rgba(245,158,11,0.6)] transition-all duration-500 hover:scale-105 hover:-translate-y-2 overflow-hidden min-h-[64px]"
                aria-label="Get AI Choice Filling Report"
              >
                {/* Animated gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/30 to-white/0 -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                
                {/* Glowing border effect */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-yellow-300 to-orange-300 opacity-0 group-hover:opacity-40 blur-sm transition-opacity duration-500"></div>
                
                <div className="relative z-10 flex items-center">
                  <Brain className="mr-4 h-7 w-7 group-hover:scale-110 transition-transform duration-500" />
                  <span>AI Choice Filling Report</span>
                  <Zap className="ml-3 h-5 w-5 text-white opacity-0 group-hover:opacity-100 animate-pulse transition-all duration-500" />
                </div>
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Enhanced Mobile Footer */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 z-50">
        <div className="bg-gradient-to-r from-white/98 via-purple-50/98 to-white/98 backdrop-blur-xl border-t border-purple-200/60 shadow-[0_-15px_35px_rgba(139,92,246,0.15)]">
          <div className="px-6 py-6">
            <div className="flex items-center justify-center gap-4">
              
              {/* Mobile Predict Button with Enhanced Drawer */}
              <Drawer>
                <DrawerTrigger asChild>
                  <Button
                    className="group relative bg-gradient-to-r from-purple-600 to-indigo-700 hover:from-purple-700 hover:to-indigo-800 text-white px-8 py-5 rounded-2xl font-bold flex-1 min-h-[60px] shadow-[0_6px_25px_rgba(139,92,246,0.4)] hover:shadow-[0_8px_30px_rgba(139,92,246,0.6)] transition-all duration-400 hover:scale-105 overflow-hidden"
                    aria-label="Predict My College - Choose your field"
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 -skew-x-12 -translate-x-full group-active:translate-x-full transition-transform duration-500"></div>
                    <div className="relative z-10 flex items-center justify-center">
                      <GraduationCap className="mr-3 h-6 w-6 group-hover:rotate-12 transition-transform duration-300" />
                      <span>Predict My College</span>
                    </div>
                  </Button>
                </DrawerTrigger>
                <DrawerContent className="pb-10 bg-gradient-to-b from-white/98 to-purple-50/98 backdrop-blur-xl border-t-2 border-purple-200/50">
                  <div className="px-8 py-10 space-y-8">
                    <div className="text-center">
                      <h3 className="text-3xl font-bold bg-gradient-to-r from-purple-600 via-pink-600 to-purple-600 bg-clip-text text-transparent mb-3">
                        Choose Your Path 🚀
                      </h3>
                      <p className="text-gray-600 text-base font-medium">Select your field of interest to begin</p>
                    </div>
                    
                    <Button
                      onClick={handleEngineeringClick}
                      className="w-full group bg-gradient-to-r from-blue-500 via-blue-600 to-cyan-600 hover:from-blue-600 hover:via-blue-700 hover:to-cyan-700 text-white py-6 rounded-2xl font-bold text-xl shadow-[0_8px_25px_rgba(59,130,246,0.4)] hover:shadow-[0_12px_35px_rgba(59,130,246,0.6)] transition-all duration-400 hover:scale-105 min-h-[68px]"
                      aria-label="Engineering IQ Test"
                    >
                      <Wrench className="mr-4 h-7 w-7 group-hover:rotate-12 transition-transform duration-300" />
                      <span className="flex-1">Engineering</span>
                      <Zap className="ml-4 h-6 w-6 opacity-0 group-hover:opacity-100 text-yellow-300 transition-all duration-300" />
                    </Button>
                    
                    <Button
                      onClick={handleMedicalClick}
                      className="w-full group bg-gradient-to-r from-green-500 via-emerald-600 to-teal-600 hover:from-green-600 hover:via-emerald-700 hover:to-teal-700 text-white py-6 rounded-2xl font-bold text-xl shadow-[0_8px_25px_rgba(34,197,94,0.4)] hover:shadow-[0_12px_35px_rgba(34,197,94,0.6)] transition-all duration-400 hover:scale-105 min-h-[68px]"
                      aria-label="Medical IQ Test"
                    >
                      <Stethoscope className="mr-4 h-7 w-7 group-hover:rotate-12 transition-transform duration-300" />
                      <span className="flex-1">Medical</span>
                      <Star className="ml-4 h-6 w-6 opacity-0 group-hover:opacity-100 text-yellow-300 transition-all duration-300" />
                    </Button>
                  </div>
                </DrawerContent>
              </Drawer>

              {/* Enhanced Mobile Animated Element */}
              <div className="flex items-center justify-center px-4">
                <div className="relative">
                  <div className="relative">
                    <Brain className="h-8 w-8 text-purple-600 animate-pulse" />
                    <GraduationCap className="absolute -top-1 -right-1 h-5 w-5 text-yellow-500 animate-bounce" />
                    
                    {/* Mobile orbiting element */}
                    <div className="absolute inset-0 animate-spin" style={{ animationDuration: '6s' }}>
                      <Sparkles className="absolute -top-2 left-1/2 h-2 w-2 text-pink-400 opacity-70" />
                    </div>
                  </div>
                  <div className="absolute inset-0 h-8 w-8 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full animate-ping opacity-20"></div>
                  <div className="absolute inset-0 h-8 w-8 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-full animate-ping opacity-15" style={{ animationDelay: '1s' }}></div>
                </div>
              </div>

              {/* Mobile AI Report Button */}
              <Button
                onClick={handleAIReportClick}
                className="group relative bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 hover:from-yellow-500 hover:via-orange-600 hover:to-red-600 text-black px-8 py-5 rounded-2xl font-bold flex-1 min-h-[60px] shadow-[0_6px_25px_rgba(245,158,11,0.4)] hover:shadow-[0_8px_30px_rgba(245,158,11,0.6)] transition-all duration-400 hover:scale-105 overflow-hidden"
                aria-label="Get AI Choice Filling Report"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/30 to-white/0 -skew-x-12 -translate-x-full group-active:translate-x-full transition-transform duration-500"></div>
                <div className="relative z-10 flex items-center justify-center">
                  <Brain className="mr-3 h-6 w-6 group-hover:scale-110 transition-transform duration-300" />
                  <span className="text-base font-bold">AI Report</span>
                </div>
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Spacer to prevent content from being hidden behind footer */}
      <div className="h-28 md:h-32"></div>
    </>
  );
};

export default StickyFooter;
