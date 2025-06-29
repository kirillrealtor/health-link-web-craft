
import React, { useState, useEffect } from 'react';
import { Progress } from '@/components/ui/progress';

const SideProgressBar = () => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (window.scrollY / totalHeight) * 100;
      setScrollProgress(progress);
      
      // Show progress bar after scrolling 100px
      setIsVisible(window.scrollY > 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  if (!isVisible) return null;

  return (
    <div className="fixed right-6 top-1/2 transform -translate-y-1/2 z-50 flex flex-col items-center space-y-4">
      {/* Progress Bar */}
      <div className="relative">
        <div className="w-1 h-32 bg-gray-200 rounded-full overflow-hidden">
          <div 
            className="w-full bg-gradient-to-t from-teal-600 to-teal-400 transition-all duration-300 ease-out rounded-full"
            style={{ height: `${scrollProgress}%` }}
          />
        </div>
        
        {/* Progress Indicator */}
        <div 
          className="absolute -left-2 w-5 h-5 bg-teal-600 rounded-full border-2 border-white shadow-lg transition-all duration-300"
          style={{ 
            top: `${Math.min(scrollProgress, 100) * 0.88}%`,
            transform: 'translateY(-50%)'
          }}
        />
      </div>

      {/* Back to Top Button */}
      <button
        onClick={scrollToTop}
        className="group relative w-12 h-12 bg-white hover:bg-teal-50 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center border border-gray-200"
        aria-label="Back to top"
      >
        <svg 
          className="w-5 h-5 text-teal-600 group-hover:text-teal-700 transition-colors" 
          fill="none" 
          stroke="currentColor" 
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
        </svg>
        
        {/* Tooltip */}
        <div className="absolute right-full mr-3 px-3 py-1 bg-gray-900 text-white text-xs rounded whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-200">
          Back to top
        </div>
      </button>

      {/* Progress Percentage */}
      <div className="text-xs text-gray-500 font-medium">
        {Math.round(scrollProgress)}%
      </div>
    </div>
  );
};

export default SideProgressBar;
