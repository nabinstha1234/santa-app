import styled from 'styled-components';

const NavBar = styled.nav`
  background-color: ${({ theme }) => theme.color.background};
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 40px;
  border-bottom: 1px solid ${({ theme }) => theme.color.border};
  z-index: 1;
`;
type NavProps = {
  /**
   * Children elements to be rendered inside the Nav component
   */
  children: React.ReactNode;
  /**
   * Theme object to style the component
   */
};
/**
 * Reusable Nav component
 *
 * @param {NavProps} props - The properties object
 * @returns {JSX.Element} The rendered Nav component
 *
 * @example
 * <Nav theme={theme}>
 *   <div>Left Content</div>
 *   <div>Right Content</div>
 * </Nav>
 */
export const Nav = ({ children }: NavProps) => {
  return <NavBar>{children}</NavBar>;
};
