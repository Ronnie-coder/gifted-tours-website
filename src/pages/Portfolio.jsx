import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

// Styled Components
const PageContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem 1rem;
`;

const PageTitle = styled.h1`
  font-size: 2.5rem;
  text-align: center;
  margin-bottom: 1.5rem;
  color: #006D6F;
`;

const PageDescription = styled.p`
  text-align: center;
  max-width: 800px;
  margin: 0 auto 2rem;
  line-height: 1.6;
  color: #555;
  font-size: 1.1rem;
`;

// Category Filter Components
const CategoryFilter = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  margin-bottom: 2rem;
  justify-content: center;
`;

const FilterButton = styled.button`
  padding: 0.6rem 1.2rem;
  background: ${props => props.active ? '#006D6F' : 'white'};
  color: ${props => props.active ? 'white' : '#333'};
  border: 2px solid #006D6F;
  border-radius: 30px;
  cursor: pointer;
  transition: all 0.3s ease;
  font-weight: 500;
  
  &:hover {
    background: ${props => props.active ? '#005a5c' : '#f0f0f0'};
    transform: translateY(-2px);
  }
`;

// Gallery Components
const GalleryGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 1.5rem;
  
  @media (max-width: 768px) {
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  }
`;

const GalleryItem = styled.div`
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
  background: white;
  
  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.15);
  }
`;

const ImageContainer = styled.div`
  height: 280px;
  overflow: hidden;
  position: relative;
  
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.5s ease;
  }
  
  ${GalleryItem}:hover & img {
    transform: scale(1.1);
  }
`;

const ImageContent = styled.div`
  padding: 1.2rem;
`;

const ImageTitle = styled.h3`
  font-size: 1.2rem;
  margin-bottom: 0.5rem;
  color: #006D6F;
`;

const ImageDescription = styled.p`
  font-size: 0.9rem;
  color: #666;
  line-height: 1.4;
`;

// Modal Components
const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.8);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
  padding: 1rem;
`;

const ModalContent = styled.div`
  background: white;
  border-radius: 12px;
  max-width: 900px;
  width: 100%;
  max-height: 90vh;
  overflow-y: auto;
  position: relative;
  
  @media (max-width: 768px) {
    width: 95%;
  }
`;

const CloseButton = styled.button`
  position: absolute;
  top: 1rem;
  right: 1rem;
  background: white;
  border: none;
  width: 35px;
  height: 35px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  cursor: pointer;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
  z-index: 10;
  
  &:hover {
    background: #f0f0f0;
  }
`;

const ModalImage = styled.img`
  width: 100%;
  max-height: 600px;
  object-fit: contain;
  background: #000;
`;

const ModalDetails = styled.div`
  padding: 2rem;
`;

const ModalTitle = styled.h2`
  font-size: 1.8rem;
  color: #006D6F;
  margin-bottom: 1rem;
`;

const ModalDescription = styled.p`
  font-size: 1rem;
  line-height: 1.6;
  margin-bottom: 1.5rem;
  color: #333;
`;

const EmptyState = styled.div`
  grid-column: 1 / -1;
  text-align: center;
  padding: 3rem;
`;

