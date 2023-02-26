import { useContext } from 'react';
import ItemWithButtons from '../itemWithButtons/itemWuthButtons';
import { TreeContext } from '../../context/treeData/treeData';
import { StyledContainer, TreeContainer, TreeShift } from './styled';
import ErrorModule from '../errorModule/errorModule';

const ItemTree = () => {
  const { treeData } = useContext(TreeContext);

  const renderTreeItem = (item) => {
    return (
      <TreeShift key={item.id}>
        <ItemWithButtons item={item} key={item.id}/>
        {item.children && item.children.map(renderTreeItem)}
      </TreeShift>
    );
  };

  return (
    <StyledContainer>
      Tree below can be eddited by adding/ removing/ changing the names of the children.
      <br/>
      Note, that the root of the tree cannot be deleted, or edited, only the children can be added there.
      <br />
      Also, note that when updating the tree I use local functions to edit the tree locally, so that I do not need to send request every time.
      <br />
      The errors are also handled, so if you change some request to 'delete', or block the request url, you will get an error on page.
      <br />
      You can see what is a child of what by the shift from the left in the tree represenation.
      <br />
      <br />
      Hover over the item that you want to change and you will see the options to do so.
      <br />
      On mobile, click on one of the items.
      <br />
      <br />
      Edit - to change the item's name
      <br />
      Delete - to delete the item
      <br />
      Plus - to add child to item
      {treeData  && <TreeContainer>{renderTreeItem(treeData)}</TreeContainer>}
      <ErrorModule />
    </StyledContainer>
  );
};

export default ItemTree;
