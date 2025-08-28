import { useState, useEffect, useRef } from 'react';

interface ParallaxOptions {
  speed?: number;
  direction?: 'up' | 'down' | 'left' | 'right';
  threshold?: number;
}

export const useParallax = (options: ParallaxOptions = {}) => {
  const { speed = 0.5, direction = 'up', threshold = 0.1 } = options;
  const [offset, setOffset] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const elementRef = useRef<HTMLElement>(null);
  const rafRef = useRef<number>();

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    const updateParallax = () => {
      const rect = element.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      const elementTop = rect.top;
      const elementHeight = rect.height;

      // Check if element is in viewport
      const isInView = elementTop < windowHeight && (elementTop + elementHeight) > 0;
      setIsVisible(isInView);

      if (isInView) {
        // Calculate parallax offset based on element position
        const scrollProgress = (windowHeight - elementTop) / (windowHeight + elementHeight);
        const clampedProgress = Math.max(0, Math.min(1, scrollProgress));
        
        let parallaxOffset = 0;
        switch (direction) {
          case 'up':
            parallaxOffset = (clampedProgress - 0.5) * speed * 100;
            break;
          case 'down':
            parallaxOffset = -(clampedProgress - 0.5) * speed * 100;
            break;
          case 'left':
            parallaxOffset = (clampedProgress - 0.5) * speed * 100;
            break;
          case 'right':
            parallaxOffset = -(clampedProgress - 0.5) * speed * 100;
            break;
        }
        
        setOffset(parallaxOffset);
      }
    };

    const handleScroll = () => {
      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current);
      }
      rafRef.current = requestAnimationFrame(updateParallax);
    };

    // Initial calculation
    updateParallax();

    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', updateParallax, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', updateParallax);
      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current);
      }
    };
  }, [speed, direction, threshold]);

  const getTransform = () => {
    if (direction === 'left' || direction === 'right') {
      return `translateX(${offset}px)`;
    }
    return `translateY(${offset}px)`;
  };

  return {
    ref: elementRef,
    transform: getTransform(),
    offset,
    isVisible
  };
};

export const useMouseParallax = (intensity: number = 0.05) => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [transform, setTransform] = useState({ x: 0, y: 0 });
  const rafRef = useRef<number>();

  useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => {
      const x = (e.clientX - window.innerWidth / 2) * intensity;
      const y = (e.clientY - window.innerHeight / 2) * intensity;
      
      setMousePosition({ x: e.clientX, y: e.clientY });
      
      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current);
      }
      
      rafRef.current = requestAnimationFrame(() => {
        setTransform({ x, y });
      });
    };

    window.addEventListener('mousemove', updateMousePosition, { passive: true });

    return () => {
      window.removeEventListener('mousemove', updateMousePosition);
      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current);
      }
    };
  }, [intensity]);

  return {
    mousePosition,
    transform: `translate3d(${transform.x}px, ${transform.y}px, 0)`,
    x: transform.x,
    y: transform.y
  };
};