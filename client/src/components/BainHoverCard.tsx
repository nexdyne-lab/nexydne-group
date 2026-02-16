import { useState } from "react";
import { ArrowRight } from "lucide-react";
import { Link } from "wouter";

export default function BainHoverCard({ 
  title, 
  description, 
  link = "#" 
}: { 
  title: string; 
  description: string; 
  link?: string;
}) {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <div 
      className="relative bg-white p-8 min-h-[280px] flex flex-col cursor-pointer overflow-hidden"
      style={{ 
        border: `1px solid ${isHovered ? 'transparent' : '#e5e7eb'}`,
        transition: 'all 0.3s ease-in-out'
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Peach color wash overlay – slides left-to-right on hover */}
      <div
        aria-hidden="true"
        style={{
          position: 'absolute',
          top: 0,
          bottom: 0,
          width: '100%',
          backgroundColor: '#FFF5ED',
          right: isHovered ? '-110%' : '100%',
          transition: 'right 1s cubic-bezier(0.83, 0, 0.31, 1)',
          zIndex: 0,
          pointerEvents: 'none',
        }}
      />

      {/* Red top border on hover */}
      <div 
        className={`absolute top-0 left-0 right-0 h-1 bg-[#CC0000] transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] ${
          isHovered ? 'opacity-100' : 'opacity-0'
        }`}
        style={{ zIndex: 1 }}
      />
      
      {/* Title - shrinks on hover */}
      <h3 
        className={`font-bold text-[#1A1A1A] leading-tight transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] ${
          isHovered ? 'text-lg mb-4' : 'text-2xl mb-auto'
        }`}
        style={{ position: 'relative', zIndex: 1 }}
      >
        {title}
      </h3>
      
      {/* Description - appears on hover */}
      <div 
        className={`transition-all duration-600 ease-[cubic-bezier(0.4,0,0.2,1)] overflow-hidden ${
          isHovered ? 'opacity-100 max-h-40 mb-6' : 'opacity-0 max-h-0'
        }`}
        style={{ position: 'relative', zIndex: 1 }}
      >
        <p className="text-gray-600 text-sm leading-relaxed">
          {description}
        </p>
      </div>
      
      {/* Read More link - always at bottom */}
      <Link href={link} className="mt-auto" style={{ position: 'relative', zIndex: 1 }}>
        <span className="inline-flex items-center text-[#CC0000] text-sm font-semibold hover:underline">
          Read More
          <ArrowRight
            className="ml-2 w-4 h-4"
            style={{
              transform: isHovered ? 'translateX(5px)' : 'translateX(0)',
              transition: 'transform 0.8s',
            }}
          />
        </span>
      </Link>
    </div>
  );
}
