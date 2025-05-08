
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "Anjali Bhargava",
    role: "JEE Advanced, AIR 134",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    text: "Career Compass's rank predictor was incredibly accurate! Their counselors helped me choose the right branch at IIT Bombay based on my interests and career goals."
  },
  {
    id: 2,
    name: "Suresh Khatri",
    role: "NEET UG, AIR 240",
    image: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    text: "The mock tests and personalized feedback from Career Compass were instrumental in my NEET preparation. I'm now studying at AIIMS Delhi, pursuing my dream career!"
  },
  {
    id: 3,
    name: "Priya Patel",
    role: "CLAT, Top 50 Rank",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    text: "The aptitude assessment and career guidance I received from Career Compass helped me realize my passion for law. Now I'm at NLSIU Bangalore and couldn't be happier!"
  }
];

const TestimonialsSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  
  const nextTestimonial = () => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
  };
  
  const prevTestimonial = () => {
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="py-16 bg-gradient-to-br from-purple-50 to-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">Voices of Career Mantraaa</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Success stories from students who transformed their careers with our guidance
          </p>
        </div>
        
        <div className="max-w-5xl mx-auto relative">
          <div className="absolute top-1/2 -left-4 md:-left-8 transform -translate-y-1/2 z-10">
            <Button 
              variant="outline" 
              size="icon" 
              className="rounded-full bg-white shadow-md border-gray-200"
              onClick={prevTestimonial}
            >
              <ChevronLeft className="h-5 w-5" />
            </Button>
          </div>
          
          <div className="absolute top-1/2 -right-4 md:-right-8 transform -translate-y-1/2 z-10">
            <Button 
              variant="outline" 
              size="icon" 
              className="rounded-full bg-white shadow-md border-gray-200"
              onClick={nextTestimonial}
            >
              <ChevronRight className="h-5 w-5" />
            </Button>
          </div>
          
          <div className="overflow-hidden px-4">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${activeIndex * 100}%)` }}
            >
              {testimonials.map((testimonial) => (
                <div key={testimonial.id} className="w-full flex-shrink-0 px-4">
                  <div className="testimonial-bubble mb-8">
                    <div className="flex justify-between items-start mb-4">
                      <div className="flex-grow">
                        <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M9.33333 20H4L8 12H5.33333V4H13.3333V12L9.33333 20Z" fill="#8B5CF6" fillOpacity="0.2" stroke="#8B5CF6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                          <path d="M25.3333 20H20L24 12H21.3333V4H29.3333V12L25.3333 20Z" fill="#8B5CF6" fillOpacity="0.2" stroke="#8B5CF6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </div>
                    </div>
                    
                    <p className="text-gray-700 text-lg mb-6">"{testimonial.text}"</p>
                    
                    <div className="flex items-center">
                      <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
                        <img 
                          src={testimonial.image} 
                          alt={testimonial.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                        <p className="text-sm text-purple-600">{testimonial.role}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="flex justify-center space-x-2 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                className={`w-2.5 h-2.5 rounded-full ${
                  index === activeIndex ? 'bg-purple-600' : 'bg-gray-300'
                }`}
                onClick={() => setActiveIndex(index)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
