
import React, { useEffect } from 'react';
import { X, Wrench, Stethoscope, Sparkles } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

interface PredictCollegeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const PredictCollegeModal: React.FC<PredictCollegeModalProps> = ({ isOpen, onClose }) => {
  const navigate = useNavigate();

  // Prevent scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  // Handle escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
    }
    return () => document.removeEventListener('keydown', handleEscape);
  }, [isOpen, onClose]);

  const handleEngineeringClick = () => {
    navigate('/iq-test');
    onClose();
  };

  const handleMedicalClick = () => {
    navigate('/iq-test');
    onClose();
  };

  if (!isOpen) return null;

  return (
    <>
      {/* Backdrop */}
      <div 
        className={`fixed inset-0 z-50 bg-black/60 backdrop-blur-sm transition-opacity duration-300 ${
          isOpen ? 'opacity-100' : 'opacity-0'
        }`}
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Modal */}
      <div
        className={`fixed z-50 transition-all duration-500 ease-out
          md:right-0 md:top-0 md:h-full md:w-96 md:max-w-md
          bottom-0 left-0 right-0 max-h-[85vh] rounded-t-3xl md:rounded-l-3xl md:rounded-tr-none
          ${isOpen 
            ? 'md:translate-x-0 translate-y-0 opacity-100 scale-100' 
            : 'md:translate-x-full translate-y-full opacity-0 scale-95'
          }`}
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-title"
      >
        {/* Modal Content */}
        <div className="bg-white/95 backdrop-blur-xl h-full flex flex-col shadow-2xl border-l border-purple-200/50">
          {/* Handle for mobile swipe */}
          <div className="md:hidden flex justify-center pt-3 pb-1">
            <div className="w-12 h-1 bg-gray-300 rounded-full" />
          </div>

          {/* Header */}
          <div className="flex items-center justify-between p-6 pb-4">
            <div>
              <h2 id="modal-title" className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                Choose Your Path 🚀
              </h2>
              <p className="text-gray-600 text-sm mt-1">Select your field of interest</p>
            </div>
            <button
              onClick={onClose}
              className="p-2 rounded-full hover:bg-gray-100 transition-colors duration-200 group"
              aria-label="Close modal"
            >
              <X className="h-5 w-5 text-gray-500 group-hover:text-gray-700" />
            </button>
          </div>

          {/* Content */}
          <div className="flex-1 px-6 pb-8 space-y-4">
            {/* Engineering Option */}
            <button
              onClick={handleEngineeringClick}
              className="w-full bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 
                text-white p-6 rounded-2xl font-semibold text-lg transition-all duration-300 
                hover:shadow-xl hover:scale-105 group active:scale-95 relative overflow-hidden
                min-h-[80px] flex flex-col items-center justify-center space-y-2"
              aria-label="Engineering IQ Test"
            >
              {/* Ripple effect background */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-blue-500 opacity-0 group-hover:opacity-20 transition-opacity duration-300 rounded-2xl" />
              
              <div className="flex items-center space-x-3 relative z-10">
                <Wrench className="h-7 w-7 group-hover:rotate-12 transition-transform duration-300" />
                <span className="text-xl font-bold">Engineering</span>
                <Sparkles className="h-5 w-5 opacity-0 group-hover:opacity-100 animate-pulse transition-opacity duration-300" />
              </div>
              <p className="text-blue-100 text-sm relative z-10">🔬 Explore 5000+ Engg Colleges</p>
            </button>

            {/* Medical Option */}
            <button
              onClick={handleMedicalClick}
              className="w-full bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 
                text-white p-6 rounded-2xl font-semibold text-lg transition-all duration-300 
                hover:shadow-xl hover:scale-105 group active:scale-95 relative overflow-hidden
                min-h-[80px] flex flex-col items-center justify-center space-y-2"
              aria-label="Medical IQ Test"
            >
              {/* Ripple effect background */}
              <div className="absolute inset-0 bg-gradient-to-r from-green-400 to-emerald-500 opacity-0 group-hover:opacity-20 transition-opacity duration-300 rounded-2xl" />
              
              <div className="flex items-center space-x-3 relative z-10">
                <Stethoscope className="h-7 w-7 group-hover:rotate-12 transition-transform duration-300" />
                <span className="text-xl font-bold">Medical</span>
                <Sparkles className="h-5 w-5 opacity-0 group-hover:opacity-100 animate-pulse transition-opacity duration-300" />
              </div>
              <p className="text-green-100 text-sm relative z-10">🩺 MBBS, BDS & more</p>
            </button>

            {/* Fun decorative element */}
            <div className="flex justify-center pt-4">
              <div className="flex items-center space-x-2 text-gray-400">
                <div className="w-2 h-2 bg-purple-400 rounded-full animate-pulse" />
                <div className="w-2 h-2 bg-pink-400 rounded-full animate-pulse animation-delay-75" />
                <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse animation-delay-150" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PredictCollegeModal;
