import styled from 'styled-components';

// Styled components for a professional look
export const SantaContainer = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem;
`;

export const SantaTitle = styled.p`
  font-size: 1.5rem;
  font-weight: bold;
  margin-bottom: 1rem;

  /* Add a festive touch */
  color: #c0392b;
`;

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 1rem;
`;

export const InputLabel = styled.label`
  font-size: 0.8rem;
  margin-bottom: 0.5rem;
  color: #808080;
`;

export const SantaInput = styled.input`
  padding: 0.5rem;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 1rem;
`;

export const WishTextarea = styled.textarea`
  padding: 0.5rem;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 1rem;
  width: 100%;
  min-height: 100px;
  resize: vertical;
`;

export const SubmitButton = styled.button`
  background-color: #4caf50; /* Green */
  border: none;
  color: white;
  padding: 1rem 2rem;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 1rem;
  cursor: pointer;
  border-radius: 4px;
  transition: 0.3s;

  &:hover {
    background-color: #3e8e41; /* Darker green */
  }
`;

export const SantaForm = styled.form`
  display: flex;
  flex-direction: column;
  width: 500px; /* Adjust width as needed */
`;

export const FormError = styled.span`
  color: red;
  font-size: 0.8rem;
  margin-top: 0.5rem;
`;
