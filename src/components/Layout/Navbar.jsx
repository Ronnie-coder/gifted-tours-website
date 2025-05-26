import { Link, NavLink } from 'react-router-dom';
import styled from 'styled-components';

const Bar = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 16px clamp(16px, 4vw, 48px);
  background: #fff;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.06);
  position: sticky;
  top: 0;
  z-index: 999;
`;

const LogoContainer = styled(Link)`
  display: flex;
  align-items: center;
  text-decoration: none;
  font-weight: 800;
  font-size: 1.2rem;
  color: ${({ theme }) => theme.colours.primary};
  transition: transform 0.3s ease;
  
  &:hover {
    transform: scale(1.05);
  }
`;

const LogoImg = styled.img`
  height: 50px;
  width: auto;
  margin-right: 0.75rem;
  max-width: 150px;
  object-fit: contain;
`;

const Nav = styled.nav`
  display: flex;
  gap: 24px;
  @media (max-width: 768px) {
    display: none;
  }
`;

const A = styled(NavLink)`
  color: ${({ theme }) => theme.colours.text};
  text-decoration: none;
  transition: all 0.3s ease;
  padding: 6px 0;
  position: relative;
  font-weight: 500;
  
  &::after {
    content: '';
    position: absolute;
    width: 0;
    height: 3px;
    bottom: 0;
    left: 0;
    background-color: ${({ theme }) => theme.colours.primary};
    transition: width 0.3s ease;
    border-radius: 3px;
  }
  
  &:hover {
    color: ${({ theme }) => theme.colours.primary};
    
    &::after {
      width: 50%;
    }
  }
  
  &.active {
    color: ${({ theme }) => theme.colours.primary};
    font-weight: 600;
    
    &::after {
      width: 80%;
    }
  }
`;

const BookButton = styled(NavLink)`
  background: #006D6F;
  color: #fff;
  padding: 0.5rem 1.5rem;
  border-radius: 16px;
  text-decoration: none;
  transition: all 0.3s ease;
  font-weight: 600;
  box-shadow: 0 2px 5px rgba(0, 109, 111, 0.2);
  
  &:hover {
    background: #005a5c;
    transform: translateY(-2px);
    box-shadow: 0 4px 8px rgba(0, 109, 111, 0.3);
  }
  
  &:active {
    transform: translateY(1px);
    box-shadow: 0 1px 3px rgba(0, 109, 111, 0.3);
  }
  
  &.active {
    background: #005152;
    box-shadow: inset 0 2px 4px rgba(0, 0, 0, 0.2);
  }
`;

export default function Navbar() {
  return (
    <Bar>
      <LogoContainer to="/">
        <LogoImg src="/public/images/logo gifted.jpg" alt="Gifted Tours Logo" onError={(e) => (e.target.style.display = 'none')} />
        GiftedTours
      </LogoContainer>
      <Nav>
        <A to="/tours">Tours</A>
        <A to="/fleet">Our Fleet</A>
        <A to="/portfolio">Our Portfolio</A>
        <A to="/about">About</A>
        <A to="/contact">Contact</A>
        <BookButton to="/book">Book Now</BookButton>
      </Nav>
    </Bar>
  );
}