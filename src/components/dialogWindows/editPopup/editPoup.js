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

const EditPopup = ({open, setOpen, handleEdit, item}) => {
  const [text, setText] = useState(item.name);

  const hadleTextChange = (e) => {
    setText(e.target.value);
  };

  const submitNewName = () => {
    if (!text) return;
    handleEdit({id: item.id, name: text, children: item.children});
    setText('');
    setOpen(false);
  }

  return (
    <Dialog open={open} onClose={() => setOpen(false)}>
      <DialogTitle>Edit Item</DialogTitle>
      <DialogContent>
        <DialogContentText>
          Please provide new name for "{item.name}"?
        </DialogContentText>
      </DialogContent>
      <StyledTextField value={text} onChange={hadleTextChange} size="small"/>
      <DialogActions>
        <Button onClick={() => setOpen(false)}>Cancel</Button>
        <Button onClick={submitNewName}>
          Change
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default EditPopup;
