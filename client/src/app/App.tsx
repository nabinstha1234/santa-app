// NPM packages imports
import { useContext } from 'react';
import { CurrentThemeContext } from 'providers/theme';
import 'sanitize.css';

// Project imports
import { AppProvider } from 'providers/app';
import { Home } from 'components/organisms';
import { Theme } from 'constants/theme';

function App() {
  const { currentTheme, setCurrentTheme } = useContext(CurrentThemeContext);

  const handleThemeToggle = () => {
    setCurrentTheme(currentTheme === Theme.Light ? Theme.Dark : Theme.Light);
  };
  return (
    <AppProvider>
      <Home />
    </AppProvider>
  );
}

export default App;
