// NPM packages imports
import styled from 'styled-components';

type BackdropProps = {
  open?: boolean;
  onClick?: React.MouseEventHandler<HTMLDivElement>;
  children?: React.ReactNode;
};

const BackdropContainer = styled.div<BackdropProps>`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5); /* Semi-transparent black */
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 999; /* Ensure backdrop is above other elements */
  transition: opacity 0.3s ease-in-out;
  opacity: ${({ open }) => (open ? 1 : 0)};
  pointer-events: ${({ open }) =>
    open ? 'auto' : 'none'}; /* Disable interactions when closed */
`;

export const BackDrop = ({ children, onClick, open }: BackdropProps) => {
  return (
    <BackdropContainer open={open} onClick={onClick}>
      {children}
    </BackdropContainer>
  );
};
