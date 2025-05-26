import { Card, Img, Meta, Title, Price, BookBtn } from './TourCard.styles';
import { Link } from 'react-router-dom';

function TourCard({ slug, title, img, duration, price }) {
  return (
    <Card>
      <Img src={img} alt={title} />
      <Meta>
        <Title>{title}</Title>
        <span>{duration}</span>
        <Price>From R{price}</Price>
      </Meta>
      <BookBtn as={Link} to={`/tours/${slug}`}>
        Details
      </BookBtn>
    </Card>
  );
}

export default TourCard;