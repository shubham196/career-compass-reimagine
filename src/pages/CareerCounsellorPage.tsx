
import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { GraduationCap, User, FileText, ChartBar, Star, Users, CheckCircle, BookOpen } from "lucide-react";

const CareerCounsellorPage = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-purple-700 to-indigo-800 py-20">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="md:w-1/2 mb-10 md:mb-0">
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
                Why Do You Need a <span className="text-yellow-300">Career Counsellor?</span>
              </h1>
              <p className="text-xl text-purple-100 mb-8">
                Expert guidance to help you make informed decisions about your future
              </p>
              <Button size="lg" className="bg-white text-purple-700 hover:bg-purple-50 rounded-full px-8 py-6 text-lg shadow-xl">
                Book a Consultation
              </Button>
            </div>
            <div className="md:w-1/2">
              <img 
                src="https://images.unsplash.com/photo-1531482615713-2afd69097998?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" 
                alt="Career counselling session" 
                className="rounded-2xl shadow-2xl border-4 border-white"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
              Selecting the right career path can be overwhelming, particularly with the wide range of options to consider. A career counsellor can help simplify this process by offering tailored support and expert guidance. Here's why seeking professional career advice is crucial for your success:
            </p>

            {/* Reasons Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
              {/* Reason 1 */}
              <Card className="border-none shadow-lg hover:shadow-xl transition-all duration-300 bg-white overflow-hidden hover:-translate-y-1">
                <CardContent className="p-6">
                  <div className="flex items-start mb-4">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-400 to-purple-600 flex items-center justify-center mr-4 shadow-md flex-shrink-0">
                      <Star className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900">Clarifying Your Goals</h3>
                  </div>
                  <p className="text-gray-700">
                    A career counsellor helps you gain a deeper understanding of your strengths, passions, and aspirations. By assessing your skills and interests, they can help you set clear, actionable career goals that align with your long-term vision.
                  </p>
                </CardContent>
              </Card>

              {/* Reason 2 */}
              <Card className="border-none shadow-lg hover:shadow-xl transition-all duration-300 bg-white overflow-hidden hover:-translate-y-1">
                <CardContent className="p-6">
                  <div className="flex items-start mb-4">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center mr-4 shadow-md flex-shrink-0">
                      <User className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900">Personalized Advice</h3>
                  </div>
                  <p className="text-gray-700">
                    Career counsellors offer customized guidance based on your unique background, skills, and preferences. They take the time to understand your personal values, work-life balance preferences, and financial expectations.
                  </p>
                </CardContent>
              </Card>

              {/* Reason 3 */}
              <Card className="border-none shadow-lg hover:shadow-xl transition-all duration-300 bg-white overflow-hidden hover:-translate-y-1">
                <CardContent className="p-6">
                  <div className="flex items-start mb-4">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-green-400 to-green-600 flex items-center justify-center mr-4 shadow-md flex-shrink-0">
                      <ChartBar className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900">Exploring Career Options</h3>
                  </div>
                  <p className="text-gray-700">
                    One of the greatest benefits of working with a career counsellor is the opportunity to explore a wide range of career paths you may not have considered. Their in-depth knowledge of various industries and job trends can open your eyes to new possibilities.
                  </p>
                </CardContent>
              </Card>

              {/* Reason 4 */}
              <Card className="border-none shadow-lg hover:shadow-xl transition-all duration-300 bg-white overflow-hidden hover:-translate-y-1">
                <CardContent className="p-6">
                  <div className="flex items-start mb-4">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-yellow-400 to-yellow-600 flex items-center justify-center mr-4 shadow-md flex-shrink-0">
                      <FileText className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900">Guiding Transitions</h3>
                  </div>
                  <p className="text-gray-700">
                    Changing careers, advancing in your current field, or entering the job market for the first time can be intimidating. A career counsellor provides critical support during these transitions, helping you assess your transferable skills.
                  </p>
                </CardContent>
              </Card>

              {/* Reason 5 */}
              <Card className="border-none shadow-lg hover:shadow-xl transition-all duration-300 bg-white overflow-hidden hover:-translate-y-1">
                <CardContent className="p-6">
                  <div className="flex items-start mb-4">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-indigo-400 to-indigo-600 flex items-center justify-center mr-4 shadow-md flex-shrink-0">
                      <GraduationCap className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900">Boosting Confidence</h3>
                  </div>
                  <p className="text-gray-700">
                    Many individuals struggle with self-doubt when it comes to making important career decisions. A career counsellor plays an essential role in boosting your confidence by helping you recognize your strengths, achievements, and unique qualities.
                  </p>
                </CardContent>
              </Card>

              {/* Reason 6 */}
              <Card className="border-none shadow-lg hover:shadow-xl transition-all duration-300 bg-white overflow-hidden hover:-translate-y-1">
                <CardContent className="p-6">
                  <div className="flex items-start mb-4">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-red-400 to-red-600 flex items-center justify-center mr-4 shadow-md flex-shrink-0">
                      <CheckCircle className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900">Job Search Support</h3>
                  </div>
                  <p className="text-gray-700">
                    Navigating the job search process can be overwhelming, but career counsellors are experts in making this journey easier. They assist with crafting a compelling resume, enhancing your LinkedIn profile, and preparing for job interviews.
                  </p>
                </CardContent>
              </Card>
            </div>

            <div className="mb-16">
              <h2 className="text-3xl font-bold mb-6 text-gray-900">Long-Term Growth and Networking</h2>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                A good career counsellor doesn't just focus on immediate job placement but is also invested in your long-term success. They provide ongoing support, helping you plan your career trajectory and take necessary steps for professional development. Whether it's recommending additional training, certifications, or career advancement opportunities, they ensure you continue to grow and reach your full potential.
              </p>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Networking is a key factor in career success. Career counsellors often have established connections within various industries and can introduce you to professionals who can help expand your network. By leveraging these connections, you gain access to job opportunities, mentorship, and industry insights that can significantly enhance your career prospects.
              </p>
            </div>

            <div className="mb-16">
              <h2 className="text-3xl font-bold mb-6 text-gray-900">Emotional Support and Objective Perspective</h2>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Career decisions can sometimes come with stress, uncertainty, or pressure. A career counsellor provides a safe space to discuss your concerns and feelings, offering valuable emotional support throughout the decision-making process. They act as a sounding board, helping you navigate tough choices while maintaining your well-being.
              </p>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Often, friends and family may offer career advice based on their own biases or limited perspectives. A career counsellor, however, offers an unbiased, professional viewpoint. With their expertise, they can provide practical recommendations based on your unique situation and the broader job market, ensuring that you make decisions rooted in facts, not emotions or external influences.
              </p>
            </div>

            <div className="bg-gray-100 rounded-2xl p-8 shadow-md">
              <h2 className="text-2xl font-bold mb-4 text-gray-900">In Conclusion</h2>
              <p className="text-lg text-gray-700 mb-6">
                Career counselling is a valuable resource for anyone looking to make informed career decisions, gain confidence, and achieve long-term professional success. Whether you're starting your career, considering a change, or seeking growth, a career counsellor provides the necessary guidance and support to help you reach your goals with clarity and purpose.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Career Mantrana Section */}
      <section className="py-16 bg-gradient-to-b from-white to-purple-50">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">Why Choose Career Mantrana?</h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Career Mantrana has been a trusted guide for students in making informed career decisions for over 14 years
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 md:p-10 shadow-xl mb-12">
              <p className="text-xl text-center font-medium text-purple-700 mb-6">
                Our mission – "Your Career is Our Vision" – drives us to align your personality, interests, and capabilities with the right career path, providing holistic and comprehensive career guidance.
              </p>
              <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Here is how we make it happen through our 4 key services:</h3>

              <div className="space-y-8">
                {/* Service 1 */}
                <div className="bg-gradient-to-r from-purple-50 to-white rounded-xl p-6 border border-purple-100">
                  <div className="flex flex-col md:flex-row gap-6">
                    <div className="md:w-1/4 flex justify-center">
                      <div className="w-20 h-20 rounded-full bg-gradient-to-br from-purple-500 to-purple-700 flex items-center justify-center shadow-lg">
                        <Users className="w-10 h-10 text-white" />
                      </div>
                    </div>
                    <div className="md:w-3/4">
                      <h4 className="text-xl font-bold text-purple-700 mb-3">1. Career Counselling – Your Personal Roadmap</h4>
                      <p className="text-gray-700 mb-4">
                        Our expert team provides personalized one-on-one sessions that focus on your individual strengths, interests, and goals.
                      </p>
                      <ul className="space-y-2">
                        <li className="flex items-center">
                          <CheckCircle className="w-5 h-5 text-green-500 mr-2 flex-shrink-0" />
                          <span>Tailored Career Counselling Sessions</span>
                        </li>
                        <li className="flex items-center">
                          <CheckCircle className="w-5 h-5 text-green-500 mr-2 flex-shrink-0" />
                          <span>Focus on both strengths and areas of improvement</span>
                        </li>
                        <li className="flex items-center">
                          <CheckCircle className="w-5 h-5 text-green-500 mr-2 flex-shrink-0" />
                          <span>Actionable advice to help choose the right career path</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Service 2 */}
                <div className="bg-gradient-to-r from-blue-50 to-white rounded-xl p-6 border border-blue-100">
                  <div className="flex flex-col md:flex-row gap-6">
                    <div className="md:w-1/4 flex justify-center">
                      <div className="w-20 h-20 rounded-full bg-gradient-to-br from-blue-500 to-blue-700 flex items-center justify-center shadow-lg">
                        <User className="w-10 h-10 text-white" />
                      </div>
                    </div>
                    <div className="md:w-3/4">
                      <h4 className="text-xl font-bold text-blue-700 mb-3">2. Psychometric Tests – Know Yourself First</h4>
                      <p className="text-gray-700 mb-4">
                        Understanding your personality is the first step in career planning.
                      </p>
                      <ul className="space-y-2">
                        <li className="flex items-center">
                          <CheckCircle className="w-5 h-5 text-green-500 mr-2 flex-shrink-0" />
                          <span>Convenient online test from the comfort of your home</span>
                        </li>
                        <li className="flex items-center">
                          <CheckCircle className="w-5 h-5 text-green-500 mr-2 flex-shrink-0" />
                          <span>Discover your strengths, personality traits, and growth areas</span>
                        </li>
                        <li className="flex items-center">
                          <CheckCircle className="w-5 h-5 text-green-500 mr-2 flex-shrink-0" />
                          <span>Receive a detailed report powered by The Career Map</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Service 3 */}
                <div className="bg-gradient-to-r from-green-50 to-white rounded-xl p-6 border border-green-100">
                  <div className="flex flex-col md:flex-row gap-6">
                    <div className="md:w-1/4 flex justify-center">
                      <div className="w-20 h-20 rounded-full bg-gradient-to-br from-green-500 to-green-700 flex items-center justify-center shadow-lg">
                        <GraduationCap className="w-10 h-10 text-white" />
                      </div>
                    </div>
                    <div className="md:w-3/4">
                      <h4 className="text-xl font-bold text-green-700 mb-3">3. Admission Process Guidance – Step-by-Step Support</h4>
                      <p className="text-gray-700 mb-4">
                        We offer comprehensive guidance throughout your college application journey.
                      </p>
                      <ul className="space-y-2">
                        <li className="flex items-start">
                          <CheckCircle className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                          <span>Expert support for admissions in Engineering, Medical, Architecture, Law, Commerce & more</span>
                        </li>
                        <li className="flex items-center">
                          <CheckCircle className="w-5 h-5 text-green-500 mr-2 flex-shrink-0" />
                          <span>Detailed insights on college rankings, accreditations, and scholarships</span>
                        </li>
                        <li className="flex items-center">
                          <CheckCircle className="w-5 h-5 text-green-500 mr-2 flex-shrink-0" />
                          <span>Personalized college choice filling options to ensure the best fit</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Service 4 */}
                <div className="bg-gradient-to-r from-yellow-50 to-white rounded-xl p-6 border border-yellow-100">
                  <div className="flex flex-col md:flex-row gap-6">
                    <div className="md:w-1/4 flex justify-center">
                      <div className="w-20 h-20 rounded-full bg-gradient-to-br from-yellow-500 to-amber-600 flex items-center justify-center shadow-lg">
                        <BookOpen className="w-10 h-10 text-white" />
                      </div>
                    </div>
                    <div className="md:w-3/4">
                      <h4 className="text-xl font-bold text-amber-700 mb-3">4. Specialized IQ Testing for Students</h4>
                      <p className="text-gray-700 mb-4">
                        We also offer IQ tests specifically designed for 8th, 9th, and 10th-grade students to assess cognitive abilities and academic potential.
                      </p>
                      <p className="text-gray-700">
                        These tests help students understand their learning patterns, improve academic performance, and make more informed career decisions. We also offer IQ and Personality Tests designed for 11th and 12th-grade students to further assess their academic potential.
                      </p>
                      <div className="mt-4">
                        <Button className="bg-amber-600 hover:bg-amber-700">Learn More About IQ Tests</Button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="text-center">
              <p className="text-xl text-gray-800 font-semibold mb-8">
                At Career Mantrana, we provide more than just career advice; we offer a complete 360° approach to career discovery and planning, ensuring you are on the right path to a successful future.
              </p>
              <Button size="lg" className="bg-purple-600 hover:bg-purple-700 px-8 text-lg">
                Book a Career Counselling Session
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default CareerCounsellorPage;
