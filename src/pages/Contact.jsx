import React, { useState } from 'react';
import styled from 'styled-components';

const ContactSection = styled.section`
  padding: 48px clamp(16px, 4vw, 64px);
  max-width: 1000px;
  margin: 0 auto;
`;

const ContactHeader = styled.div`
  text-align: center;
  margin-bottom: 48px;
`;

const PageTitle = styled.h1`
  font-size: 2.5rem;
  color: #006D6F;
  margin-bottom: 16px;
`;

const Subtitle = styled.p`
  font-size: 1.2rem;
  color: #555;
  max-width: 600px;
  margin: 0 auto;
`;

const ContactContent = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 48px;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const ContactInfo = styled.div`
  background: #f8f9fa;
  padding: 32px;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
`;

const InfoTitle = styled.h2`
  font-size: 1.5rem;
  color: #006D6F;
  margin-bottom: 24px;
`;

const InfoItem = styled.div`
  margin-bottom: 24px;
  display: flex;
  align-items: flex-start;
  gap: 12px;
`;

const IconWrapper = styled.div`
  width: 40px;
  height: 40px;
  background: #006D6F;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  flex-shrink: 0;
`;

const InfoContent = styled.div``;

const InfoLabel = styled.h3`
  font-size: 1.1rem;
  margin-bottom: 4px;
  color: #333;
`;

const InfoText = styled.p`
  color: #666;
  line-height: 1.5;
`;

const ContactLink = styled.a`
  color: #006D6F;
  text-decoration: none;
  transition: color 0.3s;
  
  &:hover {
    color: #004b4c;
    text-decoration: underline;
  }
`;

const MapContainer = styled.div`
  margin-top: 24px;
  border-radius: 12px;
  overflow: hidden;
  height: 200px;
  
  iframe {
    width: 100%;
    height: 100%;
    border: none;
  }
`;

const ContactForm = styled.form`
  background: white;
  padding: 32px;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
`;

const FormTitle = styled.h2`
  font-size: 1.5rem;
  color: #006D6F;
  margin-bottom: 24px;
`;

const FormGroup = styled.div`
  margin-bottom: 20px;
`;

const Label = styled.label`
  display: block;
  margin-bottom: 8px;
  font-weight: 500;
  color: #333;
`;

const Input = styled.input`
  width: 100%;
  padding: 12px 16px;
  border: 1px solid #ddd;
  border-radius: 8px;
  font-size: 1rem;
  transition: border-color 0.3s;
  
  &:focus {
    outline: none;
    border-color: #006D6F;
    box-shadow: 0 0 0 2px rgba(0, 109, 111, 0.2);
  }
`;

const TextArea = styled.textarea`
  width: 100%;
  padding: 12px 16px;
  border: 1px solid #ddd;
  border-radius: 8px;
  font-size: 1rem;
  resize: vertical;
  min-height: 120px;
  transition: border-color 0.3s;
  
  &:focus {
    outline: none;
    border-color: #006D6F;
    box-shadow: 0 0 0 2px rgba(0, 109, 111, 0.2);
  }
`;

const SubmitButton = styled.button`
  width: 100%;
  padding: 14px;
  background: #006D6F;
  color: white;
  border: none;
  border-radius: 8px;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  
  &:hover {
    background: #005a5c;
    transform: translateY(-2px);
  }
  
  &:active {
    transform: translateY(1px);
  }
`;

const SuccessMessage = styled.div`
  padding: 16px;
  background: #e6f7e6;
  color: #2e7d32;
  border-radius: 8px;
  margin-top: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 500;
`;

