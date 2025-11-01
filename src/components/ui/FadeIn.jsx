import { useState, useEffect, useRef } from 'react';

const useIntersectionObserver = (options) => {
  const [isIntersecting, setIsIntersecting] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsIntersecting(true);
        observer.disconnect();
      }
    }, options);

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [ref, options]);

  return [ref, isIntersecting];
};

const FadeIn = ({ children }) => {
  const [ref, isIntersecting] = useIntersectionObserver({ threshold: 0.1 });

  return (
    <div
      ref={ref}
      className={`fade-in-section ${isIntersecting ? 'is-visible' : ''}`}>
      {children}
    </div>
  );
};

export default FadeIn;
