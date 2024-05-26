// NPM packages imports
import styled, { css } from 'styled-components';

type TypographyVariant = 'h1' | 'h2' | 'h3' | 'body' | 'caption';

type TypographyProps = {
  variant: TypographyVariant;
  children: React.ReactNode;
  className?: string;
};

/**
 * Typography Component
 *
 * This component is used to render text with different typographic styles.
 * It supports various text variants such as h1, h2, h3, body, and caption.
 *
 * Props:
 * - variant: Specifies the type of typography. It can be one of the following values:
 *   'h1', 'h2', 'h3', 'body', 'caption'. This prop is required.
 * - children: The content to be displayed within the typography component. This prop is required.
 * - className: Optional class name for custom styling.
 *
 * Example Usage:
 *
 * ```tsx
 * import React from 'react';
 * import Typography from './Typography';
 *
 * const App = () => {
 *   return (
 *     <div>
 *       <Typography variant="h1">This is a Heading 1</Typography>
 *       <Typography variant="body">This is body text.</Typography>
 *       <Typography variant="caption">This is a caption.</Typography>
 *     </div>
 *   );
 * };
 *
 * export default App;
 * ```
 */
export const Typography = ({
  variant,
  children,
  className,
}: TypographyProps) => {
  return (
    <StyledTypography as={variant} variant={variant} className={className}>
      {children}
    </StyledTypography>
  );
};

const variantStyles = {
  h1: css`
    font-size: 2.5rem;
    font-weight: bold;
  `,
  h2: css`
    font-size: 2rem;
    font-weight: bold;
  `,
  h3: css`
    font-size: 1.75rem;
    font-weight: bold;
  `,
  body: css`
    font-size: 1rem;
    font-weight: normal;
  `,
  caption: css`
    font-size: 0.875rem;
    font-weight: normal;
  `,
};

const StyledTypography = styled.div<{ variant: TypographyVariant }>`
  margin: 0;
  ${(props) => variantStyles[props.variant]}
`;
