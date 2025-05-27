
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { GraduationCap, Brain, Sparkles } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import PredictCollegeModal from './PredictCollegeModal';
import FloatingAnimation from './FloatingAnimation';

const StickyFooter = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const navigate = useNavigate();

  const handlePredictClick = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleAIReportClick = () => {
    navigate('/ai-choice-filling');
  };

  return (
    <>
      {/* Main Sticky Footer */}
      <div className="fixed bottom-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-xl border-t border-purple-200/50 shadow-2xl">
        <div className="container mx-auto px-4 md:px-6 py-4 md:py-5">
          <div className="flex items-center justify-center gap-4 md:gap-6">
            
            {/* Predict My College Button */}
            <Button
              onClick={handlePredictClick}
              className="bg-theme-gradient text-white px-6 md:px-8 py-4 md:py-5 rounded-2xl font-bold 
                text-base md:text-lg hover:shadow-2xl transition-all duration-500 hover:scale-105 hover:-translate-y-1 
                group relative overflow-hidden flex-1 md:flex-none min-h-[56px] active:scale-95"
              aria-label="Predict My College - Choose your field"
            >
              {/* Gradient overlay animation */}
              <div className="absolute inset-0 bg-gradient-to-r from-purple-400 to-pink-400 opacity-0 
                group-hover:opacity-20 group-active:opacity-30 transition-opacity duration-300 rounded-2xl" />
              
              <div className="flex items-center justify-center space-x-2 md:space-x-3 relative z-10">
                <GraduationCap className="h-5 w-5 md:h-6 md:w-6 group-hover:rotate-12 transition-transform duration-300" />
                <span className="font-bold text-sm md:text-lg">Predict My College</span>
              </div>
              
              {/* Sparkle effect */}
              <Sparkles className="absolute top-1 right-1 h-4 w-4 text-yellow-300 opacity-0 
                group-hover:opacity-100 animate-pulse transition-opacity duration-300" />
            </Button>

            {/* Central Floating Animation */}
            <div className="hidden md:flex items-center justify-center px-4">
              <FloatingAnimation />
            </div>

            {/* Mobile Central Element */}
            <div className="md:hidden flex items-center justify-center px-2">
              <div className="relative">
                <Brain className="h-6 w-6 text-purple-500 animate-pulse" />
                <GraduationCap className="absolute -top-1 -right-1 h-4 w-4 text-yellow-500 animate-bounce" />
                <div className="absolute inset-0 h-6 w-6 bg-purple-400 rounded-full animate-ping opacity-20" />
              </div>
            </div>

            {/* AI Choice Filling Report Button */}
            <Button
              onClick={handleAIReportClick}
              className="bg-gradient-to-r from-yellow-400 to-orange-500 hover:from-yellow-500 hover:to-orange-600 
                text-black px-6 md:px-8 py-4 md:py-5 rounded-2xl font-bold text-base md:text-lg 
                hover:shadow-2xl transition-all duration-500 hover:scale-105 hover:-translate-y-1 
                group relative overflow-hidden flex-1 md:flex-none min-h-[56px] active:scale-95"
              aria-label="Get AI Choice Filling Report"
            >
              {/* Gradient overlay animation */}
              <div className="absolute inset-0 bg-gradient-to-r from-yellow-300 to-orange-400 opacity-0 
                group-hover:opacity-30 group-active:opacity-40 transition-opacity duration-300 rounded-2xl" />
              
              <div className="flex items-center justify-center space-x-2 md:space-x-3 relative z-10">
                <Brain className="h-5 w-5 md:h-6 md:w-6 group-hover:scale-110 transition-transform duration-300" />
                <span className="font-bold text-sm md:text-lg whitespace-nowrap">
                  <span className="md:hidden">AI Report</span>
                  <span className="hidden md:inline">AI Choice Filling Report</span>
                </span>
              </div>
              
              {/* Sparkle effect */}
              <Sparkles className="absolute top-1 right-1 h-4 w-4 text-white opacity-0 
                group-hover:opacity-100 animate-pulse transition-opacity duration-300" />
            </Button>
          </div>
        </div>
      </div>

      {/* Modal */}
      <PredictCollegeModal isOpen={isModalOpen} onClose={handleCloseModal} />

      {/* Spacer to prevent content from being hidden behind footer */}
      <div className="h-20 md:h-24" />
    </>
  );
};

export default StickyFooter;
