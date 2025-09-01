import React, { useState, useRef, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface SlideData {
  image: string;
  alt: string;
  title: string;
  description: string;
}

interface SliderProps {
  children?: React.ReactNode;
  slides?: SlideData[];
  autoplay?: boolean;
  autoplayInterval?: number;
  showArrows?: boolean;
  showDots?: boolean;
  className?: string;
}

export const Slider = ({
  children,
  slides,
  autoplay = false,
  autoplayInterval = 5000,
  showArrows = true,
  showDots = true,
  className = "",
}: SliderProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  const sliderRef = useRef<HTMLDivElement>(null);

  // Handle both slides prop and children
  let slidesContent: React.ReactNode[] = [];
  let totalSlides = 0;

  if (slides && slides.length > 0) {
    // Use slides prop data
    totalSlides = slides.length;
    slidesContent = slides.map((slide, index) => (
      <div key={index} className="relative w-full h-full min-h-[400px] flex-shrink-0">
        <img 
          src={slide.image} 
          alt={slide.alt}
          className="w-full h-full object-cover rounded-lg"
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent rounded-lg"></div>
        <div className="absolute bottom-6 left-6 text-white z-10">
          <h3 className="text-2xl font-bold mb-2">{slide.title}</h3>
          <p className="text-gray-200">{slide.description}</p>
        </div>
      </div>
    ));
  } else if (children) {
    // Use children approach
    const childrenArray = React.Children.toArray(children).filter(child => 
      React.isValidElement(child) && typeof child.type !== 'string'
    );
    totalSlides = childrenArray.length;
    slidesContent = childrenArray;
  }

  console.log('Total slides:', totalSlides);
  console.log('Using slides prop:', !!slides);
  console.log('Current slide index:', currentIndex);
  console.log('Slides content length:', slidesContent.length);

  // Auto-play functionality
  useEffect(() => {
    if (autoplay && totalSlides > 1) {
      intervalRef.current = setInterval(() => {
        nextSlide();
      }, autoplayInterval);

      return () => {
        if (intervalRef.current) {
          clearInterval(intervalRef.current);
        }
      };
    }
  }, [autoplay, autoplayInterval, totalSlides]);

  const nextSlide = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentIndex((prevIndex) => 
      prevIndex === totalSlides - 1 ? 0 : prevIndex + 1
    );
    setTimeout(() => setIsTransitioning(false), 300);
  };

  const prevSlide = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? totalSlides - 1 : prevIndex - 1
    );
    setTimeout(() => setIsTransitioning(false), 300);
  };

  const goToSlide = (index: number) => {
    if (isTransitioning || index === currentIndex) return;
    setIsTransitioning(true);
    setCurrentIndex(index);
    setTimeout(() => setIsTransitioning(false), 300);
  };

  // Pause autoplay on hover
  const handleMouseEnter = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
  };

  const handleMouseLeave = () => {
    if (autoplay && totalSlides > 1) {
      intervalRef.current = setInterval(() => {
        nextSlide();
      }, autoplayInterval);
    }
  };

  if (totalSlides === 0) {
    return <div className="text-center text-gray-500">No slides to display</div>;
  }

  return (
    <div 
      className={`relative overflow-hidden rounded-lg bg-gray-100 w-full max-w-4xl mx-auto ${className}`}
      style={{ height: '400px' }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      ref={sliderRef}
    >
      {/* Slides Container */}
      <div 
        className="relative w-full h-full"
      >
        {slides && slides.map((slide, index) => (
          <div 
            key={index}
            className={`absolute top-0 left-0 w-full h-full transition-opacity duration-300 ${
              index === currentIndex ? 'opacity-100 z-10' : 'opacity-0 z-0'
            }`}
          >
            <img 
              src={slide.image} 
              alt={slide.alt}
              className="w-full h-full object-cover rounded-lg"
              loading="eager"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent rounded-lg"></div>
            <div className="absolute bottom-6 left-6 text-white z-20">
              <h3 className="text-2xl font-bold mb-2">{slide.title}</h3>
              <p className="text-gray-200">{slide.description}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation Arrows */}
      {showArrows && totalSlides > 1 && (
        <>
          <button
            onClick={prevSlide}
            disabled={isTransitioning}
            className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-gray-800 p-2 rounded-full shadow-lg transition-all duration-200 hover:scale-110 disabled:opacity-50 disabled:cursor-not-allowed"
            aria-label="Previous slide"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            onClick={nextSlide}
            disabled={isTransitioning}
            className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-gray-800 p-2 rounded-full shadow-lg transition-all duration-200 hover:scale-110 disabled:opacity-50 disabled:cursor-not-allowed"
            aria-label="Next slide"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </>
      )}

      {/* Dot Indicators */}
      {showDots && totalSlides > 1 && (
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
          {Array.from({ length: totalSlides }).map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              disabled={isTransitioning}
              className={`w-2 h-2 rounded-full transition-all duration-200 disabled:cursor-not-allowed ${
                index === currentIndex
                  ? 'bg-white scale-125'
                  : 'bg-white/50 hover:bg-white/75'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      )}

      {/* Slide Counter */}
      <div className="absolute top-4 right-4 bg-black/50 text-white px-3 py-1 rounded-full text-sm font-medium">
        {currentIndex + 1} / {totalSlides}
      </div>
    </div>
  );
};

// Slide component for better structure
export const Slide: React.FC<{ 
  children: React.ReactNode;
  className?: string;
}> = ({ children, className = "" }) => {
  return (
    <div className={`w-full h-full flex items-center justify-center min-h-[400px] ${className}`}>
      {children}
    </div>
  );
};

export default Slider;