// TourCard.styles.js
import styled from 'styled-components';

export const Card = styled.div`
  background: white;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  position: relative;
  display: flex;
  flex-direction: column;
  height: 100%;
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.15);
  }
`;

export const Img = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
`;

export const Meta = styled.div`
  padding: 20px;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  gap: 8px;
  
  span {
    color: ${({ theme }) => theme.colours.textLight || '#666'};
    font-size: 0.9rem;
  }
`;

export const Title = styled.h3`
  font-size: 1.25rem;
  margin: 0;
  color: ${({ theme }) => theme.colours.text};
`;

export const Price = styled.div`
  font-weight: 600;
  color: ${({ theme }) => theme.colours.primary};
  font-size: 1.1rem;
  margin-top: auto;
`;

export const BookBtn = styled.button`
  background: ${({ theme }) => theme.colours.primary};
  color: white;
  border: none;
  padding: 12px;
  font-weight: 600;
  cursor: pointer;
  transition: background 0.2s ease;
  width: 100%;
  text-align: center;
  text-decoration: none;
  
  &:hover {
    background: ${({ theme }) => theme.colours.primaryDark || theme.colours.primary};
  }
`;