
import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Brain, Download, FileText, Award } from "lucide-react";
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import IqTestIllustration from "./IqTestIllustration";

const IqTestSection = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-white to-purple-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <Badge className="mb-3 bg-purple-100 text-purple-700 border-purple-200 hover:bg-purple-200">For Students</Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 font-poppins">Discover Your True Potential</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Our specialized IQ assessments help students in grades 8-12 identify their cognitive strengths
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center max-w-5xl mx-auto">
          <div className="space-y-6">
            <Card className="border-none shadow-lg hover:shadow-xl transition-all duration-300 bg-white overflow-hidden">
              <CardContent className="p-0">
                <div className="p-6 relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-24 h-24 bg-purple-100 rounded-full -mt-10 -mr-10 opacity-70"></div>
                  
                  <div className="flex items-start relative">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-400 to-purple-600 flex items-center justify-center mr-4 flex-shrink-0 shadow-md">
                      <Brain className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2 text-gray-800">Cognitive Assessment</h3>
                      <p className="text-gray-600">
                        Take our professionally designed IQ tests to discover your cognitive strengths and learning style
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card className="border-none shadow-lg hover:shadow-xl transition-all duration-300 bg-white overflow-hidden">
              <CardContent className="p-0">
                <div className="p-6 relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-24 h-24 bg-yellow-100 rounded-full -mt-10 -mr-10 opacity-70"></div>
                  
                  <div className="flex items-start relative">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-yellow-400 to-yellow-500 flex items-center justify-center mr-4 flex-shrink-0 shadow-md">
                      <FileText className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2 text-gray-800">Detailed Reports</h3>
                      <p className="text-gray-600">
                        Receive comprehensive analysis of your cognitive profile with strengths and growth areas
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card className="border-none shadow-lg hover:shadow-xl transition-all duration-300 bg-white overflow-hidden">
              <CardContent className="p-0">
                <div className="p-6 relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-24 h-24 bg-green-100 rounded-full -mt-10 -mr-10 opacity-70"></div>
                  
                  <div className="flex items-start relative">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-green-400 to-green-600 flex items-center justify-center mr-4 flex-shrink-0 shadow-md">
                      <Award className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2 text-gray-800">Career Insights</h3>
                      <p className="text-gray-600">
                        Get personalized career recommendations based on your cognitive strengths and interests
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <div className="flex justify-center mt-10">
              <HoverCard>
                <HoverCardTrigger asChild>
                  <Link to="/iq-test">
                    <Button className="bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white rounded-xl px-8 py-6 shadow-lg hover:shadow-xl transition-all duration-300">
                      Take Free IQ Test
                    </Button>
                  </Link>
                </HoverCardTrigger>
                <HoverCardContent className="w-80 text-sm bg-white p-4 shadow-lg border-none">
                  <p>Free 40-minute assessment with detailed insights into your cognitive abilities.</p>
                </HoverCardContent>
              </HoverCard>
            </div>
          </div>
          
          <div className="relative">
            <div className="absolute -z-10 w-72 h-72 bg-purple-100 rounded-full top-12 -right-8 animate-pulse-slow"></div>
            <div className="absolute -z-10 w-48 h-48 bg-yellow-100 rounded-full bottom-12 -left-6 animate-pulse-slow" style={{ animationDelay: '1s' }}></div>
            
            {/* SVG Illustration replacing image */}
            <div className="relative z-10">
              <IqTestIllustration />
            </div>
            
            <div className="absolute bottom-6 left-10 bg-white rounded-xl shadow-lg p-4 animate-float z-20" style={{ animationDelay: '0.5s' }}>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-purple-100 flex items-center justify-center">
                  <Download className="w-4 h-4 text-purple-600" />
                </div>
                <div className="text-left">
                  <p className="text-sm font-medium text-gray-900">8,500+</p>
                  <p className="text-xs text-gray-500">Tests taken this month</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IqTestSection;

