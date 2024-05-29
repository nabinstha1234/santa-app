import React from 'react';
import ReactDOM from 'react-dom/client';
import * as Sentry from '@sentry/react';
import App from './app/App';

// Initialize Sentry with configuration options
Sentry.init({
  dsn: 'https://examplePublicKey@o0.ingest.sentry.io/0',
  integrations: [
    // See docs for support of different versions of variation of react router
    Sentry.replayIntegration(),
  ],
  tracesSampleRate: 1.0, // Set tracesSampleRate to 1.0 to capture 100% of transactions for performance monitoring
  tracePropagationTargets: [/^\//, /^https:\/\/yourserver\.io\/api/], // Set `tracePropagationTargets` to control for which URLs distributed tracing should be enabled
  replaysSessionSampleRate: 0.1, // Capture Replay for 10% of all sessions
  replaysOnErrorSampleRate: 1.0, // Capture Replay for 100% of sessions with an error
});

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

// Render the App component inside a React.StrictMode
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
