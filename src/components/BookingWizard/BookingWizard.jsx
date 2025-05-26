import { Wrapper, StepLabel, NavBtns } from './BookingWizard.styles';
import { useState } from 'react';
import { toast } from 'react-toastify'; // Consider adding toast notifications
import styled from 'styled-components';

// Add some styled components for consistency with other pages
const SectionTitle = styled.h2`
  color: #006D6F;
  margin-bottom: 1.5rem;
  font-size: 1.8rem;
`;

const StepContent = styled.div`
  margin-bottom: 2rem;
`;

const StepHeading = styled.h3`
  color: #006D6F;
  margin-bottom: 1rem;
  font-size: 1.3rem;
`;

const TourCard = styled.div`
  border: 2px solid ${props => props.selected ? '#006D6F' : '#e0e0e0'};
  padding: 1.5rem;
  margin-bottom: 1rem;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.3s ease;
  background-color: ${props => props.selected ? 'rgba(0, 109, 111, 0.05)' : 'white'};
  
  &:hover {
    border-color: #006D6F;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
    transform: translateY(-3px);
  }
  
  h4 {
    color: #006D6F;
    margin-bottom: 0.5rem;
  }
  
  ul {
    margin: 1rem 0;
    padding-left: 1.5rem;
  }
  
  li {
    margin-bottom: 0.3rem;
  }
  
  .price {
    font-weight: bold;
    margin-top: 1rem;
  }
`;

const FormInput = styled.input`
  width: 100%;
  padding: 0.8rem;
  border: 2px solid ${props => props.hasError ? '#d32f2f' : '#e0e0e0'};
  border-radius: 8px;
  font-size: 1rem;
  margin-bottom: ${props => props.hasError ? '0.3rem' : '1rem'};
  
  &:focus {
    outline: none;
    border-color: #006D6F;
    box-shadow: 0 0 0 2px rgba(0, 109, 111, 0.1);
  }
`;

const FormSelect = styled.select`
  width: 100%;
  padding: 0.8rem;
  border: 2px solid #e0e0e0;
  border-radius: 8px;
  font-size: 1rem;
  margin-bottom: 1rem;
  background-color: white;
  
  &:focus {
    outline: none;
    border-color: #006D6F;
    box-shadow: 0 0 0 2px rgba(0, 109, 111, 0.1);
  }
`;

const VehicleButton = styled.button`
  padding: 1rem 2rem;
  margin-right: 1rem;
  border: 2px solid ${props => props.selected ? '#006D6F' : '#e0e0e0'};
  border-radius: 8px;
  background-color: ${props => props.selected ? 'rgba(0, 109, 111, 0.1)' : 'white'};
  color: ${props => props.selected ? '#006D6F' : '#333'};
  cursor: pointer;
  transition: all 0.3s ease;
  font-weight: ${props => props.selected ? 'bold' : 'normal'};
  
  &:hover {
    border-color: #006D6F;
    background-color: rgba(0, 109, 111, 0.05);
  }
`;

const ErrorText = styled.span`
  color: #d32f2f;
  font-size: 0.85rem;
  display: block;
  margin-bottom: 1rem;
`;

const SummaryItem = styled.p`
  margin-bottom: 0.8rem;
  padding-bottom: 0.8rem;
  border-bottom: 1px solid #f0f0f0;
  
  strong {
    color: #006D6F;
    margin-right: 0.5rem;
  }
`;

// Original code starts here
const tourPackages = [
  {
    id: 1,
    name: "Best of the Cape Full Day Tour",
    description: "Explore the majestic scenery of Cape Peninsula and Stellenbosch Wine Lands",
    highlights: [
      "Chapman's Peak Drive",
      "Cape Point",
      "Penguin Colony",
      "Stellenbosch Wine Tasting",
      "Cellar Tour"
    ],
    price: "Contact for pricing"
  },
  {
    id: 2,
    name: "Amazing Cape Tours",
    description: "Best of Cape Town Tour",
    highlights: [
      "Table Mountain",
      "City tour",
      "Constantia Wine Tasting",
      "Cape Town Gardens"
    ],
    price: "Contact for pricing"
  }
];

const initialBookingData = {
  tourType: '',
  date: '',
  guests: 1,
  vehicleType: '',
  contactDetails: {
    name: '',
    email: '',
    phone: ''
  }
};

