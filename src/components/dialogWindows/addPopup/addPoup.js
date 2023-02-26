import { useState } from 'react';
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from '@mui/material';
import { StyledTextField } from '../styled';

const AddPopup = ({open, setOpen, handleAdd, item}) => {
  const [text, setText] = useState('');

  const hadleTextChange = (e) => {
    setText(e.target.value);
  };

  const submitNewItem = () => {
    if (!text) return;
    const newItem = {id: Math.random(), name: text, children: []}
    handleAdd(item, newItem);
    setText('');
    setOpen(false);
  }

  return (
    <Dialog open={open} onClose={() => setOpen(false)}>
      <DialogTitle>Add Item</DialogTitle>
      <DialogContent>
        <DialogContentText>
          Please provide name for child of "{item.name}"?
        </DialogContentText>
      </DialogContent>
      <StyledTextField value={text} onChange={hadleTextChange} size="small"/>
      <DialogActions>
        <Button onClick={() => setOpen(false)}>Cancel</Button>
        <Button onClick={submitNewItem}>
          Add
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default AddPopup;
