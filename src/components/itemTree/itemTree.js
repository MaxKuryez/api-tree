import { useContext } from 'react';
import ItemWithButtons from '../itemWithButtons/itemWuthButtons';
import { TreeContext } from '../../context/treeData/treeData';
import { StyledContainer, TreeContainer, TreeShift } from './styled';

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
      <br />
      Hover over the item that you want to change and you will see the options to do so.
      On mobile, click on one of the items.
      <br/>
      You can see what is a child of what by the shift from the left in the tree represenation
      <br />
      Edit - to change the item's name
      <br />
      Delete - to delete the item
      <br />
      Plus - to add child to item
      <TreeContainer>{treeData ? renderTreeItem(treeData) : <div>Loading...</div>}</TreeContainer>
    </StyledContainer>
  );
};

export default ItemTree;
