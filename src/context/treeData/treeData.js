import { createContext, useContext, useState, useEffect } from 'react';

export const TreeContext = createContext(null);
const treeName = 'MK_TEST_TREE';

const TreeProvider = ({ children }) => {
  const [treeData, setTreeData] = useState(null);

  useEffect(() => {
    fetch(`https://test.vmarmysh.com/api.user.tree.get?treeName=${treeName}`)
      .then((response) => response.json())
      .then((data) => setTreeData(data));
  }, [treeName]);

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
