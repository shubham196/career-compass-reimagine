
import React from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { 
  CheckCircle, FileDown, Download, Home, ChevronRight
} from "lucide-react";

const PaymentSuccessPage = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />

      <div className="py-16 px-4">
        <div className="max-w-3xl mx-auto bg-white rounded-2xl shadow-lg overflow-hidden">
          <div className="bg-theme-gradient p-8 text-center">
            <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <CheckCircle className="w-12 h-12 text-white" />
            </div>
            <h1 className="text-3xl font-bold text-white mb-2">Payment Successful!</h1>
            <p className="text-xl text-white/90">Your AI Report is ready to download</p>
          </div>
          
          <div className="p-8">
            <div className="bg-green-50 border border-green-200 rounded-lg p-4 mb-8 flex items-start gap-3">
              <CheckCircle className="w-5 h-5 text-green-600 mt-1 shrink-0" />
              <p className="text-green-800">
                Your payment was processed successfully. We've sent a copy of your receipt to your email.
              </p>
            </div>
            
            <div className="border border-gray-200 rounded-lg mb-8">
              <div className="bg-gray-50 p-4 border-b border-gray-200">
                <h2 className="font-semibold text-lg">Order Summary</h2>
              </div>
              <div className="p-4">
                <div className="flex justify-between py-2 border-b border-gray-100">
                  <span className="text-gray-600">Report Type:</span>
                  <span className="font-medium">JEE Main 2025 College Predictor</span>
                </div>
                <div className="flex justify-between py-2 border-b border-gray-100">
                  <span className="text-gray-600">Order ID:</span>
                  <span className="font-medium">ORD12345678</span>
                </div>
                <div className="flex justify-between py-2 border-b border-gray-100">
                  <span className="text-gray-600">Date:</span>
                  <span className="font-medium">May 14, 2025</span>
                </div>
                <div className="flex justify-between py-2 border-b border-gray-100">
                  <span className="text-gray-600">Amount Paid:</span>
                  <span className="font-medium">₹589</span>
                </div>
                <div className="flex justify-between py-2">
                  <span className="text-gray-600">Payment Method:</span>
                  <span className="font-medium">Card Payment</span>
                </div>
              </div>
            </div>
            
            <div className="bg-purple-50 border border-purple-200 rounded-xl p-6 mb-8">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-theme-gradient rounded-lg flex items-center justify-center shrink-0">
                  <FileDown className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="font-bold text-lg text-theme-secondary">Your AI Report is Ready</h3>
                  <p className="text-gray-600">Download your personalized college recommendations now</p>
                </div>
              </div>
              
              <Button 
                className="w-full bg-theme-gradient hover:opacity-90 text-white py-6 font-medium text-lg flex items-center justify-center gap-2 rounded-xl"
              >
                <Download className="w-5 h-5" />
                Download AI Report
              </Button>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                variant="outline" 
                className="flex items-center gap-2"
                onClick={() => navigate('/')}
              >
                <Home className="w-4 h-4" />
                Return to Home
              </Button>
              <Button 
                variant="secondary" 
                className="flex items-center gap-2 bg-gray-100"
                onClick={() => navigate('/ai-choice-filling')}
              >
                Explore Other Reports
                <ChevronRight className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default PaymentSuccessPage;
