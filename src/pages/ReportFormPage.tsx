
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { 
  FileText, ChevronLeft, Check, ArrowRight, Calculator
} from "lucide-react";

const ReportFormPage = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    rank: "",
    percentile: "",
    round: "1",
    category: "",
    seatType: "",
    homeUniversity: "",
    preferredUniversity: "",
    gender: "male",
    disability: "no"
  });

  const handleChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    navigate('/payment-page', { state: { formData, reportType: "JEE Main AI Choice Filling Report" } });
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />

      <div className="py-4 px-4 max-w-7xl mx-auto">
        <Button 
          variant="outline" 
          onClick={() => navigate('/ai-choice-filling')}
          className="mb-6 flex items-center gap-1"
        >
          <ChevronLeft className="w-4 h-4" />
          <span>Back</span>
        </Button>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
          {/* Left Column - Content about the report */}
          <div className="md:col-span-3">
            <h1 className="text-4xl font-bold mb-6 text-theme-secondary">
              JEE Main 2025 College Predictor
            </h1>
            <p className="text-lg text-gray-700 mb-6">
              Predict your admission chances at top government & private B.Tech colleges based on your JEE Main rank.
            </p>

            <div className="bg-white rounded-xl shadow-md p-6 mb-8">
              <h2 className="text-xl font-semibold mb-4 text-theme-secondary">What You'll Get:</h2>
              
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="mt-1 bg-theme-primary/10 p-1.5 rounded-full">
                    <Check className="w-4 h-4 text-theme-primary" />
                  </div>
                  <div>
                    <p className="font-medium text-gray-800">Try your luck in 13 counsellings</p>
                    <p className="text-sm text-gray-600">Explore all admission opportunities across India</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <div className="mt-1 bg-theme-primary/10 p-1.5 rounded-full">
                    <Check className="w-4 h-4 text-theme-primary" />
                  </div>
                  <div>
                    <p className="font-medium text-gray-800">Making choice filling of all colleges and courses easier</p>
                    <p className="text-sm text-gray-600">Step-by-step strategy for filling choices in the right order</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <div className="mt-1 bg-theme-primary/10 p-1.5 rounded-full">
                    <Check className="w-4 h-4 text-theme-primary" />
                  </div>
                  <div>
                    <p className="font-medium text-gray-800">Check cut-off trend for top colleges and courses</p>
                    <p className="text-sm text-gray-600">5-year analysis of closing ranks for accurate predictions</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-theme-gradient rounded-xl shadow-md p-6 text-white">
              <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
                <FileText className="w-5 h-5" />
                What's in Your AI Report
              </h2>
              
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <div className="mt-1 bg-white/20 p-1 rounded-full">
                    <Check className="w-3 h-3 text-white" />
                  </div>
                  <span>Analyse and identify the best college choices based on your JEE Main Rank using advanced algorithms</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="mt-1 bg-white/20 p-1 rounded-full">
                    <Check className="w-3 h-3 text-white" />
                  </div>
                  <span>Check previous year JEE Main cut-offs for colleges & courses through different seat types and quotas</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="mt-1 bg-white/20 p-1 rounded-full">
                    <Check className="w-3 h-3 text-white" />
                  </div>
                  <span>Know top colleges like NITs/IIITs/GFTIs based on JEE Main ranks</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="mt-1 bg-white/20 p-1 rounded-full">
                    <Check className="w-3 h-3 text-white" />
                  </div>
                  <span>Round-by-round strategy for maximizing your college prospects</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Right Column - Form */}
          <div className="md:col-span-2">
            <div className="bg-white rounded-xl shadow-md overflow-hidden sticky top-4">
              <div className="p-6 bg-purple-50 border-b border-purple-100">
                <h2 className="text-xl font-semibold text-theme-secondary">Enter Details</h2>
              </div>
              
              <form onSubmit={handleSubmit} className="p-6 space-y-5 max-h-[70vh] overflow-y-auto">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="rank">Enter Rank</Label>
                    <Input 
                      id="rank" 
                      type="text" 
                      placeholder="e.g., 15000" 
                      value={formData.rank}
                      onChange={(e) => handleChange('rank', e.target.value)}
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="percentile">
                      Enter Percentile <span className="text-purple-500">*</span>
                    </Label>
                    <Input 
                      id="percentile" 
                      type="text" 
                      placeholder="e.g., 98.5" 
                      value={formData.percentile}
                      onChange={(e) => handleChange('percentile', e.target.value)}
                      required
                    />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="round">Round</Label>
                  <Select 
                    value={formData.round} 
                    onValueChange={(value) => handleChange('round', value)}
                  >
                    <SelectTrigger id="round">
                      <SelectValue placeholder="Select Round" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="1">Round 1</SelectItem>
                      <SelectItem value="2">Round 2</SelectItem>
                      <SelectItem value="3">Round 3</SelectItem>
                      <SelectItem value="4">Round 4</SelectItem>
                      <SelectItem value="5">Round 5</SelectItem>
                      <SelectItem value="6">Round 6</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="category">
                    Category <span className="text-purple-500">*</span>
                  </Label>
                  <Select 
                    value={formData.category} 
                    onValueChange={(value) => handleChange('category', value)}
                    required
                  >
                    <SelectTrigger id="category">
                      <SelectValue placeholder="Select Category" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="general">General</SelectItem>
                      <SelectItem value="obc">OBC-NCL</SelectItem>
                      <SelectItem value="sc">SC</SelectItem>
                      <SelectItem value="st">ST</SelectItem>
                      <SelectItem value="ews">EWS</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="seatType">Select Seat Type</Label>
                  <Select 
                    value={formData.seatType} 
                    onValueChange={(value) => handleChange('seatType', value)}
                  >
                    <SelectTrigger id="seatType">
                      <SelectValue placeholder="Select Seat Type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="homeState">Home State</SelectItem>
                      <SelectItem value="otherState">Other State</SelectItem>
                      <SelectItem value="all">All India</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="homeUniversity">
                    Select Home University <span className="text-purple-500">*</span>
                  </Label>
                  <Select 
                    value={formData.homeUniversity} 
                    onValueChange={(value) => handleChange('homeUniversity', value)}
                    required
                  >
                    <SelectTrigger id="homeUniversity">
                      <SelectValue placeholder="Select Home University" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="delhi">Delhi</SelectItem>
                      <SelectItem value="maharashtra">Maharashtra</SelectItem>
                      <SelectItem value="karnataka">Karnataka</SelectItem>
                      <SelectItem value="tamil-nadu">Tamil Nadu</SelectItem>
                      <SelectItem value="uttar-pradesh">Uttar Pradesh</SelectItem>
                      <SelectItem value="west-bengal">West Bengal</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="preferredUniversity">Select Preferred University</Label>
                  <Select 
                    value={formData.preferredUniversity} 
                    onValueChange={(value) => handleChange('preferredUniversity', value)}
                  >
                    <SelectTrigger id="preferredUniversity">
                      <SelectValue placeholder="Select Preferred University" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="nit-trichy">NIT Trichy</SelectItem>
                      <SelectItem value="nit-surathkal">NIT Surathkal</SelectItem>
                      <SelectItem value="nit-warangal">NIT Warangal</SelectItem>
                      <SelectItem value="iiit-hyderabad">IIIT Hyderabad</SelectItem>
                      <SelectItem value="iiit-delhi">IIIT Delhi</SelectItem>
                      <SelectItem value="bit-mesra">BIT Mesra</SelectItem>
                      <SelectItem value="no-preference">No Preference</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                
                <div className="space-y-3">
                  <div className="flex items-center gap-8">
                    <Label>Gender <span className="text-purple-500">*</span></Label>
                    <RadioGroup 
                      className="flex gap-4" 
                      defaultValue="male"
                      value={formData.gender}
                      onValueChange={(value) => handleChange('gender', value)}
                    >
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="male" id="male" />
                        <Label htmlFor="male">Male</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="female" id="female" />
                        <Label htmlFor="female">Female</Label>
                      </div>
                    </RadioGroup>
                  </div>
                  
                  <div className="flex items-center gap-8">
                    <Label>Disability Type <span className="text-purple-500">*</span></Label>
                    <RadioGroup 
                      className="flex gap-4"
                      defaultValue="no"
                      value={formData.disability}
                      onValueChange={(value) => handleChange('disability', value)}
                    >
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="yes" id="yes" />
                        <Label htmlFor="yes">Yes</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="no" id="no" />
                        <Label htmlFor="no">No</Label>
                      </div>
                    </RadioGroup>
                  </div>
                </div>
                
                <Button 
                  type="submit" 
                  className="w-full bg-theme-gradient hover:opacity-90 py-6 text-white font-medium text-lg flex items-center justify-center gap-2"
                >
                  <Calculator className="w-5 h-5" />
                  Predict My College
                  <ArrowRight className="w-4 h-4 ml-1" />
                </Button>
              </form>
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

export default ReportFormPage;
