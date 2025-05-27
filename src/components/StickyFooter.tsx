
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Drawer, DrawerContent, DrawerTrigger } from '@/components/ui/drawer';
import { GraduationCap, Stethoscope, Wrench } from 'lucide-react';
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
      <div className="hidden md:block fixed bottom-0 left-0 right-0 z-50 bg-white border-t border-purple-200 shadow-lg">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-center gap-6">
            {/* Left Button */}
            <div className="relative">
              <Button
                onClick={handlePredictClick}
                className="bg-theme-gradient text-white px-8 py-3 rounded-full font-semibold text-lg hover:shadow-lg transition-all duration-300 hover:scale-105"
                aria-expanded={isDesktopExpanded}
                aria-label="Predict My College - Choose your field"
              >
                <GraduationCap className="mr-2 h-5 w-5" />
                Predict My College
              </Button>
              
              {/* Desktop Expansion Panel */}
              <div className={`absolute bottom-full right-0 mb-2 transition-all duration-500 ease-in-out ${
                isDesktopExpanded 
                  ? 'opacity-100 transform translate-y-0 scale-100' 
                  : 'opacity-0 transform translate-y-4 scale-95 pointer-events-none'
              }`}>
                <div className="bg-white rounded-xl shadow-2xl border border-purple-100 p-4 min-w-[250px]">
                  <div className="space-y-3">
                    <Button
                      onClick={handleEngineeringClick}
                      className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-medium transition-colors"
                      aria-label="Engineering IQ Test"
                    >
                      <Wrench className="mr-2 h-4 w-4" />
                      Engineering
                    </Button>
                    <Button
                      onClick={handleMedicalClick}
                      className="w-full bg-green-600 hover:bg-green-700 text-white py-3 rounded-lg font-medium transition-colors"
                      aria-label="Medical IQ Test"
                    >
                      <Stethoscope className="mr-2 h-4 w-4" />
                      Medical
                    </Button>
                  </div>
                </div>
              </div>
            </div>

            {/* Animated Element Between Buttons */}
            <div className="flex items-center justify-center">
              <div className="relative">
                <div className="h-3 w-3 bg-purple-400 rounded-full animate-pulse"></div>
                <div className="absolute inset-0 h-3 w-3 bg-purple-400 rounded-full animate-ping opacity-75"></div>
              </div>
            </div>

            {/* Right Button */}
            <Button
              onClick={handleAIReportClick}
              className="bg-yellow-500 hover:bg-yellow-600 text-black px-8 py-3 rounded-full font-semibold text-lg hover:shadow-lg transition-all duration-300 hover:scale-105"
              aria-label="Get AI Choice Filling Report"
            >
              AI Choice Filling Report
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Footer */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-white border-t border-purple-200 shadow-lg">
        <div className="px-4 py-4">
          <div className="flex items-center justify-center gap-4">
            {/* Mobile Predict Button with Drawer */}
            <Drawer>
              <DrawerTrigger asChild>
                <Button
                  className="bg-theme-gradient text-white px-6 py-3 rounded-full font-semibold flex-1 min-h-[44px] hover:shadow-lg transition-all duration-300"
                  aria-label="Predict My College - Choose your field"
                >
                  <GraduationCap className="mr-2 h-4 w-4" />
                  Predict My College
                </Button>
              </DrawerTrigger>
              <DrawerContent className="pb-8">
                <div className="px-6 py-6 space-y-4">
                  <h3 className="text-xl font-bold text-center text-gray-800 mb-6">
                    Choose Your Field
                  </h3>
                  <Button
                    onClick={handleEngineeringClick}
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white py-4 rounded-lg font-medium text-lg min-h-[44px] transition-colors"
                    aria-label="Engineering IQ Test"
                  >
                    <Wrench className="mr-2 h-5 w-5" />
                    Engineering
                  </Button>
                  <Button
                    onClick={handleMedicalClick}
                    className="w-full bg-green-600 hover:bg-green-700 text-white py-4 rounded-lg font-medium text-lg min-h-[44px] transition-colors"
                    aria-label="Medical IQ Test"
                  >
                    <Stethoscope className="mr-2 h-5 w-5" />
                    Medical
                  </Button>
                </div>
              </DrawerContent>
            </Drawer>

            {/* Animated Element Between Buttons */}
            <div className="flex items-center justify-center px-2">
              <div className="relative">
                <GraduationCap className="h-6 w-6 text-purple-500 animate-float" />
                <div className="absolute inset-0 h-6 w-6 bg-purple-400 rounded-full animate-ping opacity-30"></div>
              </div>
            </div>

            {/* Mobile AI Report Button */}
            <Button
              onClick={handleAIReportClick}
              className="bg-yellow-500 hover:bg-yellow-600 text-black px-6 py-3 rounded-full font-semibold flex-1 min-h-[44px] hover:shadow-lg transition-all duration-300"
              aria-label="Get AI Choice Filling Report"
            >
              AI Report
            </Button>
          </div>
        </div>
      </div>

      {/* Spacer to prevent content from being hidden behind footer */}
      <div className="h-20 md:h-24"></div>
    </>
  );
};

export default StickyFooter;
