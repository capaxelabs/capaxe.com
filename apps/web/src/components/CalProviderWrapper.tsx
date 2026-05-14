import React, { useState, useEffect } from 'react';
import { CalProvider } from '@calcom/atoms';

interface CalProviderWrapperProps {
  children: React.ReactNode;
}

const CalProviderWrapper: React.FC<CalProviderWrapperProps> = ({ children }) => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  // Render children without CalProvider during SSR to avoid hydration issues
  if (!isMounted) {
    return <>{children}</>;
  }

  return (
    <CalProvider
      clientId="" // Not needed for public booking
      options={{
        apiUrl: "https://api.cal.com/v2",
        // No refreshUrl needed for public booking
      }}
    >
      {children}
    </CalProvider>
  );
};

export default CalProviderWrapper;