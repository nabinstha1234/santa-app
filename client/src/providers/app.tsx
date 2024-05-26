// NPM packages imports
import React from 'react';

// Project imports
import { ReactErrorBoundary } from 'components/organisms';
import { Spinner, BackDrop, Button } from 'components/molecules';
import { Typography } from 'components/atoms';
import { GlobalThemeProvider } from 'providers/theme';

const ErrorFallback = () => {
  const handlePageRefresh = () => {
    window.location.assign(window.location.origin);
  };

  return (
    <div>
      <Typography variant="h2">Ooops, something went wrong!</Typography>
      <Button onClick={handlePageRefresh} variant="primary">
        Refresh
      </Button>
    </div>
  );
};

type AppProviderProps = {
  children: React.ReactNode;
};

export const AppProvider = ({ children }: AppProviderProps) => {
  return (
    <GlobalThemeProvider>
      <React.Suspense
        fallback={
          <BackDrop open>
            <Spinner color="" size={135} loading />
          </BackDrop>
        }
      >
        <ReactErrorBoundary FallbackComponent={ErrorFallback}>
          {children}
        </ReactErrorBoundary>
      </React.Suspense>
    </GlobalThemeProvider>
  );
};
