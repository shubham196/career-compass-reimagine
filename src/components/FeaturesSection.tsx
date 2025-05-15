
import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Search, BookOpen, Star, ArrowRight } from "lucide-react";

const FeaturesSection = () => {
  return (
    <section id="features" className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="inline-block py-1 px-3 rounded-full text-sm font-medium bg-purple-100 text-purple-700 mb-3">Tools & Features</span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 font-poppins">Prediction Tools</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Make informed decisions with our accurate prediction tools based on your performance and preferences
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-5xl mx-auto">
          {/* Rank Predictor */}
          <Card className="border-none bg-white rounded-2xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
            <CardContent className="p-0">
              <div className="p-8">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-700 rounded-2xl flex items-center justify-center mb-6 shadow-md">
                  <Search className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-gray-900">Rank Predictor</h3>
                <p className="text-gray-600 mb-6">
                  Get an accurate prediction of your expected rank in competitive exams based on your mock test performance.
                </p>
                <ul className="mb-8 space-y-4">
                  <li className="flex items-start">
                    <div className="bg-green-100 p-1.5 rounded-full mr-3 mt-0.5">
                      <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M8 3L4 7L2 5" stroke="#10B981" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </div>
                    <span className="text-gray-700">Analyzes your strengths and weaknesses</span>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-green-100 p-1.5 rounded-full mr-3 mt-0.5">
                      <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M8 3L4 7L2 5" stroke="#10B981" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </div>
                    <span className="text-gray-700">Personalized improvement suggestions</span>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-green-100 p-1.5 rounded-full mr-3 mt-0.5">
                      <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M8 3L4 7L2 5" stroke="#10B981" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </div>
                    <span className="text-gray-700">Real-time updated predictions</span>
                  </li>
                </ul>
                <Button variant="outline" className="group border-purple-600 text-purple-600 hover:bg-purple-50 flex items-center gap-2">
                  Try Rank Predictor <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </div>
            </CardContent>
          </Card>
          
          {/* College Predictor */}
          <Card className="border-none bg-white rounded-2xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
            <CardContent className="p-0">
              <div className="p-8">
                <div className="w-16 h-16 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-2xl flex items-center justify-center mb-6 shadow-md">
                  <BookOpen className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-gray-900">College Predictor</h3>
                <p className="text-gray-600 mb-6">
                  Discover which colleges and courses you're likely to get based on your rank and preferences.
                </p>
                <ul className="mb-8 space-y-4">
                  <li className="flex items-start">
                    <div className="bg-green-100 p-1.5 rounded-full mr-3 mt-0.5">
                      <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M8 3L4 7L2 5" stroke="#10B981" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </div>
                    <span className="text-gray-700">Comprehensive college database</span>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-green-100 p-1.5 rounded-full mr-3 mt-0.5">
                      <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M8 3L4 7L2 5" stroke="#10B981" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </div>
                    <span className="text-gray-700">Course-specific cutoff insights</span>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-green-100 p-1.5 rounded-full mr-3 mt-0.5">
                      <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M8 3L4 7L2 5" stroke="#10B981" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </div>
                    <span className="text-gray-700">Location and fee comparisons</span>
                  </li>
                </ul>
                <Button variant="outline" className="group border-purple-600 text-purple-600 hover:bg-purple-50 flex items-center gap-2">
                  Try College Predictor <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
