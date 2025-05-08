
import React from "react";

const Footer = () => {
  return (
    <footer className="bg-purple-900 text-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 py-12">
          <div>
            <div className="flex items-center mb-6">
              <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center mr-2">
                <span className="text-purple-800 font-bold text-lg">CC</span>
              </div>
              <span className="font-poppins font-semibold text-lg">Career<span className="text-yellow-300">Compass</span></span>
            </div>
            
            <p className="text-purple-200 mb-6 text-sm">
              India's leading career counseling platform helping students make informed decisions about their education and career paths.
            </p>
            
            <div className="flex space-x-4">
              <a href="#" className="w-8 h-8 rounded-full bg-purple-700 flex items-center justify-center hover:bg-purple-600 transition-colors">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M18 2H15C13.6739 2 12.4021 2.52678 11.4645 3.46447C10.5268 4.40215 10 5.67392 10 7V10H7V14H10V22H14V14H17L18 10H14V7C14 6.73478 14.1054 6.48043 14.2929 6.29289C14.4804 6.10536 14.7348 6 15 6H18V2Z"></path>
                </svg>
              </a>
              <a href="#" className="w-8 h-8 rounded-full bg-purple-700 flex items-center justify-center hover:bg-purple-600 transition-colors">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M23 3.00005C22.0424 3.67552 20.9821 4.19216 19.86 4.53005C19.2577 3.83756 18.4573 3.34674 17.567 3.12397C16.6767 2.90121 15.7395 2.95724 14.8821 3.2845C14.0247 3.61176 13.2884 4.19445 12.773 4.95376C12.2575 5.71308 11.9877 6.61238 12 7.53005V8.53005C10.2426 8.57561 8.50127 8.18586 6.93101 7.39549C5.36074 6.60513 4.01032 5.43868 3 4.00005C3 4.00005 -1 13 8 17C5.94053 18.398 3.48716 19.099 1 19C10 24 21 19 21 7.50005C20.9991 7.2215 20.9723 6.94364 20.92 6.67005C21.9406 5.66354 22.6608 4.39276 23 3.00005Z"></path>
                </svg>
              </a>
              <a href="#" className="w-8 h-8 rounded-full bg-purple-700 flex items-center justify-center hover:bg-purple-600 transition-colors">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                </svg>
              </a>
              <a href="#" className="w-8 h-8 rounded-full bg-purple-700 flex items-center justify-center hover:bg-purple-600 transition-colors">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                  <rect x="2" y="9" width="4" height="12"></rect>
                  <circle cx="4" cy="4" r="2"></circle>
                </svg>
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Explore</h3>
            <ul className="space-y-3">
              <li><a href="#features" className="text-purple-200 hover:text-white transition-colors">Features</a></li>
              <li><a href="#colleges" className="text-purple-200 hover:text-white transition-colors">Top Colleges</a></li>
              <li><a href="#news" className="text-purple-200 hover:text-white transition-colors">Latest News</a></li>
              <li><a href="#" className="text-purple-200 hover:text-white transition-colors">Exams</a></li>
              <li><a href="#" className="text-purple-200 hover:text-white transition-colors">Career Library</a></li>
              <li><a href="#" className="text-purple-200 hover:text-white transition-colors">Scholarships</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Resources</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-purple-200 hover:text-white transition-colors">Blog</a></li>
              <li><a href="#" className="text-purple-200 hover:text-white transition-colors">Guides</a></li>
              <li><a href="#faqs" className="text-purple-200 hover:text-white transition-colors">FAQs</a></li>
              <li><a href="#" className="text-purple-200 hover:text-white transition-colors">About Us</a></li>
              <li><a href="#contact" className="text-purple-200 hover:text-white transition-colors">Contact</a></li>
              <li><a href="#" className="text-purple-200 hover:text-white transition-colors">Privacy Policy</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
            <ul className="space-y-4">
              <li className="flex">
                <svg className="w-5 h-5 mr-3 text-yellow-300" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                  <circle cx="12" cy="10" r="3"></circle>
                </svg>
                <span className="text-purple-200">
                  504 Anna Salai, Nandanam<br />
                  Chennai, Tamil Nadu 600035
                </span>
              </li>
              <li className="flex">
                <svg className="w-5 h-5 mr-3 text-yellow-300" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                </svg>
                <span className="text-purple-200">+91 98765 43210</span>
              </li>
              <li className="flex">
                <svg className="w-5 h-5 mr-3 text-yellow-300" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                  <polyline points="22,6 12,13 2,6"></polyline>
                </svg>
                <span className="text-purple-200">info@careercompass.com</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
      
      <div className="bg-purple-950 py-4">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-between items-center">
            <p className="text-purple-300 text-sm">
              © {new Date().getFullYear()} Career Compass. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 sm:mt-0">
              <a href="#" className="text-purple-300 text-sm hover:text-white">Terms</a>
              <a href="#" className="text-purple-300 text-sm hover:text-white">Privacy</a>
              <a href="#" className="text-purple-300 text-sm hover:text-white">Cookies</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
