
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Search, Menu, X } from "lucide-react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-white shadow-sm py-4 sticky top-0 z-50">
      <div className="container mx-auto px-4 flex items-center justify-between">
        <div className="flex items-center">
          <a href="/" className="flex items-center">
            <div className="w-10 h-10 rounded-full bg-gradient-to-r from-purple-600 to-purple-800 flex items-center justify-center mr-2">
              <span className="text-white font-bold text-lg">CC</span>
            </div>
            <span className="font-poppins font-semibold text-lg text-gray-900">Career<span className="text-purple-600">Compass</span></span>
          </a>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          <a href="#features" className="font-medium text-gray-700 hover:text-purple-600 transition-colors">Features</a>
          <a href="#colleges" className="font-medium text-gray-700 hover:text-purple-600 transition-colors">Colleges</a>
          <a href="#news" className="font-medium text-gray-700 hover:text-purple-600 transition-colors">News</a>
          <a href="#faqs" className="font-medium text-gray-700 hover:text-purple-600 transition-colors">FAQs</a>
          <a href="#contact" className="font-medium text-gray-700 hover:text-purple-600 transition-colors">Contact</a>
        </div>

        <div className="hidden md:flex items-center space-x-4">
          <Button variant="outline" size="sm" className="rounded-full">
            <Search className="h-4 w-4 mr-2" /> Search
          </Button>
          <Button className="bg-purple-600 hover:bg-purple-700 text-white rounded-full">
            Sign Up Free
          </Button>
        </div>

        {/* Mobile menu button */}
        <div className="md:hidden">
          <Button variant="ghost" size="sm" onClick={toggleMenu} className="p-1">
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-white px-4 py-2 shadow-lg">
          <div className="flex flex-col space-y-3 pt-3 pb-4">
            <a href="#features" className="font-medium text-gray-800 hover:text-purple-600 transition-colors py-2 px-4 rounded-lg hover:bg-gray-50">Features</a>
            <a href="#colleges" className="font-medium text-gray-800 hover:text-purple-600 transition-colors py-2 px-4 rounded-lg hover:bg-gray-50">Colleges</a>
            <a href="#news" className="font-medium text-gray-800 hover:text-purple-600 transition-colors py-2 px-4 rounded-lg hover:bg-gray-50">News</a>
            <a href="#faqs" className="font-medium text-gray-800 hover:text-purple-600 transition-colors py-2 px-4 rounded-lg hover:bg-gray-50">FAQs</a>
            <a href="#contact" className="font-medium text-gray-800 hover:text-purple-600 transition-colors py-2 px-4 rounded-lg hover:bg-gray-50">Contact</a>
            <Button className="bg-purple-600 hover:bg-purple-700 text-white w-full rounded-full mt-3">
              Sign Up Free
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
