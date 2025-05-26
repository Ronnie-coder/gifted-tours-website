import { useParams, Link } from 'react-router-dom';
import data from '../data/tours';
import styled from 'styled-components';

const Wrap = styled.article`
  padding: 48px clamp(16px, 4vw, 64px);
  max-width: 900px;
  margin: auto;
`;

const Img = styled.img`
  width: 100%;
  height: 400px;
  object-fit: cover;
  border-radius: 16px;
  margin-bottom: 24px;
`;

const Back = styled(Link)`
  display: inline-block;
  margin-bottom: 24px;
  color: ${({ theme }) => theme.colours.primary};
  text-decoration: none;
  font-weight: bold;
  transition: color 0.3s;
  &:hover {
    color: #005a5c;
  }
`;

export default function TourDetails() {
  const { slug } = useParams();
  const tour = data.find((t) => t.slug === slug);
  if (!tour) return <Wrap><h2>Tour Not Found</h2><p>We couldn't find the tour you're looking for. Explore our other amazing tours!</p><Link to="/tours" style={{ color: '#006D6F', textDecoration: 'none' }}>View All Tours</Link></Wrap>;
  return (
    <Wrap>
      <Back to="/tours">← Back to All Tours</Back>
      <Img src={tour.img} alt={tour.title} />
      <h1>{tour.title}</h1>
      <p><strong>Duration:</strong> {tour.duration}</p>
      <p><strong>Price:</strong> R{tour.price} per person</p>
      <p style={{ margin: '24px 0', lineHeight: '1.6' }}>{tour.long}</p>
      <Link
        to="/book"
        style={{
          background: '#006D6F',
          color: '#fff',
          padding: '12px 24px',
          borderRadius: '16px',
          textDecoration: 'none',
          display: 'inline-block',
          marginTop: '16px',
          transition: 'background 0.3s',
        }}
        onMouseOver={(e) => (e.target.style.background = '#005a5c')}
        onMouseOut={(e) => (e.target.style.background = '#006D6F')}
      >
        Book This Tour
      </Link>
    </Wrap>
  );
}