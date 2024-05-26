// NPM packages imports
import styled, { css } from 'styled-components';

type ButtonVariant = 'primary' | 'secondary' | 'disabled';

type ButtonProps = {
  variant: ButtonVariant;
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
};

/**
 * Button Component
 *
 * This component is used to render a styled button with different variants.
 * It supports various button types such as primary, secondary, and disabled.
 *
 * Props:
 * - variant: Specifies the type of button. It can be one of the following values:
 *   'primary', 'secondary', 'disabled'. This prop is required.
 * - children: The content to be displayed within the button. This prop is required.
 * - onClick: Function to handle the button click event. This prop is optional.
 * - className: Optional class name for custom styling.
 *
 * Example Usage:
 *
 * ```tsx
 * import React from 'react';
 * import Button from './Button';
 *
 * const App: React.FC = () => {
 *   return (
 *     <div>
 *       <Button variant="primary" onClick={() => alert('Primary Button Clicked')}>Primary Button</Button>
 *       <Button variant="secondary" onClick={() => alert('Secondary Button Clicked')}>Secondary Button</Button>
 *       <Button variant="disabled">Disabled Button</Button>
 *     </div>
 *   );
 * };
 *
 * export default App;
 * ```
 */

export const Button = ({
  variant,
  children,
  onClick,
  className,
}: ButtonProps) => {
  return (
    <StyledButton
      variant={variant}
      onClick={onClick}
      className={className}
      disabled={variant === 'disabled'}
    >
      {children}
    </StyledButton>
  );
};

const variantStyles = {
  primary: css`
    background-color: #007bff;
    color: white;
    border: none;
    &:hover {
      background-color: #0056b3;
    }
  `,
  secondary: css`
    background-color: #6c757d;
    color: white;
    border: none;
    &:hover {
      background-color: #5a6268;
    }
  `,
  disabled: css`
    background-color: #d6d8db;
    color: #6c757d;
    border: none;
    cursor: not-allowed;
  `,
};

const StyledButton = styled.button<{ variant: ButtonVariant }>`
  padding: 0.375rem 0.75rem;
  font-size: 1rem;
  border-radius: 0.25rem;
  cursor: pointer;
  ${(props) => variantStyles[props.variant]}
`;
