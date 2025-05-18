
import React from "react";
import { Button } from "@/components/ui/button";
import { FileText, Download } from "lucide-react";

const SampleAIReportSection = () => {
  return (
    <section className="py-16 bg-gradient-to-br from-purple-50 to-purple-100">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-theme-primary">
            Sample AI Report
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            See what's included in our comprehensive AI-powered college choice filling report before you purchase.
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-lg p-8 border border-purple-100">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Column 1: Report Preview */}
            <div className="lg:col-span-2 space-y-6">
              <div className="rounded-lg p-4 bg-purple-50 border border-purple-100">
                <h3 className="font-bold text-lg text-purple-800 flex items-center gap-2">
                  <FileText className="h-5 w-5" />
                  Top College Recommendations
                </h3>
                <div className="mt-3 space-y-3">
                  <div className="p-3 bg-white rounded-md border border-purple-100">
                    <div className="flex justify-between">
                      <span className="font-medium text-gray-800">IIT Bombay - Computer Science</span>
                      <span className="text-green-600 font-medium">95% Match</span>
                    </div>
                    <div className="text-sm text-gray-500 mt-1">Based on your JEE Advanced Rank</div>
                  </div>
                  <div className="p-3 bg-white rounded-md border border-purple-100">
                    <div className="flex justify-between">
                      <span className="font-medium text-gray-800">IIT Delhi - Electrical Engineering</span>
                      <span className="text-green-600 font-medium">92% Match</span>
                    </div>
                    <div className="text-sm text-gray-500 mt-1">Based on your JEE Advanced Rank</div>
                  </div>
                  <div className="p-3 bg-white rounded-md border border-purple-100 bg-gradient-to-r from-purple-50 to-transparent">
                    <div className="flex justify-between">
                      <span className="font-medium text-gray-800">IIT Madras - Mechanical Engineering</span>
                      <span className="text-green-600 font-medium">88% Match</span>
                    </div>
                    <div className="text-sm text-gray-500 mt-1">Based on your JEE Advanced Rank</div>
                  </div>
                </div>
              </div>
              
              <div className="rounded-lg p-4 bg-purple-50 border border-purple-100">
                <h3 className="font-bold text-lg text-purple-800 flex items-center gap-2">
                  <FileText className="h-5 w-5" />
                  Cutoff Trend Analysis
                </h3>
                <div className="mt-3 space-y-3">
                  <div className="h-32 bg-white rounded-md border border-purple-100 p-3">
                    <div className="flex justify-between mb-2">
                      <span className="text-sm font-medium text-gray-800">3-Year Cutoff Trend: IIT CS Branch</span>
                    </div>
                    <div className="h-16 w-full flex items-end justify-between px-2">
                      <div className="w-1/6 h-6 bg-purple-200 rounded-t"></div>
                      <div className="w-1/6 h-10 bg-purple-300 rounded-t"></div>
                      <div className="w-1/6 h-14 bg-purple-400 rounded-t"></div>
                      <div className="w-1/6 h-12 bg-purple-500 rounded-t"></div>
                      <div className="w-1/6 h-8 bg-purple-600 rounded-t"></div>
                      <div className="w-1/6 h-11 bg-purple-700 rounded-t"></div>
                    </div>
                    <div className="flex justify-between text-xs text-gray-500 mt-1">
                      <span>2018</span>
                      <span>2019</span>
                      <span>2020</span>
                      <span>2021</span>
                      <span>2022</span>
                      <span>2023</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Column 2: What You'll Get */}
            <div className="bg-gradient-to-b from-purple-100 to-purple-50 rounded-lg p-6 flex flex-col justify-between">
              <div>
                <h3 className="font-bold text-xl text-purple-800 mb-4">What You'll Get</h3>
                <ul className="space-y-4">
                  <li className="flex gap-2">
                    <div className="h-5 w-5 rounded-full bg-purple-200 text-purple-700 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-sm font-bold">✓</span>
                    </div>
                    <span className="text-gray-700">50+ College recommendations based on your rank</span>
                  </li>
                  <li className="flex gap-2">
                    <div className="h-5 w-5 rounded-full bg-purple-200 text-purple-700 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-sm font-bold">✓</span>
                    </div>
                    <span className="text-gray-700">Strategic choice filling order</span>
                  </li>
                  <li className="flex gap-2">
                    <div className="h-5 w-5 rounded-full bg-purple-200 text-purple-700 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-sm font-bold">✓</span>
                    </div>
                    <span className="text-gray-700">Branch-wise placement statistics</span>
                  </li>
                  <li className="flex gap-2">
                    <div className="h-5 w-5 rounded-full bg-purple-200 text-purple-700 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-sm font-bold">✓</span>
                    </div>
                    <span className="text-gray-700">Round-by-round counselling plan</span>
                  </li>
                  <li className="flex gap-2">
                    <div className="h-5 w-5 rounded-full bg-purple-200 text-purple-700 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-sm font-bold">✓</span>
                    </div>
                    <span className="text-gray-700">Historical cutoff comparisons</span>
                  </li>
                </ul>
              </div>
              
              <div className="mt-8">
                <Button className="w-full bg-purple-700 hover:bg-purple-800 text-white font-medium py-6 rounded-lg flex items-center justify-center gap-2">
                  <Download className="h-5 w-5" />
                  Download Sample AI Report
                </Button>
                <p className="text-xs text-center mt-3 text-gray-500">
                  PDF format • No sign-up required • 2MB
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SampleAIReportSection;
