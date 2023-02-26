import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  TextField,
} from '@mui/material';

const RemovePopup = (open, setOpen, node) => {
//console.log(node, handleDeleteSubmit,  open, setOpen, "test")

  return (
    <Dialog open={open} onClose={() => setOpen(false)}>
      <DialogTitle>Confirm Delete</DialogTitle>
      <DialogContent>
        <DialogContentText>
          Are you sure you want to delete the item "{node.name}"?
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={() => setOpen(false)}>Cancel</Button>
        <Button onClick={() => {}} color="error">
          Delete
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default RemovePopup;
