import { useEffect, useState } from 'react';
import { Button } from '@mui/material';
import { removeTreeItem, editTreeItem} from './utils';

const ItemTree = () => {
  const [treeData, setTreeData] = useState(null);
  const treeName = 'MK_TEST_TREE';

  useEffect(() => {
    fetch(`https://test.vmarmysh.com/api.user.tree.get?treeName=${treeName}`)
      .then((response) => response.json())
      .then((data) => setTreeData(data));
  }, [treeName]);

  useEffect(() => {
    console.log(treeData)
  }, [treeData]);


  const handleEditItem = (item) => {
    console.log(item);
    const newTree = editTreeItem(treeData, item.id, {id: item.id, name: "test uno", children: item.children});
    setTreeData(newTree);
  };

  const handleAddItem = (parent) => {
    console.log(parent);
  };

  const handleDeleteItem = (item) => {
    console.log(item);
    const newTree = removeTreeItem(treeData, item.id);
    setTreeData(newTree);
  };


  const renderTreeItem = (item) => {
    return (
      <div style={{ marginLeft: 40 }} key={item.id}>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <div style={{ marginRight: 16 }}>{item.name}</div>
          <Button
            variant="outlined"
            size="small"
            onClick={() => handleEditItem(item)}
          >
            Edit
          </Button>
          <Button
            variant="outlined"
            size="small"
            onClick={() => handleAddItem(item)}
          >
            Add Child
          </Button>
          <Button
            variant="outlined"
            size="small"
            onClick={() => handleDeleteItem(item)}
          >
            Delete
          </Button>
        </div>
        {item.children && item.children.map(renderTreeItem)}
      </div>
    );
  };

  return (
    <div>
      {treeData ? renderTreeItem(treeData) : <div>Loading...</div>}
    </div>
  );
};

export default ItemTree;
