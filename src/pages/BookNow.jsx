import BookingWizard from '../components/BookingWizard/BookingWizard';
import styled from 'styled-components';

const BookingSection = styled.section`
  padding: 48px clamp(16px, 4vw, 64px);
  max-width: 1200px;
  margin: 0 auto;
`;

const PageTitle = styled.h1`
  font-size: 2.5rem;
  color: #006D6F;
  margin-bottom: 1rem;
  position: relative;
  
  &:after {
    content: '';
    display: block;
    width: 100px;
    height: 3px;
    background-color: #006D6F;
    margin: 0.5rem 0 0;
  }
`;

const PageDescription = styled.p`
  max-width: 800px;
  margin-bottom: 2rem;
  color: #555;
  line-height: 1.6;
  font-size: 1.1rem;
`;

function BookNowPage() {
  return (
    <BookingSection>
      <PageTitle>Book Your Cape Town Adventure</PageTitle>
      <PageDescription>
        Ready to explore the wonders of Cape Town with Gifted Tours? Use the form below to book your personalized tour or service.
      </PageDescription>
      <BookingWizard />
    </BookingSection>
  );
}

export default BookNowPage;