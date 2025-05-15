import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { FileText, CheckSquare, BookOpen, BarChart4, IndianRupee, ExternalLink, Star } from "lucide-react";

const AIChoiceFillingPage = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />

      {/* Hero Banner */}
      <section className="bg-gradient-to-r from-purple-700 to-indigo-800 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">AI-Generated Choice Filling Report</h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto mb-8 text-purple-100">
            Make smarter college selection decisions with our data-driven AI solution
          </p>
          <Button size="lg" className="bg-white text-purple-700 hover:bg-purple-50 rounded-full px-8 py-6 text-lg shadow-xl">
            Get Your Report Now
          </Button>
        </div>
      </section>

      {/* Main Benefits */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="flex flex-col md:flex-row gap-16 items-center">
              <div className="md:w-1/2">
                <div className="relative">
                  <div className="absolute -z-10 -left-8 -top-8 w-64 h-64 bg-purple-100 rounded-full opacity-70"></div>
                  <div className="border-4 border-purple-600 rounded-xl overflow-hidden shadow-xl">
                    <img 
                      src="https://images.unsplash.com/photo-1488190211105-8b0e65b80b4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                      alt="AI Choice Filling Report" 
                      className="w-full h-auto"
                    />
                  </div>
                </div>
              </div>
              <div className="md:w-1/2">
                <h2 className="text-3xl font-bold mb-6 text-gray-900">Why AI Choice Filling?</h2>
                
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="mt-1 bg-green-100 p-1 rounded">
                      <CheckSquare className="w-5 h-5 text-green-600" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-800">Avoid Guesswork</h3>
                      <p className="text-gray-600">Get smart, data-driven college & branch suggestions tailored to your needs</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <div className="mt-1 bg-green-100 p-1 rounded">
                      <CheckSquare className="w-5 h-5 text-green-600" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-800">Personalized Recommendations</h3>
                      <p className="text-gray-600">Customized to your rank, category, seat type, and preferences</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <div className="mt-1 bg-green-100 p-1 rounded">
                      <CheckSquare className="w-5 h-5 text-green-600" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-800">Data-Driven Insights</h3>
                      <p className="text-gray-600">Based on real-time trends, historical data, and past cut-offs</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <div className="mt-1 bg-green-100 p-1 rounded">
                      <CheckSquare className="w-5 h-5 text-green-600" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-800">Save Time & Reduce Stress</h3>
                      <p className="text-gray-600">Eliminate hours of research with organized, strategic choices</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How to Use It */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-gray-900">How to Read & Use Your AI Report</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Our reports are designed to be intuitive, actionable, and easy to implement during the counseling process
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <Card className="border-none shadow-lg hover:shadow-xl transition-all hover:-translate-y-1 bg-white">
              <CardContent className="p-6">
                <div className="w-16 h-16 mb-5 rounded-xl bg-purple-100 flex items-center justify-center">
                  <FileText className="w-8 h-8 text-purple-600" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-gray-800">Simple Visual Layout</h3>
                <p className="text-gray-600">
                  Color-coded sections showing top picks, backup options, and safe choices based on your rank range.
                </p>
              </CardContent>
            </Card>
            
            <Card className="border-none shadow-lg hover:shadow-xl transition-all hover:-translate-y-1 bg-white">
              <CardContent className="p-6">
                <div className="w-16 h-16 mb-5 rounded-xl bg-blue-100 flex items-center justify-center">
                  <BookOpen className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-gray-800">Step-by-Step Guide</h3>
                <p className="text-gray-600">
                  Detailed instructions included with each report explaining how to use the recommendations during counseling.
                </p>
              </CardContent>
            </Card>
            
            <Card className="border-none shadow-lg hover:shadow-xl transition-all hover:-translate-y-1 bg-white">
              <CardContent className="p-6">
                <div className="w-16 h-16 mb-5 rounded-xl bg-green-100 flex items-center justify-center">
                  <BarChart4 className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-gray-800">Multi-Use Format</h3>
                <p className="text-gray-600">
                  Use it during JoSAA counseling, state counseling sessions, and private college admissions for better decisions.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Sample Report */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-gray-900">Sample AI Report</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              See what's included in our comprehensive AI-generated choice filling reports
            </p>
          </div>
          
          <div className="max-w-5xl mx-auto">
            <Tabs defaultValue="preview" className="w-full">
              <TabsList className="grid grid-cols-3 mb-8">
                <TabsTrigger value="preview">Report Preview</TabsTrigger>
                <TabsTrigger value="features">Key Features</TabsTrigger>
                <TabsTrigger value="testimonials">Student Feedback</TabsTrigger>
              </TabsList>
              
              {/* Report Preview Tab */}
              <TabsContent value="preview" className="border rounded-lg p-6 shadow-md bg-white">
                <div className="flex flex-col md:flex-row gap-6">
                  <div className="md:w-1/2">
                    <div className="border-2 border-purple-200 rounded-lg overflow-hidden shadow-lg">
                      <img 
                        src="https://images.unsplash.com/photo-1581091214196-88f87eb3bbb5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                        alt="AI Report Example" 
                        className="w-full h-auto"
                      />
                    </div>
                    <div className="mt-4 text-center">
                      <a href="#" className="inline-flex items-center text-purple-600 hover:text-purple-800 font-medium">
                        View Full Sample Report <ExternalLink className="ml-1 w-4 h-4" />
                      </a>
                    </div>
                  </div>
                  <div className="md:w-1/2">
                    <h3 className="text-2xl font-bold mb-4 text-purple-700">What's Inside</h3>
                    <div className="space-y-4">
                      <div className="bg-purple-50 p-4 rounded-lg">
                        <h4 className="font-semibold text-purple-700 mb-2">Personalized College List</h4>
                        <p className="text-gray-700">50+ college and branch combinations tailored to your rank range.</p>
                      </div>
                      
                      <div className="bg-blue-50 p-4 rounded-lg">
                        <h4 className="font-semibold text-blue-700 mb-2">Strategic Choice Categories</h4>
                        <p className="text-gray-700">High-probability options, moderate risk choices, and ambitious selections.</p>
                      </div>
                      
                      <div className="bg-green-50 p-4 rounded-lg">
                        <h4 className="font-semibold text-green-700 mb-2">Trend Analysis</h4>
                        <p className="text-gray-700">Data-backed insights on emerging fields and placement trends.</p>
                      </div>
                      
                      <div className="bg-amber-50 p-4 rounded-lg">
                        <h4 className="font-semibold text-amber-700 mb-2">Application Strategy</h4>
                        <p className="text-gray-700">Round-by-round counseling strategy to maximize your chances.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </TabsContent>
              
              {/* Key Features Tab */}
              <TabsContent value="features" className="border rounded-lg p-6 shadow-md bg-white">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <Badge className="mt-1 bg-purple-100 text-purple-700 h-6 w-6 flex items-center justify-center p-0">1</Badge>
                      <div>
                        <h4 className="font-semibold text-gray-800">Rank-Based Recommendations</h4>
                        <p className="text-gray-600">Precise college suggestions based on your exact rank and category.</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-3">
                      <Badge className="mt-1 bg-purple-100 text-purple-700 h-6 w-6 flex items-center justify-center p-0">2</Badge>
                      <div>
                        <h4 className="font-semibold text-gray-800">Cut-off Trend Analysis</h4>
                        <p className="text-gray-600">Historical data from previous years to predict this year's cut-offs.</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-3">
                      <Badge className="mt-1 bg-purple-100 text-purple-700 h-6 w-6 flex items-center justify-center p-0">3</Badge>
                      <div>
                        <h4 className="font-semibold text-gray-800">Fee Structure Comparison</h4>
                        <p className="text-gray-600">Complete breakdown of tuition, hostel, and other fees for informed decisions.</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <Badge className="mt-1 bg-purple-100 text-purple-700 h-6 w-6 flex items-center justify-center p-0">4</Badge>
                      <div>
                        <h4 className="font-semibold text-gray-800">Placement Statistics</h4>
                        <p className="text-gray-600">Branch-wise placement rates and average salary packages from top colleges.</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-3">
                      <Badge className="mt-1 bg-purple-100 text-purple-700 h-6 w-6 flex items-center justify-center p-0">5</Badge>
                      <div>
                        <h4 className="font-semibold text-gray-800">College Infrastructure Rating</h4>
                        <p className="text-gray-600">Information about campus facilities, labs, and research opportunities.</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-3">
                      <Badge className="mt-1 bg-purple-100 text-purple-700 h-6 w-6 flex items-center justify-center p-0">6</Badge>
                      <div>
                        <h4 className="font-semibold text-gray-800">Future-Ready Branch Selection</h4>
                        <p className="text-gray-600">Analysis of emerging fields with strong growth potential and job security.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </TabsContent>
              
              {/* Testimonials Tab */}
              <TabsContent value="testimonials" className="border rounded-lg p-6 shadow-md bg-white">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-gray-50 p-6 rounded-lg">
                    <div className="flex items-center mb-4">
                      <div className="w-12 h-12 rounded-full bg-purple-200 flex items-center justify-center text-purple-700 font-bold text-lg mr-3">
                        RS
                      </div>
                      <div>
                        <h4 className="font-semibold">Rahul Singh</h4>
                        <p className="text-sm text-gray-500">JEE Main Rank: 15,432</p>
                      </div>
                    </div>
                    <p className="text-gray-600 italic">
                      "The AI report saved me countless hours of research. I secured a Computer Science seat at a top NIT following the report's recommendations."
                    </p>
                    <div className="mt-3 flex">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <Star key={star} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                  </div>
                  
                  <div className="bg-gray-50 p-6 rounded-lg">
                    <div className="flex items-center mb-4">
                      <div className="w-12 h-12 rounded-full bg-blue-200 flex items-center justify-center text-blue-700 font-bold text-lg mr-3">
                        AP
                      </div>
                      <div>
                        <h4 className="font-semibold">Anjali Patel</h4>
                        <p className="text-sm text-gray-500">JEE Main Rank: 32,567</p>
                      </div>
                    </div>
                    <p className="text-gray-600 italic">
                      "The report's round-by-round strategy was spot on. I got my preferred branch at a college I hadn't even considered before."
                    </p>
                    <div className="mt-3 flex">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <Star key={star} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                  </div>
                  
                  <div className="bg-gray-50 p-6 rounded-lg">
                    <div className="flex items-center mb-4">
                      <div className="w-12 h-12 rounded-full bg-green-200 flex items-center justify-center text-green-700 font-bold text-lg mr-3">
                        KT
                      </div>
                      <div>
                        <h4 className="font-semibold">Karthik Tiwari</h4>
                        <p className="text-sm text-gray-500">BITSAT Score: 320</p>
                      </div>
                    </div>
                    <p className="text-gray-600 italic">
                      "The fee comparison and placement statistics helped my family make an informed decision. Worth every rupee!"
                    </p>
                    <div className="mt-3 flex">
                      {[1, 2, 3, 4, 4].map((star) => (
                        <Star key={star} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                  </div>
                  
                  <div className="bg-gray-50 p-6 rounded-lg">
                    <div className="flex items-center mb-4">
                      <div className="w-12 h-12 rounded-full bg-amber-200 flex items-center justify-center text-amber-700 font-bold text-lg mr-3">
                        SM
                      </div>
                      <div>
                        <h4 className="font-semibold">Shreya Menon</h4>
                        <p className="text-sm text-gray-500">JEE Main Rank: 48,765</p>
                      </div>
                    </div>
                    <p className="text-gray-600 italic">
                      "Even with a moderate rank, I got into a good college with my preferred branch thanks to the strategic filling options."
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

      {/* Pricing Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-xl overflow-hidden">
            <div className="bg-gradient-to-r from-purple-600 to-indigo-700 p-8 text-white text-center">
              <h2 className="text-3xl font-bold mb-2">Get Your AI Report</h2>
              <p className="text-xl opacity-90">Make data-driven decisions for your future</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-8">
              <div className="flex flex-col justify-center">
                <h3 className="text-2xl font-bold mb-4 text-gray-800">AI Choice Filling Report</h3>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-center">
                    <CheckSquare className="w-5 h-5 text-green-500 mr-2" />
                    <span className="text-gray-700">Personalized college suggestions</span>
                  </li>
                  <li className="flex items-center">
                    <CheckSquare className="w-5 h-5 text-green-500 mr-2" />
                    <span className="text-gray-700">Rank & category-specific options</span>
                  </li>
                  <li className="flex items-center">
                    <CheckSquare className="w-5 h-5 text-green-500 mr-2" />
                    <span className="text-gray-700">Historical cut-off analysis</span>
                  </li>
                  <li className="flex items-center">
                    <CheckSquare className="w-5 h-5 text-green-500 mr-2" />
                    <span className="text-gray-700">Round-by-round strategy</span>
                  </li>
                  <li className="flex items-center">
                    <CheckSquare className="w-5 h-5 text-green-500 mr-2" />
                    <span className="text-gray-700">PDF format with instant delivery</span>
                  </li>
                  <li className="flex items-center">
                    <CheckSquare className="w-5 h-5 text-green-500 mr-2" />
                    <span className="text-gray-700">One-time payment, lifetime access</span>
                  </li>
                </ul>
                
                <div className="flex items-center gap-3 mb-6">
                  <div className="flex items-center bg-green-50 px-3 py-1.5 rounded-full">
                    <IndianRupee className="w-4 h-4 text-green-600 mr-1" />
                    <span className="font-bold text-green-600">499</span>
                  </div>
                  <span className="text-sm text-gray-500">Instant delivery after payment</span>
                </div>
              </div>
              
              <div className="flex flex-col justify-center">
                <h3 className="text-xl font-semibold mb-4 text-gray-800">How It Works</h3>
                <ol className="space-y-4 mb-6">
                  <li className="flex">
                    <div className="bg-purple-100 rounded-full w-7 h-7 flex items-center justify-center mr-3 mt-1 shrink-0">
                      <span className="text-purple-700 font-semibold">1</span>
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-800">Complete the Form</h4>
                      <p className="text-gray-600 text-sm">Enter your rank, category, and preferences</p>
                    </div>
                  </li>
                  
                  <li className="flex">
                    <div className="bg-purple-100 rounded-full w-7 h-7 flex items-center justify-center mr-3 mt-1 shrink-0">
                      <span className="text-purple-700 font-semibold">2</span>
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-800">Make the Payment</h4>
                      <p className="text-gray-600 text-sm">Secure payment via Razorpay (cards, UPI, net banking)</p>
                    </div>
                  </li>
                  
                  <li className="flex">
                    <div className="bg-purple-100 rounded-full w-7 h-7 flex items-center justify-center mr-3 mt-1 shrink-0">
                      <span className="text-purple-700 font-semibold">3</span>
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-800">Receive Your AI Report</h4>
                      <p className="text-gray-600 text-sm">Instant email delivery with downloadable PDF</p>
                    </div>
                  </li>
                </ol>
                
                <Button className="w-full bg-purple-600 hover:bg-purple-700 text-white py-6 rounded-lg text-lg">
                  Get My AI Report Now
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-gray-900">Frequently Asked Questions</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Everything you need to know about our AI-Generated Choice Filling Reports
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="space-y-6">
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-2 text-gray-800">How accurate are the AI recommendations?</h3>
                <p className="text-gray-600">
                  Our AI model uses data from the past 5 years of counseling sessions, including cut-off trends, seat allotments, and college rankings. The recommendations have a 92% accuracy rate when followed correctly.
                </p>
              </div>
              
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-2 text-gray-800">How long does it take to get my report?</h3>
                <p className="text-gray-600">
                  Reports are delivered instantly to your email after payment confirmation. You can download the PDF immediately.
                </p>
              </div>
              
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-2 text-gray-800">What information do I need to provide?</h3>
                <p className="text-gray-600">
                  You'll need to provide your exam rank, category (General/OBC/SC/ST), gender, domicile state, and any specific preferences you have regarding location or branches.
                </p>
              </div>
              
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-2 text-gray-800">Can I get a refund if I'm not satisfied?</h3>
                <p className="text-gray-600">
                  We offer a 100% satisfaction guarantee. If you find the recommendations aren't helpful, contact our support team within 24 hours of purchase for assistance or a refund.
                </p>
              </div>
              
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-2 text-gray-800">Which exams and counseling processes are supported?</h3>
                <p className="text-gray-600">
                  Our AI reports support JEE Main/Advanced (JoSAA counseling), NEET, BITSAT, and most state-level engineering and medical entrance exams.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AIChoiceFillingPage;
