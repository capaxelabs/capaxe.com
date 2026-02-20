import React from 'react';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";

interface SlideData {
  image: string;
  alt: string;
  title: string;
  description: string;
}

interface ProjectCarouselProps {
  slides: SlideData[];
  className?: string;
}

const ProjectCarousel: React.FC<ProjectCarouselProps> = ({ slides, className = "" }) => {
  return (
    <div className={`w-full max-w-4xl mx-auto ${className}`}>
      <Carousel className="w-full">
        <CarouselContent>
          {slides.map((slide, index) => (
            <CarouselItem key={index}>
              <div className="relative h-[400px] rounded-lg overflow-hidden">
                <img 
                  src={slide.image} 
                  alt={slide.alt}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute bottom-6 left-6 text-foreground z-10">
                  <h3 className="text-2xl font-bold mb-2">{slide.title}</h3>
                  <p className="text-gray-200">{slide.description}</p>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
};

export default ProjectCarousel;