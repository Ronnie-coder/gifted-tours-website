import React from 'react';
import styled from 'styled-components';

const AboutSection = styled.section`
  padding: 48px clamp(16px, 4vw, 64px);
  max-width: 1200px;
  margin: 0 auto;
`;

const PageTitle = styled.h1`
  font-size: 2.5rem;
  color: #006D6F;
  margin-bottom: 1.5rem;
  position: relative;
  
  &:after {
    content: '';
    display: block;
    width: 80px;
    height: 3px;
    background-color: #006D6F;
    margin-top: 0.5rem;
  }
`;

const ContentWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 3rem;
  align-items: center;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
`;

const TextContent = styled.div`
  @media (max-width: 768px) {
    order: 2;
  }
`;

const Paragraph = styled.p`
  font-size: 1.1rem;
  line-height: 1.8;
  color: #333;
  margin-bottom: 1.5rem;
`;

const ImageContainer = styled.div`
  position: relative;
  
  @media (max-width: 768px) {
    order: 1;
    margin: 0 auto;
    max-width: 450px;
  }
`;

const FounderImage = styled.img`
  width: 100%;
  border-radius: 12px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.15);
`;

const ImageCaption = styled.div`
  background: rgba(0, 109, 111, 0.8);
  color: white;
  padding: 12px;
  border-radius: 0 0 12px 12px;
  text-align: center;
  font-weight: 500;
`;

function AboutPage() {
  return (
    <AboutSection>
      <PageTitle>About Gifted Tours</PageTitle>
      
      <ContentWrapper>
        <TextContent>
          <Paragraph>
            Founded in 2020 by Mr. Gift, a passionate tour enthusiast in Cape Town, we reveal the soul of Cape Town through
            private expeditions, luxury charters, and bespoke travel planning. Our mission is to make every journey fun and memorable,
            ensuring you experience the best of the Cape region with personalized attention.
          </Paragraph>
          
          <Paragraph>
            At Gifted Tours & Charter Services, we operate on a small scale but guarantee your entertainment. Over the years,
            we've welcomed a consistent flow of guests, including sports teams, holiday lovers, as well as corporate and private
            sector entities requiring conferencing facilities. Every kilometre is curated—from the first 'howzit' to your final
            sundowner toast.
          </Paragraph>
          
          <Paragraph>
            Are you looking to extend your adventure? Our focus is on offering the best tours and activities in the Cape region,
            introducing you to the breathtaking natural features of Cape Town. Let us take the hassle out of researching hotels,
            tickets, and logistics—explore our Cape Town Open Tour packages and seize the opportunity to view the stunning beach
            shores and iconic landmarks of Cape Town.
          </Paragraph>
        </TextContent>
        
        <ImageContainer>
          <FounderImage 
            src="/public/images/IMG-20250523-WA0019.jpg" 
            alt="Mr. Gift - Founder of Gifted Tours"
            onError={(e) => {
              e.target.onerror = null;
              e.target.src = "https://via.placeholder.com/450x600?text=Mr.+Gift+-+Founder";
            }}
          />
          <ImageCaption>Mr. Gift - Founder & Tour Specialist</ImageCaption>
        </ImageContainer>
      </ContentWrapper>
    </AboutSection>
  );
}

export default AboutPage;