function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  
  const [submitted, setSubmitted] = useState(false);
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically send the form data to your backend
    console.log('Form submitted:', formData);
    setSubmitted(true);
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setFormData({
        name: '',
        email: '',
        message: ''
      });
      setSubmitted(false);
    }, 3000);
  };
  
  return (
    <ContactSection>
      <ContactHeader>
        <PageTitle>Contact Us</PageTitle>
        <Subtitle>
          Have questions or ready to book your Cape Town adventure? Reach out to us and we'll get back to you promptly!
        </Subtitle>
      </ContactHeader>
      
      <ContactContent>
        <ContactInfo>
          <InfoTitle>Get In Touch</InfoTitle>
          
          <InfoItem>
            <IconWrapper>
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" viewBox="0 0 16 16">
                <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6z"/>
              </svg>
            </IconWrapper>
            <InfoContent>
              <InfoLabel>Location</InfoLabel>
              <InfoText>Cape Town, South Africa</InfoText>
            </InfoContent>
          </InfoItem>
          
          <InfoItem>
            <IconWrapper>
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" viewBox="0 0 16 16">
                <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2zm13 2.383-4.708 2.825L15 11.105V5.383zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741zM1 11.105l4.708-2.897L1 5.383v5.722z"/>
              </svg>
            </IconWrapper>
            <InfoContent>
              <InfoLabel>Email</InfoLabel>
              <InfoText>
                <ContactLink href="mailto:info@giftedtours.co.za">
                  info@giftedtours.co.za
                </ContactLink>
              </InfoText>
            </InfoContent>
          </InfoItem>
          
          <InfoItem>
            <IconWrapper>
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" viewBox="0 0 16 16">
                <path d="M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.568 17.568 0 0 0 4.168 6.608 17.569 17.569 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.678.678 0 0 0-.58-.122l-2.19.547a1.745 1.745 0 0 1-1.657-.459L5.482 8.062a1.745 1.745 0 0 1-.46-1.657l.548-2.19a.678.678 0 0 0-.122-.58L3.654 1.328zM1.884.511a1.745 1.745 0 0 1 2.612.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z"/>
              </svg>
            </IconWrapper>
            <InfoContent>
              <InfoLabel>Phone</InfoLabel>
              <InfoText>
                <ContactLink href="tel:+27780670812">+27 780 670 812</ContactLink>
                <br />
                <ContactLink href="tel:+27762662143">+27 762 662 143</ContactLink>
              </InfoText>
            </InfoContent>
          </InfoItem>
          
          <MapContainer>
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d423283.43556531953!2d18.3730378!3d-33.9248685!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1dcc500f8826eed7%3A0x687fe1fc2828aa87!2sCape%20Town%2C%20South%20Africa!5e0!3m2!1sen!2sus!4v1646834249882!5m2!1sen!2sus" 
              allowFullScreen="" 
              loading="lazy"
              title="Gifted Tours Location Map"
            ></iframe>
          </MapContainer>
        </ContactInfo>
        
        <ContactForm onSubmit={handleSubmit}>
          <FormTitle>Send us a Message</FormTitle>
          
          <FormGroup>
            <Label htmlFor="name">Your Name</Label>
            <Input 
              type="text" 
              id="name" 
              name="name" 
              value={formData.name}
              onChange={handleChange}
              required 
              placeholder="Enter your name"
            />
          </FormGroup>
          
          <FormGroup>
            <Label htmlFor="email">Email Address</Label>
            <Input 
              type="email" 
              id="email" 
              name="email"
              value={formData.email}
              onChange={handleChange}
              required 
              placeholder="Enter your email"
            />
          </FormGroup>
          
          <FormGroup>
            <Label htmlFor="message">Your Message</Label>
            <TextArea 
              id="message" 
              name="message"
              value={formData.message}
              onChange={handleChange}
              required 
              placeholder="How can we help you?"
            />
          </FormGroup>
          
          <SubmitButton type="submit">Send Message</SubmitButton>
          
          {submitted && (
            <SuccessMessage>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16" style={{ marginRight: '8px' }}>
                <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z"/>
              </svg>
              Thank you for your message! We'll get back to you soon.
            </SuccessMessage>
          )}
        </ContactForm>
      </ContactContent>
    </ContactSection>
  );
}

export default ContactPage;