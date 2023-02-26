import { useContext } from 'react';
import { Button } from '@mui/material';
import { removeTreeItem, editTreeItem} from './utils';
import { TreeContext } from '../../context/treeData/treeData';
import RemovePopup from '../dialogWindows/removePoup/removePopup';

const ItemWithButtons = ({item}) => {
  const { treeData, setTreeData } = useContext(TreeContext);

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

  return (
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
  );
};

export default ItemWithButtons;
