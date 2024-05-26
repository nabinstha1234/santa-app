import { useContext } from 'react';
import { CurrentThemeContext } from 'providers/theme';

// Project imports
import { ToggleButtonComponent } from 'components/atoms';
import { Nav } from 'components/molecules';
import { MainWrapper } from 'components/organisms';
import { Theme } from 'constants/theme';

type Props = {};

export const Home = (props: Props) => {
  const { currentTheme, setCurrentTheme } = useContext(CurrentThemeContext);

  const handleThemeToggle = () => {
    setCurrentTheme(currentTheme === Theme.Light ? Theme.Dark : Theme.Light);
  };
  return (
    <>
      <Nav>
        <ToggleButtonComponent
          currentTheme={currentTheme}
          onClick={handleThemeToggle}
        ></ToggleButtonComponent>
      </Nav>
      <MainWrapper>Hello</MainWrapper>
    </>
  );
};

export default Home;
