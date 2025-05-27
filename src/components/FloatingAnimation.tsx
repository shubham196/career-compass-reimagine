
import React from 'react';
import { GraduationCap, Brain, Sparkles } from 'lucide-react';

const FloatingAnimation: React.FC = () => {
  return (
    <div className="relative flex items-center justify-center">
      {/* Main central element */}
      <div className="relative">
        {/* Primary animated icon */}
        <div className="relative z-10">
          <Brain className="h-8 w-8 md:h-10 md:w-10 text-purple-500 animate-pulse" />
          <GraduationCap className="absolute -top-1 -right-1 h-5 w-5 md:h-6 md:w-6 text-yellow-500 animate-bounce" />
        </div>
        
        {/* Pulsing rings */}
        <div className="absolute inset-0 h-8 w-8 md:h-10 md:w-10 bg-purple-400 rounded-full animate-ping opacity-20" />
        <div className="absolute inset-0 h-8 w-8 md:h-10 md:w-10 bg-yellow-400 rounded-full animate-ping opacity-10 animation-delay-150" />
        
        {/* Floating sparkles */}
        <Sparkles className="absolute -top-2 -left-2 h-3 w-3 text-pink-400 animate-pulse opacity-70" />
        <Sparkles className="absolute -bottom-1 -right-2 h-2 w-2 text-blue-400 animate-pulse opacity-60 animation-delay-300" />
        <Sparkles className="absolute top-1 -left-3 h-2 w-2 text-purple-400 animate-pulse opacity-50 animation-delay-75" />
      </div>
      
      {/* Orbiting elements */}
      <div className="absolute inset-0 animate-spin" style={{ animationDuration: '8s' }}>
        <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
          <div className="w-1 h-1 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full" />
        </div>
        <div className="absolute -bottom-3 left-1/2 transform -translate-x-1/2">
          <div className="w-1 h-1 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full" />
        </div>
      </div>
    </div>
  );
};

export default FloatingAnimation;
