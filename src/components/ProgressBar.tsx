
import React, { useEffect, useState } from 'react';
import { Progress } from '@/components/ui/progress';

const ProgressBar = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      const currentProgress = (window.scrollY / totalHeight) * 100;
      setProgress(Math.min(currentProgress, 100));
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="fixed top-0 left-0 w-full z-50">
      <Progress value={progress} className="h-1 rounded-none bg-transparent" />
      <style jsx>{`
        .progress-indicator {
          background: linear-gradient(90deg, #0d9488, #06d4b8);
        }
      `}</style>
    </div>
  );
};

export default ProgressBar;
