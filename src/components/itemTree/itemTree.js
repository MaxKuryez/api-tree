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
    <div>
      {treeData ? renderTreeItem(treeData) : <div>Loading...</div>}
    </div>
  );
};

export default ItemTree;
