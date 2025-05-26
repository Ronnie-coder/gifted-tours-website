import TourCard from '../components/TourCard/TourCard';
import data from '../data/tours';
import styled from 'styled-components';

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 48px clamp(16px, 4vw, 64px);
`;

const Grid = styled.section`
  display: grid;
  gap: 32px;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  margin-top: 2rem;
`;

const Header = styled.div`
  text-align: center;
  margin-bottom: 2rem;
  h1 {
    font-size: clamp(1.5rem, 5vw, 2.5rem);
    color: #006D6F; /* Updated to match brand color */
    margin-bottom: 1rem;
    position: relative;
    
    &:after {
      content: '';
      display: block;
      width: 100px;
      height: 3px;
      background-color: #006D6F;
      margin: 0.5rem auto 0;
    }
  }
  p {
    color: #555; /* Updated to match text color in other pages */
    font-size: 1rem;
    max-width: 600px;
    margin: 0 auto;
    line-height: 1.6;
  }
`;

export default function Tours() {
  return (
    <Container>
      <Header>
        <h1>Explore Our Cape Town Tours</h1>
        <p>
          Discover the beauty of Cape Town with Gifted Tours. From breathtaking
          Table Mountain hikes to scenic Cape Peninsula drives, we offer personalized
          adventures tailored to your interests.
        </p>
      </Header>
      <Grid>
        {data.map((tour) => (
          <TourCard
            key={tour.id}
            slug={tour.slug}
            title={tour.title}
            img={tour.img}
            duration={tour.duration}
            price={tour.price}
          />
        ))}
      </Grid>
    </Container>
  );
}