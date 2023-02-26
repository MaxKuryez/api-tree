import { createContext, useState, useEffect } from 'react';
import { treeName, API, GET } from '../../endpoints';
import axios from 'axios';

export const TreeContext = createContext(null);

const TreeProvider = ({ children }) => {
  const [treeData, setTreeData] = useState(null);

  useEffect(() => {
    axios.post(`${API}/${GET}?treeName=${treeName}`)
    .then((response) => { console.log(response); setTreeData(response.data)})
  }, []);

  useEffect(() => {
    console.log("changed:", treeData);
  }, [treeData]);


  return (
    <TreeContext.Provider value={{ treeData, setTreeData }}>
      {children}
    </TreeContext.Provider>
  );
};

export { TreeProvider };
