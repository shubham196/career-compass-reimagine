
import React from "react";
import { Button } from "@/components/ui/button";
import { Search, BookOpen, Star } from "lucide-react";

const FeaturesSection = () => {
  return (
    <section id="features" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">Prediction Tools</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Get accurate predictions based on your performance and preferences to make informed decisions
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Rank Predictor */}
          <div className="bg-white rounded-xl shadow-lg p-8 card-hover">
            <div className="w-16 h-16 bg-purple-100 rounded-2xl flex items-center justify-center mb-6">
              <Search className="w-8 h-8 text-purple-600" />
            </div>
            <h3 className="text-2xl font-bold mb-4 text-gray-900">Rank Predictor</h3>
            <p className="text-gray-600 mb-6">
              Based on your mock test performance and historical data, get an accurate prediction of your expected rank in competitive exams.
            </p>
            <ul className="mb-6 space-y-3">
              <li className="flex items-start">
                <div className="bg-green-100 p-1 rounded mr-2 mt-1">
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M10 3L4.5 8.5L2 6" stroke="#10B981" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <span className="text-gray-600 text-sm">Analyzes your strengths and weaknesses</span>
              </li>
              <li className="flex items-start">
                <div className="bg-green-100 p-1 rounded mr-2 mt-1">
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M10 3L4.5 8.5L2 6" stroke="#10B981" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <span className="text-gray-600 text-sm">Personalized improvement suggestions</span>
              </li>
              <li className="flex items-start">
                <div className="bg-green-100 p-1 rounded mr-2 mt-1">
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M10 3L4.5 8.5L2 6" stroke="#10B981" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <span className="text-gray-600 text-sm">Real-time updated predictions</span>
              </li>
            </ul>
            <Button variant="outline" className="border-purple-600 text-purple-600 hover:bg-purple-50">
              Try Rank Predictor →
            </Button>
          </div>
          
          {/* College Predictor */}
          <div className="bg-white rounded-xl shadow-lg p-8 card-hover">
            <div className="w-16 h-16 bg-yellow-100 rounded-2xl flex items-center justify-center mb-6">
              <BookOpen className="w-8 h-8 text-yellow-600" />
            </div>
            <h3 className="text-2xl font-bold mb-4 text-gray-900">College Predictor</h3>
            <p className="text-gray-600 mb-6">
              Discover which colleges and courses you're likely to get based on your rank, preferences, and past admission trends.
            </p>
            <ul className="mb-6 space-y-3">
              <li className="flex items-start">
                <div className="bg-green-100 p-1 rounded mr-2 mt-1">
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M10 3L4.5 8.5L2 6" stroke="#10B981" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <span className="text-gray-600 text-sm">Comprehensive college database</span>
              </li>
              <li className="flex items-start">
                <div className="bg-green-100 p-1 rounded mr-2 mt-1">
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M10 3L4.5 8.5L2 6" stroke="#10B981" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <span className="text-gray-600 text-sm">Course-specific cutoff insights</span>
              </li>
              <li className="flex items-start">
                <div className="bg-green-100 p-1 rounded mr-2 mt-1">
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M10 3L4.5 8.5L2 6" stroke="#10B981" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <span className="text-gray-600 text-sm">Location and fee comparisons</span>
              </li>
            </ul>
            <Button variant="outline" className="border-purple-600 text-purple-600 hover:bg-purple-50">
              Try College Predictor →
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
