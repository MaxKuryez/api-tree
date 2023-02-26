import { createContext, useState } from 'react';

export const ErrorContext = createContext(null);

const ErrorProvider = ({ children }) => {
  const [error, setError] = useState(null);

  return (
    <ErrorContext.Provider value={{ error, setError }}>
      {children}
    </ErrorContext.Provider>
  );
};

export { ErrorProvider };
