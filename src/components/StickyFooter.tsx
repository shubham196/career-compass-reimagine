
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Drawer, DrawerContent, DrawerTrigger } from '@/components/ui/drawer';
import { GraduationCap, Stethoscope, Wrench, Sparkles, Brain } from 'lucide-react';
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
      {/* Desktop Footer */}
      <div className="hidden md:block fixed bottom-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-lg border-t border-purple-200/50 shadow-2xl">
        <div className="container mx-auto px-6 py-5">
          <div className="flex items-center justify-center gap-8">
            {/* Left Button - Predict My College */}
            <div className="relative">
              <Button
                onClick={handlePredictClick}
                className="bg-theme-gradient text-white px-10 py-4 rounded-2xl font-bold text-lg hover:shadow-2xl transition-all duration-500 hover:scale-110 hover:-translate-y-1 group relative overflow-hidden"
                aria-expanded={isDesktopExpanded}
                aria-label="Predict My College - Choose your field"
              >
                {/* Gradient overlay animation */}
                <div className="absolute inset-0 bg-gradient-to-r from-purple-400 to-pink-400 opacity-0 group-hover:opacity-20 transition-opacity duration-500 rounded-2xl"></div>
                <GraduationCap className="mr-3 h-6 w-6 group-hover:rotate-12 transition-transform duration-300" />
                <span className="relative z-10">Predict My College</span>
                {/* Sparkle effect */}
                <Sparkles className="absolute top-1 right-1 h-4 w-4 text-yellow-300 opacity-0 group-hover:opacity-100 animate-pulse transition-opacity duration-300" />
              </Button>
              
              {/* Desktop Expansion Panel with enhanced animations */}
              <div className={`absolute bottom-full right-0 mb-4 transition-all duration-700 ease-out ${
                isDesktopExpanded 
                  ? 'opacity-100 transform translate-y-0 scale-100 translate-x-0' 
                  : 'opacity-0 transform translate-y-8 scale-90 translate-x-4 pointer-events-none'
              }`}>
                <div className="bg-white/95 backdrop-blur-xl rounded-2xl shadow-2xl border border-purple-200/30 p-6 min-w-[280px] relative">
                  {/* Glowing border effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-400 to-pink-400 rounded-2xl opacity-20 blur-sm"></div>
                  <div className="relative z-10 space-y-4">
                    <h3 className="text-lg font-bold text-gray-800 text-center mb-4 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                      Choose Your Path 🚀
                    </h3>
                    <Button
                      onClick={handleEngineeringClick}
                      className="w-full bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white py-4 rounded-xl font-semibold text-base transition-all duration-300 hover:shadow-lg hover:scale-105 group"
                      aria-label="Engineering IQ Test"
                    >
                      <Wrench className="mr-3 h-5 w-5 group-hover:rotate-12 transition-transform duration-300" />
                      Engineering
                      <div className="ml-auto opacity-0 group-hover:opacity-100 transition-opacity duration-300">⚡</div>
                    </Button>
                    <Button
                      onClick={handleMedicalClick}
                      className="w-full bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white py-4 rounded-xl font-semibold text-base transition-all duration-300 hover:shadow-lg hover:scale-105 group"
                      aria-label="Medical IQ Test"
                    >
                      <Stethoscope className="mr-3 h-5 w-5 group-hover:rotate-12 transition-transform duration-300" />
                      Medical
                      <div className="ml-auto opacity-0 group-hover:opacity-100 transition-opacity duration-300">🩺</div>
                    </Button>
                  </div>
                </div>
              </div>
            </div>

            {/* Enhanced Animated Centerpiece */}
            <div className="flex items-center justify-center px-4">
              <div className="relative">
                {/* Main animated element */}
                <div className="relative">
                  <Brain className="h-8 w-8 text-purple-500 animate-pulse" />
                  <GraduationCap className="absolute -top-1 -right-1 h-5 w-5 text-yellow-500 animate-bounce" />
                </div>
                {/* Pulsing rings */}
                <div className="absolute inset-0 h-8 w-8 bg-purple-400 rounded-full animate-ping opacity-20"></div>
                <div className="absolute inset-0 h-8 w-8 bg-yellow-400 rounded-full animate-ping opacity-10 animation-delay-75"></div>
                {/* Floating sparkles */}
                <Sparkles className="absolute -top-2 -left-2 h-3 w-3 text-pink-400 animate-pulse opacity-70" />
                <Sparkles className="absolute -bottom-1 -right-2 h-2 w-2 text-blue-400 animate-pulse opacity-60 animation-delay-150" />
              </div>
            </div>

            {/* Right Button - AI Choice Filling Report */}
            <Button
              onClick={handleAIReportClick}
              className="bg-gradient-to-r from-yellow-400 to-orange-500 hover:from-yellow-500 hover:to-orange-600 text-black px-10 py-4 rounded-2xl font-bold text-lg hover:shadow-2xl transition-all duration-500 hover:scale-110 hover:-translate-y-1 group relative overflow-hidden"
              aria-label="Get AI Choice Filling Report"
            >
              {/* Gradient overlay animation */}
              <div className="absolute inset-0 bg-gradient-to-r from-yellow-300 to-orange-400 opacity-0 group-hover:opacity-30 transition-opacity duration-500 rounded-2xl"></div>
              <Brain className="mr-3 h-6 w-6 group-hover:scale-110 transition-transform duration-300" />
              <span className="relative z-10">AI Choice Filling Report</span>
              {/* Sparkle effect */}
              <Sparkles className="absolute top-1 right-1 h-4 w-4 text-white opacity-0 group-hover:opacity-100 animate-pulse transition-opacity duration-300" />
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Footer with enhanced design */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-lg border-t border-purple-200/50 shadow-2xl">
        <div className="px-4 py-5">
          <div className="flex items-center justify-center gap-4">
            {/* Mobile Predict Button with Enhanced Drawer */}
            <Drawer>
              <DrawerTrigger asChild>
                <Button
                  className="bg-theme-gradient text-white px-6 py-4 rounded-2xl font-bold flex-1 min-h-[52px] hover:shadow-xl transition-all duration-300 hover:scale-105 group relative overflow-hidden"
                  aria-label="Predict My College - Choose your field"
                >
                  {/* Gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-400 to-pink-400 opacity-0 group-active:opacity-20 transition-opacity duration-200 rounded-2xl"></div>
                  <GraduationCap className="mr-2 h-5 w-5 group-hover:rotate-12 transition-transform duration-300" />
                  <span className="relative z-10">Predict My College</span>
                </Button>
              </DrawerTrigger>
              <DrawerContent className="pb-8 bg-white/95 backdrop-blur-xl border-t-2 border-purple-200">
                <div className="px-6 py-8 space-y-6">
                  <div className="text-center">
                    <h3 className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-2">
                      Choose Your Path 🚀
                    </h3>
                    <p className="text-gray-600 text-sm">Select your field of interest</p>
                  </div>
                  <Button
                    onClick={handleEngineeringClick}
                    className="w-full bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white py-5 rounded-xl font-semibold text-lg min-h-[56px] transition-all duration-300 hover:shadow-lg hover:scale-105 group"
                    aria-label="Engineering IQ Test"
                  >
                    <Wrench className="mr-3 h-6 w-6 group-hover:rotate-12 transition-transform duration-300" />
                    Engineering
                    <div className="ml-auto opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-xl">⚡</div>
                  </Button>
                  <Button
                    onClick={handleMedicalClick}
                    className="w-full bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white py-5 rounded-xl font-semibold text-lg min-h-[56px] transition-all duration-300 hover:shadow-lg hover:scale-105 group"
                    aria-label="Medical IQ Test"
                  >
                    <Stethoscope className="mr-3 h-6 w-6 group-hover:rotate-12 transition-transform duration-300" />
                    Medical
                    <div className="ml-auto opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-xl">🩺</div>
                  </Button>
                </div>
              </DrawerContent>
            </Drawer>

            {/* Enhanced Mobile Animated Element */}
            <div className="flex items-center justify-center px-3">
              <div className="relative">
                <div className="relative">
                  <Brain className="h-7 w-7 text-purple-500 animate-pulse" />
                  <GraduationCap className="absolute -top-1 -right-1 h-4 w-4 text-yellow-500 animate-bounce" />
                </div>
                <div className="absolute inset-0 h-7 w-7 bg-purple-400 rounded-full animate-ping opacity-20"></div>
                <Sparkles className="absolute -top-1 -left-1 h-2 w-2 text-pink-400 animate-pulse opacity-70" />
              </div>
            </div>

            {/* Mobile AI Report Button */}
            <Button
              onClick={handleAIReportClick}
              className="bg-gradient-to-r from-yellow-400 to-orange-500 hover:from-yellow-500 hover:to-orange-600 text-black px-6 py-4 rounded-2xl font-bold flex-1 min-h-[52px] hover:shadow-xl transition-all duration-300 hover:scale-105 group relative overflow-hidden"
              aria-label="Get AI Choice Filling Report"
            >
              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-r from-yellow-300 to-orange-400 opacity-0 group-active:opacity-30 transition-opacity duration-200 rounded-2xl"></div>
              <Brain className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform duration-300" />
              <span className="relative z-10 text-sm font-bold">AI Report</span>
            </Button>
          </div>
        </div>
      </div>

      {/* Spacer to prevent content from being hidden behind footer */}
      <div className="h-24 md:h-28"></div>
    </>
  );
};

export default StickyFooter;
