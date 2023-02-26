import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from '@mui/material';

const RemovePopup = ({open, setOpen, handleDelete, item}) => {

  const submitDelete = () => {
    handleDelete(item);
    setOpen(false);
  }

  return (
    <Dialog open={open} onClose={() => setOpen(false)}>
      <DialogTitle>Confirm Delete</DialogTitle>
      <DialogContent>
        <DialogContentText>
          Are you sure you want to delete the item "{item.name}"?
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={() => setOpen(false)}>Cancel</Button>
        <Button onClick={submitDelete} color="error">
          Delete
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default RemovePopup;
