import ItemTree from './components/itemTree/itemTree';
import { TreeProvider } from './context/treeData/treeData';

function App() {
  return (
    <TreeProvider>
      <ItemTree />
    </TreeProvider>
  );
}

export default App;
