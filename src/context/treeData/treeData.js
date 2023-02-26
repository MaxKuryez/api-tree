import { createContext, useState, useEffect, useContext } from 'react';
import { treeName, API, GET } from '../../endpoints';
import { ErrorContext } from '../error/error';
import axios from 'axios';

export const TreeContext = createContext(null);

const TreeProvider = ({ children }) => {
  const { setError } = useContext(ErrorContext);
  const [treeData, setTreeData] = useState(null);

  useEffect(() => {
    axios.get(`${API}/${GET}?treeName=${treeName}`)
      .then((response) => setTreeData(response.data))
      .catch((err) => {setError(err.response ? err.response.data.data.message : err.message)});
  }, [setError]);

  return (
    <TreeContext.Provider value={{ treeData, setTreeData }}>
      {children}
    </TreeContext.Provider>
  );
};

export { TreeProvider };
