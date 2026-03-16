import styled from 'styled-components';

export const CarouselContainer = styled.div<{ $width?: string; $height?: string }>`
  position: relative;
  width: ${({ $width }) => $width || '100%'};
  height: ${({ $height }) => $height || '400px'};
  overflow: hidden;
  background-color: #f5f5f5;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08); /* slight modern shadow */
`;

export const Track = styled.div<{ $currentIndex: number }>`
  display: flex;
  height: 100%;
  transition: transform 0.6s cubic-bezier(0.25, 1, 0.5, 1); /* smooth modern easing */
  transform: translateX(-${({ $currentIndex }) => $currentIndex * 100}%);
`;

export const Slide = styled.div`
  min-width: 100%;
  height: 100%;
  flex-shrink: 0;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
  }
`;

export const ControlButton = styled.button<{ $position: 'left' | 'right' }>`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  ${({ $position }) => ($position === 'left' ? 'left: 16px;' : 'right: 16px;')}
  opacity: 0.1;
  
  background-color: rgba(255, 255, 255, 0.85);
  backdrop-filter: blur(4px);
  border: none;
  width: 44px;
  height: 44px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  transition: all 0.2s cubic-bezier(0.25, 0.8, 0.25, 1);
  z-index: 10;
  color: #333;

  &:hover {
    background-color: rgba(255, 255, 255, 1);
    transform: translateY(-50%) scale(1.08);
    opacity: 0.8;
  }

  &:active {
    transform: translateY(-50%) scale(0.95);
  }
  
  &:focus-visible {
    outline: 2px solid #005fcc;
    outline-offset: 2px;
  }
`;

export const IndicatorsContainer = styled.div`
  position: absolute;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  gap: 8px;
  z-index: 10;
  padding: 8px 12px;
  background-color: rgba(0, 0, 0, 0.2);
  backdrop-filter: blur(4px);
`;

export const Indicator = styled.button<{ $active: boolean }>`
  width: ${({ $active }) => ($active ? '24px' : '8px')};
  height: 8px;
  background-color: ${({ $active }) => ($active ? '#ffffff' : 'rgba(255, 255, 255, 0.6)')};
  border: none;
  padding: 0;
  cursor: pointer;
  transition: all 0.3s cubic-bezier(0.25, 1, 0.5, 1);
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);

  &:hover {
    background-color: ${({ $active }) => ($active ? '#ffffff' : 'rgba(255, 255, 255, 0.9)')};
  }

  &:focus-visible {
    outline: 2px solid #ffffff;
    outline-offset: 2px;
  }
`;
