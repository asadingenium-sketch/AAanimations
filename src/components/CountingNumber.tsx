import React, { useEffect, useState, useRef } from 'react';

interface CountingNumberProps {
  end: number;
  suffix?: string;
  prefix?: string;
  duration?: number; // in milliseconds
  delay?: number; // in milliseconds
  className?: string;
}

export const CountingNumber: React.FC<CountingNumberProps> = ({
  end,
  suffix = '',
  prefix = '',
  duration = 2000,
  delay = 150,
  className = '',
}) => {
  const [count, setCount] = useState(0);
  const elementRef = useRef<HTMLSpanElement>(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    // Check prefers-reduced-motion
    if (typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setCount(end);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;

          const startTime = performance.now() + delay;
          const animate = (currentTime: number) => {
            if (currentTime < startTime) {
              requestAnimationFrame(animate);
              return;
            }

            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / duration, 1);
            // Ease-out cubic: 1 - (1 - t)^3
            const easeProgress = 1 - Math.pow(1 - progress, 3);
            const currentVal = Math.round(easeProgress * end);

            setCount(currentVal);

            if (progress < 1) {
              requestAnimationFrame(animate);
            } else {
              setCount(end);
            }
          };

          requestAnimationFrame(animate);
        }
      },
      { threshold: 0.15 }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, [end, duration, delay]);

  return (
    <span ref={elementRef} className={className}>
      {prefix}
      {count.toLocaleString()}
      {suffix}
    </span>
  );
};
