'use client';

import { useState, useEffect } from 'react';

export function useDeviceType() {
  const [isMobile, setIsMobile] = useState(false);
  const [isLowEnd, setIsLowEnd] = useState(false);

  useEffect(() => {
    const checkDevice = () => {
      // Check if mobile
      setIsMobile(window.innerWidth < 768);

      // Check if low-end device (rough heuristic)
      const hardwareConcurrency = navigator.hardwareConcurrency || 2;
      const isSlowDevice = hardwareConcurrency < 4;
      setIsLowEnd(isSlowDevice);
    };

    checkDevice();
    window.addEventListener('resize', checkDevice);

    return () => window.removeEventListener('resize', checkDevice);
  }, []);

  return { isMobile, isLowEnd };
}
