
import React, { useState, useEffect, useRef, ReactNode } from 'react';

interface RevealOnScrollProps {
  children: ReactNode;
  delay?: number;
  threshold?: number;
  animation?: 
    | 'fade-up' 
    | 'fade-down' 
    | 'fade-left' 
    | 'fade-right' 
    | 'zoom-in' 
    | 'zoom-out' 
    | 'flip-up' 
    | 'flip-down';
  duration?: number;
  distance?: number;
  className?: string;
}

export const RevealOnScroll: React.FC<RevealOnScrollProps> = ({
  children,
  delay = 0,
  threshold = 0.1,
  animation = 'fade-up',
  duration = 700,
  distance = 20,
  className = '',
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold }
    );
    
    if (ref.current) {
      observer.observe(ref.current);
    }
    
    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [threshold]);
  
  // Define animation styles
  const getAnimationStyles = (): React.CSSProperties => {
    const baseStyles: React.CSSProperties = {
      transition: `all ${duration}ms cubic-bezier(0.16, 1, 0.3, 1) ${delay}ms`,
    };
    
    if (!isVisible) {
      switch (animation) {
        case 'fade-up':
          return { ...baseStyles, opacity: 0, transform: `translateY(${distance}px)` };
        case 'fade-down':
          return { ...baseStyles, opacity: 0, transform: `translateY(-${distance}px)` };
        case 'fade-left':
          return { ...baseStyles, opacity: 0, transform: `translateX(${distance}px)` };
        case 'fade-right':
          return { ...baseStyles, opacity: 0, transform: `translateX(-${distance}px)` };
        case 'zoom-in':
          return { ...baseStyles, opacity: 0, transform: `scale(0.9)` };
        case 'zoom-out':
          return { ...baseStyles, opacity: 0, transform: `scale(1.1)` };
        case 'flip-up':
          return { ...baseStyles, opacity: 0, transform: `perspective(400px) rotateX(10deg)` };
        case 'flip-down':
          return { ...baseStyles, opacity: 0, transform: `perspective(400px) rotateX(-10deg)` };
        default:
          return { ...baseStyles, opacity: 0 };
      }
    }
    
    return { ...baseStyles, opacity: 1, transform: 'translate(0, 0) scale(1) rotate(0)' };
  };
  
  return (
    <div
      ref={ref}
      className={className}
      style={getAnimationStyles()}
    >
      {children}
    </div>
  );
};

interface StaggerContainerProps {
  children: ReactNode;
  staggerDelay?: number;
  className?: string;
}

export const StaggerContainer: React.FC<StaggerContainerProps> = ({
  children,
  staggerDelay = 100,
  className = '',
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );
    
    if (ref.current) {
      observer.observe(ref.current);
    }
    
    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);
  
  // Clone children and add stagger delay to each
  const staggeredChildren = React.Children.map(children, (child, index) => {
    if (React.isValidElement(child)) {
      return React.cloneElement(child, {
        style: {
          ...child.props.style,
          opacity: isVisible ? 1 : 0,
          transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
          transition: `all 500ms cubic-bezier(0.16, 1, 0.3, 1) ${index * staggerDelay}ms`,
        },
      });
    }
    return child;
  });
  
  return (
    <div ref={ref} className={className}>
      {staggeredChildren}
    </div>
  );
};

export const useScrollAnimation = (threshold = 0.1) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold }
    );
    
    if (ref.current) {
      observer.observe(ref.current);
    }
    
    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [threshold]);
  
  return [ref, isVisible] as const;
};

export const applyRevealAnimation = () => {
  useEffect(() => {
    const revealElements = document.querySelectorAll('.reveal-on-scroll');
    
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('revealed');
          }
        });
      },
      { threshold: 0.1 }
    );
    
    revealElements.forEach((el) => {
      observer.observe(el);
    });
    
    return () => {
      revealElements.forEach((el) => {
        observer.unobserve(el);
      });
    };
  }, []);
};
