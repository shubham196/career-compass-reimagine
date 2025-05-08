
import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { CheckCircle, GraduationCap, BookOpen, User, CheckSquare } from "lucide-react";

const IqTest11th12thGradePage = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />

      {/* Hero Banner */}
      <section className="bg-gradient-to-r from-indigo-600 to-blue-700 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <Badge className="mb-4 bg-white/20 text-white border-none hover:bg-white/30">Advanced Assessment</Badge>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">IQ & Personality Test for 11th & 12th Students</h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto mb-8 text-blue-100">
            Comprehensive assessments to guide career planning and college selection
          </p>
          <Button size="lg" className="bg-white text-indigo-700 hover:bg-indigo-50 rounded-full px-8 py-6 text-lg shadow-xl">
            Start Assessment
          </Button>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4 text-gray-900">Specialized Assessment for 11th & 12th Graders</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                At Career Mantrana, we offer specialized tests to assess cognitive abilities, personality traits, and academic potential
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
              <Card className="border-none shadow-md hover:shadow-lg transition-all">
                <CardContent className="p-6">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-indigo-400 to-indigo-600 flex items-center justify-center mb-4 shadow-md">
                    <CheckSquare className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2 text-gray-800">Aptitude Tests</h3>
                  <p className="text-sm text-gray-600">
                    Assess verbal and numerical reasoning
                  </p>
                </CardContent>
              </Card>
              
              <Card className="border-none shadow-md hover:shadow-lg transition-all">
                <CardContent className="p-6">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center mb-4 shadow-md">
                    <BookOpen className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2 text-gray-800">Interest Tests</h3>
                  <p className="text-sm text-gray-600">
                    Explore fields aligned with your passions
                  </p>
                </CardContent>
              </Card>
              
              <Card className="border-none shadow-md hover:shadow-lg transition-all">
                <CardContent className="p-6">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-green-400 to-green-600 flex items-center justify-center mb-4 shadow-md">
                    <GraduationCap className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2 text-gray-800">Study Habits</h3>
                  <p className="text-sm text-gray-600">
                    Analyze learning patterns for better results
                  </p>
                </CardContent>
              </Card>
              
              <Card className="border-none shadow-md hover:shadow-lg transition-all">
                <CardContent className="p-6">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-400 to-purple-600 flex items-center justify-center mb-4 shadow-md">
                    <User className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2 text-gray-800">Personality Test</h3>
                  <p className="text-sm text-gray-600">
                    Understand traits for better career matching
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
              <TabsList className="grid grid-cols-2 md:grid-cols-4 mb-8">
                <TabsTrigger value="aptitude">Aptitude Test</TabsTrigger>
                <TabsTrigger value="interest">Interest Test</TabsTrigger>
                <TabsTrigger value="study">Study Habits</TabsTrigger>
                <TabsTrigger value="personality">Personality Test</TabsTrigger>
              </TabsList>
              
              {/* Aptitude Test Tab */}
              <TabsContent value="aptitude" className="border rounded-lg p-6 shadow-md bg-white">
                <div className="flex flex-col md:flex-row gap-6">
                  <div className="md:w-1/3">
                    <img 
                      src="https://images.unsplash.com/photo-1501504905252-473c47e087f8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                      alt="Student taking aptitude test" 
                      className="rounded-lg shadow-md w-full h-auto object-cover"
                    />
                  </div>
                  <div className="md:w-2/3">
                    <h3 className="text-2xl font-bold mb-2 text-indigo-700">Aptitude Test</h3>
                    <p className="mb-4 text-gray-700">
                      Aptitude refers to a natural or developed ability to learn and excel in specific areas. 
                      Our Aptitude Test assesses verbal and numerical reasoning to measure how well students understand, analyze, and apply information.
                    </p>
                    
                    <h4 className="font-semibold mb-2 text-gray-800">Key Areas Covered:</h4>
                    <ul className="space-y-2 mb-6">
                      <li className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700"><strong>Numerical Ability</strong> – Solving math problems and analyzing data</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700"><strong>Reasoning Ability</strong> – Logical thinking and pattern recognition</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700"><strong>Verbal Ability</strong> – Language comprehension and interpretation</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700"><strong>Spatial Ability</strong> – Visualizing objects and patterns; key for design and engineering fields</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700"><strong>Cognitive Ability</strong> – Memory, attention, and problem-solving</span>
                      </li>
                    </ul>
                    
                    <Button className="bg-indigo-600 hover:bg-indigo-700 mt-2">Schedule an Assessment</Button>
                  </div>
                </div>
              </TabsContent>
              
              {/* Interest Test Tab */}
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
                    <h3 className="text-2xl font-bold mb-2 text-blue-700">Interest Test</h3>
                    <p className="mb-4 text-gray-700">
                      This test identifies a student's natural preferences and passions to suggest suitable fields of study and careers.
                    </p>
                    
                    <h4 className="font-semibold mb-2 text-gray-800">Key Areas Covered:</h4>
                    <ul className="space-y-3 mb-6">
                      <li className="p-3 bg-blue-50 rounded-lg">
                        <span className="font-semibold text-blue-700">Science & Technology</span> – Research, engineering, and innovation
                      </li>
                      <li className="p-3 bg-pink-50 rounded-lg">
                        <span className="font-semibold text-pink-700">Creative Fields</span> – Design, media, arts, fashion, writing
                      </li>
                      <li className="p-3 bg-amber-50 rounded-lg">
                        <span className="font-semibold text-amber-700">Business & Administration</span> – Finance, management, entrepreneurship
                      </li>
                      <li className="p-3 bg-green-50 rounded-lg">
                        <span className="font-semibold text-green-700">Social Sciences & Humanities</span> – Psychology, law, history, politics
                      </li>
                      <li className="p-3 bg-purple-50 rounded-lg">
                        <span className="font-semibold text-purple-700">Service Industry</span> – Healthcare, hospitality, aviation, tourism
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
                        <p className="text-gray-700">Identifies the best methods for understanding and retaining information</p>
                      </div>
                      <div className="p-4 bg-teal-50 rounded-lg">
                        <h5 className="font-semibold text-teal-700 mb-1">Memory Improvement</h5>
                        <p className="text-gray-700">Enhances recall through strategies like visualization and mnemonics</p>
                      </div>
                      <div className="p-4 bg-emerald-50 rounded-lg">
                        <h5 className="font-semibold text-emerald-700 mb-1">Examination Techniques</h5>
                        <p className="text-gray-700">Improves time management, stress handling, and answering skills</p>
                      </div>
                    </div>
                    
                    <Button className="bg-green-600 hover:bg-green-700 mt-2">Schedule an Assessment</Button>
                  </div>
                </div>
              </TabsContent>
              
              {/* Personality Test Tab */}
              <TabsContent value="personality" className="border rounded-lg p-6 shadow-md bg-white">
                <div className="flex flex-col md:flex-row gap-6">
                  <div className="md:w-1/3">
                    <img 
                      src="https://images.unsplash.com/photo-1573497620053-ea5300f94f21?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                      alt="Personality assessment" 
                      className="rounded-lg shadow-md w-full h-auto object-cover"
                    />
                  </div>
                  <div className="md:w-2/3">
                    <h3 className="text-2xl font-bold mb-2 text-purple-700">Personality Test</h3>
                    <p className="mb-4 text-gray-700">
                      Our Personality Test for 11th and 12th graders helps students gain self-awareness and understand traits 
                      that influence career and personal growth.
                    </p>
                    
                    <h4 className="font-semibold mb-2 text-gray-800">Key Traits Assessed:</h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-6">
                      <div className="p-3 bg-purple-50 rounded-lg">
                        <span className="font-semibold text-purple-700">Maturity</span> – Emotional stability and decision-making
                      </div>
                      <div className="p-3 bg-blue-50 rounded-lg">
                        <span className="font-semibold text-blue-700">Adaptability</span> – Flexibility in handling change
                      </div>
                      <div className="p-3 bg-pink-50 rounded-lg">
                        <span className="font-semibold text-pink-700">Boldness</span> – Confidence and risk-taking
                      </div>
                      <div className="p-3 bg-amber-50 rounded-lg">
                        <span className="font-semibold text-amber-700">Competition</span> – Drive to achieve and excel
                      </div>
                      <div className="p-3 bg-red-50 rounded-lg">
                        <span className="font-semibold text-red-700">Excitability</span> – Emotional control and stress response
                      </div>
                      <div className="p-3 bg-emerald-50 rounded-lg">
                        <span className="font-semibold text-emerald-700">Leadership</span> – Ability to guide and inspire others
                      </div>
                    </div>
                    
                    <Button className="bg-purple-600 hover:bg-purple-700 mt-2">Schedule an Assessment</Button>
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
              Our assessment suite for 11th and 12th graders offers numerous benefits to help with college and career planning
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <Card className="border-none shadow-md hover:shadow-lg transition-all">
              <CardContent className="p-6 flex flex-col items-center text-center">
                <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mb-4">
                  <GraduationCap className="w-8 h-8 text-indigo-600" />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-gray-800">College Selection</h3>
                <p className="text-gray-600">
                  Make informed decisions about higher education options aligned with your abilities
                </p>
              </CardContent>
            </Card>
            
            <Card className="border-none shadow-md hover:shadow-lg transition-all">
              <CardContent className="p-6 flex flex-col items-center text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                  <User className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-gray-800">Self-Awareness</h3>
                <p className="text-gray-600">
                  Gain insight into your personality traits, strengths, and work style preferences
                </p>
              </CardContent>
            </Card>
            
            <Card className="border-none shadow-md hover:shadow-lg transition-all">
              <CardContent className="p-6 flex flex-col items-center text-center">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mb-4">
                  <CheckSquare className="w-8 h-8 text-purple-600" />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-gray-800">Career Direction</h3>
                <p className="text-gray-600">
                  Identify career paths that match your cognitive abilities and personality traits
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-indigo-600 to-blue-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Shape Your Future?</h2>
          <p className="text-xl max-w-2xl mx-auto mb-8 text-blue-100">
            Take the first step toward a brighter future with our comprehensive IQ and personality assessment
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-indigo-700 hover:bg-indigo-50">
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

export default IqTest11th12thGradePage;
