// MainWrapper.tsx
import { ReactNode } from 'react';
import styled from 'styled-components';

const Main = styled.main`
  max-width: 1200px;
  margin: 0 auto;
  padding: 40px;
`;

type MainWrapperProps = {
  /**
   * Children elements to be rendered inside the MainWrapper component
   */
  children: ReactNode;
};

/**
 * Reusable MainWrapper component
 *
 * @param {MainWrapperProps} props - The properties object
 * @returns {JSX.Element} The rendered MainWrapper component
 *
 * @example
 * <MainWrapper>
 *   <p>Your content goes here.</p>
 * </MainWrapper>
 */
export const MainWrapper = ({ children }: MainWrapperProps) => {
  return <Main>{children}</Main>;
};
