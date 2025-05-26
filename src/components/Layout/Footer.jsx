import styled from 'styled-components';
import { FaInstagram, FaTwitter, FaWhatsapp, FaFacebook, FaTripadvisor } from 'react-icons/fa';

const Foot = styled.footer`
  background: ${({ theme }) => theme.colours.text};
  color: #fff;
  padding: 32px 0;
  text-align: center;
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
`;

const FooterGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 32px;
  text-align: left;
  margin-bottom: 32px;
`;

const Column = styled.div`
  h3 {
    font-size: 1.2rem;
    margin-bottom: 16px;
    font-weight: 600;
  }
  
  ul {
    list-style: none;
    padding: 0;
    margin: 0;
    
    li {
      margin-bottom: 8px;
      
      a {
        color: #fff;
        text-decoration: none;
        opacity: 0.8;
        transition: opacity 0.3s ease;
        
        &:hover {
          opacity: 1;
        }
      }
    }
  }
`;

const SocialLinks = styled.div`
  margin-top: 1.5rem; /* Increased spacing from Contact Us list */
  display: flex;
  justify-content: flex-start;
  gap: 1.2rem; /* Increased gap for better spacing between icons */
  flex-wrap: wrap; /* Allow wrapping on smaller screens to prevent overlap */
  @media (max-width: 768px) {
    justify-content: center;
  }
`;

const SocialIcon = styled.a`
  color: #fff;
  text-decoration: none;
  display: flex;
  align-items: center;
  opacity: 0.8;
  transition: opacity 0.3s ease, transform 0.3s ease;
  font-size: 1.2rem; /* Slightly larger for icon visibility */
  position: relative; /* For tooltip positioning */
  
  &:hover {
    opacity: 1;
    transform: scale(1.1);
  }
  
  /* Tooltip styling */
  &:hover::after {
    content: attr(data-tooltip);
    position: absolute;
    bottom: 125%; /* Position above the icon */
    left: 50%;
    transform: translateX(-50%);
    background: rgba(0, 0, 0, 0.8);
    color: #fff;
    padding: 0.3rem 0.6rem;
    border-radius: 4px;
    font-size: 0.75rem;
    white-space: nowrap;
    opacity: 1;
    z-index: 10;
    transition: opacity 0.3s ease;
  }
  
  &:hover::before {
    content: '';
    position: absolute;
    bottom: 100%; /* Arrow pointing down to icon */
    left: 50%;
    transform: translateX(-50%);
    border-width: 5px;
    border-style: solid;
    border-color: rgba(0, 0, 0, 0.8) transparent transparent transparent;
    z-index: 10;
  }
  
  @media (max-width: 480px) {
    font-size: 1.1rem; /* Slightly smaller on mobile */
  }
`;

const Copyright = styled.div`
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  padding-top: 24px;
  font-size: 0.9rem;
  opacity: 0.8;
`;

const Branding = styled.span`
  color: #fff;
  font-weight: bold;
  opacity: 1;
  background-color: rgba(255, 255, 255, 0.15);
  padding: 0.2rem 0.5rem;
  border-radius: 4px;
  transition: background-color 0.3s ease, transform 0.3s ease;
  display: inline-flex;
  align-items: center;
  
  a {
    color: #fff;
    text-decoration: none;
    display: flex;
    align-items: center;
    transition: color 0.3s ease, text-shadow 0.3s ease;
    
    &:hover {
      color: #fff;
      text-shadow: 0 0 3px rgba(255, 255, 255, 0.7);
    }
  }
  
  &:hover {
    background-color: rgba(255, 255, 255, 0.25);
    transform: scale(1.03);
  }
`;

const CodeRonLogo = styled.img`
  height: 16px; /* Adjust based on your logo size for visibility */
  margin-right: 0.3rem;
  vertical-align: middle;
  width: auto;
  max-width: 50px; /* Prevent logo from being too wide */
  object-fit: contain; /* Maintain aspect ratio */
`;

function Footer() {
  return (
    <Foot>
      <Container>
        <FooterGrid>
          <Column>
            <h3>Contact Us</h3>
            <ul>
              <li>Cape Town, South Africa</li>
              <li><a href="tel:+27780670812">+27 780 670 812</a></li>
              <li><a href="tel:+27762662143">+27 762 662 143</a></li>
              <li><a href="mailto:info@giftedtours.co.za">info@giftedtours.co.za</a></li>
            </ul>
            <SocialLinks>
              <SocialIcon 
                href="https://www.instagram.com/giftedtours" 
                target="_blank" 
                rel="noopener noreferrer"
                data-tooltip="Instagram"
              >
                <FaInstagram />
              </SocialIcon>
              <SocialIcon 
                href="https://www.twitter.com/giftedtours" 
                target="_blank" 
                rel="noopener noreferrer"
                data-tooltip="Twitter"
              >
                <FaTwitter />
              </SocialIcon>
              <SocialIcon 
                href="https://wa.me/27780670812" 
                target="_blank" 
                rel="noopener noreferrer"
                data-tooltip="WhatsApp"
              >
                <FaWhatsapp />
              </SocialIcon>
              <SocialIcon 
                href="https://www.facebook.com/giftedtours" 
                target="_blank" 
                rel="noopener noreferrer"
                data-tooltip="Facebook"
              >
                <FaFacebook />
              </SocialIcon>
              <SocialIcon 
                href="https://www.tripadvisor.com/Attraction_Review-giftedtours" 
                target="_blank" 
                rel="noopener noreferrer"
                data-tooltip="TripAdvisor"
              >
                <FaTripadvisor />
              </SocialIcon>
            </SocialLinks>
          </Column>
          
          <Column>
            <h3>Quick Links</h3>
            <ul>
              <li><a href="/">Home</a></li>
              <li><a href="/about">About</a></li>
              <li><a href="/services">Tours</a></li>
              <li><a href="/contact">Contact Us</a></li>
            </ul>
          </Column>
          
          <Column>
            <h3>Additional Links</h3>
            <ul>
              <li><a href="/terms">Terms and Conditions</a></li>
              <li><a href="/privacy">Privacy Policy</a></li>
              <li><a href="/news">News</a></li>
            </ul>
          </Column>
        </FooterGrid>
        
        <Copyright>
          © {new Date().getFullYear()} Gifted Tours • Cape Town | Designed by <Branding><a href="https://www.coderon.co.za" target="_blank" rel="noopener noreferrer"><CodeRonLogo src="/coderon-logo.svg" alt="CodeRon Logo" onError={(e) => (e.target.style.display = 'none')} />CodeRon</a></Branding>
        </Copyright>
      </Container>
    </Foot>
  );
}

export default Footer;