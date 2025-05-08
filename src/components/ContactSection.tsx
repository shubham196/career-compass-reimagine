
import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const ContactSection = () => {
  return (
    <section id="contact" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <div>
              <h2 className="text-3xl font-bold mb-6 text-gray-900">Contact Us</h2>
              <p className="text-gray-600 mb-8">
                Have questions or need guidance? Our team is ready to assist you on your career journey.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="w-10 h-10 rounded-full bg-purple-100 flex items-center justify-center mr-4 flex-shrink-0">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M22 16.92V19.92C22.0011 20.1985 21.9441 20.4741 21.8325 20.7293C21.7209 20.9845 21.5573 21.2136 21.3521 21.4018C21.1468 21.5901 20.9046 21.7335 20.6407 21.8221C20.3769 21.9108 20.0974 21.9424 19.82 21.9147C16.7428 21.5859 13.787 20.5342 11.19 18.8547C8.77383 17.3141 6.72534 15.2656 5.18467 12.8493C3.49986 10.2414 2.44807 7.27099 2.12333 4.18C2.09563 3.90347 2.12732 3.62476 2.21586 3.36163C2.30441 3.09849 2.44755 2.85669 2.63538 2.65163C2.82321 2.44656 3.05163 2.28271 3.30607 2.17052C3.5605 2.05833 3.83519 2.00026 4.11333 2.00001H7.11333C7.59349 1.99523 8.05951 2.16708 8.4317 2.48354C8.80389 2.79999 9.06095 3.23945 9.15333 3.72001C9.30704 4.6828 9.56743 5.62859 9.93333 6.54001C10.0671 6.90053 10.0954 7.29455 10.0148 7.67153C9.93421 8.04852 9.74853 8.39091 9.48 8.66L8.22667 9.91334C9.63898 12.4273 11.6727 14.461 14.1867 15.8733L15.44 14.62C15.7091 14.3515 16.0515 14.1658 16.4285 14.0852C16.8055 14.0046 17.1995 14.0329 17.56 14.1667C18.4714 14.5326 19.4172 14.793 20.38 14.9467C20.8648 15.0397 21.3079 15.3015 21.6244 15.6799C21.9409 16.0583 22.1091 16.5318 22.1 17.0133L22 16.92Z" stroke="#8B5CF6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-1 text-gray-900">Phone</h3>
                    <p className="text-gray-600">+91 98765 43210</p>
                    <p className="text-gray-600">+91 98765 43211</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-10 h-10 rounded-full bg-purple-100 flex items-center justify-center mr-4 flex-shrink-0">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M4 4H20C21.1 4 22 4.9 22 6V18C22 19.1 21.1 20 20 20H4C2.9 20 2 19.1 2 18V6C2 4.9 2.9 4 4 4Z" stroke="#8B5CF6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M22 6L12 13L2 6" stroke="#8B5CF6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-1 text-gray-900">Email</h3>
                    <p className="text-gray-600">info@careercompass.com</p>
                    <p className="text-gray-600">support@careercompass.com</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-10 h-10 rounded-full bg-purple-100 flex items-center justify-center mr-4 flex-shrink-0">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M21 10C21 17 12 23 12 23C12 23 3 17 3 10C3 7.61305 3.94821 5.32387 5.63604 3.63604C7.32387 1.94821 9.61305 1 12 1C14.3869 1 16.6761 1.94821 18.364 3.63604C20.0518 5.32387 21 7.61305 21 10Z" stroke="#8B5CF6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M12 13C13.6569 13 15 11.6569 15 10C15 8.34315 13.6569 7 12 7C10.3431 7 9 8.34315 9 10C9 11.6569 10.3431 13 12 13Z" stroke="#8B5CF6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-1 text-gray-900">Office Address</h3>
                    <p className="text-gray-600">504 Anna Salai, Nandanam</p>
                    <p className="text-gray-600">Chennai, Tamil Nadu 600035</p>
                  </div>
                </div>
                
                <div className="mt-6 flex space-x-4">
                  <a href="#" className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center hover:bg-purple-100 transition-colors">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M18 2H15C13.6739 2 12.4021 2.52678 11.4645 3.46447C10.5268 4.40215 10 5.67392 10 7V10H7V14H10V22H14V14H17L18 10H14V7C14 6.73478 14.1054 6.48043 14.2929 6.29289C14.4804 6.10536 14.7348 6 15 6H18V2Z" stroke="#8B5CF6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </a>
                  <a href="#" className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center hover:bg-purple-100 transition-colors">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M23 3.00005C22.0424 3.67552 20.9821 4.19216 19.86 4.53005C19.2577 3.83756 18.4573 3.34674 17.567 3.12397C16.6767 2.90121 15.7395 2.95724 14.8821 3.2845C14.0247 3.61176 13.2884 4.19445 12.773 4.95376C12.2575 5.71308 11.9877 6.61238 12 7.53005V8.53005C10.2426 8.57561 8.50127 8.18586 6.93101 7.39549C5.36074 6.60513 4.01032 5.43868 3 4.00005C3 4.00005 -1 13 8 17C5.94053 18.398 3.48716 19.099 1 19C10 24 21 19 21 7.50005C20.9991 7.2215 20.9723 6.94364 20.92 6.67005C21.9406 5.66354 22.6608 4.39276 23 3.00005Z" stroke="#8B5CF6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </a>
                  <a href="#" className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center hover:bg-purple-100 transition-colors">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M16 8C17.5913 8 19.1174 8.63214 20.2426 9.75736C21.3679 10.8826 22 12.4087 22 14V21H18V14C18 13.4696 17.7893 12.9609 17.4142 12.5858C17.0391 12.2107 16.5304 12 16 12C15.4696 12 14.9609 12.2107 14.5858 12.5858C14.2107 12.9609 14 13.4696 14 14V21H10V14C10 12.4087 10.6321 10.8826 11.7574 9.75736C12.8826 8.63214 14.4087 8 16 8Z" stroke="#8B5CF6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M6 9H2V21H6V9Z" stroke="#8B5CF6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M4 6C5.10457 6 6 5.10457 6 4C6 2.89543 5.10457 2 4 2C2.89543 2 2 2.89543 2 4C2 5.10457 2.89543 6 4 6Z" stroke="#8B5CF6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </a>
                  <a href="#" className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center hover:bg-purple-100 transition-colors">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M7 2H17C18.5913 2 20.1174 2.63214 21.2426 3.75736C22.3679 4.88258 23 6.4087 23 8V16C23 17.5913 22.3679 19.1174 21.2426 20.2426C20.1174 21.3679 18.5913 22 17 22H7C5.4087 22 3.88258 21.3679 2.75736 20.2426C1.63214 19.1174 1 17.5913 1 16V8C1 6.4087 1.63214 4.88258 2.75736 3.75736C3.88258 2.63214 5.4087 2 7 2Z" stroke="#8B5CF6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M12 16C14.2091 16 16 14.2091 16 12C16 9.79086 14.2091 8 12 8C9.79086 8 8 9.79086 8 12C8 14.2091 9.79086 16 12 16Z" stroke="#8B5CF6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M17.5 7.5V7.501" stroke="#8B5CF6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
            
            <div className="bg-gray-50 rounded-xl p-8">
              <h3 className="text-2xl font-semibold mb-6 text-gray-900">Send Us a Message</h3>
              
              <form className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                      Your Name
                    </label>
                    <Input 
                      id="name" 
                      placeholder="John Doe" 
                      className="w-full"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                      Email Address
                    </label>
                    <Input 
                      id="email" 
                      type="email" 
                      placeholder="john@example.com" 
                      className="w-full"
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                    Subject
                  </label>
                  <Input 
                    id="subject" 
                    placeholder="How can we help?" 
                    className="w-full"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    placeholder="Write your message here..."
                    className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-purple-500 focus:border-purple-500"
                  ></textarea>
                </div>
                
                <Button className="bg-purple-600 hover:bg-purple-700 text-white w-full">
                  Send Message
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
      
      {/* Newsletter */}
      <div className="mt-20">
        <div className="yellow-gradient-bg py-12 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-4 text-gray-900">Subscribe To Our Newsletter</h2>
            <p className="text-gray-700 mb-8 max-w-xl mx-auto">
              Stay updated with the latest education news, exam updates, and career guidance tips
            </p>
            
            <form className="flex flex-wrap max-w-xl mx-auto gap-3 justify-center">
              <Input 
                type="email"
                placeholder="Your email address"
                className="w-full md:w-auto flex-grow md:flex-grow-0 md:flex-1 bg-white"
              />
              <Input 
                type="text"
                placeholder="Your name"
                className="w-full md:w-auto flex-grow md:flex-grow-0 md:flex-1 bg-white"
              />
              <Button className="bg-purple-600 hover:bg-purple-700 text-white w-full md:w-auto">
                Subscribe Now
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
