import { useContext } from 'react';
import ItemWithButtons from '../itemWithButtons/itemWuthButtons';
import { TreeContext } from '../../context/treeData/treeData';


const ItemTree = () => {
  const { treeData } = useContext(TreeContext);

  const renderTreeItem = (item) => {
    return (
      <div style={{ marginLeft: 40 }} key={item.id}>
        <ItemWithButtons item={item} key={item.id}/>
        {item.children && item.children.map(renderTreeItem)}
      </div>
    );
  };

  return (
    <div style={{ margin: 30, backgroundColor: '#e2e2e2', padding: 20 }}>
      Tree below can be eddited by adding/ removing/ changing the names of the children.
      <br />
      Hover over the item that you want to change and you will see the options to do so.
      <br />
      Edit - to change the item's name
      <br />
      Delete - to delete the item
      <br />
      Plus - to add child to item
      <div style={{ marginTop: 30 }}>{treeData ? renderTreeItem(treeData) : <div>Loading...</div>}</div>
    </div>
  );
};

export default ItemTree;
