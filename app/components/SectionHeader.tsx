import React from 'react';

interface SectionHeaderProps {
  subtitle: string;
  title: string;
  titleClassName?: string;
}

const SectionHeader: React.FC<SectionHeaderProps> = ({ subtitle, title, titleClassName }) => {
  return (
    <div className="w-full max-w-6xl mx-auto px-4 space-y-4 text-center mb-12 md:mb-16">
      <div className="flex  px-20 items-center">
        <div className="flex-grow max-w-3xl border-t border-red-500"></div>
        <span className="flex-shrink-0 mx-4 text-red-500 text-sm font-bold tracking-widest uppercase">
          {subtitle}
        </span>
        <div className="flex-grow max-w-3xl border-t border-red-500"></div>
      </div>
      <h2 className={`text-5xl md:text-6xl font-clash font-bold text-white mt-4 ${titleClassName}`}>
        {title}
      </h2>
    </div>
  );
};

export default SectionHeader; 