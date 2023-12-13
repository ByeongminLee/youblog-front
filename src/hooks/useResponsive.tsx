'use client';
import { useState, useEffect, useCallback } from 'react';

const MOBILE_SIZE = 768;

const useResponsive = () => {
  const [isMobile, setIsMobile] = useState(false);

  const handleResize = useCallback(() => {
    const windowWidth = window.innerWidth;
    setIsMobile(windowWidth < MOBILE_SIZE);
  }, []);

  useEffect(() => {
    handleResize();

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [handleResize]);

  return { isMobile };
};

export default useResponsive;
