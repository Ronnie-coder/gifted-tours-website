import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const FleetSection = styled.section`
  padding: 48px clamp(16px, 4vw, 64px);
  max-width: 1200px;
  margin: 0 auto;
`;

const PageTitle = styled.h1`
  font-size: 2.5rem;
  color: #006D6F;
  text-align: center;
  margin-bottom: 1.5rem;
  position: relative;
  
  &:after {
    content: '';
    display: block;
    width: 100px;
    height: 3px;
    background-color: #006D6F;
    margin: 0.5rem auto 0;
  }
`;

const Introduction = styled.div`
  max-width: 800px;
  margin: 0 auto 40px;
  text-align: center;
  line-height: 1.8;
  color: #555;
  font-size: 1.1rem;
`;

const FleetGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  gap: 30px;
  
  @media (max-width: 768px) {
    grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  }
`;

const VehicleCard = styled(motion.div)`
  background: white;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s, box-shadow 0.3s;

  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.15);
  }
`;

const VehicleImage = styled.img`
  width: 100%;
  height: 220px;
  object-fit: cover;
  transition: transform 0.5s ease;
  
  ${VehicleCard}:hover & {
    transform: scale(1.05);
  }
`;

const VehicleContent = styled.div`
  padding: 1.5rem;
`;

const VehicleName = styled.h3`
  font-size: 1.3rem;
  margin-bottom: 0.8rem;
  color: #006D6F;
`;

const VehicleDetails = styled.div`
  color: #666;
  margin-bottom: 15px;
  
  div {
    margin-bottom: 8px;
    display: flex;
    align-items: center;
    
    svg {
      margin-right: 10px;
      color: #006D6F;
    }
  }
`;

const VehicleFeatures = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-top: 15px;
`;

const Feature = styled.span`
  background: #f0f7f7;
  padding: 6px 12px;
  border-radius: 20px;
  font-size: 0.85rem;
  color: #006D6F;
  border: 1px solid rgba(0, 109, 111, 0.2);
`;

const VehicleDescription = styled.p`
  line-height: 1.6;
  color: #555;
  font-size: 0.95rem;
`;

const BookButton = styled.a`
  display: block;
  margin-top: 20px;
  padding: 12px 0;
  background-color: #006D6F;
  color: white;
  text-align: center;
  border-radius: 8px;
  font-weight: 600;
  text-decoration: none;
  transition: all 0.3s ease;
  
  &:hover {
    background-color: #005a5c;
    transform: translateY(-2px);
    box-shadow: 0 4px 8px rgba(0, 109, 111, 0.3);
  }
  
  &:active {
    transform: translateY(1px);
  }
`;

export default function Fleet() {
  // Fleet data based on client's information
  const allVehicles = [
    {
      id: 1,
      name: 'Mercedes-Benz Vito',
      image: '/public/images/benz.jpg',
      capacity: '1-3 Passengers',
      type: 'Luxury',
      features: ['Air Conditioning', 'Leather Seats', 'WiFi', 'Bottled Water'],
      description: 'Elegant luxury sedan perfect for business travelers or couples seeking comfort and style.'
    },
    {
      id: 2,
      name: 'Hyundai H1',
      image: '/public/images/IMG-20250521-WA0012.jpg',
      capacity: '5-7 Passengers',
      type: 'Luxury',
      features: ['Air Conditioning', 'Spacious Seating', 'Large Luggage Space'],
      description: 'Spacious van to accommodate group tours or company travelers with ample space for luggage.'
    },
    {
      id: 3,
      name: 'Helicopter Charter',
      image: '/public/images/1000105786.jpg',
      capacity: '2 Passengers',
      type: 'Aerial',
      features: ['Panoramic Views', 'Luxury Seating', 'Private Charter', 'Pilot Included'],
      description: 'Experience Cape Town from the skies with our private helicopter charter, perfect for scenic tours or quick transfers.'
    },
    {
      id: 4,
      name: 'Hyundai H1 2022',
      image: '/public/images/IMG-20250521-WA0010(1).jpg',
      capacity: '5-7 Passengers',
      type: 'Luxury',
      features: ['Air Conditioning', 'Spacious Seating', 'Large Luggage Space', 'Modern Design'],
      description: 'Our newest addition - a spacious and modern van perfect for group tours with all the latest amenities for maximum comfort.'
    },
    {
      id: 5,
      name: 'Toyota Quantum',
      image: '/public/images/IMG-20250521-WA0017(1).jpg',
      capacity: '8-10 Passengers',
      type: 'Group Transport',
      features: ['Air Conditioning', 'Spacious Seating', 'Large Luggage Space', 'Perfect for Groups'],
      description: 'Ideal for larger groups and sports teams, our Toyota Quantum offers comfortable transportation with ample space for passengers and luggage.'
    }
  ];

  return (
    <FleetSection>
      <PageTitle>Our Fleet</PageTitle>
      
      <Introduction>
        <p>We offer a diverse range of vehicles to suit every need, from luxury sedans for private tours to spacious vans and aerial charters for unique experiences. Our entire fleet is well-maintained, clean, and operated by professionals who prioritize your comfort and safety.</p>
      </Introduction>
      
      <FleetGrid>
        {allVehicles.map(vehicle => (
          <VehicleCard 
            key={vehicle.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: vehicle.id * 0.1 }}
          >
            <VehicleImage 
              src={vehicle.image} 
              alt={vehicle.name} 
              onError={(e) => {
                e.target.onerror = null;
                e.target.src = "https://via.placeholder.com/400x200?text=Vehicle+Image+Not+Available";
              }} 
            />
            <VehicleContent>
              <VehicleName>{vehicle.name}</VehicleName>
              <VehicleDetails>
                <div>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 12C14.2091 12 16 10.2091 16 8C16 5.79086 14.2091 4 12 4C9.79086 4 8 5.79086 8 8C8 10.2091 9.79086 12 12 12Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M18 20C18 17.7909 15.3137 16 12 16C8.68629 16 6 17.7909 6 20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  {vehicle.capacity}
                </div>
                <div>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M16 3H8C6.89543 3 6 3.89543 6 5V19C6 20.1046 6.89543 21 8 21H16C17.1046 21 18 20.1046 18 19V5C18 3.89543 17.1046 3 16 3Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M12 18H12.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  {vehicle.type}
                </div>
              </VehicleDetails>
              <VehicleDescription>{vehicle.description}</VehicleDescription>
              <VehicleFeatures>
                {vehicle.features.map((feature, index) => (
                  <Feature key={index}>{feature}</Feature>
                ))}
              </VehicleFeatures>
              <BookButton href="/book">Book This Vehicle</BookButton>
            </VehicleContent>
          </VehicleCard>
        ))}
      </FleetGrid>
    </FleetSection>
  );
}