import { useContext, useState } from 'react';
import { removeTreeItem, editTreeItem, addChildToTreeItem } from './utils';
import { TreeContext } from '../../context/treeData/treeData';
import RemovePopup from '../dialogWindows/removePoup/removePopup';
import EditPopup from '../dialogWindows/editPopup/editPoup';
import AddPopup from '../dialogWindows/addPopup/addPoup';
import { IconButton } from '@mui/material';
import {
  StyledDeleteIcon,
  StyledAddIcon,
  StyledEditIcon,
  ItemActions,
  ItemName,
  ItemContainer
} from './styled';
import { treeName, API, DELETE, ADD, RENAME } from '../../endpoints';
import { ErrorContext } from '../../context/error/error';
import axios from 'axios';

const ItemWithButtons = ({item}) => {
  const { treeData, setTreeData } = useContext(TreeContext);
  const [openDelete, setOpenDelete] = useState(false);
  const [openEdit, setOpenEdit] = useState(false);
  const [openAdd, setOpenAdd] = useState(false);
  const [isHovering, setIshovering] = useState(false);
  const { setError } = useContext(ErrorContext);
  const isRoot = treeName === item.name;

  const handleEditItem = (item) => {
    const newTree = editTreeItem(treeData, item.id, item);
    axios.post(`${API}/${RENAME}?treeName=${treeName}&nodeId=${item.id}&newNodeName=${item.name}`)
      .then(() => {
        setTreeData(newTree);
      })
      .catch((err) => setError(err.response ? err.response.data.data.message : err.message));
  };

  const handleAddItem = (item, nemItem) => {
    const newTree = addChildToTreeItem(treeData, item.id, nemItem);
    axios.post(`${API}/${ADD}?treeName=${treeName}&parentNodeId=${item.id}&nodeName=${nemItem.name}`)
      .then(() => {
        setTreeData(newTree);
      })
      .catch((err) => setError(err.response ? err.response.data.data.message : err.message));
  };

  const handleDeleteItem = (item) => {
    const newTree = removeTreeItem(treeData, item.id);
    axios.post(`${API}/${DELETE}?treeName=${treeName}&nodeId=${item.id}`)
      .then(() => {
        setTreeData(newTree);
      })
      .catch((err) => setError(err.response ? err.response.data.data.message : err.message));
  };

  return (
    <ItemContainer>
      <ItemName onMouseEnter={() => setIshovering(true)} onMouseLeave={() => setIshovering(false)}>{item.name}
        {isHovering && <ItemActions>{!isRoot && <IconButton size="small" onClick={() => setOpenEdit(true)}>
          <StyledEditIcon />
        </IconButton> }
        <IconButton size="small" onClick={() => setOpenAdd(true)}>
          <StyledAddIcon />
        </IconButton>
        {!isRoot && <IconButton size="small" onClick={() => setOpenDelete(true)}>
          <StyledDeleteIcon />
        </IconButton>}
        </ItemActions>}
      </ItemName>
      <RemovePopup open={openDelete} setOpen={setOpenDelete} handleDelete={handleDeleteItem} item={item}/>
      <EditPopup open={openEdit} setOpen={setOpenEdit} handleEdit={handleEditItem} item={item}/>
      <AddPopup open={openAdd} setOpen={setOpenAdd} handleAdd={handleAddItem} item={item}/>
    </ItemContainer>
  );
};

export default ItemWithButtons;
