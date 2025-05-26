import styled from 'styled-components';

export const Wrapper = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 2rem;
  background: white;
  border-radius: 12px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);

  h2 {
    text-align: center;
    margin-bottom: 1.5rem;
    color: #333;
  }

  .error {
    color: #e53935;
    font-size: 0.875rem;
    display: block;
    margin-top: 0.25rem;
  }

  .error-input {
    border-color: #e53935 !important;
  }

  .form-group {
    margin-bottom: 1.25rem;
  }

  input, select {
    width: 100%;
    padding: 0.875rem;
    border: 1px solid #ddd;
    border-radius: 8px;
    margin-bottom: 0.25rem;
    font-size: 1rem;
    transition: all 0.3s ease;

    &:focus {
      outline: none;
      border-color: #4285f4;
      box-shadow: 0 0 0 2px rgba(66, 133, 244, 0.2);
    }
  }

  .tour-options {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    margin-top: 1rem;
  }

  .tour-card {
    border: 2px solid #ddd;
    padding: 1.25rem;
    border-radius: 8px;
    cursor: pointer;
    transition: all 0.3s ease;
    background: #f9f9f9;

    h4 {
      font-weight: 600;
      margin-bottom: 0.75rem;
      color: #333;
    }

    p {
      color: #666;
      margin-bottom: 1rem;
    }

    ul {
      margin: 1rem 0;
      padding-left: 1.5rem;

      li {
        margin-bottom: 0.5rem;
        position: relative;
        
        &:before {
          content: "✓";
          color: #4caf50;
          position: absolute;
          left: -1.5rem;
        }
      }
    }

    .price {
      font-weight: 600;
      color: #4285f4;
      margin-top: 1rem;
    }

    &.selected {
      border-color: #4285f4;
      background: #f0f7ff;
      transform: translateY(-2px);
      box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    }

    &:hover:not(.selected) {
      border-color: #bbb;
      transform: translateY(-1px);
      box-shadow: 0 2px 5px rgba(0, 0, 0, 0.05);
    }
  }

  .vehicle-options {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 1rem;
    margin-top: 1rem;
    
    button {
      padding: 1.25rem;
      border: 2px solid #ddd;
      border-radius: 8px;
      background: #f9f9f9;
      cursor: pointer;
      font-size: 1rem;
      transition: all 0.3s ease;

      &.selected {
        border-color: #4285f4;
        background: #f0f7ff;
        font-weight: 600;
      }

      &:hover:not(.selected) {
        border-color: #bbb;
        background: #f5f5f5;
      }
    }
  }

  .date-selection, .guest-selection {
    margin-top: 1rem;
  }

  .summary-details {
    background: #f8f9fa;
    padding: 1.5rem;
    border-radius: 8px;
    margin-top: 1rem;
    border-left: 4px solid #4285f4;

    p {
      margin: 0.75rem 0;
      display: flex;
      justify-content: space-between;
      
      &:before {
        content: attr(data-label);
        font-weight: 600;
        color: #555;
      }
    }
  }

  @media (max-width: 768px) {
    padding: 1.5rem;
    
    .vehicle-options {
      grid-template-columns: 1fr;
    }
  }
`;

export const StepLabel = styled.div`
  text-align: center;
  margin-bottom: 2rem;
  font-size: 1.1rem;
  color: #666;
  
  strong {
    color: #333;
  }
`;

export const NavBtns = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 2.5rem;

  button {
    padding: 0.875rem 1.75rem;
    border-radius: 8px;
    border: none;
    cursor: pointer;
    font-weight: 600;
    font-size: 1rem;
    transition: all 0.3s ease;
    
    &:first-child {
      background: #f2f2f2;
      color: #333;
      
      &:hover:not(:disabled) {
        background: #e5e5e5;
      }
      
      &:disabled {
        opacity: 0.5;
        cursor: not-allowed;
      }
    }
    
    &:last-child {
      background: #4285f4;
      color: white;
      
      &:hover:not(:disabled) {
        background: #3367d6;
        transform: translateY(-2px);
        box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
      }
      
      &.submit-btn {
        background: #34a853;
        
        &:hover:not(:disabled) {
          background: #2e8b57;
        }
      }
      
      &:disabled {
        opacity: 0.7;
        cursor: not-allowed;
      }
    }
  }
`;