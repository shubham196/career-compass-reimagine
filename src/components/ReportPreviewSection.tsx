
import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, CheckCircle, BarChart4, Star } from "lucide-react";

const ReportPreviewSection = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <Badge className="mb-3 bg-amber-100 text-amber-700 border-amber-200 hover:bg-amber-200">Preview</Badge>
          <h2 className="text-3xl font-bold mb-4 text-gray-900">Sample AI Report</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Here's what your comprehensive AI-generated choice filling report will look like
          </p>
        </div>
        
        <div className="max-w-5xl mx-auto">
          <Tabs defaultValue="preview" className="w-full">
            <TabsList className="grid grid-cols-3 mb-8 bg-theme-primary/10">
              <TabsTrigger value="preview" className="text-base data-[state=active]:bg-theme-primary data-[state=active]:text-white">
                Report Preview
              </TabsTrigger>
              <TabsTrigger value="features" className="text-base data-[state=active]:bg-theme-primary data-[state=active]:text-white">
                What's Inside
              </TabsTrigger>
              <TabsTrigger value="testimonials" className="text-base data-[state=active]:bg-theme-primary data-[state=active]:text-white">
                Student Reviews
              </TabsTrigger>
            </TabsList>
            
            {/* Report Preview Tab */}
            <TabsContent value="preview" className="border rounded-lg p-6 shadow-md bg-white">
              <div className="flex flex-col md:flex-row gap-6">
                <div className="md:w-1/2">
                  <div className="border-2 border-theme-primary/20 rounded-lg overflow-hidden shadow-lg transform transition-all duration-300 hover:scale-105 hover:shadow-xl">
                    <img 
                      src="https://images.unsplash.com/photo-1581091214196-88f87eb3bbb5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                      alt="AI Report Example" 
                      className="w-full h-auto"
                    />
                  </div>
                  <div className="mt-4 text-center">
                    <a href="#" className="inline-flex items-center text-theme-secondary hover:text-theme-primary font-medium bg-theme-primary/10 px-4 py-2 rounded-full hover:bg-theme-primary/20 transition-colors">
                      View Full Sample Report <ExternalLink className="ml-2 w-4 h-4" />
                    </a>
                  </div>
                </div>
                <div className="md:w-1/2">
                  <h3 className="text-2xl font-bold mb-4 text-theme-secondary">What's Inside Your Personalized AI Report</h3>
                  <div className="space-y-4">
                    <div className="bg-purple-50 p-4 rounded-lg border-l-4 border-theme-primary transform transition-all duration-300 hover:-translate-x-1">
                      <h4 className="font-semibold text-theme-secondary mb-2">🎓 Top College Matches — Just for You</h4>
                      <p className="text-gray-700">Get 50+ college options smartly matched to your rank, category & preferences.</p>
                    </div>
                    
                    <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-theme-secondary transform transition-all duration-300 hover:-translate-x-1">
                      <h4 className="font-semibold text-theme-secondary mb-2">📊 Optimized Choice List</h4>
                      <p className="text-gray-700">We arrange your college preferences in the most strategic order to boost your admission chances.</p>
                    </div>
                    
                    <div className="bg-green-50 p-4 rounded-lg border-l-4 border-theme-primary transform transition-all duration-300 hover:-translate-x-1">
                      <h4 className="font-semibold text-theme-secondary mb-2">🚀 Career-Focused Branch Insights</h4>
                      <p className="text-gray-700">Each option includes future placement trends, salary data, and career growth potential.</p>
                    </div>
                    
                    <div className="bg-amber-50 p-4 rounded-lg border-l-4 border-theme-secondary transform transition-all duration-300 hover:-translate-x-1">
                      <h4 className="font-semibold text-theme-secondary mb-2">🔁 Round-by-Round Counseling Plan</h4>
                      <p className="text-gray-700">Detailed strategy for each counseling round with actionable decision tips.</p>
                    </div>

                    <div className="bg-indigo-50 p-4 rounded-lg border-l-4 border-indigo-400 transform transition-all duration-300 hover:-translate-x-1">
                      <h4 className="font-semibold text-theme-secondary mb-2">📌 Bonus: Cutoff Rank Comparison Tool</h4>
                      <p className="text-gray-700">See how your rank compares to previous years for each listed college.</p>
                    </div>
                    
                    <div className="mt-4 bg-gray-50 p-3 rounded-lg text-center">
                      <p className="text-sm text-gray-700 font-medium">
                        ✅ Trusted by 25,000+ students for JEE, NEET, CUET & State Counseling
                      </p>
                      <p className="text-xs text-gray-500">
                        📥 Instantly downloadable in PDF format – no login needed
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </TabsContent>
            
            {/* Key Features Tab */}
            <TabsContent value="features" className="border rounded-lg p-6 shadow-md bg-white">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div className="flex items-start gap-3 bg-gray-50 p-4 rounded-lg transform transition-all duration-300 hover:-translate-y-1 hover:shadow-md">
                    <Badge className="mt-1 bg-theme-primary/20 text-theme-secondary h-8 w-8 flex items-center justify-center p-0 text-base">1</Badge>
                    <div>
                      <h4 className="font-semibold text-gray-800">Rank-Based Matching</h4>
                      <p className="text-gray-600">College suggestions calculated specifically for your rank and category, with probabilities for each round.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3 bg-gray-50 p-4 rounded-lg transform transition-all duration-300 hover:-translate-y-1 hover:shadow-md">
                    <Badge className="mt-1 bg-theme-primary/20 text-theme-secondary h-8 w-8 flex items-center justify-center p-0 text-base">2</Badge>
                    <div>
                      <h4 className="font-semibold text-gray-800">Trend Analysis</h4>
                      <p className="text-gray-600">Five-year historical data analysis to predict this year's cut-offs with remarkable accuracy.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3 bg-gray-50 p-4 rounded-lg transform transition-all duration-300 hover:-translate-y-1 hover:shadow-md">
                    <Badge className="mt-1 bg-theme-primary/20 text-theme-secondary h-8 w-8 flex items-center justify-center p-0 text-base">3</Badge>
                    <div>
                      <h4 className="font-semibold text-gray-800">Fee Breakdown</h4>
                      <p className="text-gray-600">Complete college-wise fee structures including tuition, hostel, mess, and additional expenses.</p>
                    </div>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <div className="flex items-start gap-3 bg-gray-50 p-4 rounded-lg transform transition-all duration-300 hover:-translate-y-1 hover:shadow-md">
                    <Badge className="mt-1 bg-theme-primary/20 text-theme-secondary h-8 w-8 flex items-center justify-center p-0 text-base">4</Badge>
                    <div>
                      <h4 className="font-semibold text-gray-800">Placements & Packages</h4>
                      <p className="text-gray-600">Branch-wise placement rates and average salary packages from top colleges and their recent recruiters.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3 bg-gray-50 p-4 rounded-lg transform transition-all duration-300 hover:-translate-y-1 hover:shadow-md">
                    <Badge className="mt-1 bg-theme-primary/20 text-theme-secondary h-8 w-8 flex items-center justify-center p-0 text-base">5</Badge>
                    <div>
                      <h4 className="font-semibold text-gray-800">Campus Life</h4>
                      <p className="text-gray-600">Campus infrastructure, student clubs, technical festivals, and available facilities overview.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3 bg-gray-50 p-4 rounded-lg transform transition-all duration-300 hover:-translate-y-1 hover:shadow-md">
                    <Badge className="mt-1 bg-theme-primary/20 text-theme-secondary h-8 w-8 flex items-center justify-center p-0 text-base">6</Badge>
                    <div>
                      <h4 className="font-semibold text-gray-800">Future-Ready Options</h4>
                      <p className="text-gray-600">Emerging branches with strong growth potential and high job security highlighted specifically.</p>
                    </div>
                  </div>
                </div>
              </div>
            </TabsContent>
            
            {/* Testimonials Tab */}
            <TabsContent value="testimonials" className="border rounded-lg p-6 shadow-md bg-white">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-gray-50 p-6 rounded-lg hover:shadow-md transition-all hover:-translate-y-1">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 rounded-full bg-theme-primary/20 flex items-center justify-center text-theme-secondary font-bold text-lg mr-3">
                      RS
                    </div>
                    <div>
                      <h4 className="font-semibold">Rahul Singh</h4>
                      <p className="text-sm text-gray-500">JEE Main Rank: 15,432</p>
                    </div>
                  </div>
                  <p className="text-gray-600 italic">
                    "I was totally clueless about counselling and almost picked the wrong college! The AI report showed me way better options that matched my rank perfectly."
                  </p>
                  <div className="mt-3 flex">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star key={star} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                </div>
                
                <div className="bg-gray-50 p-6 rounded-lg hover:shadow-md transition-all hover:-translate-y-1">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 rounded-full bg-theme-primary/20 flex items-center justify-center text-theme-secondary font-bold text-lg mr-3">
                      AP
                    </div>
                    <div>
                      <h4 className="font-semibold">Anjali Patel</h4>
                      <p className="text-sm text-gray-500">JEE Main Rank: 32,567</p>
                    </div>
                  </div>
                  <p className="text-gray-600 italic">
                    "The round-by-round strategy was spot on! I got into Computer Science at a great NIT which I wouldn't have even considered before."
                  </p>
                  <div className="mt-3 flex">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star key={star} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                </div>
                
                <div className="bg-gray-50 p-6 rounded-lg hover:shadow-md transition-all hover:-translate-y-1">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 rounded-full bg-theme-primary/20 flex items-center justify-center text-theme-secondary font-bold text-lg mr-3">
                      KT
                    </div>
                    <div>
                      <h4 className="font-semibold">Karthik Tiwari</h4>
                      <p className="text-sm text-gray-500">BITSAT Score: 320</p>
                    </div>
                  </div>
                  <p className="text-gray-600 italic">
                    "My parents were pushing me toward traditional branches, but the AI report showed us emerging fields with amazing placements. Best ₹499 we ever spent!"
                  </p>
                  <div className="mt-3 flex">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star key={star} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                </div>
                
                <div className="bg-gray-50 p-6 rounded-lg hover:shadow-md transition-all hover:-translate-y-1">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 rounded-full bg-theme-primary/20 flex items-center justify-center text-theme-secondary font-bold text-lg mr-3">
                      SM
                    </div>
                    <div>
                      <h4 className="font-semibold">Shreya Menon</h4>
                      <p className="text-sm text-gray-500">JEE Main Rank: 48,765</p>
                    </div>
                  </div>
                  <p className="text-gray-600 italic">
                    "Even with an average rank, I got into a great college thanks to the AI report's strategy. Now I'm studying exactly what I wanted!"
                  </p>
                  <div className="mt-3 flex">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star key={star} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </section>
  );
};

export default ReportPreviewSection;
