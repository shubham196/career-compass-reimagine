
import React from "react";

const IqTestIllustration = () => {
  return (
    <svg 
      viewBox="0 0 600 500" 
      xmlns="http://www.w3.org/2000/svg"
      className="w-full h-full"
    >
      <defs>
        <linearGradient id="brain-grad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style={{ stopColor: "#9b87f5", stopOpacity: 1 }} />
          <stop offset="100%" style={{ stopColor: "#6366f1", stopOpacity: 0.8 }} />
        </linearGradient>
        <linearGradient id="puzzle-grad" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" style={{ stopColor: "#60a5fa", stopOpacity: 0.8 }} />
          <stop offset="100%" style={{ stopColor: "#3b82f6", stopOpacity: 0.9 }} />
        </linearGradient>
        <linearGradient id="cog-grad" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" style={{ stopColor: "#f472b6", stopOpacity: 0.8 }} />
          <stop offset="100%" style={{ stopColor: "#ec4899", stopOpacity: 0.9 }} />
        </linearGradient>
      </defs>
      
      {/* Background elements */}
      <circle cx="300" cy="250" r="180" fill="#f3f4f6" opacity="0.6" />
      
      {/* Brain */}
      <g transform="translate(220, 150) scale(1.2)">
        <path 
          d="M100,50 
             C140,20 180,30 190,60 
             C220,40 240,70 230,100
             C260,110 250,150 220,160
             C230,190 200,210 170,190
             C160,210 120,210 110,190
             C80,200 60,180 70,160
             C40,140 50,100 80,90
             C70,60 80,30 100,50Z"
          fill="url(#brain-grad)"
          stroke="#4f46e5"
          strokeWidth="2"
        />
        
        {/* Brain details */}
        <path
          d="M100,50 C110,80 110,120 100,150"
          fill="none"
          stroke="#e5e7eb"
          strokeWidth="2"
        />
        <path
          d="M150,30 C160,60 160,140 150,170"
          fill="none"
          stroke="#e5e7eb"
          strokeWidth="2"
        />
        <path
          d="M190,60 C200,80 200,120 190,140"
          fill="none"
          stroke="#e5e7eb"
          strokeWidth="2"
        />
        
        {/* Neural connections */}
        {[...Array(12)].map((_, i) => (
          <circle
            key={`neuron-${i}`}
            cx={80 + Math.random() * 120}
            cy={50 + Math.random() * 120}
            r={2 + Math.random() * 3}
            fill="#f472b6"
            className="animate-pulse-slow"
            style={{ animationDelay: `${i * 0.2}s` }}
          />
        ))}
      </g>
      
      {/* Puzzle pieces */}
      <g transform="translate(80, 170) scale(0.8)">
        <path
          d="M0,0 L60,0 L60,30 Q75,30 75,45 Q75,60 60,60 L60,90 L30,90 Q30,75 15,75 Q0,75 0,90 L-30,90 L-30,60 Q-15,60 -15,45 Q-15,30 -30,30 L-30,0 Z"
          fill="url(#puzzle-grad)"
          stroke="#2563eb"
          strokeWidth="2"
        />
      </g>
      
      <g transform="translate(450, 190) scale(0.6)">
        <path
          d="M0,0 L60,0 L60,30 Q75,30 75,45 Q75,60 60,60 L60,90 L30,90 Q30,75 15,75 Q0,75 0,90 L-30,90 L-30,60 Q-15,60 -15,45 Q-15,30 -30,30 L-30,0 Z"
          fill="#f472b6"
          stroke="#db2777"
          strokeWidth="2"
        />
      </g>
      
      {/* Math symbols */}
      <g transform="translate(120, 350)">
        <text fontSize="24" fontWeight="bold" fill="#4f46e5">2x² + 5 = 13</text>
      </g>
      
      <g transform="translate(400, 330)">
        <text fontSize="20" fontWeight="bold" fill="#4f46e5">∫ f(x) dx</text>
      </g>
      
      {/* Cogwheels for thinking process */}
      <g transform="translate(150, 280)">
        <circle cx="0" cy="0" r="25" fill="url(#cog-grad)" stroke="#db2777" strokeWidth="2" />
        {[...Array(8)].map((_, i) => {
          const angle = (i * 45) * (Math.PI / 180);
          return (
            <rect
              key={`cog1-${i}`}
              x="-5"
              y="-30"
              width="10"
              height="15"
              fill="url(#cog-grad)"
              transform={`rotate(${i * 45}) translate(0, 5)`}
            />
          );
        })}
        <circle cx="0" cy="0" r="10" fill="#f3f4f6" />
        <animateTransform
          attributeName="transform"
          type="rotate"
          from="0 150 280"
          to="360 150 280"
          dur="20s"
          repeatCount="indefinite"
        />
      </g>
      
      <g transform="translate(450, 270)">
        <circle cx="0" cy="0" r="20" fill="url(#cog-grad)" stroke="#db2777" strokeWidth="2" />
        {[...Array(8)].map((_, i) => {
          const angle = (i * 45) * (Math.PI / 180);
          return (
            <rect
              key={`cog2-${i}`}
              x="-4"
              y="-25"
              width="8"
              height="12"
              fill="url(#cog-grad)"
              transform={`rotate(${i * 45}) translate(0, 5)`}
            />
          );
        })}
        <circle cx="0" cy="0" r="8" fill="#f3f4f6" />
        <animateTransform
          attributeName="transform"
          type="rotate"
          from="360 450 270"
          to="0 450 270"
          dur="15s"
          repeatCount="indefinite"
        />
      </g>
      
      {/* Light bulb - idea */}
      <g transform="translate(300, 110)">
        <circle cx="0" cy="0" r="25" fill="#fde047" stroke="#facc15" strokeWidth="2" />
        <path
          d="M0,-5 L0,10 M-10,20 L10,20"
          stroke="#facc15"
          strokeWidth="3"
          strokeLinecap="round"
        />
        <path
          d="M-20,-15 L-15,-10 M20,-15 L15,-10 M0,-30 L0,-25 M-25,5 L-20,5 M25,5 L20,5"
          stroke="#facc15"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <animateTransform
          attributeName="transform"
          type="scale"
          values="1;1.05;1"
          dur="2s"
          repeatCount="indefinite"
        />
      </g>
    </svg>
  );
};

export default IqTestIllustration;