function BookingWizard() {
  const [step, setStep] = useState(0);
  const [bookingData, setBookingData] = useState(initialBookingData);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState({});

  const steps = ['Select Tour', 'Date & Time', 'Guests', 'Vehicle', 'Contact Details', 'Confirm'];

  // Validation functions
  const validateStep = (currentStep) => {
    let stepErrors = {};
    switch(currentStep) {
      case 0:
        if (!bookingData.tourType) {
          stepErrors.tourType = 'Please select a tour';
        }
        break;
      case 1:
        if (!bookingData.date) {
          stepErrors.date = 'Please select a date';
        }
        break;
      case 4:
        if (!bookingData.contactDetails.name) {
          stepErrors.name = 'Name is required';
        }
        if (!bookingData.contactDetails.email) {
          stepErrors.email = 'Email is required';
        } else if (!/\S+@\S+\.\S+/.test(bookingData.contactDetails.email)) {
          stepErrors.email = 'Invalid email format';
        }
        if (!bookingData.contactDetails.phone) {
          stepErrors.phone = 'Phone number is required';
        }
        break;
      default:
        break;
    }
    return stepErrors;
  };

  const next = () => {
    const stepErrors = validateStep(step);
    if (Object.keys(stepErrors).length === 0) {
      setStep((s) => Math.min(s + 1, steps.length - 1));
      setErrors({});
    } else {
      setErrors(stepErrors);
    }
  };

  const prev = () => {
    setStep((s) => Math.max(s - 1, 0));
    setErrors({});
  };

  const handleSubmit = async () => {
    try {
      setIsSubmitting(true);
      
      // Validate all fields before final submission
      const finalErrors = validateStep(4);
      if (Object.keys(finalErrors).length > 0) {
        setErrors(finalErrors);
        return;
      }

      // Here you would typically send the data to your backend
      // For now, we'll simulate an API call
      await new Promise(resolve => setTimeout(resolve, 1500));

      // Send email notification
      const emailBody = `
        New Booking Request:
        Tour: ${tourPackages.find(t => t.id === bookingData.tourType)?.name}
        Date: ${bookingData.date}
        Guests: ${bookingData.guests}
        Vehicle: ${bookingData.vehicleType}
        Name: ${bookingData.contactDetails.name}
        Email: ${bookingData.contactDetails.email}
        Phone: ${bookingData.contactDetails.phone}
      `;

      console.log("Email body to send:", emailBody);

      // You would typically handle this on your backend
      // For now, we'll just show a success message
      toast.success('Booking request sent successfully! We will contact you shortly.');
      
      // Reset form
      setBookingData(initialBookingData);
      setStep(0);

    } catch (error) {
      toast.error('Something went wrong. Please try again.');
      console.error('Booking submission error:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const renderStepContent = () => {
    switch(step) {
      case 0: // Select Tour
        return (
          <StepContent>
            <StepHeading>Choose Your Tour</StepHeading>
            {errors.tourType && <ErrorText>{errors.tourType}</ErrorText>}
            <div className="tour-options">
              {tourPackages.map(tour => (
                <TourCard 
                  key={tour.id} 
                  selected={bookingData.tourType === tour.id}
                  onClick={() => setBookingData({...bookingData, tourType: tour.id})}
                >
                  <h4>{tour.name}</h4>
                  <p>{tour.description}</p>
                  <ul>
                    {tour.highlights.map((highlight, index) => (
                      <li key={index}>{highlight}</li>
                    ))}
                  </ul>
                  <p className="price">{tour.price}</p>
                </TourCard>
              ))}
            </div>
          </StepContent>
        );

      case 1: // Date & Time
        return (
          <StepContent>
            <StepHeading>Select Date and Time</StepHeading>
            {errors.date && <ErrorText>{errors.date}</ErrorText>}
            <FormInput 
              type="date" 
              value={bookingData.date}
              min={new Date().toISOString().split('T')[0]}
              onChange={(e) => setBookingData({...bookingData, date: e.target.value})}
              hasError={!!errors.date}
            />
          </StepContent>
        );

      case 2: // Guests
        return (
          <StepContent>
            <StepHeading>Number of Guests</StepHeading>
            <FormSelect 
              value={bookingData.guests}
              onChange={(e) => setBookingData({...bookingData, guests: parseInt(e.target.value)})}
            >
              {[1,2,3,4,5,6,7].map(num => (
                <option key={num} value={num}>{num} Guest{num > 1 ? 's' : ''}</option>
              ))}
            </FormSelect>
          </StepContent>
        );

      case 3: // Vehicle Selection
        return (
          <StepContent>
            <StepHeading>Choose Your Vehicle</StepHeading>
            <div className="vehicle-options">
              <VehicleButton 
                selected={bookingData.vehicleType === 'private'}
                onClick={() => setBookingData({...bookingData, vehicleType: 'private'})}
              >
                Private Vehicle
              </VehicleButton>
              <VehicleButton 
                selected={bookingData.vehicleType === 'shuttle'}
                onClick={() => setBookingData({...bookingData, vehicleType: 'shuttle'})}
              >
                Shuttle Service
              </VehicleButton>
            </div>
          </StepContent>
        );

      case 4: // Contact Details
        return (
          <StepContent>
            <StepHeading>Your Details</StepHeading>
            <div className="form-group">
              <FormInput 
                type="text" 
                placeholder="Full Name"
                value={bookingData.contactDetails.name}
                onChange={(e) => setBookingData({
                  ...bookingData, 
                  contactDetails: {...bookingData.contactDetails, name: e.target.value}
                })}
                hasError={!!errors.name}
              />
              {errors.name && <ErrorText>{errors.name}</ErrorText>}
            </div>
            <div className="form-group">
              <FormInput 
                type="email" 
                placeholder="Email"
                value={bookingData.contactDetails.email}
                onChange={(e) => setBookingData({
                  ...bookingData, 
                  contactDetails: {...bookingData.contactDetails, email: e.target.value}
                })}
                hasError={!!errors.email}
              />
              {errors.email && <ErrorText>{errors.email}</ErrorText>}
            </div>
            <div className="form-group">
              <FormInput 
                type="tel" 
                placeholder="Phone"
                value={bookingData.contactDetails.phone}
                onChange={(e) => setBookingData({
                  ...bookingData, 
                  contactDetails: {...bookingData.contactDetails, phone: e.target.value}
                })}
                hasError={!!errors.phone}
              />
              {errors.phone && <ErrorText>{errors.phone}</ErrorText>}
            </div>
          </StepContent>
        );

      case 5: // Confirmation
        return (
          <StepContent>
            <StepHeading>Booking Summary</StepHeading>
            <div className="summary-details">
              <SummaryItem><strong>Selected Tour:</strong> {tourPackages.find(t => t.id === bookingData.tourType)?.name}</SummaryItem>
              <SummaryItem><strong>Date:</strong> {bookingData.date}</SummaryItem>
              <SummaryItem><strong>Guests:</strong> {bookingData.guests}</SummaryItem>
              <SummaryItem><strong>Vehicle:</strong> {bookingData.vehicleType === 'private' ? 'Private Vehicle' : 'Shuttle Service'}</SummaryItem>
              <SummaryItem><strong>Name:</strong> {bookingData.contactDetails.name}</SummaryItem>
              <SummaryItem><strong>Email:</strong> {bookingData.contactDetails.email}</SummaryItem>
              <SummaryItem><strong>Phone:</strong> {bookingData.contactDetails.phone}</SummaryItem>
            </div>
          </StepContent>
        );

      default:
        return null;
    }
  };

  return (
    <Wrapper>
      <SectionTitle>Book Your Cape Town Adventure</SectionTitle>
      <StepLabel>
        Step {step + 1}/{steps.length}: <strong>{steps[step]}</strong>
      </StepLabel>

      <div className="form-content">
        {renderStepContent()}
      </div>

      <NavBtns>
        <button 
          onClick={prev} 
          disabled={step === 0 || isSubmitting}
          style={{ 
            opacity: step === 0 ? 0.5 : 1,
            border: '2px solid #ccc',
            backgroundColor: 'white',
            color: '#333'
          }}
        >
          Back
        </button>
        <button 
          onClick={step === steps.length - 1 ? handleSubmit : next}
          disabled={isSubmitting}
          style={{
            backgroundColor: '#006D6F',
            color: 'white',
            border: 'none',
            opacity: isSubmitting ? 0.7 : 1
          }}
        >
          {isSubmitting 
            ? 'Processing...' 
            : step === steps.length - 1 
              ? 'Confirm Booking' 
              : 'Next'
          }
        </button>
      </NavBtns>
    </Wrapper>
  );
}

export default BookingWizard;