// ErrorList.tsx
import styled from 'styled-components';

// Styled component for the error list
const StyledErrorList = styled.ul`
  color: red;
  list-style-type: disc;
  padding-left: 20px;
`;

// Define the props for the ErrorList component
type ErrorListProps = {
  errors: string[];
};

export const ErrorList = ({ errors }: ErrorListProps) => {
  return (
    <StyledErrorList>
      {errors.map((error, index) => (
        <li key={index}>{error}</li>
      ))}
    </StyledErrorList>
  );
};
