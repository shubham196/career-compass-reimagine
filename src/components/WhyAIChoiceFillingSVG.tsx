
import React from "react";

const WhyAIChoiceFillingSVG: React.FC = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 800 600"
      className="w-full h-full"
    >
      {/* Background elements */}
      <circle cx="400" cy="300" r="180" fill="#f3e8ff" opacity="0.6" />
      <circle cx="480" cy="220" r="100" fill="#f0ebfe" opacity="0.4" />
      
      {/* Brain graphic with data points */}
      <g transform="translate(270,170) scale(0.8)">
        {/* Brain outline */}
        <path
          d="M320,100 C390,60 430,120 450,160 C480,130 520,140 540,170 C560,130 600,120 630,160 C650,150 680,190 660,230 C690,250 690,300 660,330 C680,360 650,410 620,400 C610,440 580,450 550,430 C530,460 490,470 460,430 C440,455 400,455 380,430 C350,450 320,440 300,410 C260,430 220,400 230,360 C200,340 200,290 230,270 C210,240 230,190 260,180 C270,140 300,120 320,100"
          fill="#f0f"
          opacity="0.15"
          stroke="#BB53CC"
          strokeWidth="3"
        />
        
        {/* Data connections */}
        {[...Array(20)].map((_, i) => (
          <circle
            key={`data-point-${i}`}
            cx={300 + Math.random() * 250}
            cy={150 + Math.random() * 200}
            r={2 + Math.random() * 3}
            fill="#8E24AA"
            opacity={0.7 + Math.random() * 0.3}
          />
        ))}
        
        {/* Connection lines */}
        {[...Array(30)].map((_, i) => {
          const x1 = 300 + Math.random() * 250;
          const y1 = 150 + Math.random() * 200;
          const x2 = 300 + Math.random() * 250;
          const y2 = 150 + Math.random() * 200;
          return (
            <line
              key={`connection-${i}`}
              x1={x1}
              y1={y1}
              x2={x2}
              y2={y2}
              stroke="#BB53CC"
              strokeWidth="1"
              opacity="0.3"
            />
          );
        })}
        
        {/* Pulsing circles for animation */}
        <circle cx="400" cy="250" r="15" fill="none" stroke="#8E24AA" strokeWidth="2" opacity="0.7">
          <animate attributeName="r" values="15;25;15" dur="4s" repeatCount="indefinite" />
          <animate attributeName="opacity" values="0.7;0.2;0.7" dur="4s" repeatCount="indefinite" />
        </circle>
        <circle cx="350" cy="200" r="10" fill="none" stroke="#BB53CC" strokeWidth="2" opacity="0.5">
          <animate attributeName="r" values="10;18;10" dur="3s" repeatCount="indefinite" />
          <animate attributeName="opacity" values="0.5;0.2;0.5" dur="3s" repeatCount="indefinite" />
        </circle>
        <circle cx="450" cy="300" r="12" fill="none" stroke="#BB53CC" strokeWidth="2" opacity="0.6">
          <animate attributeName="r" values="12;20;12" dur="5s" repeatCount="indefinite" />
          <animate attributeName="opacity" values="0.6;0.3;0.6" dur="5s" repeatCount="indefinite" />
        </circle>
      </g>
      
      {/* Document/report elements */}
      <g transform="translate(450,320) rotate(-15)">
        <rect x="0" y="0" width="120" height="150" rx="5" fill="white" stroke="#BB53CC" strokeWidth="2" />
        <rect x="10" y="10" width="100" height="15" fill="#f3e8ff" rx="3" />
        <rect x="10" y="35" width="80" height="10" fill="#f3e8ff" rx="3" />
        <rect x="10" y="55" width="100" height="10" fill="#f3e8ff" rx="3" />
        <rect x="10" y="75" width="60" height="10" fill="#f3e8ff" rx="3" />
        <rect x="10" y="95" width="90" height="10" fill="#f3e8ff" rx="3" />
        <rect x="10" y="115" width="70" height="10" fill="#f3e8ff" rx="3" />
        
        {/* Animated highlight */}
        <rect x="5" y="10" width="110" height="15" fill="#BB53CC" opacity="0.2">
          <animate attributeName="y" values="10;35;55;75;95;115;10" dur="5s" repeatCount="indefinite" />
        </rect>
      </g>
      
      {/* College building silhouette */}
      <g transform="translate(180,350)">
        <rect x="20" y="0" width="120" height="100" fill="#BB53CC" opacity="0.2" />
        <rect x="0" y="-30" width="160" height="30" fill="#8E24AA" opacity="0.2" />
        <rect x="70" y="-60" width="20" height="30" fill="#BB53CC" opacity="0.2" />
        {/* Windows */}
        {[...Array(8)].map((_, i) => (
          <rect
            key={`window-${i}`}
            x={30 + (i % 4) * 30}
            y={20 + Math.floor(i / 4) * 40}
            width="15"
            height="20"
            fill="#FFF"
            opacity="0.7"
          />
        ))}
      </g>
      
      {/* Animated sparkles */}
      {[...Array(10)].map((_, i) => (
        <circle
          key={`sparkle-${i}`}
          cx={200 + Math.random() * 400}
          cy={150 + Math.random() * 300}
          r="2"
          fill="#BB53CC"
          opacity="0.8"
        >
          <animate
            attributeName="opacity"
            values="0.8;0.2;0.8"
            dur={2 + Math.random() * 3 + "s"}
            repeatCount="indefinite"
          />
        </circle>
      ))}
    </svg>
  );
};

export default WhyAIChoiceFillingSVG;
