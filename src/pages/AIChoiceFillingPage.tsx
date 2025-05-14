
import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AIReportForm from "@/components/AIReportForm";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import AIChoiceIllustration from "@/components/AIChoiceIllustration";
import { 
  FileText, CheckSquare, BookOpen, BarChart4, 
  IndianRupee, ExternalLink, Star, Award, 
  BookText, Brain, Lightbulb, Compass
} from "lucide-react";

const AIChoiceFillingPage = () => {
  const [selectedExam, setSelectedExam] = useState<string | null>(null);

  const examReports = [
    {
      id: "jee-main",
      title: "JEE Main AI Choice Filling Report",
      icon: <FileText className="w-10 h-10 text-purple-600" />,
      color: "bg-purple-50 border-purple-200",
      iconBg: "bg-purple-100",
      textColor: "text-purple-700",
      description: "Get optimal college & branch selections for JEE Main ranks with predicted cut-offs and future prospects.",
      features: [
        "Complete list of NITs, IIITs & GFTIs by rank",
        "Round-wise filling strategy",
        "Home state quota advantage analysis",
      ]
    },
    {
      id: "jee-advanced",
      title: "JEE Advanced IIT Counselling Report",
      icon: <Award className="w-10 h-10 text-blue-600" />,
      color: "bg-blue-50 border-blue-200",
      iconBg: "bg-blue-100",
      textColor: "text-blue-700",
      description: "IIT-focused counselling guidance with branch-wise rankings and opportunities across all 23 IITs.",
      features: [
        "All 23 IITs branch-wise predictions",
        "Previous years' closing ranks analysis",
        "Special emphasis on newer IITs"
      ]
    },
    {
      id: "neet",
      title: "NEET Medical Counselling Report",
      icon: <BookText className="w-10 h-10 text-green-600" />,
      color: "bg-green-50 border-green-200",
      iconBg: "bg-green-100",
      textColor: "text-green-700",
      description: "Comprehensive medical college selection guide for MBBS & BDS with AIQ and state quota predictions.",
      features: [
        "Government & Private Medical Colleges",
        "State-wise NEET cutoffs & predictions",
        "AIQ vs State Quota strategic analysis"
      ]
    },
    {
      id: "bitsat",
      title: "BITS Pilani Admissions Report",
      icon: <BookOpen className="w-10 h-10 text-amber-600" />,
      color: "bg-amber-50 border-amber-200",
      iconBg: "bg-amber-100",
      textColor: "text-amber-700",
      description: "BITS Pilani campuses & dual degree options explored with score-based recommendations.",
      features: [
        "Campus & branch-wise cutoffs",
        "Dual degree opportunities",
        "Iteration-wise admission probabilities"
      ]
    },
    {
      id: "state-engg",
      title: "State Engineering Counselling",
      icon: <BarChart4 className="w-10 h-10 text-rose-600" />,
      color: "bg-rose-50 border-rose-200",
      iconBg: "bg-rose-100",
      textColor: "text-rose-700",
      description: "State-specific engineering college recommendations based on state CETs and JEE Main scores.",
      features: [
        "Top state engineering colleges",
        "Government & aided institutions focus",
        "Regional language support available"
      ]
    },
    {
      id: "private-univ",
      title: "Private Universities Report",
      icon: <CheckSquare className="w-10 h-10 text-indigo-600" />,
      color: "bg-indigo-50 border-indigo-200",
      iconBg: "bg-indigo-100",
      textColor: "text-indigo-700",
      description: "Curated selection of top private universities with scholarship opportunities and admission pathways.",
      features: [
        "Scholarship & financial aid guidance",
        "Direct admission opportunities",
        "Specialization & placement comparisons"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />

      {/* Hero Banner with animated elements */}
      <section className="bg-gradient-to-r from-purple-700 to-indigo-800 text-white py-20 relative overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-white opacity-5 rounded-full translate-x-1/2 -translate-y-1/4 animate-pulse-slow"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-white opacity-5 rounded-full -translate-x-1/3 translate-y-1/3 animate-pulse-slow"></div>
        
        {/* Small floating particles */}
        <div className="absolute inset-0">
          {[...Array(8)].map((_, i) => (
            <div 
              key={i} 
              className="absolute w-4 h-4 bg-white rounded-full opacity-20"
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                animation: `float ${4 + Math.random() * 4}s infinite ease-in-out ${Math.random() * 5}s`
              }}
            ></div>
          ))}
        </div>
        
        <div className="container mx-auto px-4 text-center relative z-10">
          <Badge className="mb-6 px-3 py-1 bg-white/20 backdrop-blur-sm text-white border-none">12th Grade Counselling</Badge>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">AI-Generated College Choice Filling Report</h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto mb-8 text-purple-100">
            Unlock your dream college with smart, data-driven recommendations tailored to your rank
          </p>
          
          {/* Animated box showcasing AI report with GIF-like animation */}
          <div className="max-w-4xl mx-auto mb-10 p-2 bg-white/10 backdrop-blur-sm rounded-2xl">
            <div className="bg-purple-900/60 backdrop-blur-md p-6 rounded-xl relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-indigo-600/20"></div>
              
              <div className="relative z-10 flex flex-col md:flex-row items-center gap-6">
                <div className="md:w-1/3 flex justify-center">
                  <div className="relative">
                    {/* Animated GIF-like element */}
                    <div className="w-48 h-48 relative bg-purple-400/10 backdrop-blur rounded-lg overflow-hidden flex items-center justify-center">
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-32 h-32 rounded-lg bg-gradient-to-br from-purple-500 to-blue-500 animate-pulse">
                          <div className="w-full h-full flex items-center justify-center">
                            <FileText className="w-16 h-16 text-white animate-bounce" />
                          </div>
                        </div>
                      </div>
                      
                      {/* Moving dots simulation */}
                      {[...Array(20)].map((_, i) => (
                        <div
                          key={`dot-${i}`}
                          className="absolute w-1.5 h-1.5 rounded-full bg-white"
                          style={{
                            top: `${Math.random() * 100}%`,
                            left: `${Math.random() * 100}%`,
                            opacity: 0.6 + (Math.random() * 0.4),
                            animation: `float ${3 + Math.random() * 7}s infinite ease-in-out ${Math.random() * 5}s`
                          }}
                        ></div>
                      ))}
                      
                      {/* Data streams */}
                      <div className="absolute top-1/2 left-0 h-0.5 w-full bg-gradient-to-r from-transparent via-white to-transparent opacity-70 animate-pulse-slow"></div>
                      <div className="absolute top-1/3 left-0 h-0.5 w-full bg-gradient-to-r from-transparent via-white to-transparent opacity-50 animate-pulse-slow" style={{animationDelay: '1s'}}></div>
                      <div className="absolute top-2/3 left-0 h-0.5 w-full bg-gradient-to-r from-transparent via-white to-transparent opacity-60 animate-pulse-slow" style={{animationDelay: '2s'}}></div>
                    </div>
                    
                    <div className="absolute -bottom-2 -right-2 w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center animate-bounce shadow-lg">
                      <div className="text-center">
                        <span className="text-lg font-bold text-purple-900">₹499</span>
                        <span className="text-xs block text-purple-900 font-semibold">only</span>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="md:w-2/3 text-left">
                  <h3 className="text-2xl font-bold mb-2">Your Gateway to Top Colleges</h3>
                  <ul className="mb-4 space-y-2">
                    <li className="flex items-center gap-2">
                      <CheckSquare className="w-5 h-5 text-green-300" />
                      <span>Find colleges matching your JEE/NEET rank & category</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckSquare className="w-5 h-5 text-green-300" />
                      <span>AI-recommended branches with highest future scope</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckSquare className="w-5 h-5 text-green-300" />
                      <span>Avoid missed opportunities with smart choices</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckSquare className="w-5 h-5 text-green-300" />
                      <span>Step-by-step counselling guide with ordering strategy</span>
                    </li>
                  </ul>
                  <Button size="lg" className="bg-white text-purple-700 hover:bg-purple-50 rounded-full px-8 py-6 text-lg shadow-xl transition-all duration-300 hover:scale-105">
                    Generate My College Report Now
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why AI Choice Filling with SVG illustration */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="flex flex-col md:flex-row gap-16 items-center">
              <div className="md:w-1/2 order-2 md:order-1">
                <div className="relative h-80 md:h-96">
                  <AIChoiceIllustration />
                </div>
              </div>
              <div className="md:w-1/2 order-1 md:order-2">
                <h2 className="text-3xl font-bold mb-6 text-gray-900">Why AI Choice Filling?</h2>
                
                <div className="space-y-6">
                  <div className="flex items-start gap-4 bg-purple-50 p-4 rounded-lg transform transition-all duration-300 hover:scale-105 hover:shadow-md">
                    <div className="mt-1 bg-purple-100 p-2 rounded-lg">
                      <Brain className="w-6 h-6 text-purple-600" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-purple-700">No More Guesswork</h3>
                      <p className="text-gray-600">Stop stressing about which colleges to pick! Our AI analyzes your rank against 5 years of data to recommend perfect matches.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4 bg-blue-50 p-4 rounded-lg transform transition-all duration-300 hover:scale-105 hover:shadow-md">
                    <div className="mt-1 bg-blue-100 p-2 rounded-lg">
                      <Compass className="w-6 h-6 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-blue-700">Tailored Just for You</h3>
                      <p className="text-gray-600">Personalized to your exact rank, category, home state, and preferences - like having a counselor in your pocket!</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4 bg-green-50 p-4 rounded-lg transform transition-all duration-300 hover:scale-105 hover:shadow-md">
                    <div className="mt-1 bg-green-100 p-2 rounded-lg">
                      <Lightbulb className="w-6 h-6 text-green-600" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-green-700">Future-Ready Choices</h3>
                      <p className="text-gray-600">Discover emerging branches with amazing placement stats and future growth potential that others might miss.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4 bg-amber-50 p-4 rounded-lg transform transition-all duration-300 hover:scale-105 hover:shadow-md">
                    <div className="mt-1 bg-amber-100 p-2 rounded-lg">
                      <CheckSquare className="w-6 h-6 text-amber-600" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-amber-700">Stress-Free Decision</h3>
                      <p className="text-gray-600">Save hundreds of hours of research and second-guessing. Make confident decisions backed by data.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How to Use It - Updated to be more visually appealing */}
      <section className="py-16 bg-gray-50 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-gray-50 to-purple-50 opacity-50"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-12">
            <Badge className="mb-3 bg-indigo-100 text-indigo-700 border-indigo-200 hover:bg-indigo-200">Step by Step</Badge>
            <h2 className="text-3xl font-bold mb-4 text-gray-900">How to Read & Use Your AI Report</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Your report is designed to be super easy to understand even if this is your first counselling experience
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <Card className="border-none shadow-lg hover:shadow-xl transition-all hover:-translate-y-2 bg-white group">
              <CardContent className="p-8">
                <div className="w-16 h-16 mb-5 rounded-xl bg-gradient-to-br from-purple-400 to-purple-600 flex items-center justify-center transform group-hover:rotate-6 transition-all">
                  <FileText className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-gray-800">Color-Coded Choices</h3>
                <p className="text-gray-600 mb-4">
                  Green sections show safe choices where you'll definitely get in. Yellow for moderate chances, and blue for dream colleges worth trying.
                </p>
                <div className="flex gap-2">
                  <span className="px-3 py-1 bg-green-100 text-green-700 text-sm rounded-full">Safe Picks</span>
                  <span className="px-3 py-1 bg-yellow-100 text-yellow-700 text-sm rounded-full">Worth Trying</span>
                  <span className="px-3 py-1 bg-blue-100 text-blue-700 text-sm rounded-full">Dream Options</span>
                </div>
              </CardContent>
            </Card>
            
            <Card className="border-none shadow-lg hover:shadow-xl transition-all hover:-translate-y-2 bg-white group">
              <CardContent className="p-8">
                <div className="w-16 h-16 mb-5 rounded-xl bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center transform group-hover:rotate-6 transition-all">
                  <BookOpen className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-gray-800">Filling Strategy</h3>
                <p className="text-gray-600 mb-4">
                  Your report includes a round-by-round strategy with exactly when to lock choices, when to float, and when to freeze your seat.
                </p>
                <div className="flex flex-col gap-1">
                  <div className="flex items-center">
                    <span className="w-6 h-6 rounded-full bg-purple-100 text-purple-700 flex items-center justify-center text-xs mr-2">1</span>
                    <span className="text-sm text-gray-700">Initial selections</span>
                  </div>
                  <div className="flex items-center">
                    <span className="w-6 h-6 rounded-full bg-purple-100 text-purple-700 flex items-center justify-center text-xs mr-2">2</span>
                    <span className="text-sm text-gray-700">Float vs. freeze strategy</span>
                  </div>
                  <div className="flex items-center">
                    <span className="w-6 h-6 rounded-full bg-purple-100 text-purple-700 flex items-center justify-center text-xs mr-2">3</span>
                    <span className="text-sm text-gray-700">Final decision guide</span>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card className="border-none shadow-lg hover:shadow-xl transition-all hover:-translate-y-2 bg-white group">
              <CardContent className="p-8">
                <div className="w-16 h-16 mb-5 rounded-xl bg-gradient-to-br from-green-400 to-green-600 flex items-center justify-center transform group-hover:rotate-6 transition-all">
                  <BarChart4 className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-gray-800">Beyond Counselling</h3>
                <p className="text-gray-600 mb-4">
                  Your report includes bonus tips on scholarships, hostel selection, and special programs unique to each recommended college.
                </p>
                <ul className="space-y-1">
                  <li className="flex items-center text-sm text-gray-700">
                    <CheckSquare className="w-4 h-4 text-green-600 mr-2" />
                    <span>Scholarship opportunities</span>
                  </li>
                  <li className="flex items-center text-sm text-gray-700">
                    <CheckSquare className="w-4 h-4 text-green-600 mr-2" />
                    <span>Campus life insights</span>
                  </li>
                  <li className="flex items-center text-sm text-gray-700">
                    <CheckSquare className="w-4 h-4 text-green-600 mr-2" />
                    <span>Special programs & internships</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* AI Report Types Section - Enhanced */}
      <section className="py-16 bg-white relative">
        <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-gray-50 to-white"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-12">
            <Badge variant="outline" className="mb-2 bg-purple-50 text-purple-700 border-purple-200">Choose Your Perfect Match</Badge>
            <h2 className="text-3xl font-bold mb-4 text-gray-900">AI Reports for Your Entrance Exam</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Select your exam below and get a specialized AI report tailored to that specific counselling process
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {examReports.map((report) => (
              <Card 
                key={report.id} 
                className={`border-2 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 overflow-hidden group ${report.color}`}
              >
                <CardContent className="p-0">
                  <div className={`${report.iconBg} p-4 group-hover:bg-opacity-80 transition-all`}>
                    <div className="flex items-center gap-4">
                      <div className={`w-14 h-14 rounded-full bg-white flex items-center justify-center shadow-md`}>
                        {report.icon}
                      </div>
                      <h3 className={`text-xl font-bold ${report.textColor}`}>{report.title}</h3>
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <p className="text-gray-600 mb-5 min-h-[60px]">{report.description}</p>
                    
                    <div className="bg-gray-50 p-4 rounded-lg mb-6">
                      <h4 className={`font-semibold mb-2 ${report.textColor}`}>What's Included:</h4>
                      <ul className="space-y-2">
                        {report.features.map((feature, idx) => (
                          <li key={idx} className="flex items-start gap-2">
                            <CheckSquare className="w-5 h-5 text-green-600 mt-0.5" />
                            <span className="text-gray-700">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <Dialog>
                      <DialogTrigger asChild>
                        <Button 
                          className={`w-full ${report.textColor.replace('text', 'bg')} hover:opacity-90 text-white py-6 font-semibold text-lg shadow-md group-hover:shadow-lg transition-all`}
                          onClick={() => setSelectedExam(report.title)}
                        >
                          Get Your AI Report
                        </Button>
                      </DialogTrigger>
                      <DialogContent className="sm:max-w-md">
                        <AIReportForm examType={selectedExam || report.title} />
                      </DialogContent>
                    </Dialog>
                  </div>
                  
                  <div className={`h-1 w-full ${report.textColor.replace('text', 'bg')}`}></div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Sample Report */}
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
              <TabsList className="grid grid-cols-3 mb-8">
                <TabsTrigger value="preview" className="text-base">Report Preview</TabsTrigger>
                <TabsTrigger value="features" className="text-base">What's Inside</TabsTrigger>
                <TabsTrigger value="testimonials" className="text-base">Student Reviews</TabsTrigger>
              </TabsList>
              
              {/* Report Preview Tab */}
              <TabsContent value="preview" className="border rounded-lg p-6 shadow-md bg-white">
                <div className="flex flex-col md:flex-row gap-6">
                  <div className="md:w-1/2">
                    <div className="border-2 border-purple-200 rounded-lg overflow-hidden shadow-lg transform transition-all duration-300 hover:scale-105 hover:shadow-xl">
                      <img 
                        src="https://images.unsplash.com/photo-1581091214196-88f87eb3bbb5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                        alt="AI Report Example" 
                        className="w-full h-auto"
                      />
                    </div>
                    <div className="mt-4 text-center">
                      <a href="#" className="inline-flex items-center text-purple-600 hover:text-purple-800 font-medium bg-purple-50 px-4 py-2 rounded-full hover:bg-purple-100 transition-colors">
                        View Full Sample Report <ExternalLink className="ml-2 w-4 h-4" />
                      </a>
                    </div>
                  </div>
                  <div className="md:w-1/2">
                    <h3 className="text-2xl font-bold mb-4 text-purple-700">What You'll Get</h3>
                    <div className="space-y-4">
                      <div className="bg-purple-50 p-4 rounded-lg border-l-4 border-purple-500 transform transition-all duration-300 hover:-translate-x-1">
                        <h4 className="font-semibold text-purple-700 mb-2">College Recommendations</h4>
                        <p className="text-gray-700">50+ college options perfectly matched to your rank with branch-specific insights.</p>
                      </div>
                      
                      <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-500 transform transition-all duration-300 hover:-translate-x-1">
                        <h4 className="font-semibold text-blue-700 mb-2">Strategic Choice Order</h4>
                        <p className="text-gray-700">Optimized filing sequence that maximizes your chances of getting the best possible option.</p>
                      </div>
                      
                      <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-500 transform transition-all duration-300 hover:-translate-x-1">
                        <h4 className="font-semibold text-green-700 mb-2">Future Outlook Analysis</h4>
                        <p className="text-gray-700">Career growth projections and placement insights for each recommended branch.</p>
                      </div>
                      
                      <div className="bg-amber-50 p-4 rounded-lg border-l-4 border-amber-500 transform transition-all duration-300 hover:-translate-x-1">
                        <h4 className="font-semibold text-amber-700 mb-2">Round-by-Round Plan</h4>
                        <p className="text-gray-700">Detailed counselling strategy with decision points for each counselling round.</p>
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
                      <Badge className="mt-1 bg-purple-100 text-purple-700 h-8 w-8 flex items-center justify-center p-0 text-base">1</Badge>
                      <div>
                        <h4 className="font-semibold text-gray-800">Rank-Based Matching</h4>
                        <p className="text-gray-600">College suggestions calculated specifically for your rank and category, with probabilities for each round.</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-3 bg-gray-50 p-4 rounded-lg transform transition-all duration-300 hover:-translate-y-1 hover:shadow-md">
                      <Badge className="mt-1 bg-purple-100 text-purple-700 h-8 w-8 flex items-center justify-center p-0 text-base">2</Badge>
                      <div>
                        <h4 className="font-semibold text-gray-800">Trend Analysis</h4>
                        <p className="text-gray-600">Five-year historical data analysis to predict this year's cut-offs with remarkable accuracy.</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-3 bg-gray-50 p-4 rounded-lg transform transition-all duration-300 hover:-translate-y-1 hover:shadow-md">
                      <Badge className="mt-1 bg-purple-100 text-purple-700 h-8 w-8 flex items-center justify-center p-0 text-base">3</Badge>
                      <div>
                        <h4 className="font-semibold text-gray-800">Fee Breakdown</h4>
                        <p className="text-gray-600">Complete college-wise fee structures including tuition, hostel, mess, and additional expenses.</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    <div className="flex items-start gap-3 bg-gray-50 p-4 rounded-lg transform transition-all duration-300 hover:-translate-y-1 hover:shadow-md">
                      <Badge className="mt-1 bg-purple-100 text-purple-700 h-8 w-8 flex items-center justify-center p-0 text-base">4</Badge>
                      <div>
                        <h4 className="font-semibold text-gray-800">Placements & Packages</h4>
                        <p className="text-gray-600">Branch-wise placement rates and average salary packages from top colleges and their recent recruiters.</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-3 bg-gray-50 p-4 rounded-lg transform transition-all duration-300 hover:-translate-y-1 hover:shadow-md">
                      <Badge className="mt-1 bg-purple-100 text-purple-700 h-8 w-8 flex items-center justify-center p-0 text-base">5</Badge>
                      <div>
                        <h4 className="font-semibold text-gray-800">Campus Life</h4>
                        <p className="text-gray-600">Campus infrastructure, student clubs, technical festivals, and available facilities overview.</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-3 bg-gray-50 p-4 rounded-lg transform transition-all duration-300 hover:-translate-y-1 hover:shadow-md">
                      <Badge className="mt-1 bg-purple-100 text-purple-700 h-8 w-8 flex items-center justify-center p-0 text-base">6</Badge>
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
                      <div className="w-12 h-12 rounded-full bg-purple-200 flex items-center justify-center text-purple-700 font-bold text-lg mr-3">
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
                      <div className="w-12 h-12 rounded-full bg-blue-200 flex items-center justify-center text-blue-700 font-bold text-lg mr-3">
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
                      <div className="w-12 h-12 rounded-full bg-green-200 flex items-center justify-center text-green-700 font-bold text-lg mr-3">
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
                      <div className="w-12 h-12 rounded-full bg-amber-200 flex items-center justify-center text-amber-700 font-bold text-lg mr-3">
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

      {/* Pricing Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-xl overflow-hidden">
            <div className="bg-gradient-to-r from-purple-600 to-indigo-700 p-8 text-white text-center">
              <h2 className="text-3xl font-bold mb-2">Get Your AI Report Today</h2>
              <p className="text-xl opacity-90">One smart decision for your entire college journey</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-8">
              <div className="flex flex-col justify-center">
                <h3 className="text-2xl font-bold mb-4 text-gray-800">AI Choice Filling Report</h3>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-center">
                    <CheckSquare className="w-5 h-5 text-green-500 mr-2" />
                    <span className="text-gray-700">Personalized college recommendations</span>
                  </li>
                  <li className="flex items-center">
                    <CheckSquare className="w-5 h-5 text-green-500 mr-2" />
                    <span className="text-gray-700">Branch-specific insights & placement stats</span>
                  </li>
                  <li className="flex items-center">
                    <CheckSquare className="w-5 h-5 text-green-500 mr-2" />
                    <span className="text-gray-700">Round-by-round counselling strategy</span>
                  </li>
                  <li className="flex items-center">
                    <CheckSquare className="w-5 h-5 text-green-500 mr-2" />
                    <span className="text-gray-700">College fee & scholarship information</span>
                  </li>
                  <li className="flex items-center">
                    <CheckSquare className="w-5 h-5 text-green-500 mr-2" />
                    <span className="text-gray-700">PDF format with instant email delivery</span>
                  </li>
                  <li className="flex items-center">
                    <CheckSquare className="w-5 h-5 text-green-500 mr-2" />
                    <span className="text-gray-700">One-time payment, yours forever</span>
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
                      <p className="text-gray-600 text-sm">Enter your rank, category, and any preferences you have</p>
                    </div>
                  </li>
                  
                  <li className="flex">
                    <div className="bg-purple-100 rounded-full w-7 h-7 flex items-center justify-center mr-3 mt-1 shrink-0">
                      <span className="text-purple-700 font-semibold">2</span>
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-800">Make the Payment</h4>
                      <p className="text-gray-600 text-sm">Quick & secure payment (UPI, cards, net banking)</p>
                    </div>
                  </li>
                  
                  <li className="flex">
                    <div className="bg-purple-100 rounded-full w-7 h-7 flex items-center justify-center mr-3 mt-1 shrink-0">
                      <span className="text-purple-700 font-semibold">3</span>
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-800">Get Your AI Report</h4>
                      <p className="text-gray-600 text-sm">Receive a detailed report in your email instantly</p>
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
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-gray-900">Frequently Asked Questions</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Find answers to the most common questions about our AI-Generated Choice Filling Reports
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="space-y-6">
              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-all">
                <h3 className="text-xl font-semibold mb-2 text-gray-800">How accurate are the AI recommendations?</h3>
                <p className="text-gray-600">
                  Our AI model uses data from the past 5 years of counseling sessions, including cut-off trends, seat allotments, and college rankings. The recommendations have a 92% accuracy rate when followed correctly.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-all">
                <h3 className="text-xl font-semibold mb-2 text-gray-800">How long does it take to get my report?</h3>
                <p className="text-gray-600">
                  Reports are delivered instantly to your email after payment confirmation. You can download the PDF immediately.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-all">
                <h3 className="text-xl font-semibold mb-2 text-gray-800">What information do I need to provide?</h3>
                <p className="text-gray-600">
                  You'll need to provide your exam rank, category (General/OBC/SC/ST), gender, domicile state, and any specific preferences you have regarding location or branches.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-all">
                <h3 className="text-xl font-semibold mb-2 text-gray-800">Can I get a refund if I'm not satisfied?</h3>
                <p className="text-gray-600">
                  We offer a 100% satisfaction guarantee. If you find the recommendations aren't helpful, contact our support team within 24 hours of purchase for assistance or a refund.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-all">
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
      
      {/* Add animation keyframes to tailwind config if needed */}
      <style>
        {`
        @keyframes float {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-10px);
          }
        }
        .animate-pulse-slow {
          animation: pulse 6s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        }
        `}
      </style>
    </div>
  );
};

export default AIChoiceFillingPage;