const Portfolio = () => {
  // Photo categories data
  const photoCategories = [
    {
      id: "all",
      title: "All Photos"
    },
    {
      id: "landscapes",
      title: "Landscapes"
    },
    {
      id: "wildlife",
      title: "Wildlife"
    },
    {
      id: "activities",
      title: "Activities"
    },
    {
      id: "people",
      title: "People"
    }
  ];

  // Portfolio images data
  const portfolioImages = React.useMemo(() => [
    {
      id: 1,
      title: "Table Mountain View",
      category: "landscapes",
      description: "Breathtaking view of Table Mountain from Bloubergstrand.",
      location: "Bloubergstrand, Cape Town",
      src: "/public/images/tbm.jpg"
    },
    {
      id: 2,
      title: "Cape Point Landscape",
      category: "landscapes",
      description: "The dramatic coastal scenery at Cape Point Nature Reserve.",
      location: "Cape Point, Cape Town",
      src: "/public/images/sunset.jpg"
    },
    {
      id: 3,
      title: "African Penguins",
      category: "wildlife",
      description: "Colony of African Penguins at Boulders Beach.",
      location: "Boulders Beach, Simon's Town",
      src: "/public/images/penguins.jpg"
    },
    {
      id: 4,
      title: "Wine Tasting Experience",
      category: "activities",
      description: "Clients enjoying wine tasting at a local vineyard.",
      location: "Stellenbosch Wine Region",
      src: "/public/images/wine.jpeg"
    },
    {
      id: 5,
      title: "Safari Adventure",
      category: "wildlife",
      description: "Elephants spotted during a guided safari tour.",
      location: "Kruger National Park",
      src: "/public/images/IMG-20250523-WA0050.jpg"
    },
    {
      id: 6,
      title: "Rhino",
      category: "landscapes",
      description: "The pristine beaches of Camps Bay with the Twelve Apostles mountain range.",
      location: "Camps Bay, Cape Town",
      src: "/public/images/IMG-20250523-WA0009.jpg"
    },
    {
      id: 7,
      title: "Client's enjoying Gifted Tour",
      category: "landscapes",
      description: "The beautiful indigenous plants at Kirstenbosch Botanical Gardens.",
      location: "Kirstenbosch, Cape Town",
      src: "/public/images/IMG-20250523-WA0058.jpg"
    },
    {
      id: 8,
      title: "Lion's ",
      category: "activities",
      description: "Clients enjoying a sunset hike up Lion's Head.",
      location: "Lion's Head, Cape Town",
      src: "/public/images/IMG-20250523-WA0060.jpg"
    },
    {
      id: 9,
      title: "Zebra",
      category: "landscapes",
      description: "The scenic coastal road along Chapman's Peak Drive.",
      location: "Chapman's Peak, Cape Town",
      src: "/public/images/IMG-20250523-WA0053.jpg"
    },
    {
      id: 10,
      title: "Cape Winelands",
      category: "landscapes",
      description: "The beautiful vineyards of the Cape Winelands.",
      location: "Franschhoek, Western Cape",
      src: "/public/images/winelands.jpeg"
    },
    {
      id: 11,
      title: "Client Group Photo",
      category: "people",
      description: "Happy clients from Germany enjoying their Cape Town tour.",
      location: "V&A Waterfront, Cape Town",
      src: "/public/images/IMG-20250523-WA0043.jpg"
    },
    {
      id: 12,
      title: "Elephant Feeding",
      category: "wildlife",
      description: "Southern Right Whales spotted during whale watching season.",
      location: "Hermanus, Western Cape",
      src: "/public/images/IMG-20250523-WA0042.jpg"
    },
    {
      id: 13,
      title: "Cape Point",
      category: "activities",
      description: "Clients learning about South Africa's history at Robben Island.",
      location: "Robben Island, Cape Town",
      src: "/public/images/IMG-20250523-WA0026.jpg"
    },
    {
      id: 14,
      title: "Ostrich",
      category: "landscapes",
      description: "The southernmost tip of Africa where two oceans meet.",
      location: "Cape Agulhas, Western Cape",
      src: "/public/images/IMG-20250523-WA0034.jpg"
    },
    {
      id: 15,
      title: "Client's enjoying view",
      category: "landscapes",
      description: "The colorful houses of the historic Bo-Kaap district.",
      location: "Bo-Kaap, Cape Town",
      src: "/public/images/IMG-20250523-WA0046.jpg"
    },
    {
      id: 16,
      title: "Cheetah",
      category: "wildlife",
      description: "Giraffes spotted during a guided safari experience.",
      location: "Aquila Game Reserve",
      src: "/public/images/IMG-20250523-WA0048.jpg"
    },
    {
      id: 17,
      title: "Happy Travelers",
      category: "people",
      description: "Clients enjoying sundowners at a scenic viewpoint.",
      location: "Signal Hill, Cape Town",
      src: "/public/images/IMG-20250523-WA0058.jpg"
    },
    {
      id: 18,
      title: "Paragliding Adventure",
      category: "activities",
      description: "Clients experiencing the thrill of paragliding over Cape Town.",
      location: "Lion's Head, Cape Town",
      src: "/public/images/IMG-20250523-WA0009.jpg"
    }
  ], []);

  const [selectedCategory, setSelectedCategory] = useState('all');
  const [filteredImages, setFilteredImages] = useState([]);
  const [selectedImage, setSelectedImage] = useState(null);

  // Initialize filtered images and update when category changes
  useEffect(() => {
    if (selectedCategory === 'all') {
      setFilteredImages(portfolioImages);
    } else {
      const filtered = portfolioImages.filter(image => image.category === selectedCategory);
      setFilteredImages(filtered);
    }
  }, [selectedCategory, portfolioImages]);

  const openModal = (image) => {
    setSelectedImage(image);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setSelectedImage(null);
    document.body.style.overflow = 'auto';
  };

  return (
    <PageContainer>
      <PageTitle>Our Photo Gallery</PageTitle>
      <PageDescription>
        Explore our collection of beautiful moments captured during tours around Cape Town and beyond. 
        From breathtaking landscapes to wildlife encounters and happy clients.
      </PageDescription>

      <CategoryFilter>
        {photoCategories.map(category => (
          <FilterButton
            key={category.id}
            active={selectedCategory === category.id}
            onClick={() => setSelectedCategory(category.id)}
          >
            {category.title}
          </FilterButton>
        ))}
      </CategoryFilter>

      <GalleryGrid>
        {filteredImages.length > 0 ? (
          filteredImages.map(image => (
            <GalleryItem key={image.id} onClick={() => openModal(image)}>
              <ImageContainer>
                <img src={image.src} alt={image.title} />
              </ImageContainer>
              <ImageContent>
                <ImageTitle>{image.title}</ImageTitle>
                <ImageDescription>{image.description}</ImageDescription>
              </ImageContent>
            </GalleryItem>
          ))
        ) : (
          <EmptyState>
            <h3>No photos available in this category</h3>
            <p>Please check back soon for new additions to our photo gallery.</p>
          </EmptyState>
        )}
      </GalleryGrid>

      {selectedImage && (
        <ModalOverlay onClick={closeModal}>
          <ModalContent onClick={e => e.stopPropagation()}>
            <CloseButton onClick={closeModal}>×</CloseButton>
            <ModalImage src={selectedImage.src} alt={selectedImage.title} />
            <ModalDetails>
              <ModalTitle>{selectedImage.title}</ModalTitle>
              <ModalDescription>
                {selectedImage.description}
                <br /><br />
                <strong>Location:</strong> {selectedImage.location}
              </ModalDescription>
            </ModalDetails>
          </ModalContent>
        </ModalOverlay>
      )}
    </PageContainer>
  );
};

export default Portfolio;