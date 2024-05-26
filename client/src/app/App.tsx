// NPM packages imports
import 'sanitize.css';

// Project imports
import { AppProvider } from 'providers/app';

function App() {
  return (
    <AppProvider>
      <div>
        <h1>App</h1>
      </div>
    </AppProvider>
  );
}

export default App;
