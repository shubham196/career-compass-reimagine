
import React from "react";
import { Button } from "@/components/ui/button";

const IqTestSection = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">IQ Test for Students (8th-12th Grade)</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Discover your aptitude and cognitive strengths with our specialized IQ assessments
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center max-w-5xl mx-auto">
          <div className="space-y-6">
            <div className="bg-white rounded-xl p-6 border border-gray-100 shadow-md hover:shadow-lg transition-shadow">
              <div className="flex items-start">
                <div className="w-10 h-10 rounded-full bg-yellow-100 flex items-center justify-center mr-4 flex-shrink-0">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M21 15V19C21 19.5304 20.7893 20.0391 20.4142 20.4142C20.0391 20.7893 19.5304 21 19 21H5C4.46957 21 3.96086 20.7893 3.58579 20.4142C3.21071 20.0391 3 19.5304 3 19V15" stroke="#EAB308" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M7 10L12 15L17 10" stroke="#EAB308" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M12 15V3" stroke="#EAB308" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2 text-gray-800">Online Convenience</h3>
                  <p className="text-gray-600 text-sm">
                    Take our professionally designed IQ tests from the comfort of your home at any time
                  </p>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-xl p-6 border border-gray-100 shadow-md hover:shadow-lg transition-shadow">
              <div className="flex items-start">
                <div className="w-10 h-10 rounded-full bg-purple-100 flex items-center justify-center mr-4 flex-shrink-0">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M16 4H18C18.5304 4 19.0391 4.21071 19.4142 4.58579C19.7893 4.96086 20 5.46957 20 6V20C20 20.5304 19.7893 21.0391 19.4142 21.4142C19.0391 21.7893 18.5304 22 18 22H6C5.46957 22 4.96086 21.7893 4.58579 21.4142C4.21071 21.0391 4 20.5304 4 20V6C4 5.46957 4.21071 4.96086 4.58579 4.58579C4.96086 4.21071 5.46957 4 6 4H8" stroke="#8B5CF6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M15 2H9C8.44772 2 8 2.44772 8 3V5C8 5.55228 8.44772 6 9 6H15C15.5523 6 16 5.55228 16 5V3C16 2.44772 15.5523 2 15 2Z" stroke="#8B5CF6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2 text-gray-800">Personal Diagnostics</h3>
                  <p className="text-gray-600 text-sm">
                    Get detailed analysis of your cognitive abilities, learning style, and hidden talents
                  </p>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-xl p-6 border border-gray-100 shadow-md hover:shadow-lg transition-shadow">
              <div className="flex items-start">
                <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center mr-4 flex-shrink-0">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M22 12H18L15 21L9 3L6 12H2" stroke="#10B981" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2 text-gray-800">Career Insights</h3>
                  <p className="text-gray-600 text-sm">
                    Receive career recommendations aligned with your cognitive strengths and personality traits
                  </p>
                </div>
              </div>
            </div>
            
            <div className="flex justify-center mt-8">
              <Button className="bg-purple-600 hover:bg-purple-700 text-white rounded-full px-8 py-6">
                Take Free IQ Test
              </Button>
            </div>
          </div>
          
          <div className="relative">
            <div className="absolute -z-10 w-72 h-72 bg-purple-100 rounded-full top-8 -right-8"></div>
            <img 
              src="/lovable-uploads/42fe9926-470d-45cb-9d9a-2824a31c1b0a.png" 
              alt="Student taking IQ test" 
              className="rounded-xl shadow-lg max-w-full mx-auto animate-float"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default IqTestSection;
