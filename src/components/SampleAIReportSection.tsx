
import React from "react";
import { Button } from "@/components/ui/button";
import { FileText, Download, Award, TrendingUp, School, FileBarChart } from "lucide-react";
import { 
  Card, 
  CardHeader, 
  CardTitle, 
  CardContent, 
  CardFooter 
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  ChartContainer, 
  ChartTooltip, 
  ChartTooltipContent 
} from "@/components/ui/chart";
import {
  Bar,
  BarChart,
  CartesianGrid,
  ResponsiveContainer,
  XAxis,
  YAxis,
} from "recharts";
import { Separator } from "@/components/ui/separator";

// Sample data for cutoff trends
const cutoffData = [
  { year: '2020', value: null },
  { year: '2021', value: null },
  { year: '2022', value: null },
  { year: '2023', value: 1147 },
  { year: '2024', value: 1019 }
];

const SampleAIReportSection = () => {
  return (
    <section className="py-16 bg-gradient-to-br from-purple-50 to-purple-100">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-theme-primary">
            Your Personalized College Report
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Based on your JEE scores, our AI has analyzed thousands of past admission records to generate these recommendations.
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-lg p-8 border border-purple-100">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Column 1: Report Content */}
            <div className="lg:col-span-2 space-y-6">
              {/* Section 1: Top Recommendations */}
              <Card className="border border-purple-100">
                <CardHeader className="bg-purple-50 rounded-t-lg">
                  <CardTitle className="text-lg text-purple-800 flex items-center gap-2">
                    <Award className="h-5 w-5" />
                    Top College Recommendations (Based on JEE Main Rank #234)
                  </CardTitle>
                </CardHeader>
                <CardContent className="pt-4">
                  <div className="space-y-3">
                    <div className="p-3 bg-white rounded-md border border-purple-100 hover:bg-purple-50 transition-colors">
                      <div className="flex justify-between">
                        <span className="font-medium text-gray-800">NIT Trichy – CSE</span>
                        <div className="flex items-center gap-2">
                          <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200">High Chance</Badge>
                          <span className="text-green-600 font-medium">95% Match</span>
                        </div>
                      </div>
                      <div className="flex justify-between text-sm text-gray-500 mt-1">
                        <span>Closing Rank: 1019 (2024)</span>
                        <Badge variant="outline" className="bg-purple-50 text-purple-700 border-purple-200">
                          <TrendingUp className="h-3 w-3 mr-1" />
                          Trending Up
                        </Badge>
                      </div>
                    </div>
                    
                    <div className="p-3 bg-white rounded-md border border-purple-100 hover:bg-purple-50 transition-colors">
                      <div className="flex justify-between">
                        <span className="font-medium text-gray-800">NIT Kurukshetra – Architecture</span>
                        <div className="flex items-center gap-2">
                          <Badge variant="outline" className="bg-blue-50 text-blue-700 border-blue-200">Good Match</Badge>
                          <span className="text-blue-600 font-medium">88% Match</span>
                        </div>
                      </div>
                      <div className="flex justify-between text-sm text-gray-500 mt-1">
                        <span>Closing Rank: 1183 (2024)</span>
                      </div>
                    </div>
                    
                    <div className="p-3 bg-white rounded-md border border-purple-100 hover:bg-purple-50 transition-colors">
                      <div className="flex justify-between">
                        <span className="font-medium text-gray-800">NIT Surathkal – CSE</span>
                        <div className="flex items-center gap-2">
                          <Badge variant="outline" className="bg-yellow-50 text-yellow-700 border-yellow-200">Competitive</Badge>
                          <span className="text-yellow-600 font-medium">78% Match</span>
                        </div>
                      </div>
                      <div className="flex justify-between text-sm text-gray-500 mt-1">
                        <span>Closing Rank: 1423 (2024)</span>
                        <Badge variant="outline" className="bg-yellow-50 text-yellow-700 border-yellow-200">
                          <TrendingUp className="h-3 w-3 mr-1" />
                          New Branch – AI & DS
                        </Badge>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              {/* Section 2: Cutoff Trends */}
              <Card className="border border-purple-100">
                <CardHeader className="bg-purple-50 rounded-t-lg">
                  <CardTitle className="text-lg text-purple-800 flex items-center gap-2">
                    <FileBarChart className="h-5 w-5" />
                    Cutoff Trends: NIT Trichy CSE
                  </CardTitle>
                </CardHeader>
                <CardContent className="pt-4">
                  <div className="h-64 w-full">
                    <ChartContainer 
                      config={{
                        primary: { theme: { light: "#8b5cf6", dark: "#8b5cf6" } },
                        secondary: { theme: { light: "#c4b5fd", dark: "#c4b5fd" } },
                      }}
                    >
                      <ResponsiveContainer width="100%" height="100%">
                        <BarChart
                          data={cutoffData}
                          margin={{
                            top: 5,
                            right: 30,
                            left: 20,
                            bottom: 5,
                          }}
                        >
                          <CartesianGrid strokeDasharray="3 3" vertical={false} />
                          <XAxis dataKey="year" />
                          <YAxis domain={[0, 1500]} tickCount={6} />
                          <ChartTooltip
                            content={
                              <ChartTooltipContent 
                                labelFormatter={(label) => `Year: ${label}`}
                              />
                            }
                          />
                          <Bar 
                            dataKey="value" 
                            name="Closing Rank"
                            radius={[4, 4, 0, 0]}
                            fill="#8b5cf6"
                            className="report-chart-bar"
                          />
                        </BarChart>
                      </ResponsiveContainer>
                    </ChartContainer>
                    <div className="text-xs text-center text-gray-500 mt-2">
                      * N/A indicates data not available for that year
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
            
            {/* Column 2: Report Insights and Download */}
            <div className="bg-gradient-to-b from-purple-50 to-white rounded-lg p-6 flex flex-col justify-between">
              <div>
                <h3 className="font-bold text-xl text-purple-800 mb-4">Key Report Insights</h3>
                <ul className="space-y-4">
                  <li className="flex gap-3">
                    <div className="h-6 w-6 rounded-full bg-purple-100 text-purple-700 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-sm">🎯</span>
                    </div>
                    <div>
                      <span className="text-gray-700 font-medium">Rank Used</span>
                      <p className="text-gray-600">JEE Main CRL – 234</p>
                    </div>
                  </li>
                  <li className="flex gap-3">
                    <div className="h-6 w-6 rounded-full bg-purple-100 text-purple-700 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-sm">🏫</span>
                    </div>
                    <div>
                      <span className="text-gray-700 font-medium">Counselling Body</span>
                      <p className="text-gray-600">JoSAA</p>
                    </div>
                  </li>
                  <li className="flex gap-3">
                    <div className="h-6 w-6 rounded-full bg-purple-100 text-purple-700 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-sm">📍</span>
                    </div>
                    <div>
                      <span className="text-gray-700 font-medium">Category & State</span>
                      <p className="text-gray-600">General, Gender-Neutral, Maharashtra</p>
                    </div>
                  </li>
                  <li className="flex gap-3">
                    <div className="h-6 w-6 rounded-full bg-purple-100 text-purple-700 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-sm">📊</span>
                    </div>
                    <div>
                      <span className="text-gray-700 font-medium">Colleges Covered</span>
                      <p className="text-gray-600">NITs, IIITs, GFTIs</p>
                    </div>
                  </li>
                  <li className="flex gap-3">
                    <div className="h-6 w-6 rounded-full bg-purple-100 text-purple-700 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-sm">📅</span>
                    </div>
                    <div>
                      <span className="text-gray-700 font-medium">Analysis Included</span>
                      <p className="text-gray-600">3-Year Trend & Branch-Wise Analysis</p>
                    </div>
                  </li>
                  <li className="flex gap-3">
                    <div className="h-6 w-6 rounded-full bg-purple-100 text-purple-700 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-sm">📁</span>
                    </div>
                    <div>
                      <span className="text-gray-700 font-medium">PDF Size</span>
                      <p className="text-gray-600">~2MB</p>
                    </div>
                  </li>
                </ul>
              </div>
              
              <div className="mt-6 space-y-4">
                <Separator />
                <div className="text-sm text-gray-600 italic bg-purple-50 p-3 rounded-lg border border-purple-100">
                  <p className="flex items-start">
                    <span className="mr-2">🧠</span>
                    <span>
                      This AI report is built on historical JoSAA data and your rank – giving you a strategic edge in the choice filling process.
                    </span>
                  </p>
                </div>
                <Button className="w-full bg-purple-700 hover:bg-purple-800 text-white font-medium py-6 rounded-lg flex items-center justify-center gap-2">
                  <Download className="h-5 w-5" />
                  Download Full Report (PDF)
                </Button>
                <p className="text-xs text-center text-gray-500">
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
