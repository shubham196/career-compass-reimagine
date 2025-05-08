
import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { CheckCircle, GraduationCap, BookOpen, CheckSquare } from "lucide-react";

const IqTest10thGradePage = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />

      {/* Hero Banner */}
      <section className="bg-gradient-to-r from-purple-600 to-blue-700 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <Badge className="mb-4 bg-white/20 text-white border-none hover:bg-white/30">Grade-Specific Assessment</Badge>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">IQ Test for 10th Grade Students</h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto mb-8 text-blue-100">
            Specialized assessments to guide academic decisions as you prepare for higher education
          </p>
          <Button size="lg" className="bg-white text-purple-700 hover:bg-purple-50 rounded-full px-8 py-6 text-lg shadow-xl">
            Start Assessment
          </Button>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4 text-gray-900">Specialized Assessment for 10th Graders</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                At Career Mantrana, we offer specialized IQ tests for 10th-grade students to assess their cognitive skills and academic potential
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              <Card className="border-none shadow-md hover:shadow-lg transition-all">
                <CardContent className="p-6">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-400 to-purple-600 flex items-center justify-center mb-4 shadow-md">
                    <CheckSquare className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2 text-gray-800">Aptitude Tests</h3>
                  <p className="text-gray-600">
                    Evaluate logical reasoning, problem-solving, and analytical skills
                  </p>
                </CardContent>
              </Card>
              
              <Card className="border-none shadow-md hover:shadow-lg transition-all">
                <CardContent className="p-6">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center mb-4 shadow-md">
                    <BookOpen className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2 text-gray-800">Interest Tests</h3>
                  <p className="text-gray-600">
                    Identify personal interests to guide subject and career choices
                  </p>
                </CardContent>
              </Card>
              
              <Card className="border-none shadow-md hover:shadow-lg transition-all">
                <CardContent className="p-6">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-green-400 to-green-600 flex items-center justify-center mb-4 shadow-md">
                    <GraduationCap className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2 text-gray-800">Study Habits</h3>
                  <p className="text-gray-600">
                    Analyzes learning patterns to help improve academic performance
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Test Details Tabs */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-gray-900">Test Components</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Our comprehensive assessment evaluates multiple dimensions of intelligence and potential
            </p>
          </div>
          
          <div className="max-w-5xl mx-auto">
            <Tabs defaultValue="aptitude" className="w-full">
              <TabsList className="grid grid-cols-1 md:grid-cols-3 mb-8">
                <TabsTrigger value="aptitude">Aptitude Tests</TabsTrigger>
                <TabsTrigger value="interest">Interest Tests</TabsTrigger>
                <TabsTrigger value="study">Study Habits</TabsTrigger>
              </TabsList>
              
              {/* Aptitude Tests Tab */}
              <TabsContent value="aptitude" className="border rounded-lg p-6 shadow-md bg-white">
                <div className="flex flex-col md:flex-row gap-6">
                  <div className="md:w-1/3">
                    <img 
                      src="https://images.unsplash.com/photo-1434030216411-0b793f4b4173?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                      alt="Student solving problems" 
                      className="rounded-lg shadow-md w-full h-auto object-cover"
                    />
                  </div>
                  <div className="md:w-2/3">
                    <h3 className="text-2xl font-bold mb-2 text-purple-700">Aptitude Tests</h3>
                    <p className="mb-4 text-gray-700">
                      Aptitude refers to a natural or acquired ability to learn and perform in specific areas. 
                      Our IQ assessment focuses on key aptitude areas to evaluate a student's cognitive strengths.
                    </p>
                    
                    <h4 className="font-semibold mb-2 text-gray-800">Test Areas:</h4>
                    <ul className="space-y-2 mb-6">
                      <li className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700"><strong>Numerical Ability</strong> – Solving math problems, analyzing data, and understanding numbers</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700"><strong>Reasoning Ability</strong> – Logical thinking, pattern recognition, and drawing conclusions</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700"><strong>Verbal Ability</strong> – Language comprehension, vocabulary, and interpreting verbal information</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700"><strong>Spatial Ability</strong> – Visualizing objects and patterns; useful for design, engineering, and architecture</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700"><strong>Cognitive Ability</strong> – Memory, attention, and overall problem-solving skills</span>
                      </li>
                    </ul>
                    
                    <Button className="bg-purple-600 hover:bg-purple-700 mt-2">Schedule an Assessment</Button>
                  </div>
                </div>
              </TabsContent>
              
              {/* Interest Tests Tab */}
              <TabsContent value="interest" className="border rounded-lg p-6 shadow-md bg-white">
                <div className="flex flex-col md:flex-row gap-6">
                  <div className="md:w-1/3">
                    <img 
                      src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                      alt="Students exploring interests" 
                      className="rounded-lg shadow-md w-full h-auto object-cover"
                    />
                  </div>
                  <div className="md:w-2/3">
                    <h3 className="text-2xl font-bold mb-2 text-blue-700">Interest Tests</h3>
                    <p className="mb-4 text-gray-700">
                      An Interest Test identifies a student's natural preferences and passions across various fields, 
                      helping match them with suitable academic and career options.
                    </p>
                    
                    <h4 className="font-semibold mb-2 text-gray-800">Key Areas Covered:</h4>
                    <ul className="space-y-3 mb-6">
                      <li className="p-3 bg-blue-50 rounded-lg">
                        <span className="font-semibold text-blue-700">Science & Technology</span> – For those drawn to innovation, research, and engineering
                      </li>
                      <li className="p-3 bg-purple-50 rounded-lg">
                        <span className="font-semibold text-purple-700">Creative Fields</span> – Ideal for interests in design, media, arts, fashion, and writing
                      </li>
                      <li className="p-3 bg-amber-50 rounded-lg">
                        <span className="font-semibold text-amber-700">Business & Administration</span> – Suited for students interested in finance, entrepreneurship, and leadership
                      </li>
                      <li className="p-3 bg-green-50 rounded-lg">
                        <span className="font-semibold text-green-700">Social Sciences & Humanities</span> – For careers in law, psychology, history, and public service
                      </li>
                    </ul>
                    
                    <Button className="bg-blue-600 hover:bg-blue-700 mt-2">Schedule an Assessment</Button>
                  </div>
                </div>
              </TabsContent>
              
              {/* Study Habits Tab */}
              <TabsContent value="study" className="border rounded-lg p-6 shadow-md bg-white">
                <div className="flex flex-col md:flex-row gap-6">
                  <div className="md:w-1/3">
                    <img 
                      src="https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                      alt="Student studying" 
                      className="rounded-lg shadow-md w-full h-auto object-cover"
                    />
                  </div>
                  <div className="md:w-2/3">
                    <h3 className="text-2xl font-bold mb-2 text-green-700">Study Habits Assessment</h3>
                    <p className="mb-4 text-gray-700">
                      This test evaluates a student's study style, consistency, and techniques developed over the years, 
                      focusing on how effectively they learn and prepare for exams.
                    </p>
                    
                    <h4 className="font-semibold mb-2 text-gray-800">Key Areas Covered:</h4>
                    <div className="space-y-4 mb-6">
                      <div className="p-4 bg-green-50 rounded-lg">
                        <h5 className="font-semibold text-green-700 mb-1">Learning Techniques</h5>
                        <p className="text-gray-700">Identifies the best methods to grasp and retain information efficiently</p>
                      </div>
                      <div className="p-4 bg-teal-50 rounded-lg">
                        <h5 className="font-semibold text-teal-700 mb-1">Memory Improvement</h5>
                        <p className="text-gray-700">Enhances recall through strategies like mnemonics, visualization, and association</p>
                      </div>
                      <div className="p-4 bg-emerald-50 rounded-lg">
                        <h5 className="font-semibold text-emerald-700 mb-1">Examination Techniques</h5>
                        <p className="text-gray-700">Improves time management, stress control, and smart answering in exams</p>
                      </div>
                    </div>
                    
                    <Button className="bg-green-600 hover:bg-green-700 mt-2">Schedule an Assessment</Button>
                  </div>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-gray-900">Why Take This Assessment?</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Our Grade 10 IQ test suite offers numerous benefits to help students prepare for their academic future
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-800">Identify Strengths</h3>
              <p className="text-gray-600">
                Discover your cognitive strengths and areas for improvement
              </p>
            </div>
            
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <GraduationCap className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-800">Academic Planning</h3>
              <p className="text-gray-600">
                Make informed decisions about subjects and educational pathways
              </p>
            </div>
            
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <BookOpen className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-800">Study Improvement</h3>
              <p className="text-gray-600">
                Enhance learning strategies and exam preparation techniques
              </p>
            </div>
            
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckSquare className="w-8 h-8 text-amber-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-800">Career Exploration</h3>
              <p className="text-gray-600">
                Explore suitable career paths aligned with your natural abilities
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-purple-600 to-blue-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Discover Your Potential?</h2>
          <p className="text-xl max-w-2xl mx-auto mb-8 text-blue-100">
            Take the first step toward a brighter academic future with our specialized 10th Grade IQ test suite
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-purple-700 hover:bg-purple-50">
              Schedule Assessment
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/20">
              Download Brochure
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default IqTest10thGradePage;
