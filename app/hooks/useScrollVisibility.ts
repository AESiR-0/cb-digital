"use client"
import { useEffect, useState, useRef } from 'react';

function useScrollVisibility() {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement | null>(null);

  const handleScroll = () => {
    if (ref.current) {
      const rect = ref.current.getBoundingClientRect();
      const windowHeight = window.innerHeight || document.documentElement.clientHeight;
      if (rect.top <= windowHeight && rect.bottom >= 0) {
        setIsVisible(true);
        window.removeEventListener('scroll', handleScroll);
      }
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check visibility on mount

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return { ref, isVisible };
}

export default useScrollVisibility; 