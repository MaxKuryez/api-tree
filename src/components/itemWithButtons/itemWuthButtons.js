import { useContext, useState } from 'react';
import { Button } from '@mui/material';
import { removeTreeItem, editTreeItem, addChildToTreeItem } from './utils';
import { TreeContext } from '../../context/treeData/treeData';
import RemovePopup from '../dialogWindows/removePoup/removePopup';
import EditPopup from '../dialogWindows/editPopup/editPoup';
import AddPopup from '../dialogWindows/addPopup/addPoup';
import { treeName, API, DELETE, ADD, RENAME } from '../../endpoints';
import axios from 'axios';

const ItemWithButtons = ({item}) => {
  const { treeData, setTreeData } = useContext(TreeContext);
  const [openDelete, setOpenDelete] = useState(false);
  const [openEdit, setOpenEdit] = useState(false);
  const [openAdd, setOpenAdd] = useState(false);

  const handleEditItem = (item) => {
    const newTree = editTreeItem(treeData, item.id, item);
    axios.post(`${API}/${RENAME}?treeName=${treeName}&nodeId=${item.id}&newNodeName=${item.name}`)
      .then(() => {
        setTreeData(newTree);
      })
      .catch((err) => console.log(err));
  };

  const handleAddItem = (item, nemItem) => {
    const newTree = addChildToTreeItem(treeData, item.id, nemItem);
    axios.post(`${API}/${ADD}?treeName=${treeName}&parentNodeId=${item.id}&nodeName=${nemItem.name}`)
      .then(() => {
        setTreeData(newTree);
      })
      .catch((err) => console.log(err));
  };

  const handleDeleteItem = (item) => {
    const newTree = removeTreeItem(treeData, item.id);
    axios.post(`${API}/${DELETE}?treeName=${treeName}&nodeId=${item.id}`)
      .then(() => {
        setTreeData(newTree);
      })
      .catch((err) => console.log(err));
  };

  return (
    <div style={{ display: 'flex', alignItems: 'center' }}>
      <div style={{ marginRight: 16 }}>{item.name}</div>
      <Button
        variant="outlined"
        size="small"
        onClick={() => setOpenEdit(true)}
      >
        Edit
      </Button>
      <Button
        variant="outlined"
        size="small"
        onClick={() => setOpenAdd(true)}
      >
        Add Child
      </Button>
      <Button
        variant="outlined"
        size="small"
        onClick={() => setOpenDelete(true)}
      >
        Delete
      </Button>
      <RemovePopup open={openDelete} setOpen={setOpenDelete} handleDelete={handleDeleteItem} item={item}/>
      <EditPopup open={openEdit} setOpen={setOpenEdit} handleEdit={handleEditItem} item={item}/>
      <AddPopup open={openAdd} setOpen={setOpenAdd} handleAdd={handleAddItem} item={item}/>
    </div>
  );
};

export default ItemWithButtons;
