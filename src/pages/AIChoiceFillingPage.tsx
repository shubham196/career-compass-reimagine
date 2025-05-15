import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AIReportForm from "@/components/AIReportForm";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import WhyAISection from "@/components/WhyAISection";
import ReportPreviewSection from "@/components/ReportPreviewSection";
import { 
  FileText, CheckSquare, BookOpen, BarChart4, 
  IndianRupee, Award, BookText
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
      <section className="bg-theme-gradient text-white py-20 relative overflow-hidden">
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
        
        <div className="container mx-auto px-4 relative z-10">
          <Badge className="mb-6 px-3 py-1 bg-white/20 backdrop-blur-sm text-white border-none">NEET | JEE | CUET | State Counselling</Badge>
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-center">AI-Generated College Choice Filling Report</h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto mb-8 text-center text-purple-100">
            Unlock your dream college with smart, data-driven recommendations tailored to your rank
          </p>
          
          {/* Animated box showcasing AI report */}
          <div className="max-w-4xl mx-auto mb-10 p-2 bg-white/10 backdrop-blur-sm rounded-2xl">
            <div className="bg-purple-900/60 backdrop-blur-md p-6 rounded-xl relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-theme-primary/20 to-theme-secondary/20"></div>
              
              <div className="relative z-10 flex flex-col md:flex-row items-center gap-6">
                <div className="md:w-1/3 flex justify-center">
                  <div className="relative">
                    {/* Animated GIF-like element */}
                    <div className="w-48 h-48 relative bg-purple-400/10 backdrop-blur rounded-lg overflow-hidden flex items-center justify-center">
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-32 h-32 rounded-lg bg-gradient-to-br from-theme-primary to-theme-secondary animate-pulse">
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
                  <h3 className="text-2xl font-bold mb-4">Your Gateway to Top Colleges</h3>
                  <ul className="mb-4 space-y-2">
                    <li className="flex items-center gap-2">
                      <CheckSquare className="w-5 h-5 text-green-300" />
                      <span>Personalized college recommendations based on your rank & category</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckSquare className="w-5 h-5 text-green-300" />
                      <span>Branch-specific insights & placement stats for informed decisions</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckSquare className="w-5 h-5 text-green-300" />
                      <span>Round-by-round counselling strategy with ordering priority</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckSquare className="w-5 h-5 text-green-300" />
                      <span>PDF format with instant email delivery after payment</span>
                    </li>
                  </ul>
                  <Button size="lg" className="bg-white text-theme-secondary hover:bg-purple-50 rounded-full px-8 py-6 text-lg shadow-xl transition-all duration-300 hover:scale-105">
                    Generate My College Report Now
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WHY? - Why AI Choice Filling with SVG illustration */}
      <WhyAISection />

      {/* WHAT? - How to Read & Use Your AI Report - Enhanced with visual elements */}
      <section className="py-16 bg-gray-50 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-gray-50 to-purple-50 opacity-50"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-12">
            <Badge className="mb-3 bg-theme-primary/20 text-theme-secondary border-none">WHAT?</Badge>
            <h2 className="text-3xl font-bold mb-4 text-gray-900">What's in Your AI Report?</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Your report is designed to be super easy to understand even if this is your first counselling experience
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <Card className="border-none shadow-lg hover:shadow-xl transition-all hover:-translate-y-2 bg-white group overflow-hidden">
              <CardContent className="p-0">
                <div className="h-3 bg-theme-gradient"></div>
                <div className="p-8">
                  <div className="w-16 h-16 mb-5 rounded-xl bg-gradient-to-br from-theme-primary to-theme-secondary flex items-center justify-center transform group-hover:rotate-6 transition-all">
                    <FileText className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-gray-800">Color-Coded Choices</h3>
                  <p className="text-gray-600 mb-4">
                    Green sections show safe choices where you'll definitely get in. Yellow for moderate chances, and blue for dream colleges worth trying.
                  </p>
                  <div className="flex gap-2 flex-wrap">
                    <span className="px-3 py-1 bg-green-100 text-green-700 text-sm rounded-full">Safe Picks</span>
                    <span className="px-3 py-1 bg-yellow-100 text-yellow-700 text-sm rounded-full">Worth Trying</span>
                    <span className="px-3 py-1 bg-blue-100 text-blue-700 text-sm rounded-full">Dream Options</span>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card className="border-none shadow-lg hover:shadow-xl transition-all hover:-translate-y-2 bg-white group overflow-hidden">
              <CardContent className="p-0">
                <div className="h-3 bg-theme-gradient"></div>
                <div className="p-8">
                  <div className="w-16 h-16 mb-5 rounded-xl bg-gradient-to-br from-theme-primary to-theme-secondary flex items-center justify-center transform group-hover:rotate-6 transition-all">
                    <BookOpen className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-gray-800">Branch Insights</h3>
                  <p className="text-gray-600 mb-4">
                    Detailed info about each branch including placements, average packages, and future scope to make smarter choices.
                  </p>
                  <div className="flex flex-col gap-2">
                    <div className="flex items-center">
                      <span className="w-6 h-6 rounded-full bg-theme-primary/20 text-theme-secondary flex items-center justify-center text-xs mr-2">1</span>
                      <span className="text-sm text-gray-700">Placement statistics</span>
                    </div>
                    <div className="flex items-center">
                      <span className="w-6 h-6 rounded-full bg-theme-primary/20 text-theme-secondary flex items-center justify-center text-xs mr-2">2</span>
                      <span className="text-sm text-gray-700">Future growth prospects</span>
                    </div>
                    <div className="flex items-center">
                      <span className="w-6 h-6 rounded-full bg-theme-primary/20 text-theme-secondary flex items-center justify-center text-xs mr-2">3</span>
                      <span className="text-sm text-gray-700">Salary comparison</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card className="border-none shadow-lg hover:shadow-xl transition-all hover:-translate-y-2 bg-white group overflow-hidden">
              <CardContent className="p-0">
                <div className="h-3 bg-theme-gradient"></div>
                <div className="p-8">
                  <div className="w-16 h-16 mb-5 rounded-xl bg-gradient-to-br from-theme-primary to-theme-secondary flex items-center justify-center transform group-hover:rotate-6 transition-all">
                    <BarChart4 className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-gray-800">Strategic Planning</h3>
                  <p className="text-gray-600 mb-4">
                    Round-by-round action plan with float vs freeze strategy to maximize your chances of getting the best college.
                  </p>
                  <ul className="space-y-1">
                    <li className="flex items-center text-sm text-gray-700">
                      <CheckSquare className="w-4 h-4 text-theme-primary mr-2" />
                      <span>Round-wise strategy</span>
                    </li>
                    <li className="flex items-center text-sm text-gray-700">
                      <CheckSquare className="w-4 h-4 text-theme-primary mr-2" />
                      <span>Timing recommendations</span>
                    </li>
                    <li className="flex items-center text-sm text-gray-700">
                      <CheckSquare className="w-4 h-4 text-theme-primary mr-2" />
                      <span>College & branch ordering</span>
                    </li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* HOW? - AI Report Types Section - Enhanced with theme colors */}
      <section className="py-16 bg-white relative">
        <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-gray-50 to-white"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-12">
            <Badge variant="outline" className="mb-2 bg-theme-primary/20 text-theme-secondary border-theme-primary/30">HOW?</Badge>
            <h2 className="text-3xl font-bold mb-4 text-gray-900">Choose Your Perfect AI Report</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Select the report that matches your exam and get step-by-step guidance designed for 12th standard students
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {examReports.map((report) => (
              <Card 
                key={report.id} 
                className="border-2 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 overflow-hidden group border-theme-primary/30 bg-white"
              >
                <CardContent className="p-0">
                  <div className="bg-theme-gradient p-4 text-white group-hover:opacity-90 transition-all">
                    <div className="flex items-center gap-4">
                      <div className="w-14 h-14 rounded-full bg-white/90 flex items-center justify-center shadow-md">
                        {report.icon}
                      </div>
                      <h3 className="text-xl font-bold">{report.title}</h3>
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <p className="text-gray-600 mb-5 min-h-[60px]">{report.description}</p>
                    
                    <div className="bg-gray-50 p-4 rounded-lg mb-6">
                      <h4 className="font-semibold mb-2 text-theme-secondary">What's Included:</h4>
                      <ul className="space-y-2">
                        {report.features.map((feature, idx) => (
                          <li key={idx} className="flex items-start gap-2">
                            <CheckSquare className="w-5 h-5 text-theme-primary mt-0.5" />
                            <span className="text-gray-700">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <Dialog>
                      <DialogTrigger asChild>
                        <Button 
                          className="w-full bg-theme-gradient hover:opacity-90 text-white py-6 font-semibold text-lg shadow-md group-hover:shadow-lg transition-all"
                          onClick={() => setSelectedExam(report.title)}
                        >
                          Get Your AI Report
                        </Button>
                      </DialogTrigger>
                      <DialogContent className="sm:max-w-md max-h-[90vh] overflow-y-auto">
                        <AIReportForm examType={selectedExam || report.title} />
                      </DialogContent>
                    </Dialog>
                  </div>
                  
                  <div className="h-1 w-full bg-theme-gradient"></div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Sample Report - Updated to match theme */}
      <ReportPreviewSection />

      {/* Pricing Section - Updated with theme colors */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-gray-900">Get Your AI Report Today</h2>
            <p className="text-xl opacity-90">One smart decision for your entire college journey</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-8">
            <div className="flex flex-col justify-center">
              <h3 className="text-2xl font-bold mb-4 text-gray-800">AI Choice Filling Report</h3>
              <ul className="space-y-3 mb-6">
                <li className="flex items-center">
                  <CheckSquare className="w-5 h-5 text-theme-primary mr-2" />
                  <span className="text-gray-700">Personalized college recommendations</span>
                </li>
                <li className="flex items-center">
                  <CheckSquare className="w-5 h-5 text-theme-primary mr-2" />
                  <span className="text-gray-700">Branch-specific insights & placement stats</span>
                </li>
                <li className="flex items-center">
                  <CheckSquare className="w-5 h-5 text-theme-primary mr-2" />
                  <span className="text-gray-700">Round-by-round counselling strategy</span>
                </li>
                <li className="flex items-center">
                  <CheckSquare className="w-5 h-5 text-theme-primary mr-2" />
                  <span className="text-gray-700">College fee & scholarship information</span>
                </li>
                <li className="flex items-center">
                  <CheckSquare className="w-5 h-5 text-theme-primary mr-2" />
                  <span className="text-gray-700">PDF format with instant email delivery</span>
                </li>
                <li className="flex items-center">
                  <CheckSquare className="w-5 h-5 text-theme-primary mr-2" />
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
                  <div className="bg-theme-primary/20 rounded-full w-7 h-7 flex items-center justify-center mr-3 mt-1 shrink-0">
                    <span className="text-theme-secondary font-semibold">1</span>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-800">Complete the Form</h4>
                    <p className="text-gray-600 text-sm">Enter your rank, category, and any preferences you have</p>
                  </div>
                </li>
                
                <li className="flex">
                  <div className="bg-theme-primary/20 rounded-full w-7 h-7 flex items-center justify-center mr-3 mt-1 shrink-0">
                    <span className="text-theme-secondary font-semibold">2</span>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-800">Make the Payment</h4>
                    <p className="text-gray-600 text-sm">Quick & secure payment (UPI, cards, net banking)</p>
                  </div>
                </li>
                
                <li className="flex">
                  <div className="bg-theme-primary/20 rounded-full w-7 h-7 flex items-center justify-center mr-3 mt-1 shrink-0">
                    <span className="text-theme-secondary font-semibold">3</span>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-800">Get Your AI Report</h4>
                    <p className="text-gray-600 text-sm">Receive a detailed report in your email instantly</p>
                  </div>
                </li>
              </ol>
              
              <Button className="w-full bg-theme-gradient hover:opacity-90 text-white py-6 rounded-lg text-lg">
                Get My AI Report Now
              </Button>
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
                <h3 className="text-xl font-semibold mb-2 text-theme-secondary">How accurate are the AI recommendations?</h3>
                <p className="text-gray-600">
                  Our AI model uses data from the past 5 years of counseling sessions, including cut-off trends, seat allotments, and college rankings. The recommendations have a 92% accuracy rate when followed correctly.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-all">
                <h3 className="text-xl font-semibold mb-2 text-theme-secondary">How long does it take to get my report?</h3>
                <p className="text-gray-600">
                  Reports are delivered instantly to your email after payment confirmation. You can download the PDF immediately.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-all">
                <h3 className="text-xl font-semibold mb-2 text-theme-secondary">What information do I need to provide?</h3>
                <p className="text-gray-600">
                  You'll need to provide your exam rank, category (General/OBC/SC/ST), gender, domicile state, and any specific preferences you have regarding location or branches.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-all">
                <h3 className="text-xl font-semibold mb-2 text-theme-secondary">Can I get a refund if I'm not satisfied?</h3>
                <p className="text-gray-600">
                  We offer a 100% satisfaction guarantee. If you find the recommendations aren't helpful, contact our support team within 24 hours of purchase for assistance or a refund.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-all">
                <h3 className="text-xl font-semibold mb-2 text-theme-secondary">Which exams and counseling processes are supported?</h3>
                <p className="text-gray-600">
                  Our AI reports support JEE Main/Advanced (JoSAA counseling), NEET, BITSAT, and most state-level engineering and medical entrance exams.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      
      {/* Add animation keyframes to style */}
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
