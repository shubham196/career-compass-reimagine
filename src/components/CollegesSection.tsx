
import React from "react";
import { Star } from "lucide-react";

const colleges = [
  {
    id: 1,
    name: "Indian Institute of Technology (IIT), Bombay",
    location: "Mumbai",
    rating: 4.9,
    reviewCount: 1245,
    logo: "https://upload.wikimedia.org/wikipedia/en/thumb/6/69/IIT_Bombay_logo.svg/440px-IIT_Bombay_logo.svg.png"
  },
  {
    id: 2,
    name: "Indian Institute of Technology (IIT), Delhi",
    location: "New Delhi",
    rating: 4.8,
    reviewCount: 1089,
    logo: "https://upload.wikimedia.org/wikipedia/en/thumb/f/fd/Indian_Institute_of_Technology_Delhi_Logo.svg/440px-Indian_Institute_of_Technology_Delhi_Logo.svg.png"
  },
  {
    id: 3,
    name: "All India Institute of Medical Sciences (AIIMS)",
    location: "New Delhi", 
    rating: 4.9,
    reviewCount: 950,
    logo: "https://upload.wikimedia.org/wikipedia/en/thumb/7/7c/AIIMS_logo.svg/440px-AIIMS_logo.svg.png"
  },
  {
    id: 4,
    name: "Indian Institute of Science (IISc)",
    location: "Bangalore",
    rating: 4.8,
    reviewCount: 870,
    logo: "https://upload.wikimedia.org/wikipedia/en/thumb/3/3d/IISC_Seal.svg/440px-IISC_Seal.svg.png"
  },
  {
    id: 5,
    name: "National Law School of India University",
    location: "Bangalore",
    rating: 4.7,
    reviewCount: 650,
    logo: "https://upload.wikimedia.org/wikipedia/en/thumb/e/e4/National_Law_School_of_India_University_Logo.svg/440px-National_Law_School_of_India_University_Logo.svg.png"
  }
];

const CollegesSection = () => {
  return (
    <section id="colleges" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">Top 10 Indian Colleges</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Discover the best educational institutions across India for various disciplines
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-lg overflow-hidden">
          <div className="grid grid-cols-12 bg-purple-50 px-6 py-3 rounded-t-xl">
            <div className="col-span-7 md:col-span-6 font-medium text-gray-700">Name</div>
            <div className="col-span-3 hidden md:block font-medium text-gray-700">Location</div>
            <div className="col-span-5 md:col-span-3 font-medium text-gray-700 text-right md:text-center">Rating</div>
          </div>
          
          <div className="divide-y divide-gray-100">
            {colleges.map((college) => (
              <div key={college.id} className="grid grid-cols-12 px-6 py-4 items-center hover:bg-gray-50">
                <div className="col-span-7 md:col-span-6 flex items-center">
                  <div className="w-10 h-10 rounded-full bg-white flex-shrink-0 border flex items-center justify-center overflow-hidden mr-3">
                    <img 
                      src={college.logo} 
                      alt={`${college.name} logo`}
                      className="w-8 h-8 object-contain"
                    />
                  </div>
                  <div>
                    <h3 className="font-medium text-gray-900">{college.name}</h3>
                  </div>
                </div>
                <div className="col-span-3 hidden md:block text-gray-600">
                  {college.location}
                </div>
                <div className="col-span-5 md:col-span-3 flex items-center justify-end md:justify-center">
                  <div className="flex items-center">
                    <span className="font-medium text-gray-900 mr-1">{college.rating}</span>
                    <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    <span className="text-xs text-gray-500 ml-1">({college.reviewCount})</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="px-6 py-4 bg-gray-50 text-center rounded-b-xl">
            <a href="#" className="text-purple-600 font-medium hover:text-purple-800">
              View All Colleges →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CollegesSection;
