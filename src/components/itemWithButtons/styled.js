import { Edit, Add, Delete } from '@mui/icons-material';
import { styled } from '@mui/material/styles';

export const StyledEditIcon = styled(Edit)({
  color: '#5d51ff',
  height: 18
});

export const StyledAddIcon = styled(Add)({
  color: '#45ca63',
  height: 18
});

export const StyledDeleteIcon = styled(Delete)({
  color: '#d70000',
  height: 18
});

export const ItemName = styled('div')({
  display: 'flex',
  marginRight: 16,
  cursor: 'pointer',
  height: 25,
  '@media (max-width:600px)': {
    display: 'inline-block'
  },
});

export const ItemActions = styled('div')({
  display: 'flex',
  cursor: 'pointer',
  height: 19,
  '@media (max-width:600px)': {
    position: 'absolute',
    backgroundColor: 'white'
  },
});

export const ItemContainer = styled('div')({
  display: 'flex',
  alignItems: 'center'
});
