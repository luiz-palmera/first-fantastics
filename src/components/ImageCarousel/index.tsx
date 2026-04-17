import React, { useState, useEffect, useCallback } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import {
  CarouselContainer,
  Track,
  Slide,
  ControlButton,
  IndicatorsContainer,
  Indicator,
} from './styled';

export interface ImageCarouselItem {
  id?: string | number;
  src: string;
  alt?: string;
}

export interface ImageCarouselProps {
  images: ImageCarouselItem[];
  width?: string;
  height?: string;
  autoPlay?: boolean;
  autoPlayInterval?: number;
}

export const ImageCarousel: React.FC<ImageCarouselProps> = ({
  images,
  width,
  height,
  autoPlay = false,
  autoPlayInterval = 5000,
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToNext = useCallback(() => {
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  }, [images.length]);

  const goToPrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  useEffect(() => {
    let timer: number;
    if (autoPlay && images.length > 1) {
      timer = window.setInterval(goToNext, autoPlayInterval);
    }
    return () => {
      if (timer) window.clearInterval(timer);
    };
  }, [autoPlay, autoPlayInterval, goToNext, images.length]);

  if (!images || images.length === 0) {
    return (
      <CarouselContainer $width={width} $height={height}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100%', color: '#666', fontFamily: 'sans-serif' }}>
          No images to display
        </div>
      </CarouselContainer>
    );
  }

  return (
    <CarouselContainer $width={width} $height={height}>
      <Track $currentIndex={currentIndex}>
        {images.map((image, idx) => (
          <Slide key={image.id ?? idx}>
            <img src={image.src} alt={image.alt || `Carousel slide ${idx + 1}`} />
          </Slide>
        ))}
      </Track>

      {images.length > 1 && (
        <>
          <ControlButton $position="left" onClick={goToPrev} aria-label="Previous slide">
            <ChevronLeft size={24} />
          </ControlButton>
          
          <ControlButton $position="right" onClick={goToNext} aria-label="Next slide">
            <ChevronRight size={24} />
          </ControlButton>

          <IndicatorsContainer>
            {images.map((_, idx) => (
              <Indicator
                key={idx}
                $active={idx === currentIndex}
                onClick={() => goToSlide(idx)}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </IndicatorsContainer>
        </>
      )}
    </CarouselContainer>
  );
};
