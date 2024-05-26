// ToggleButton.tsx
import styled from 'styled-components';

import { Theme } from 'constants/theme';

type ToggleButtonProps = {
  currentTheme: (typeof Theme)[keyof typeof Theme];
  onClick: () => void;
};

const ToggleButton = styled.button<{
  currentTheme: (typeof Theme)[keyof typeof Theme];
}>`
  background-color: ${({ theme }) => theme.color.primary};
  border: 1px solid ${({ theme }) => theme.color.border};
  padding: 2px;
  width: 35px;
  height: 20px;
  font-weight: solid;
  cursor: pointer;
  color: ${({ theme }) => theme.color.text};
  border-radius: ${({ theme }) => theme.borderRadius.large};
  position: relative;
  display: flex;
  align-items: center;

  > span {
    display: inline-block;
    width: 15px;
    height: 15px;
    background-color: ${({ theme }) => theme.color.indicator};
    border-radius: ${({ theme }) => theme.borderRadius.circle};
    position: absolute;
    left: ${({ currentTheme }) =>
      currentTheme === Theme.Light ? '0' : 'unset'};
    right: ${({ currentTheme }) =>
      currentTheme === Theme.Dark ? '0' : 'unset'};
  }
`;

/**
 * Reusable ToggleButton component
 *
 * @param {ToggleButtonProps} props - The properties object
 * @returns {JSX.Element} The rendered ToggleButton component
 *
 * @example
 * <ToggleButton theme={theme} currentTheme={currentTheme} onClick={handleClick} />
 */
export const ToggleButtonComponent = ({
  currentTheme,
  onClick,
}: ToggleButtonProps) => {
  return (
    <ToggleButton currentTheme={currentTheme} onClick={onClick}>
      <span />
    </ToggleButton>
  );
};
