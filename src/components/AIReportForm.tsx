
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "@/hooks/use-toast";

// Form schema
const formSchema = z.object({
  counsellingType: z.string().min(1, "Please select a counselling type"),
  rank: z.string().min(1, "Please enter your rank"),
  homeState: z.string().min(1, "Please select your home state"),
  casteGroup: z.string().min(1, "Please select your caste group"),
  gender: z.enum(["Male", "Female", "Other"]),
  speciallyAbled: z.enum(["Yes", "No"]),
  mobileNumber: z.string().min(10, "Please enter a valid mobile number").max(10)
});

type FormValues = z.infer<typeof formSchema>;

interface AIReportFormProps {
  examType: string;
  onSubmit?: () => void;
  onClose?: () => void;
}

const AIReportForm: React.FC<AIReportFormProps> = ({ examType, onSubmit, onClose }) => {
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      counsellingType: "",
      rank: "",
      homeState: "",
      casteGroup: "",
      gender: "Male",
      speciallyAbled: "No",
      mobileNumber: ""
    }
  });

  const handleSubmit = (data: FormValues) => {
    toast({
      title: "Report Request Submitted",
      description: `Your ${examType} AI report will be sent to you shortly.`,
    });
    
    if (onSubmit) onSubmit();
  };

  const indianStates = [
    "Andhra Pradesh", "Arunachal Pradesh", "Assam", "Bihar", "Chhattisgarh", "Goa", "Gujarat", "Haryana", 
    "Himachal Pradesh", "Jharkhand", "Karnataka", "Kerala", "Madhya Pradesh", "Maharashtra", "Manipur", 
    "Meghalaya", "Mizoram", "Nagaland", "Odisha", "Punjab", "Rajasthan", "Sikkim", "Tamil Nadu", "Telangana", 
    "Tripura", "Uttar Pradesh", "Uttarakhand", "West Bengal"
  ];

  const casteGroups = ["General", "OBC", "SC", "ST", "EWS"];
  
  return (
    <div className="bg-white p-6 rounded-lg shadow-lg max-w-md mx-auto">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-semibold">Enter {examType} Exam Details</h2>
        {onClose && (
          <Button variant="ghost" size="sm" onClick={onClose} className="text-gray-500">
            ✕
          </Button>
        )}
      </div>

      <Form {...form}>
        <form onSubmit={form.handleSubmit(handleSubmit)} className="space-y-4">
          <FormField
            control={form.control}
            name="counsellingType"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Counselling</FormLabel>
                <Select onValueChange={field.onChange} defaultValue={field.value}>
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Select counselling type" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem value="josaa">Joint Seat Allocation Authority (JoSAA Counselling)</SelectItem>
                    <SelectItem value="csab">CSAB Special Round</SelectItem>
                    <SelectItem value="state">State Level Counselling</SelectItem>
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="rank"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Category Rank (CRL/Overall Rank for GEN)</FormLabel>
                <FormControl>
                  <Input placeholder="Enter your rank" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="homeState"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Select your Home State</FormLabel>
                <Select onValueChange={field.onChange} defaultValue={field.value}>
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="-- Select --" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    {indianStates.map((state) => (
                      <SelectItem key={state} value={state.toLowerCase().replace(" ", "-")}>
                        {state}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="casteGroup"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Caste Group</FormLabel>
                <Select onValueChange={field.onChange} defaultValue={field.value}>
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="-- Select --" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    {casteGroups.map((caste) => (
                      <SelectItem key={caste} value={caste.toLowerCase()}>
                        {caste}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="gender"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Gender</FormLabel>
                <FormControl>
                  <RadioGroup
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                    className="flex gap-4"
                  >
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="Female" id="female" />
                      <FormLabel htmlFor="female" className="cursor-pointer">Female</FormLabel>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="Male" id="male" />
                      <FormLabel htmlFor="male" className="cursor-pointer">Male</FormLabel>
                    </div>
                  </RadioGroup>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="speciallyAbled"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Are you Specially Abled?</FormLabel>
                <FormControl>
                  <RadioGroup
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                    className="flex gap-4"
                  >
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="No" id="no" />
                      <FormLabel htmlFor="no" className="cursor-pointer">No</FormLabel>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="Yes" id="yes" />
                      <FormLabel htmlFor="yes" className="cursor-pointer">Yes</FormLabel>
                    </div>
                  </RadioGroup>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <div className="text-purple-600 font-medium">
            <p>College predictor report will be sent to you on:</p>
          </div>

          <FormField
            control={form.control}
            name="mobileNumber"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Enter Your Mobile Number</FormLabel>
                <FormControl>
                  <Input placeholder="10-digit mobile number" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <Button type="submit" className="w-full bg-rose-500 hover:bg-rose-600 text-white py-2">
            Predict My Colleges
          </Button>
        </form>
      </Form>
    </div>
  );
};

export default AIReportForm;
