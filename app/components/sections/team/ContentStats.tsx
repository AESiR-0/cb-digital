"use client";
import React, { useState, useRef, useEffect } from "react";
import { FaFacebookF, FaYoutube, FaInstagram } from "react-icons/fa";
import { IconType } from 'react-icons';

type StatItem = {
  value: string;
  label: string;
  icon?: IconType;
  elevation: 'base' | 'raised';
};

type MousePosition = {
  x: number;
  y: number;
  active: boolean;
};

const statsData: StatItem[] = [
  {
    value: "2",
    label: "BILLION+\nFOLLOWERS",
    elevation: 'base'
  },
  {
    value: "25",
    label: "BILLION+\nMONTHLY VIEWS",
    elevation: 'raised'
  },
  {
    value: "600M+",
    label: "Facebook\nfollowers",
    elevation: 'base'
  },
  {
    value: "1.2B+",
    label: "YouTube\nsubscribers",
    elevation: 'raised'
  },
  {
    value: "70M+",
    label: "Instagram\nfollowers",
    elevation: 'base'
  },
  {
    value: "21",
    label: "Original content\nin languages",
    elevation: 'raised'
  }
];

export default function ContentStats() {
  const [mousePosition, setMousePosition] = useState<MousePosition>({ x: 0, y: 0, active: false });
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    
    const rect = containerRef.current.getBoundingClientRect();
    setMousePosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
      active: true
    });
  };

  const handleMouseLeave = () => {
    setMousePosition(prev => ({ ...prev, active: false }));
  };

  return (
    <div className="w-full h-[80vh] py-10 px-4  bg-[#171717] flex flex-col items-center">
      <div 
        ref={containerRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        className="w-full max-w-7xl  grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 md:gap-10 relative overflow-y-hidden"
      >
        {/* Global liquid glass effect */}
        <div 
          className="absolute pointer-events-none transition-all duration-700 ease-[cubic-bezier(0.34,1.56,0.64,1)]"
          style={{
            background: 'radial-gradient(1200px circle at var(--mouse-x) var(--mouse-y), rgba(120, 119, 198, 0.15), transparent 40%)',
            transform: `translate(${mousePosition.x}px, ${mousePosition.y}px)`,
            left: -600,
            top: -600,
            width: 1200,
            height: 1200,
            opacity: mousePosition.active ? 1 : 0,
            backdropFilter: 'blur(80px)',
          }}
          style-ify={{
            '--mouse-x': `${mousePosition.x}px`,
            '--mouse-y': `${mousePosition.y}px`
          }}
        />
        {statsData.map((stat, index) => (
          <StatCard 
            key={index} 
            stat={stat} 
            mousePosition={mousePosition}
          />
        ))}
      </div>
    </div>
  );
}

function StatCard({ stat, mousePosition }: { stat: StatItem; mousePosition: MousePosition }) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);
  const [isLeaving, setIsLeaving] = useState(false);
  const [cardBounds, setCardBounds] = useState({ x: 0, y: 0, width: 0, height: 0 });
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [exitDirection, setExitDirection] = useState({ x: 0, y: 0 });

  useEffect(() => {
    if (cardRef.current) {
      const rect = cardRef.current.getBoundingClientRect();
      setCardBounds({
        x: rect.left,
        y: rect.top,
        width: rect.width,
        height: rect.height
      });
    }
  }, []);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
    const y = ((e.clientY - rect.top) / rect.height) * 2 - 1;
    setMousePos({ x, y });
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
    setIsLeaving(false);
  };

  const handleMouseLeave = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    
    const rect = cardRef.current.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
    const y = ((e.clientY - rect.top) / rect.height) * 2 - 1;
    
    setExitDirection({ x, y });
    setIsLeaving(true);
    
    setTimeout(() => {
      setIsHovered(false);
      setIsLeaving(false);
    }, 500);
  };

  const getTransform = () => {
    if (isLeaving) {
      const intensity = 20;
      return `
        perspective(1000px)
        scale(${0.95})
        translate3d(${exitDirection.x * intensity}px, ${exitDirection.y * intensity}px, 0)
        rotateY(${exitDirection.x * 10}deg)
        rotateX(${-exitDirection.y * 10}deg)
      `;
    }
    
    if (isHovered) {
      const intensity = 10;
      return `
        perspective(1000px)
        scale(${1.02})
        translate3d(${mousePos.x * intensity}px, ${mousePos.y * intensity}px, 20px)
        rotateY(${mousePos.x * 5}deg)
        rotateX(${-mousePos.y * 5}deg)
      `;
    }
    
    return 'perspective(1000px) translate3d(0, 0, 0)';
  };

  return (
    <div
      ref={cardRef}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onMouseMove={handleMouseMove}
      className={`
        aspect-square h-56 w-48 rounded-[2.5rem] flex flex-col items-center justify-center 
        ${stat.elevation === 'base' ? 'bg-[#1c1c1c]' : 'bg-[#212121]'}
        relative
        overflow-hidden
        transition-all duration-300 ease-out
        group
        hover:bg-[#252525]
      `}
      style={{
        transform: getTransform(),
        transformStyle: 'preserve-3d'
      }}
    >
      {/* Liquid glass effect */}
      <div 
        className="absolute inset-0 transition-all duration-300"
        style={{
          background: isHovered 
            ? `radial-gradient(circle at ${mousePos.x * 50 + 50}% ${mousePos.y * 50 + 50}%, rgba(225, 0, 0, 0.3), transparent 100%)`
            : '',
          opacity: isLeaving ? 0 : 1,
          backdropFilter: isHovered ? 'blur(20px)' : 'none',
        }}
      />

      {/* Content */}
      <div 
        className="relative z-10 flex flex-col items-center"
        style={{
          transform: isHovered 
            ? `translate3d(${mousePos.x * 5}px, ${mousePos.y * 5}px, 30px)`
            : isLeaving
            ? `translate3d(${exitDirection.x * 10}px, ${exitDirection.y * 10}px, 0)`
            : 'translate3d(0, 0, 0)',
          transition: 'transform 0.3s cubic-bezier(0.34, 1.56, 0.64, 1)'
        }}
      >
        <span 
          className={`
            text-[1.75rem] md:text-[2rem] lg:text-[2.75rem] font-extrabold leading-none mb-2
            transition-all duration-300
            ${isHovered ? 'text-white scale-110' : 'text-white/90 scale-100'}
          `}
        >
          {stat.value}
        </span>
        <span 
          className={`
            text-sm md:text-base font-bold text-center whitespace-pre-line
            transition-all duration-300
            ${isHovered ? 'text-white/90' : 'text-white/70'}
          `}
        >
          {stat.label}
        </span>
      </div>
    </div>
  );
} 