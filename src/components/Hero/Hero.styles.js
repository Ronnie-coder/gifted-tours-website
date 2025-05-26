import styled from 'styled-components';
import { motion } from 'framer-motion';
// Import the image
// For this example, I'm using a URL - replace with your local image import if needed
const tableMountainImage = 'https://images.unsplash.com/photo-1580060839134-75a5edca2e99?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80';

export const Wrapper = styled.div`
  min-height: 90vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 2rem;
  position: relative;
  background-image: url(${tableMountainImage});
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
  color: white;
  overflow: hidden;

  @media (max-width: 768px) {
    background-attachment: scroll;
    min-height: 80vh;
    padding: 1rem;
  }
`;

export const BackgroundOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(
    to bottom,
    rgba(0, 0, 0, 0.5),
    rgba(0, 0, 0, 0.7)
  );
  z-index: 1;
`;

export const Headline = styled.h1`
  font-size: clamp(2.5rem, 5vw, 4rem);
  font-weight: 700;
  margin-bottom: 1.5rem;
  line-height: 1.2;
  max-width: 800px;
  position: relative;
  z-index: 2;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);

  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

export const Sub = styled.p`
  font-size: clamp(1rem, 2vw, 1.25rem);
  max-width: 600px;
  margin-bottom: 2rem;
  line-height: 1.6;
  position: relative;
  z-index: 2;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.3);

  @media (max-width: 768px) {
    font-size: 1rem;
    padding: 0 1rem;
  }
`;

export const CTA = styled(motion.button)`
  background: #ffffff;
  color: #1a1a1a;
  font-size: 1.1rem;
  font-weight: 600;
  padding: 1rem 2rem;
  border: none;
  border-radius: 50px;
  cursor: pointer;
  position: relative;
  z-index: 2;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  transition: all 0.3s ease;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);

  .arrow {
    transition: transform 0.3s ease;
  }

  &:hover {
    background: #f8f8f8;
    
    .arrow {
      transform: translateX(5px);
    }
  }

  @media (max-width: 768px) {
    font-size: 1rem;
    padding: 0.875rem 1.75rem;
  }
`;

export const FeatureWrapper = styled.div`
  display: flex;
  gap: 2rem;
  margin-top: 3rem;
  position: relative;
  z-index: 2;

  .feature {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    background: rgba(255, 255, 255, 0.1);
    backdrop-filter: blur(5px);
    padding: 0.75rem 1.5rem;
    border-radius: 50px;
    font-size: 0.9rem;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    transition: all 0.3s ease;

    &:hover {
      background: rgba(255, 255, 255, 0.2);
    }

    .icon {
      font-size: 1.2rem;
    }
  }

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 1rem;
  }
`;