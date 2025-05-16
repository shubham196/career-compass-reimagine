
import React from "react";

const AIChoiceIllustration = () => {
  return (
    <svg 
      viewBox="0 0 500 400" 
      xmlns="http://www.w3.org/2000/svg"
      className="w-full h-full"
    >
      <defs>
        <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" style={{ stopColor: "#9b87f5", stopOpacity: 1 }} />
          <stop offset="100%" style={{ stopColor: "#6366f1", stopOpacity: 1 }} />
        </linearGradient>
        <linearGradient id="grad2" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" style={{ stopColor: "#3b82f6", stopOpacity: 0.8 }} />
          <stop offset="100%" style={{ stopColor: "#2563eb", stopOpacity: 0.9 }} />
        </linearGradient>
      </defs>

      {/* Brain container */}
      <circle cx="250" cy="200" r="120" fill="#f3f4f6" />
      
      {/* Robot brain with circuits */}
      <g transform="translate(175, 120) scale(0.8)">
        <path 
          d="M150,50 C220,50 220,150 150,150 C80,150 80,50 150,50 Z" 
          fill="url(#grad1)" 
          stroke="#4f46e5" 
          strokeWidth="2"
        />
        
        {/* Brain lobes and details */}
        <path 
          d="M120,70 C90,90 90,110 120,130" 
          fill="none" 
          stroke="#8b5cf6" 
          strokeWidth="3"
        />
        <path 
          d="M180,70 C210,90 210,110 180,130" 
          fill="none" 
          stroke="#8b5cf6" 
          strokeWidth="3"
        />
        
        {/* Middle line */}
        <line 
          x1="150" y1="50" 
          x2="150" y2="150" 
          stroke="#4f46e5" 
          strokeWidth="2" 
          strokeDasharray="5,5"
        />
        
        {/* Circuit lines */}
        {[1, 2, 3, 4, 5].map((i) => (
          <React.Fragment key={i}>
            <circle 
              cx={110 + (i*15)} 
              cy={60 + (i*15) % 30} 
              r="3" 
              fill="#f472b6" 
            />
            <circle 
              cx={170 - (i*10) % 40} 
              cy={70 + (i*12) % 40} 
              r="3" 
              fill="#f472b6" 
            />
          </React.Fragment>
        ))}
      </g>
      
      {/* Data stream lines */}
      {[1, 2, 3, 4, 5, 6].map(i => (
        <path
          key={`data-${i}`}
          d={`M${100 + (i*40)} 90 Q ${120 + (i*30)} ${140 - (i*10)} ${140 + (i*20)} 160`}
          fill="none"
          stroke={i % 2 ? "#8b5cf6" : "#f472b6"}
          strokeWidth="2"
          strokeDasharray="3,3"
          className={`animate-pulse-slow`}
          style={{ animationDelay: `${i * 0.2}s` }}
        />
      ))}
      
      {/* Tech dots */}
      {[...Array(20)].map((_, i) => (
        <circle
          key={`dot-${i}`}
          cx={120 + Math.random() * 240}
          cy={120 + Math.random() * 160}
          r={1 + Math.random() * 3}
          fill={i % 3 === 0 ? "#f472b6" : i % 3 === 1 ? "#8b5cf6" : "#60a5fa"}
          className="animate-pulse-slow"
          style={{ animationDelay: `${i * 0.1}s` }}
        />
      ))}
      
      {/* College icons */}
      <g transform="translate(70, 280) scale(0.7)">
        <rect x="0" y="0" width="60" height="80" fill="url(#grad2)" rx="5" />
        <rect x="10" y="20" width="40" height="15" fill="white" rx="2" />
        <rect x="10" y="45" width="40" height="15" fill="white" rx="2" />
        <rect x="20" y="-15" width="20" height="15" fill="#f472b6" />
      </g>
      
      <g transform="translate(340, 280) scale(0.7)">
        <rect x="0" y="0" width="60" height="80" fill="url(#grad2)" rx="5" />
        <rect x="10" y="20" width="40" height="15" fill="white" rx="2" />
        <rect x="10" y="45" width="40" height="15" fill="white" rx="2" />
        <rect x="20" y="-15" width="20" height="15" fill="#f472b6" />
      </g>
      
      {/* Light beams */}
      <path 
        d="M250,200 L120,300" 
        stroke="#8b5cf6" 
        strokeWidth="3" 
        strokeDasharray="5,5" 
        opacity="0.7"
        className="animate-pulse-slow"
      />
      <path 
        d="M250,200 L380,300" 
        stroke="#8b5cf6" 
        strokeWidth="3" 
        strokeDasharray="5,5" 
        opacity="0.7"
        className="animate-pulse-slow"
        style={{ animationDelay: "0.5s" }}
      />
    </svg>
  );
};

export default AIChoiceIllustration;
