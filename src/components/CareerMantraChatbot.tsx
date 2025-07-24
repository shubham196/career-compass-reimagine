import React, { useState, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { Send, Bot, User } from "lucide-react";
import CollegeInfoCard from "./CollegeInfoCard";

interface Message {
  id: string;
  text: string;
  isBot: boolean;
  timestamp: Date;
  type?: 'text' | 'college-card';
  collegeData?: {
    name: string;
    location: string;
    state: string;
    totalBranches: number;
    topBranches: {
      name: string;
      ranks: {
        year: string;
        rank: string;
      }[];
    }[];
    establishedYear?: number;
  };
}

const CareerMantraChatbot = () => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      text: "👋 Hi there! I'm **Mantrana AI**, your personal career guide.",
      isBot: true,
      timestamp: new Date(),
    },
    {
      id: "2", 
      text: "✨ Let's find the right path for your future, **together**!",
      isBot: true,
      timestamp: new Date(),
    },
    {
      id: "3",
      text: "🔹 What **excites** you the most?\nScience experiments, designing creative projects, solving logical puzzles, or leading teams?",
      isBot: true,
      timestamp: new Date(),
    },
    {
      id: "4",
      text: "🔹 Do you prefer working with **numbers and logic**, exploring **stories and cultures**, or building **innovative solutions**?",
      isBot: true,
      timestamp: new Date(),
    },
    {
      id: "5",
      text: "🔹 Think about your **long-term dreams**.\nWhich careers align with your passion and lifestyle goals?",
      isBot: true,
      timestamp: new Date(),
    },
    {
      id: "6",
      text: "🌱 Choosing the right stream and career path now will lay a **strong foundation** for your success. Remember, your **interest** is the key. The best career is one that makes you feel **energised** and **motivated** every day.",
      isBot: true,
      timestamp: new Date(),
    },
    {
      id: "7",
      text: "💭 So, tell me – what careers or subjects have caught your attention so far? Let's explore them and make this decision an **exciting journey** for you! 🚀😊",
      isBot: true,
      timestamp: new Date(),
    },
  ]);
  
  const [inputValue, setInputValue] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const formatMessage = (text: string) => {
    // Convert **text** to bold
    const boldText = text.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
    // Convert line breaks
    const withBreaks = boldText.replace(/\n/g, '<br>');
    return withBreaks;
  };

  const handleSendMessage = async () => {
    if (!inputValue.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      text: inputValue,
      isBot: false,
      timestamp: new Date(),
    };

    setMessages(prev => [...prev, userMessage]);
    setInputValue("");
    setIsTyping(true);

    // Simulate AI response with college card for demonstration
    setTimeout(() => {
      const textResponse: Message = {
        id: (Date.now() + 1).toString(),
        text: "Great! 🎯 Based on your interests in **engineering and technology**, here's a college that might be perfect for you:",
        isBot: true,
        timestamp: new Date(),
      };

      const collegeResponse: Message = {
        id: (Date.now() + 2).toString(),
        text: "",
        isBot: true,
        timestamp: new Date(),
        type: 'college-card',
        collegeData: {
          name: "COEP Technological University",
          location: "Pune",
          state: "Maharashtra",
          totalBranches: 9,
          establishedYear: 1854,
          topBranches: [
            {
              name: "Computer Engineering",
              ranks: [
                { year: "2022", rank: "86" },
                { year: "2023", rank: "98" },
                { year: "2024", rank: "117" }
              ]
            },
            {
              name: "Robotics and Artificial Intelligence",
              ranks: [
                { year: "2022", rank: "N/A" },
                { year: "2023", rank: "514" },
                { year: "2024", rank: "369" }
              ]
            }
          ]
        }
      };

      setMessages(prev => [...prev, textResponse, collegeResponse]);
      setIsTyping(false);
    }, 1500);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-xl overflow-hidden">
      {/* Header */}
      <div className="bg-gradient-to-r from-purple-600 to-purple-700 p-6">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center">
            <Bot className="w-6 h-6 text-white" />
          </div>
          <div>
            <h3 className="text-xl font-bold text-white">Mantrana AI</h3>
            <p className="text-purple-100 text-sm">Your Personal Career Guide</p>
          </div>
        </div>
      </div>

      {/* Messages Container */}
      <div className="h-96 overflow-y-auto p-6 space-y-4 bg-gray-50">
        {messages.map((message) => (
          <div
            key={message.id}
            className={`flex gap-3 ${message.isBot ? "justify-start" : "justify-end"}`}
          >
            {message.isBot && (
              <div className="w-8 h-8 rounded-full bg-purple-100 flex items-center justify-center flex-shrink-0 mt-1">
                <Bot className="w-4 h-4 text-purple-600" />
              </div>
            )}
            
            {message.type === 'college-card' && message.collegeData ? (
              <div className="max-w-md w-full">
                <CollegeInfoCard 
                  college={message.collegeData} 
                  onViewMore={() => console.log('View more clicked')}
                />
                <div className="text-xs text-gray-500 opacity-70 mt-2 text-center">
                  {message.timestamp.toLocaleTimeString([], {
                    hour: "2-digit",
                    minute: "2-digit",
                  })}
                </div>
              </div>
            ) : (
              <div
                className={`max-w-xs lg:max-w-md px-4 py-3 rounded-2xl ${
                  message.isBot
                    ? "bg-white border border-gray-200 text-gray-800"
                    : "bg-purple-600 text-white"
                }`}
              >
                <div
                  className="text-sm leading-relaxed"
                  dangerouslySetInnerHTML={{
                    __html: formatMessage(message.text),
                  }}
                />
                <div
                  className={`text-xs mt-2 opacity-70 ${
                    message.isBot ? "text-gray-500" : "text-purple-100"
                  }`}
                >
                  {message.timestamp.toLocaleTimeString([], {
                    hour: "2-digit",
                    minute: "2-digit",
                  })}
                </div>
              </div>
            )}

            {!message.isBot && (
              <div className="w-8 h-8 rounded-full bg-purple-600 flex items-center justify-center flex-shrink-0 mt-1">
                <User className="w-4 h-4 text-white" />
              </div>
            )}
          </div>
        ))}

        {isTyping && (
          <div className="flex gap-3 justify-start">
            <div className="w-8 h-8 rounded-full bg-purple-100 flex items-center justify-center flex-shrink-0 mt-1">
              <Bot className="w-4 h-4 text-purple-600" />
            </div>
            <div className="bg-white border border-gray-200 px-4 py-3 rounded-2xl">
              <div className="flex space-x-1">
                <div className="w-2 h-2 bg-purple-400 rounded-full animate-bounce"></div>
                <div className="w-2 h-2 bg-purple-400 rounded-full animate-bounce" style={{ animationDelay: "0.1s" }}></div>
                <div className="w-2 h-2 bg-purple-400 rounded-full animate-bounce" style={{ animationDelay: "0.2s" }}></div>
              </div>
            </div>
          </div>
        )}
        
        <div ref={messagesEndRef} />
      </div>

      {/* Input Area */}
      <div className="p-6 bg-white border-t border-gray-200">
        <div className="flex gap-3">
          <Input
            ref={inputRef}
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onKeyPress={handleKeyPress}
            placeholder="Type your career question or goals here…"
            className="flex-1 rounded-full border-gray-300 focus:border-purple-500 focus:ring-purple-500"
            maxLength={500}
          />
          <Button
            onClick={handleSendMessage}
            disabled={!inputValue.trim() || isTyping}
            className="rounded-full bg-purple-600 hover:bg-purple-700 px-6"
          >
            <Send className="w-4 h-4" />
          </Button>
        </div>
        <p className="text-xs text-gray-500 mt-2 text-center">
          Ask me anything about career paths, subjects, or your future goals! ✨
        </p>
      </div>
    </div>
  );
};

export default CareerMantraChatbot;