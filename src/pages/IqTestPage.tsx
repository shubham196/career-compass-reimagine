
import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Brain, FileText, Download, Lightbulb, GraduationCap, User, ChartBar } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Separator } from "@/components/ui/separator";

const IqTestPage = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />

      {/* Hero Banner */}
      <section className="bg-gradient-to-r from-purple-700 to-indigo-800 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Unlock Your True Potential</h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto mb-8 text-purple-100">
            Discover your cognitive strengths and learning style with Career Mantrana's professional IQ assessment suite
          </p>
          <Button size="lg" className="bg-white text-purple-700 hover:bg-purple-50 rounded-full px-8 py-6 text-lg shadow-xl">
            Start Your Free Assessment
          </Button>
        </div>
      </section>

      {/* What is an IQ Test Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-10 text-gray-900">What is an IQ Test?</h2>
            
            <div className="flex flex-col md:flex-row gap-8 items-center">
              <div className="md:w-1/2">
                <img 
                  src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                  alt="IQ Test Concept" 
                  className="rounded-2xl shadow-lg"
                />
              </div>
              <div className="md:w-1/2">
                <h3 className="text-xl font-semibold mb-4 text-purple-700">Understand how you think, learn, and solve problems.</h3>
                <p className="text-gray-700 leading-relaxed">
                  An IQ (Intelligence Quotient) Test measures cognitive skills like reasoning, memory, and problem-solving to help guide students in academic and career choices. Our assessments provide valuable insights into your unique cognitive profile and learning style.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What We Assess Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4 text-gray-900">What We Assess</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Our comprehensive assessment suite evaluates multiple dimensions of intelligence and learning
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Study Habits Assessment Card */}
            <Card className="border-none shadow-lg hover:shadow-xl transition-all duration-300 bg-white overflow-hidden hover:-translate-y-1">
              <CardContent className="p-6">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-400 to-purple-600 flex items-center justify-center mb-4 shadow-md">
                  <Brain className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-gray-800">Study Habits Assessment</h3>
                <p className="text-gray-600 mb-4">
                  Improve focus, memory, and learning techniques for better academic performance.
                </p>
                <Badge className="bg-purple-100 text-purple-700 hover:bg-purple-200">Learning Analysis</Badge>
              </CardContent>
            </Card>
            
            {/* Learning Styles Card */}
            <Card className="border-none shadow-lg hover:shadow-xl transition-all duration-300 bg-white overflow-hidden hover:-translate-y-1">
              <CardContent className="p-6">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center mb-4 shadow-md">
                  <Lightbulb className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-gray-800">Learning Styles</h3>
                <p className="text-gray-600 mb-4">
                  Discover if you are Visual, Auditory, or Kinesthetic to optimize your study approach.
                </p>
                <Badge className="bg-blue-100 text-blue-700 hover:bg-blue-200">Educational Insight</Badge>
              </CardContent>
            </Card>
            
            {/* Multiple Intelligence Card */}
            <Card className="border-none shadow-lg hover:shadow-xl transition-all duration-300 bg-white overflow-hidden hover:-translate-y-1">
              <CardContent className="p-6">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-green-400 to-green-600 flex items-center justify-center mb-4 shadow-md">
                  <GraduationCap className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-gray-800">Multiple Intelligence</h3>
                <p className="text-gray-600 mb-4">
                  Identify your top intelligences—Logical, Linguistic, Spatial & more for career alignment.
                </p>
                <Badge className="bg-green-100 text-green-700 hover:bg-green-200">Strength Discovery</Badge>
              </CardContent>
            </Card>
            
            {/* Interest Tests Card */}
            <Card className="border-none shadow-lg hover:shadow-xl transition-all duration-300 bg-white overflow-hidden hover:-translate-y-1">
              <CardContent className="p-6">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-yellow-400 to-yellow-600 flex items-center justify-center mb-4 shadow-md">
                  <ChartBar className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-gray-800">Interest Tests</h3>
                <p className="text-gray-600 mb-4">
                  Explore interests in Science, Business, Humanities, and beyond for better career decisions.
                </p>
                <Badge className="bg-yellow-100 text-yellow-700 hover:bg-yellow-200">Career Exploration</Badge>
              </CardContent>
            </Card>
            
            {/* Personality Test Card */}
            <Card className="border-none shadow-lg hover:shadow-xl transition-all duration-300 bg-white overflow-hidden hover:-translate-y-1">
              <CardContent className="p-6">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-red-400 to-red-600 flex items-center justify-center mb-4 shadow-md">
                  <User className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-gray-800">Personality Test</h3>
                <p className="text-gray-600 mb-4">
                  Assess traits like leadership, adaptability, and innovation for personal growth.
                </p>
                <Badge className="bg-red-100 text-red-700 hover:bg-red-200">Self-Discovery</Badge>
              </CardContent>
            </Card>
            
            {/* Aptitude Tests Card */}
            <Card className="border-none shadow-lg hover:shadow-xl transition-all duration-300 bg-white overflow-hidden hover:-translate-y-1">
              <CardContent className="p-6">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-indigo-400 to-indigo-600 flex items-center justify-center mb-4 shadow-md">
                  <FileText className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-gray-800">Aptitude Tests</h3>
                <p className="text-gray-600 mb-4">
                  Test your numerical and verbal reasoning skills for academic and career success.
                </p>
                <Badge className="bg-indigo-100 text-indigo-700 hover:bg-indigo-200">Cognitive Assessment</Badge>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Detailed Assessments Tabs */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-gray-900">Detailed Assessments</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Explore our assessment types and discover how they can help you succeed
            </p>
          </div>
          
          <div className="max-w-5xl mx-auto">
            <Tabs defaultValue="study" className="w-full">
              <TabsList className="grid grid-cols-2 md:grid-cols-5 mb-8">
                <TabsTrigger value="study">Study Habits</TabsTrigger>
                <TabsTrigger value="learning">Learning Styles</TabsTrigger>
                <TabsTrigger value="intelligence">Multiple Intelligences</TabsTrigger>
                <TabsTrigger value="aptitude">Aptitude Test</TabsTrigger>
                <TabsTrigger value="adjustment">Adjustment Level</TabsTrigger>
              </TabsList>
              
              {/* Study Habits Assessment Tab */}
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
                    <h3 className="text-2xl font-bold mb-2 text-purple-700">Study Habits Assessment</h3>
                    <p className="text-lg mb-4 text-gray-600">Master how you learn.</p>
                    <p className="mb-4 text-gray-700">
                      Evaluates your concentration, memory, learning techniques, and exam strategies to help you study smarter and perform better.
                    </p>
                    <h4 className="font-semibold mb-2 text-gray-800">What is Covered:</h4>
                    <ul className="space-y-2 mb-4">
                      <li className="flex items-start">
                        <div className="bg-green-100 p-1.5 rounded-full mr-3 mt-0.5">
                          <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M8 3L4 7L2 5" stroke="#10B981" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                          </svg>
                        </div>
                        <span className="text-gray-700"><strong>Concentration</strong> – Improve focus and overcome distractions.</span>
                      </li>
                      <li className="flex items-start">
                        <div className="bg-green-100 p-1.5 rounded-full mr-3 mt-0.5">
                          <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M8 3L4 7L2 5" stroke="#10B981" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                          </svg>
                        </div>
                        <span className="text-gray-700"><strong>Learning Techniques</strong> – Discover study methods that work best for you.</span>
                      </li>
                      <li className="flex items-start">
                        <div className="bg-green-100 p-1.5 rounded-full mr-3 mt-0.5">
                          <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M8 3L4 7L2 5" stroke="#10B981" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                          </svg>
                        </div>
                        <span className="text-gray-700"><strong>Memory Skills</strong> – Boost recall and retention with effective strategies.</span>
                      </li>
                      <li className="flex items-start">
                        <div className="bg-green-100 p-1.5 rounded-full mr-3 mt-0.5">
                          <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M8 3L4 7L2 5" stroke="#10B981" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                          </svg>
                        </div>
                        <span className="text-gray-700"><strong>Examination Techniques</strong> – Learn smart ways to manage time and reduce exam stress.</span>
                      </li>
                    </ul>
                    <Button className="mt-4 bg-purple-600 hover:bg-purple-700">Take This Assessment</Button>
                  </div>
                </div>
              </TabsContent>
              
              {/* Learning Styles Tab */}
              <TabsContent value="learning" className="border rounded-lg p-6 shadow-md bg-white">
                <div className="flex flex-col md:flex-row gap-6">
                  <div className="md:w-1/3">
                    <img 
                      src="https://images.unsplash.com/photo-1434030216411-0b793f4b4173?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                      alt="Learning styles" 
                      className="rounded-lg shadow-md w-full h-auto object-cover"
                    />
                  </div>
                  <div className="md:w-2/3">
                    <h3 className="text-2xl font-bold mb-2 text-blue-700">Understanding Learning Styles</h3>
                    <p className="text-lg mb-4 text-gray-600">Learn the way that suits you best.</p>
                    <p className="mb-4 text-gray-700">
                      Identify whether you're a Visual, Auditory, or Kinesthetic learner—and get tips to study more effectively.
                    </p>
                    <h4 className="font-semibold mb-2 text-gray-800">Types of Learners:</h4>
                    <ul className="space-y-4 mb-4">
                      <li className="p-3 bg-blue-50 rounded-lg">
                        <span className="font-semibold text-blue-700">Visual</span> – Learn through images, charts, and structured notes.
                      </li>
                      <li className="p-3 bg-purple-50 rounded-lg">
                        <span className="font-semibold text-purple-700">Auditory</span> – Retain better with lectures, discussions, and spoken repetition.
                      </li>
                      <li className="p-3 bg-green-50 rounded-lg">
                        <span className="font-semibold text-green-700">Kinesthetic</span> – Excel with hands-on activities, movement, and practical tasks.
                      </li>
                    </ul>
                    <Button className="mt-4 bg-blue-600 hover:bg-blue-700">Take This Assessment</Button>
                  </div>
                </div>
              </TabsContent>
              
              {/* Multiple Intelligences Tab */}
              <TabsContent value="intelligence" className="border rounded-lg p-6 shadow-md bg-white">
                <div className="flex flex-col md:flex-row gap-6">
                  <div className="md:w-1/3">
                    <img 
                      src="https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                      alt="Multiple intelligences" 
                      className="rounded-lg shadow-md w-full h-auto object-cover"
                    />
                  </div>
                  <div className="md:w-2/3">
                    <h3 className="text-2xl font-bold mb-2 text-green-700">Multiple Intelligences Assessment</h3>
                    <p className="text-lg mb-4 text-gray-600">Discover where your natural talents lie.</p>
                    <p className="mb-4 text-gray-700">
                      Understand your dominant intelligences to align learning and career paths with your strengths and interests.
                    </p>
                    <h4 className="font-semibold mb-2 text-gray-800">Types Assessed:</h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-4">
                      <div className="p-3 bg-green-50 rounded-lg">
                        <span className="font-semibold text-green-700">Picture Smart (Spatial)</span> – Think in visuals; great for art, design, architecture.
                      </div>
                      <div className="p-3 bg-blue-50 rounded-lg">
                        <span className="font-semibold text-blue-700">Word Smart (Linguistic)</span> – Love language; excel in writing, law, teaching.
                      </div>
                      <div className="p-3 bg-purple-50 rounded-lg">
                        <span className="font-semibold text-purple-700">Logic Smart (Logical-Mathematical)</span> – Strong in reasoning and numbers; ideal for science, tech.
                      </div>
                      <div className="p-3 bg-yellow-50 rounded-lg">
                        <span className="font-semibold text-yellow-700">Music Smart (Musical)</span> – Sense of rhythm and sound; thrives in music and audio fields.
                      </div>
                    </div>
                    <Button className="mt-4 bg-green-600 hover:bg-green-700">Take This Assessment</Button>
                  </div>
                </div>
              </TabsContent>
              
              {/* Aptitude Test Tab */}
              <TabsContent value="aptitude" className="border rounded-lg p-6 shadow-md bg-white">
                <div className="flex flex-col md:flex-row gap-6">
                  <div className="md:w-1/3">
                    <img 
                      src="https://images.unsplash.com/photo-1501504905252-473c47e087f8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                      alt="Aptitude test" 
                      className="rounded-lg shadow-md w-full h-auto object-cover"
                    />
                  </div>
                  <div className="md:w-2/3">
                    <h3 className="text-2xl font-bold mb-2 text-indigo-700">Aptitude Test</h3>
                    <p className="text-lg mb-4 text-gray-600">Test your logical and numerical thinking.</p>
                    <p className="mb-4 text-gray-700">
                      Measures your ability to reason with words and numbers—key for academic and career success.
                    </p>
                    <h4 className="font-semibold mb-2 text-gray-800">What's Covered:</h4>
                    <div className="space-y-4 mb-4">
                      <div className="p-4 bg-indigo-50 rounded-lg">
                        <h5 className="font-semibold text-indigo-700 mb-1">Numerical Reasoning</h5>
                        <p className="text-gray-700">Solve math problems, analyze data, and work with ratios, percentages, and sequences. Ideal for careers in tech, finance, and engineering.</p>
                      </div>
                      <div className="p-4 bg-purple-50 rounded-lg">
                        <h5 className="font-semibold text-purple-700 mb-1">Verbal Reasoning</h5>
                        <p className="text-gray-700">Understand complex material, develop logical arguments, and apply reasoning skills.</p>
                      </div>
                    </div>
                    <Button className="mt-4 bg-indigo-600 hover:bg-indigo-700">Take This Assessment</Button>
                  </div>
                </div>
              </TabsContent>
              
              {/* Adjustment Level Test Tab */}
              <TabsContent value="adjustment" className="border rounded-lg p-6 shadow-md bg-white">
                <div className="flex flex-col md:flex-row gap-6">
                  <div className="md:w-1/3">
                    <img 
                      src="https://images.unsplash.com/photo-1501854140801-50d01698950b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                      alt="Adjustment level test" 
                      className="rounded-lg shadow-md w-full h-auto object-cover"
                    />
                  </div>
                  <div className="md:w-2/3">
                    <h3 className="text-2xl font-bold mb-2 text-rose-700">Adjustment Level Test</h3>
                    <p className="text-lg mb-4 text-gray-600">Evaluate your adaptability and emotional intelligence.</p>
                    <p className="mb-4 text-gray-700">
                      This test evaluates how well a student understands and adapts to their emotions and surroundings.
                    </p>
                    <h4 className="font-semibold mb-2 text-gray-800">Components:</h4>
                    <div className="space-y-3 mb-4">
                      <div className="p-3 bg-rose-50 rounded-lg">
                        <span className="font-semibold text-rose-700">Emotional Adjustment</span> – Assesses emotional regulation, stress management, resilience, and coping skills.
                      </div>
                      <div className="p-3 bg-amber-50 rounded-lg">
                        <span className="font-semibold text-amber-700">Educational Adjustment</span> – Evaluates adaptation to academics, focusing on learning difficulties and study habits.
                      </div>
                      <div className="p-3 bg-emerald-50 rounded-lg">
                        <span className="font-semibold text-emerald-700">Social Adjustment</span> – Measures interaction with peers and teachers, including communication and teamwork.
                      </div>
                    </div>
                    <Button className="mt-4 bg-rose-600 hover:bg-rose-700">Take This Assessment</Button>
                  </div>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </section>

      {/* Grade-specific IQ Tests Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-gray-900">Grade-Specific IQ Tests</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Tailored assessments designed for students at different academic levels
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* 10th Grade Card */}
            <Card className="border-none shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden">
              <CardContent className="p-0">
                <div className="bg-gradient-to-r from-purple-700 to-purple-900 p-6 text-white">
                  <h3 className="text-2xl font-bold mb-2">IQ Test for 10th Grade Students</h3>
                  <p className="text-purple-100 mb-4">
                    Specialized assessments to guide academic decisions as you prepare for higher education
                  </p>
                </div>
                <div className="p-6">
                  <h4 className="font-semibold mb-3 text-gray-800">Key Components:</h4>
                  <ul className="space-y-2 mb-6">
                    <li className="flex items-start">
                      <div className="bg-purple-100 p-1.5 rounded-full mr-3 mt-0.5">
                        <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M8 3L4 7L2 5" stroke="#7C3AED" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      </div>
                      <span className="text-gray-700">Aptitude Tests – Evaluate logical reasoning and analytical skills</span>
                    </li>
                    <li className="flex items-start">
                      <div className="bg-purple-100 p-1.5 rounded-full mr-3 mt-0.5">
                        <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M8 3L4 7L2 5" stroke="#7C3AED" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      </div>
                      <span className="text-gray-700">Interest Tests – Identify personal interests for career choices</span>
                    </li>
                    <li className="flex items-start">
                      <div className="bg-purple-100 p-1.5 rounded-full mr-3 mt-0.5">
                        <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M8 3L4 7L2 5" stroke="#7C3AED" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      </div>
                      <span className="text-gray-700">Study Habits Assessment – Improve academic performance</span>
                    </li>
                  </ul>
                  <Button className="w-full bg-purple-600 hover:bg-purple-700">Learn More</Button>
                </div>
              </CardContent>
            </Card>
            
            {/* 11th & 12th Grade Card */}
            <Card className="border-none shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden">
              <CardContent className="p-0">
                <div className="bg-gradient-to-r from-indigo-700 to-indigo-900 p-6 text-white">
                  <h3 className="text-2xl font-bold mb-2">IQ & Personality Test for 11th & 12th Students</h3>
                  <p className="text-indigo-100 mb-4">
                    Comprehensive assessments to guide career planning and college selection
                  </p>
                </div>
                <div className="p-6">
                  <h4 className="font-semibold mb-3 text-gray-800">Key Components:</h4>
                  <ul className="space-y-2 mb-6">
                    <li className="flex items-start">
                      <div className="bg-indigo-100 p-1.5 rounded-full mr-3 mt-0.5">
                        <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M8 3L4 7L2 5" stroke="#4F46E5" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      </div>
                      <span className="text-gray-700">Aptitude Tests – Assess verbal and numerical reasoning</span>
                    </li>
                    <li className="flex items-start">
                      <div className="bg-indigo-100 p-1.5 rounded-full mr-3 mt-0.5">
                        <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M8 3L4 7L2 5" stroke="#4F46E5" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      </div>
                      <span className="text-gray-700">Interest Tests – Explore fields aligned with your passions</span>
                    </li>
                    <li className="flex items-start">
                      <div className="bg-indigo-100 p-1.5 rounded-full mr-3 mt-0.5">
                        <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M8 3L4 7L2 5" stroke="#4F46E5" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      </div>
                      <span className="text-gray-700">Personality Test – Understand traits for career matching</span>
                    </li>
                  </ul>
                  <Button className="w-full bg-indigo-600 hover:bg-indigo-700">Learn More</Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-purple-600 to-indigo-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Want to Know More?</h2>
          <p className="text-xl max-w-2xl mx-auto mb-8 text-purple-100">
            Discover how our assessments can shape your academic and career journey.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-purple-700 hover:bg-purple-50">
              <Download className="w-5 h-5 mr-2" /> Download Brochure
            </Button>
            <Button size="lg" className="bg-purple-800 hover:bg-purple-900">
              Take Free IQ Test
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default IqTestPage;
