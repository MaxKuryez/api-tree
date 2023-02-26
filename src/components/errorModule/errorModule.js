import { useContext } from 'react';
import { ErrorContext } from '../../context/error/error';
import { Error } from './styled';

const ErrorModule = () => {
  const { error } = useContext(ErrorContext);

  return (
    <>
      {error && <Error>
        {error}
      </Error>}
    </>
  );
};

export default ErrorModule;
