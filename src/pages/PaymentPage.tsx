
import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { 
  ThumbsUp, ChevronLeft, Check, ChevronDown, Info, CreditCard
} from "lucide-react";

const PaymentPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { reportType } = location.state || { reportType: "JEE Main AI Choice Filling Report" };
  
  const [showCoupon, setShowCoupon] = useState(false);
  const [couponCode, setCouponCode] = useState("");
  const [selectedReport, setSelectedReport] = useState("jee-main");

  const reports = [
    {
      id: "jee-main",
      title: "JEE Main 2025 College Predictor",
      originalPrice: "₹599",
      price: "₹499",
      selected: true
    },
    {
      id: "jee-advanced",
      title: "JEE Main & JEE Advanced 2025 College Predictors",
      originalPrice: "₹799",
      price: "₹699",
      selected: false
    }
  ];

  const handlePayment = () => {
    alert("Payment processing would happen here. Redirecting to success page!");
    navigate('/payment-success');
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />

      <div className="py-4 px-4 max-w-5xl mx-auto">
        <Button 
          variant="outline" 
          onClick={() => navigate(-1)}
          className="mb-6 flex items-center gap-1"
        >
          <ChevronLeft className="w-4 h-4" />
          <span>Back</span>
        </Button>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Left Column - Congratulations and Info */}
          <div className="md:col-span-2">
            <div className="bg-white rounded-lg shadow-md p-8 mb-6">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-14 h-14 bg-blue-100 rounded-full flex items-center justify-center shrink-0">
                  <ThumbsUp className="w-8 h-8 text-blue-600" />
                </div>
                <div>
                  <h1 className="text-2xl font-bold text-gray-800 mb-2">Congratulations!</h1>
                  <p className="text-lg text-gray-700">You have chances in some Top colleges</p>
                </div>
              </div>
              
              <p className="text-base text-gray-700 mb-4">
                Explore 952 Top colleges across India through JEE Main 2025 College Predictor
              </p>
              
              <ul className="space-y-3 mb-6">
                <li className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-green-600 mt-0.5" />
                  <span>Try your luck in 13 counsellings</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-green-600 mt-0.5" />
                  <span>Making choice filling of all colleges and courses easier</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-green-600 mt-0.5" />
                  <span>Check cut-off trend for top colleges and courses</span>
                </li>
              </ul>
              
              <div className="border rounded-lg border-gray-200 mb-6">
                <div className="bg-gray-50 p-3 border-b border-gray-200">
                  <h3 className="font-semibold text-gray-800">Counselling Name</h3>
                </div>
                <div className="max-h-40 overflow-y-auto">
                  <div className="p-3 border-b border-gray-100">CSAB</div>
                  <div className="p-3 border-b border-gray-100">Chandigarh Admission</div>
                  <div className="p-3 border-b border-gray-100">Haryana Admission</div>
                  <div className="p-3">IIIT Hyderabad B.Tech Admission</div>
                </div>
              </div>
              
              <div className="bg-gray-50 p-6 rounded-lg mb-6">
                <h3 className="text-lg font-bold text-gray-800 mb-3">What's in it for you?</h3>
                <p className="text-gray-700 mb-4">
                  Make an informed career decision with the personalized report on the best engineering colleges to choose
                </p>
                
                <ul className="space-y-3 list-disc pl-5">
                  <li className="text-gray-700">
                    Analyse and identify the best college choices you can get based on your JEE Main Rank using advanced algorithms.
                  </li>
                  <li className="text-gray-700">
                    Check previous year JEE Main cut-offs for colleges & courses through different seat types, quotas.
                  </li>
                  <li className="text-gray-700">
                    Know top colleges like NITs/IIITs/GFTIs based on JEE Main ranks.
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Right Column - Payment */}
          <div className="md:col-span-1">
            <div className="bg-white rounded-lg shadow-md overflow-hidden sticky top-4">
              <div className="p-4 bg-gray-50 border-b border-gray-200">
                <h2 className="font-semibold text-gray-800">Please Select</h2>
              </div>
              
              <div className="p-4">
                <RadioGroup value={selectedReport} onValueChange={setSelectedReport}>
                  {reports.map((report) => (
                    <div key={report.id} className={`border rounded-lg p-4 mb-3 ${selectedReport === report.id ? 'border-theme-primary bg-purple-50' : 'border-gray-200'}`}>
                      <div className="flex items-start gap-2">
                        <RadioGroupItem value={report.id} id={report.id} className="mt-1" />
                        <div className="flex-1">
                          <Label htmlFor={report.id} className="font-medium text-gray-800">
                            {report.title}
                          </Label>
                          <div className="flex items-center gap-2 mt-1">
                            <span className="font-semibold text-theme-primary">{report.price}</span>
                            <span className="text-sm text-gray-500 line-through">{report.originalPrice}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </RadioGroup>
                
                <div className="mt-4 mb-6">
                  <button 
                    onClick={() => setShowCoupon(!showCoupon)}
                    className="flex items-center gap-1 text-theme-primary hover:text-theme-secondary transition-colors"
                  >
                    <span>Apply Coupon Code</span>
                    <ChevronDown className="w-4 h-4" />
                  </button>
                  
                  {showCoupon && (
                    <div className="mt-3">
                      <div className="flex gap-2">
                        <Input 
                          placeholder="Enter coupon code" 
                          value={couponCode}
                          onChange={(e) => setCouponCode(e.target.value)}
                          className="flex-1"
                        />
                        <Button variant="outline" className="shrink-0">Apply</Button>
                      </div>
                    </div>
                  )}
                </div>
                
                <div className="border-t border-gray-200 pt-4 space-y-2">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Subtotal</span>
                    <span>₹499</span>
                  </div>
                  
                  <div className="flex justify-between items-center">
                    <div className="flex items-center gap-1">
                      <span className="text-gray-600">GST</span>
                      <Info className="w-4 h-4 text-gray-400" />
                    </div>
                    <span>+₹90</span>
                  </div>
                  
                  <div className="flex justify-between font-semibold text-lg pt-2 border-t border-gray-200">
                    <span>Order Total</span>
                    <span>₹ 589</span>
                  </div>
                </div>
                
                <Button 
                  onClick={handlePayment}
                  className="w-full bg-theme-gradient hover:opacity-90 text-white py-6 font-medium text-lg mt-6 flex items-center justify-center gap-2"
                >
                  <CreditCard className="w-5 h-5" />
                  Proceed to pay
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-16">
        <Footer />
      </div>
    </div>
  );
};

export default PaymentPage;
