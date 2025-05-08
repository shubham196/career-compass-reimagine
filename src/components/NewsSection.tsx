
import React, { useRef } from "react";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";

const newsItems = [
  {
    id: 1,
    title: "JEE Mains 2025 Registration Begins on Dec 15",
    category: "Exam",
    image: "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    excerpt: "NTA announces the schedule for JEE Mains 2025 registration process..."
  },
  {
    id: 2,
    title: "CUET Exam Dates and Syllabus Updates",
    category: "Update",
    image: "https://images.unsplash.com/photo-1528323273322-d81458248d40?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    excerpt: "Check the revised exam schedule and latest syllabus changes for CUET..."
  },
  {
    id: 3,
    title: "IIT Bombay Orientation for New Students",
    category: "Result",
    image: "https://images.unsplash.com/photo-1523580494863-6f3031224c94?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    excerpt: "IIT Bombay announces orientation program details for newly admitted students..."
  },
  {
    id: 4,
    title: "NEET UG Exam Result Declared",
    category: "Result",
    image: "https://images.unsplash.com/photo-1606326608690-4e0281b1e588?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    excerpt: "NTA has declared the NEET UG results, check the cutoff marks..."
  },
];

const NewsSection = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const { current } = scrollRef;
      const scrollAmount = direction === 'left' ? -current.offsetWidth / 1.5 : current.offsetWidth / 1.5;
      current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <section id="news" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap items-center justify-between mb-10">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-2 text-gray-900">Latest News & Stories</h2>
            <p className="text-lg text-gray-600">
              Stay updated with the latest education news and announcements
            </p>
          </div>
          <div className="flex space-x-2 mt-4 md:mt-0">
            <Button 
              variant="outline" 
              size="icon" 
              className="rounded-full border-gray-300"
              onClick={() => scroll('left')}
            >
              <ChevronLeft className="h-4 w-4" />
            </Button>
            <Button 
              variant="outline" 
              size="icon" 
              className="rounded-full border-gray-300"
              onClick={() => scroll('right')}
            >
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
        </div>
        
        <div className="relative">
          <div 
            ref={scrollRef} 
            className="flex overflow-x-auto gap-6 pb-6 scrollbar-hide hide-scrollbar snap-x"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {newsItems.map((item) => (
              <div 
                key={item.id}
                className="min-w-[300px] md:min-w-[350px] flex-shrink-0 snap-start news-card"
              >
                <div className="bg-white rounded-xl overflow-hidden shadow-md h-full flex flex-col">
                  <div className="relative h-48">
                    <img 
                      src={item.image} 
                      alt={item.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-4 left-4">
                      <span className={`
                        badge-tag
                        ${item.category === 'Exam' ? 'badge-exam' : ''}
                        ${item.category === 'Result' ? 'badge-result' : ''}
                        ${item.category === 'Update' ? 'badge-update' : ''}
                      `}>
                        {item.category}
                      </span>
                    </div>
                  </div>
                  <div className="p-6 flex flex-col flex-grow">
                    <h3 className="text-xl font-semibold mb-3 text-gray-900">{item.title}</h3>
                    <p className="text-gray-600 mb-4 text-sm flex-grow">{item.excerpt}</p>
                    <Button variant="link" className="p-0 h-auto text-purple-600 justify-start">
                      Read More
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewsSection;
